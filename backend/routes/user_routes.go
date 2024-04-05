package routes

import (
	"backend/controllers"
	"backend/middlewares"

	"github.com/gin-gonic/gin"
)

func UserRouter(r *gin.Engine) {
	r.POST("/api/signup", controllers.SignUp)
	r.POST("/api/login", controllers.Login)
	r.GET("/api/users/:id", controllers.GetUserById)
	r.GET("/api/products", controllers.GetAllProducts)
	r.GET("/api/products/:id", controllers.GetProductById)
	r.POST("/api/products", middlewares.FileUploadMiddleware(), controllers.AddProduct)

	// r.POST("/api/upload", middlewares.FileUploadMiddleware(), controllers.UploadImage)
}
