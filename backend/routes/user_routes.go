package routes

import (
	"backend/controllers"
	"backend/middlewares"

	"github.com/gin-gonic/gin"
)

func UserRouter(r *gin.Engine) {
	r.POST("/api/signup", controllers.SignUp)
	r.POST("/api/login", controllers.Login)
	r.GET("/api/users/:userID", controllers.GetUserById)
	r.GET("/api/products", controllers.GetAllProducts)
	r.GET("/api/products/:productID", controllers.GetProductById)
	r.POST("/api/products", middlewares.FileUploadMiddleware(), controllers.AddProduct)
	r.POST("/api/carts", controllers.CreateCart)
	r.GET("/api/carts/:userID", controllers.GetCartByUserID)
	r.DELETE("/api/carts/:cartID", controllers.DeleteCart)
}
