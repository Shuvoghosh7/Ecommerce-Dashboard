const { createProductService, getProductService, getProductByIdService } = require("../services/product.Service")

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

  exports.getProduct=async (req, res) => {
    try {
      const result=await getProductService();
      res.status(200).json({
        stauts: "success",
        massage: "successfully get data for all product",
        data: result
      })
    } catch (error) {
      res.status(400).json({
        stauts:"fail",
        message: "Data is not found",
        error : error.message
      })
    }
  }

  exports.getProductById=async (req, res) => {
    const {id}=req.params;
    try {
      const product=await getProductByIdService(id);
      if(!product){
        return res.status(400).json({
            stauts:"fail",
            error : "Could not finds a product with this id"
          })
      }
      res.status(200).json({
        stauts: "success",
        massage: "successfully get this product",
        data: product
      })
    } catch (error) {
      res.status(400).json({
        stauts:"fail",
        message: "Data is not found",
        error : error.message
      })
    } 
  }