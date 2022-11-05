const express = require("express");
const router=express.Router()
const userController=require('../controller/user.controller');
const authorization = require("../middlewar/authorization");
const verifyToken = require("../middlewar/verifyToken");
const { route } = require("./product.route");



router.post('/signup',userController.singup)
router.post('/login',userController.login)
router.get('/me',verifyToken,userController.getMe)

// update user in Editor
router.patch('/editor/:id',verifyToken,authorization("Admin"),userController.UpdateUserRole)




module.exports=router;