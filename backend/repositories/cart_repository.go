package repositories

import (
	"backend/database"
	"backend/models"
)

func CreateCart(cart *models.Cart) error {
	db := database.DB
	result := db.Create(cart)
	if result.Error != nil {
		return result.Error
	}
	return nil
}

func GetCartByUserID(userID uint) ([]models.Cart, error) {
	var carts []models.Cart
	db := database.DB
	err := db.Where("user_id = ?", userID).Find(&carts).Error
	return carts, err
}

func UpdateCart(cart *models.Cart) error {
	db := database.DB
	if err := db.Save(cart).Error; err != nil {
		return err
	}
	return nil
}

func DeleteCart(id uint) error {
	db := database.DB
	if err := db.Delete(&models.Cart{}, id).Error; err != nil {
		return err
	}
	return nil
}
