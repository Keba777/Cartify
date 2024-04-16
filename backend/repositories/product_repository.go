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

func GetProductById(productID int) models.Product {
	db := database.DB
	var product models.Product
	db.First(&product, productID)
	return product
}

func DeleteProduct(productID uint) error {
	db := database.DB
	if err := db.Delete(&models.Product{}, productID).Error; err != nil {
		return err
	}
	return nil
}
