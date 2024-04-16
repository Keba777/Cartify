package models

type Product struct {
	ID       uint     `json:"id" gorm:"primaryKey"`
	Name     string   `json:"name" gorm:"not null"`
	Price    float64  `json:"price" gorm:"not null"`
	Brand    string   `json:"brand" gorm:"not null"`
	Target   Target   `json:"target" gorm:"not null"`
	Category Category `json:"category" gorm:"not null"`
	Image    string   `json:"image" gorm:"not null"`
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
	Accessory    Category = "accessory"
)
