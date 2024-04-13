package main

import (
	"backend/database"
	"backend/routes"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func init() {
	database.ConnectDB()
}

func main() {
	router := gin.Default()
	router.Use(cors.Default())
	routes.GetRouter(router)
	router.Run()
}
