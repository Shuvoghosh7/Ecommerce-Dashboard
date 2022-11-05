const express = require("express");
const router=express.Router()
const userController=require('../controller/user.controller');
const verifyToken = require("../middlewar/verifyToken");



router.post('/signup',userController.singup)
router.post('/login',userController.login)
router.get('/me',verifyToken,userController.getMe)




module.exports=router;