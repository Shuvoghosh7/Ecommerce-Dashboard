const express = require("express");
const router=express.Router()
const productController=require('../controller/product.controller')

router.route('/')
.get(productController.getProduct)
.post(productController.createProduct)
router.route('/:id')
.get(productController.getProductById)
/* router.route('/:id')
.patch(productController.updateProduct)
.delete(productController.deleteProduct) */

module.exports=router;