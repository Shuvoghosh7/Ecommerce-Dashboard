const Product = require("../model/Products");

exports.createProductService = async (data) => {
    const result = await Product.create(data)
    return result;
}

exports.getProductService = async () => {
    const result = await Product.find({})
    return result;
}

exports.getProductByIdService = async (id) => {
    const product = await Product.findOne({_id:id})
    return product;
}

