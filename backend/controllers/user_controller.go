package controllers

import (
	"backend/models"
	"backend/repositories"
	"backend/utils"
	"mime/multipart"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/golang-jwt/jwt/v5"
	_ "github.com/joho/godotenv/autoload"
	"golang.org/x/crypto/bcrypt"
)

func SignUp(c *gin.Context) {
	var user models.User
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to hash password"})
		return
	}
	user.Password = string(hashedPassword)

	repositories.AddUser(&user)
	c.JSON(http.StatusOK, gin.H{"message": "User created successfully"})
}

func Login(c *gin.Context) {
	var user models.User
	if err := c.ShouldBindJSON(&user); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	existingUser := repositories.GetUserByEmail(user.Email)
	if existingUser.ID == 0 {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid credentials"})
		return
	}

	if err := bcrypt.CompareHashAndPassword([]byte(existingUser.Password), []byte(user.Password)); err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Invalid credentials"})
		return
	}

	jwtSecret := []byte(os.Getenv("JWT_SECRET_KEY"))
	token := jwt.New(jwt.SigningMethodHS256)
	claims := token.Claims.(jwt.MapClaims)
	claims["email"] = existingUser.Email
	tokenString, err := token.SignedString(jwtSecret)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to generate token"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"token": tokenString})
}

func UploadImage(c *gin.Context) {

	filename, ok := c.Get("filePath")
	if !ok {
		c.JSON(http.StatusBadRequest, gin.H{"error": "filename not found"})
	}

	file, ok := c.Get("file")
	if !ok {
		c.JSON(http.StatusBadRequest, gin.H{"error": "file not found"})
		return
	}
	imageUrl, err := utils.UploadToCloudinary(file.(multipart.File), filename.(string))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"data": imageUrl})
	return
}
