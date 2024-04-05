package models

type Product struct {
	ID       uint     `gorm:"primaryKey"`
	Name     string   `gorm:"not null"`
	Price    float64  `gorm:"not null"`
	Brand    string   `gorm:"not null"`
	Target   Target   `gorm:"not null"`
	Category Category `gorm:"not null"`
	Image    string   `gorm:"not null"`
}

type Target string

const (
	Men   Target = "men"
	Women Target = "women"
)

type Category string

const (
	Clothing Category = "clothing"
	Shoes    Category = "shoes"
	Watch    Category = "watch"
)
