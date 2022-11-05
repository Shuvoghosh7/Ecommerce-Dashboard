const express = require("express");
const router=express.Router()
const productController=require('../controller/product.controller');
const authorization = require("../middlewar/authorization");
const verifyToken = require("../middlewar/verifyToken");

router.route('/')
.get(verifyToken,authorization("Admin","Editor"),productController.getProduct)
.post(verifyToken,authorization("Admin","Editor"),productController.createProduct)
router.route('/:id')
.get(verifyToken,authorization("Admin","Editor"),productController.getProductById)
.patch(verifyToken,authorization("Admin","Editor"),productController.updateProduct)
.delete(productController.deleteProduct)

module.exports=router;