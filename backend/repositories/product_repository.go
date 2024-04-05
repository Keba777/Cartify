package repositories

import (
	"backend/database"
	"backend/models"
)

func GetAllProducts() []models.Product {
	db := database.DB
	var products []models.Product
	db.Find(&products)
	return products
}

func AddProduct(product *models.Product) error {
	db := database.DB
	result := db.Create(product)
	if result.Error != nil {
		return result.Error
	}
	return nil
}

func GetProductById(id int) models.Product {
	db := database.DB
	var product models.Product
	db.First(&product, id)
	return product
}
