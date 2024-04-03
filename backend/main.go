package main

import (
	"backend/database"

	"github.com/gin-gonic/gin"
)

func init() {
	database.ConnectDB()
}

func main() {
	router := gin.Default()
	router.Run()
}
