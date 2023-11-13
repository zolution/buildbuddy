// This tool is used to view and edit Grafana dashboards locally.
// See tools/metrics/README.md for more info.
package main

import (
	"bytes"
	"context"
	"encoding/json"
	"flag"
	"fmt"
	"io"
	"log"
	"net/http"
	"os"
	"os/exec"
	"os/signal"
	"path"
	"path/filepath"
	"syscall"
	"time"

	"golang.org/x/sync/errgroup"
)

var (
	kube = flag.Bool("kube", false, "Use kubectl port-forward to point Grafana at real data.")

	// Note: these flags only take effect when setting -kube=true:
	namespace  = flag.String("namespace", "monitor-dev", "k8s namespace")
	deployment = flag.String("deployment", "prometheus-global-server", "Prometheus server resource to port-forward to.")
)

const (
	dockerComposeDir = "tools/metrics"
	dashboardsDir    = "tools/metrics/grafana/dashboards"
	normalizeScript  = "tools/metrics/process_dashboard.py"

	grafanaAPIURL = "http://admin:admin@localhost:4500/api"
	grafanaUIURL  = "http://localhost:4500/d/1rsE5yoGz?orgId=1&refresh=5s"
	prometheusURL = "http://localhost:9100/metrics"
)

func main() {
	if err := run(); err != nil {
		log.Fatalf(err.Error())
	}
}

func run() error {
	flag.Parse()
	// cd to the repo root
	if err := os.Chdir(os.Getenv("BUILD_WORKSPACE_DIRECTORY")); err != nil {
		return err
	}
	ctx := context.Background()

	ctx, cancel := signal.NotifyContext(ctx, syscall.SIGINT, syscall.SIGTERM)
	defer cancel()

	eg, ctx := errgroup.WithContext(ctx)
	eg.Go(func() error {
		// Start docker-compose
		args := []string{"--file", "docker-compose.grafana.yml"}
		if !*kube {
			args = append(args, "--file", "docker-compose.redis-exporter.yml")
			args = append(args, "--file", "docker-compose.prometheus.yml")
		}
		args = append(args, "up")
		// Note: CommandContext kills with SIGKILL - we don't want that since it
		// doesn't give docker a chance to clean up.
		cmd := exec.Command("docker-compose", args...)
		cmd.Dir = dockerComposeDir
		cmd.Stdout = os.Stdout
		cmd.Stderr = os.Stderr
		return cmd.Run()
	})
	eg.Go(func() error {
		if !*kube {
			return nil
		}
		// Start kubectl port-forward
		cmd := exec.CommandContext(
			ctx, "kubectl", "--namespace", *namespace,
			"port-forward", "deployment/"+*deployment,
			"--address=0.0.0.0", "9100:9090")
		cmd.Stdout = os.Stdout
		cmd.Stderr = os.Stderr
		return cmd.Run()
	})
	eg.Go(func() error {
		// Periodically export dashboards
		for {
			select {
			case <-time.After(3 * time.Second):
			case <-ctx.Done():
				return nil
			}
			b, err := httpGetBody(grafanaAPIURL + "/search")
			if err != nil {
				log.Printf("Failed to list grafana dashboards: %s", err)
				continue
			}
			var dashboards []*Dashboard
			if err := json.Unmarshal(b, &dashboards); err != nil {
				log.Printf("Invalid JSON in grafana response: %s", err)
				continue
			}
			for _, d := range dashboards {
				if err := exportNormalizedDashboard(d); err != nil {
					log.Printf("Failed to export dashboard: %s", err)
				}
			}
		}
	})
	eg.Go(func() error {
		// Open grafana when both prometheus and grafana are ready.
		for {
			select {
			case <-time.After(1 * time.Second):
			case <-ctx.Done():
				return nil
			}
			if _, err := httpGetBody(grafanaUIURL); err != nil {
				continue
			}
			if _, err := httpGetBody(prometheusURL); err != nil {
				continue
			}
			_ = openInBrowser(grafanaUIURL)
			return nil
		}
	})
	return eg.Wait()
}

type Dashboard struct {
	UID  string `json:"uid"`
	URL  string `json:"url"`
	Slug string `json:"slug"`
}

type DashboardResponse struct {
	Dashboard *Dashboard `json:"dashboard"`
}

func exportNormalizedDashboard(d *Dashboard) error {
	b, err := httpGetBody(grafanaAPIURL + "/dashboards/uid/" + d.UID)
	if err != nil {
		return err
	}
	// Unmarshal the response to get the slug field (this is how we determine
	// the JSON file name)
	rsp := &DashboardResponse{}
	if err := json.Unmarshal(b, rsp); err != nil {
		return err
	}
	var normalized bytes.Buffer
	// Use the slug as the filename since it's stable even if the dashboard
	// is renamed.
	slug := rsp.Dashboard.Slug
	if slug == "" {
		// When saving for the first time, the slug won't be set. Use Grafana's
		// auto-generated one from the dashboard title, which appears in the URL
		slug = path.Base(d.URL)
	}
	cmd := exec.Command(normalizeScript, "--slug="+slug)
	cmd.Stdin = bytes.NewReader(b)
	cmd.Stdout = &normalized
	cmd.Stderr = os.Stderr
	if err := cmd.Run(); err != nil {
		return err
	}
	fileName := slug + ".json"
	outPath := filepath.Join(dashboardsDir, fileName)
	// Write file only if different, to avoid updating mtime and triggering file
	// watchers etc.
	if b, _ := os.ReadFile(outPath); err == nil && !bytes.Equal(b, normalized.Bytes()) {
		return os.WriteFile(outPath, normalized.Bytes(), 0644)
	}
	return nil
}

func httpGetBody(url string) ([]byte, error) {
	rsp, err := http.Get(url)
	if err != nil {
		return nil, err
	}
	defer rsp.Body.Close()
	b, err := io.ReadAll(rsp.Body)
	if rsp.StatusCode >= 300 {
		return nil, fmt.Errorf("HTTP %d: %s", rsp.StatusCode, string(b))
	}
	return b, err
}

func openInBrowser(url string) error {
	for _, name := range []string{"open", "xdg-open"} {
		open, err := exec.LookPath(name)
		if err == nil {
			return exec.Command(open, url).Run()
		}
	}
	return fmt.Errorf("failed to locate 'open' binary")
}
