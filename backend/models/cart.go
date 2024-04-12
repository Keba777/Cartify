package models

type Cart struct {
	ID        uint `json:"id" gorm:"primaryKey"`
	UserID    uint `json:"userID" gorm:"not null"`
	ProductID uint `json:"productID" gorm:"not null"`
	Quantity  uint `json:"quantity" gorm:"not null;default:1"`
}
