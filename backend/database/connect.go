package database

import (
	"backend/models"
	"fmt"
	"log"
	"os"

	_ "github.com/joho/godotenv/autoload"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDB() {
	var err error
	dsn := os.Getenv("DATABASE_URL")
	DB, err = gorm.Open(postgres.Open(dsn), &gorm.Config{})

	if err != nil {
		log.Fatal("Failed to connect to databse")
	}
	fmt.Println("Successfully connected to PostgreSQL")
	DB.AutoMigrate(&models.User{}, &models.Product{}, &models.Cart{})

}
