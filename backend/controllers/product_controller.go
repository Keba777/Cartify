package controllers

import (
	"backend/models"
	"backend/repositories"
	"backend/utils"
	"mime/multipart"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
	_ "github.com/joho/godotenv/autoload"
)

func GetAllProducts(c *gin.Context) {
	products := repositories.GetAllProducts()
	if products == nil {
		c.JSON(http.StatusNotFound, gin.H{"message": "No Products Found!"})
	}
	c.JSON(http.StatusOK, products)
}

func GetProductById(c *gin.Context) {
	productID := c.Param("productID")
	id, err := strconv.ParseUint(productID, 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Invalid product ID"})
		return
	}

	product := repositories.GetProductById(int(id))
	if product.ID == 0 {
		c.JSON(http.StatusNotFound, gin.H{"message": "Product not found"})
		return
	}
	c.JSON(http.StatusOK, product)
}

func AddProduct(c *gin.Context) {
	var product models.Product

	if err := c.ShouldBind(&product); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Error on binding"})
		return
	}

	filename, ok := c.Get("filePath")
	if !ok {
		c.JSON(http.StatusBadRequest, gin.H{"message": "filename not found"})
	}

	file, ok := c.Get("file")
	if !ok {
		c.JSON(http.StatusBadRequest, gin.H{"message": "file not found"})
		return
	}
	imageUrl, err := utils.UploadToCloudinary(file.(multipart.File), filename.(string))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": err.Error()})
		return
	}
	product.Name = c.Request.FormValue("name")
	price, err := strconv.ParseFloat(c.Request.FormValue("price"), 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Invalid price"})
		return
	}
	product.Price = price

	product.Brand = c.Request.FormValue("brand")
	product.Target = models.Target(c.Request.FormValue("target"))
	product.Category = models.Category(c.Request.FormValue("category"))

	product.Image = imageUrl

	err = repositories.AddProduct(&product)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Failed to create the product"})
		return
	}

	c.JSON(http.StatusCreated, product)
}

func DeleteProduct(c *gin.Context) {
	idParam := c.Param("productID")
	productID, err := strconv.ParseUint(idParam, 10, 64)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"message": "Invalid product ID"})
		return
	}

	if err := repositories.DeleteProduct(uint(productID)); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"message": "Failed to delete product"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Product deleted successfully"})
}
