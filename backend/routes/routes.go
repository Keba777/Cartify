package routes

import (
	"backend/controllers"
	"backend/middlewares"

	"github.com/gin-gonic/gin"
)

func GetRouter(r *gin.Engine) {
	r.POST("/api/signup", controllers.SignUp)
	r.POST("/api/login", controllers.Login)

	productRouter := r.Group("/api/products")
	{
		productRouter.POST("/", middlewares.FileUploadMiddleware(), controllers.AddProduct)
		productRouter.GET("/", controllers.GetAllProducts)
		productRouter.GET("/:productID", controllers.GetProductById)
	}

	r.Use(middlewares.AuthMiddleware())

	userRouter := r.Group("/api/users")
	{
		userRouter.GET("/:userID", controllers.GetUserById)
		// userRouter.PUT("/:id", controllers.UpdateUser)
		// userRouter.DELETE("/:id", controllers.DeleteUser)
	}

	cartRouter := r.Group("/api/carts")
	{
		cartRouter.POST("/", controllers.CreateCart)
		cartRouter.GET("/:userID", controllers.GetCartByUserID)
		cartRouter.DELETE("/:cartID", controllers.DeleteCart)
	}

}
