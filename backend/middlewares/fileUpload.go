package middlewares

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func FileUploadMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		file, header, err := c.Request.FormFile("image")
		if err != nil {
			c.AbortWithStatusJSON(http.StatusBadRequest, gin.H{
				"error": "Bad request ",
			})
			return
		}
		defer file.Close() 

		c.Set("filePath", header.Filename)
		c.Set("file", file)

		c.Next()
	}
}
