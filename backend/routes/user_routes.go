package routes

import (
	"backend/controllers"
	"backend/middlewares"

	"github.com/gin-gonic/gin"
)

func UserRouter(r *gin.Engine) {
	r.POST("/api/signup", controllers.SignUp)
	r.POST("/api/login", controllers.Login)

	r.POST("/api/upload", middlewares.FileUploadMiddleware(), controllers.UploadImage)
}
