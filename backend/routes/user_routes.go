package routes

import (
	"backend/controllers"

	"github.com/gin-gonic/gin"
)

func UserRouter(r *gin.Engine) {
	r.POST("/api/signup", controllers.SignUp)
	r.POST("/api/login", controllers.Login)

}
