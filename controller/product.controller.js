const { createProductService } = require("../services/product.Service")

exports.createProduct=async (req, res) => {
    try {
      //create method
      const result=await createProductService(req.body)
      res.status(200).json({
        stauts: "success",
        massage: "successfully create a New Product",
        data: result
      })
    } catch (error) {
      res.status(400).json({
        stauts:"fail",
        message: "Data is not inserted",
        error : error.message
      })
    }  
  }