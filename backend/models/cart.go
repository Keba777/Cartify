package models

type Cart struct {
	ID        uint `gorm:"primaryKey"`
	UserID    uint `gorm:"not null"`
	ProductID uint `gorm:"not null"`
	Quantity  uint `gorm:"not null;default:1"`
}
