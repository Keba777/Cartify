package repositories

import (
	"backend/database"
	"backend/models"
)

func GetAllUsers() []models.User {
	db := database.DB
	var users []models.User
	db.Find(&users)
	return users
}

func AddUser(user *models.User) {
	db := database.DB
	db.Create(user)

}

func GetUserById(id int) models.User {
	db := database.DB
	var user models.User
	db.First(&user, id)
	return user
}

func GetUserByEmail(email string) models.User {
	db := database.DB
	var user models.User
	db.Where("email = ?", email).First(&user)
	return user
}

func UpdateUser(user *models.User) {
	db := database.DB
	db.Save(user)
}

func DeleteUser(user *models.User) {
	db := database.DB
	db.Delete(user)
}

func DeleteUserById(id int) {
	db := database.DB
	db.Delete(&models.User{}, id)
}
