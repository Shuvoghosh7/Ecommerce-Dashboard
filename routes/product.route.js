const express = require("express");
const router=express.Router()
const productController=require('../controller/product.controller');
const authorization = require("../middlewar/authorization");
const verifyToken = require("../middlewar/verifyToken");

router.route('/')
.get(verifyToken,authorization("Admin"),productController.getProduct)
.post(productController.createProduct)
router.route('/:id')
.get(productController.getProductById)
.patch(productController.updateProduct)
.delete(productController.deleteProduct)

module.exports=router;