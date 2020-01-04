package main

import (
	"fmt"

	"github.com/osuthailand/agplwarning"
)

func main() {
	err := agplwarning.Warn("agplwarning", "AGPLWarning")
	if err != nil {
		fmt.Println(err)
	}
	fmt.Println("License agreed")
}
