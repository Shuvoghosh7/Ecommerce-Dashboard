const express = require("express");
const router=express.Router()
const productController=require('../controllers/product.controller')

router.route('/')
// .get(productController.getController)
.post(productController.createProduct)
/* router.route('/:id')
.patch(productController.updateProduct)
.delete(productController.deleteProduct) */