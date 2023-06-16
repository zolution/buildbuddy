package main

/*
This example resolves page faults for a firecracker VM when it is loading a snapshot

In the LoadSnapshot call, Firecracker creates a UFFD object and sends it via a socket, with additional data about the VM's memory mappings
This handler then uses a memory snapshot file to serve the underlying memory

Instructions to create a memory snapshot file to serve as the underlying memory for UFFD testing:

1. Follow the instructions here to start a firecracker VM: https://github.com/firecracker-microvm/firecracker/blob/main/docs/getting-started.md#running-firecracker
	- By the end, you should be able to SSH into the VM with `sudo ssh -i ./ubuntu-18.04.id_rsa 172.16.0.2`
2. Pause the VM to prepare for taking a snapshot

curl --unix-socket ~/firecracker.socket -i \
    -X PATCH 'http://localhost/vm' \
    -H 'Accept: application/json' \
    -H 'Content-Type: application/json' \
    -d '{
            "state": "Paused"
    }'

3. Take a snapshot

curl --unix-socket ~/firecracker.socket -i \
    -X PUT 'http://localhost/snapshot/create' \
    -H  'Accept: application/json' \
    -H  'Content-Type: application/json' \
    -d '{
            "snapshot_type": "Full",
            "snapshot_path": "./snapshot_file",
            "mem_file_path": "./mem_file",
            "version": "1.0.0"
    }'

** This handler assumes mem_file lives in root, and uses it as the backing memory file

Instructions to test:
1. Run the uffd handler: sudo go run enterprise/server/remote_execution/containers/firecracker/tools/uffd_handler_from_firecracker.go
	- The socket path is hard coded to /home/maggie/sock/uffd_socket.sock
2. Run firecracker from root: ./run_firecracker.sh
	- You must download the firecracker repo: git clone https://github.com/firecracker-microvm/firecracker
	- The socket path is hardcoded to ~/firecracker.socket
3. Configure networking for a firecracker VM: ./prep_vm.sh
4. Try to start a VM by loading a snapshot with UFFD configured as the backend

curl --unix-socket ~/firecracker.socket -i     -X PUT 'http://localhost/snapshot/load'     -H  'Accept: application/json'     -H  'Content-Type: application/json'     -d '{
            "snapshot_path": "./snapshot_file",
            "mem_backend": {
                "backend_path": "/home/maggie/sock/uffd_socket.sock",
                "backend_type": "Uffd"
            },
            "enable_diff_snapshots": true,
            "resume_vm": true
    }'

*/

import (
	"encoding/json"
	"fmt"
	"golang.org/x/sys/unix"
	"net"
	"os"
	"syscall"
	"unsafe"
)

/*
#include <linux/userfaultfd.h> // For UFFD_API, UFFDIO_API
#include <linux/poll.h> // For POLLIN
*/
import "C"

const UFFDIO_COPY = 0xc028aa03

type uffdMsg struct {
	Event uint8

	Reserved1 uint8
	Reserved2 uint16
	Reserved3 uint32

	PageFault struct {
		Flags   uint64
		Address uint64
		Ptid    uint32
	}
}

type uffdioCopy struct {
	Dst  uint64 // Source of copy
	Src  uint64 // Destination of copy
	Len  uint64 // Number of bytes to copy
	Mode uint64 // Flags controlling behavior of copy
	Copy int64  // Number of bytes copied, or negated error
}

type guestRegionUffdMapping struct {
	BaseHostVirtAddr uint64  `json:"base_host_virt_addr"`
	Size             uintptr `json:"size"`
	Offset           uint64  `json:"offset"`
}

func main() {
	// Remove any existing socket file
	socketPath := "/home/maggie/sock/uffd.sock"
	os.RemoveAll(socketPath)

	// Create a Unix domain socket listener
	listener, err := net.ListenUnix("unix", &net.UnixAddr{Name: socketPath, Net: "unix"})
	if err != nil {
		fmt.Println("Error creating Unix domain socket listener:", err)
		return
	}
	defer listener.Close()

	// Set the permissions of the socket file
	if err := os.Chmod(socketPath, 0777); err != nil {
		fmt.Println("Error setting perms on socket:", err)
		return
	}

	// Wait for firecracker to connect to the socket
	// When you try to load a firecracker snapshot with UFFD backend, it will connect to this socket and send some data over it
	// (See below for more info)
	fmt.Println("Listening for connection")
	conn, err := listener.Accept()
	if err != nil {
		fmt.Println("Error accepting connection:", err)
		return
	}
	unixConn := conn.(*net.UnixConn)
	fmt.Println("Connection made")

	// Get the underlying socket
	socketFile, err := unixConn.File()
	if err != nil {
		fmt.Println("Error getting FD for socket:", err)
		return
	}
	defer socketFile.Close()

	// Read data sent from firecracker
	// Firecracker sends the following over the socket (https://github.com/firecracker-microvm/firecracker/blob/main/src/vmm/src/persist.rs#L672)
	// - UFFD object it created
	//		- an open FD is a special type of data, considered a "control message" or "ancillary data", which is why we must process the two types of data sent separately
	// - mappings of VM virtual memory to backend memory file offsets
	//		- GuestRegionUffdMapping struct - https://github.com/firecracker-microvm/firecracker/blob/main/src/vmm/src/persist.rs#LL144C12-L144C34
	//		- Ex. -VM A creates a memory snapshot mem.snap. Its virtual memory address 0x100 gets saved to page 3 in mem.snapshot
	//			  - GuestRegionUffdMapping would contain { base_address: 0x100, offset: 3 }
	//			  - Tells UFFD to return page 3 of mem.snapshot when we get a memory fault for address 0x100
	bufMemoryMappings := make([]byte, 1024)
	// Each FD is 4B - only 1 should be sent (the UFFD object)
	bufUFFD := make([]byte, syscall.CmsgSpace(4))

	numBytesMappings, numBytesFD, _, _, err := unixConn.ReadMsgUnix(bufMemoryMappings, bufUFFD)
	if err != nil {
		fmt.Println("Error receiving data:", err)
		return
	}

	// Parse memory mappings
	bufMemoryMappings = bufMemoryMappings[:numBytesMappings]
	var mappings []guestRegionUffdMapping
	err = json.Unmarshal(bufMemoryMappings, &mappings)
	if err != nil {
		fmt.Printf("Could not parse memory mapping data: %s", err)
		return
	}
	fmt.Printf("Received data: %v\n", mappings)

	// Parse UFFD object
	controlMsgs, err := syscall.ParseSocketControlMessage(bufUFFD[:numBytesFD])
	if err != nil {
		fmt.Println("Error parsing control messages:", err)
		return
	}
	if len(controlMsgs) != 1 {
		fmt.Printf("Expected 1 control message containing UFFD, found %d", len(controlMsgs))
		return
	}
	fds, err := syscall.ParseUnixRights(&controlMsgs[0])
	if len(fds) != 1 {
		fmt.Printf("Expected 1 FD containing UFFD, found %d", len(fds))
		return
	}
	uffd := uintptr(fds[0])

	// Background thread to handle page faults
	go func() {
		// Create a page that will be copied into the faulting region
		pageSize := os.Getpagesize()
		pageToCopy, mmapErr := syscall.Mmap(-1, 0, pageSize, syscall.PROT_READ|syscall.PROT_WRITE, syscall.MAP_PRIVATE|syscall.MAP_ANONYMOUS)
		if mmapErr != nil {
			fmt.Printf("Failed to create virtual memory: %v\n", err)
			os.Exit(1)
		}
		defer syscall.Munmap(pageToCopy)

		for i := range pageToCopy {
			pageToCopy[i] = 'M'
		}

		pollFDs := []unix.PollFd{{
			Fd:     int32(uffd),
			Events: C.POLLIN,
		}}

		for {
			nready, pollErr := unix.Poll(pollFDs, -1)
			if pollErr != nil {
				fmt.Printf("Failed to poll UFFD: %v\n", err)
				os.Exit(1)
			}
			fmt.Printf("Num ready is %d", nready)

			var event uffdMsg
			_, _, err := syscall.Syscall(syscall.SYS_READ, uffd, uintptr(unsafe.Pointer(&event)), unsafe.Sizeof(event))
			if err != 0 {
				fmt.Printf("Failed to read event: %v\n", err)
				os.Exit(1)
			}

			fmt.Printf("Address is %v", event.Event)

			copyData := uffdioCopy{
				Dst:  event.PageFault.Address,
				Src:  uint64(uintptr(unsafe.Pointer(&pageToCopy[0]))),
				Len:  uint64(pageSize),
				Mode: 0,
				Copy: 0,
			}

			_, _, err = syscall.Syscall(syscall.SYS_IOCTL, uffd, UFFDIO_COPY, uintptr(unsafe.Pointer(&copyData)))
			if err != 0 {
				fmt.Printf("Failed to call UFFDIO_COPY: %v\n", err)
				os.Exit(1)
			}
		}
	}()

	for {

	}
}
