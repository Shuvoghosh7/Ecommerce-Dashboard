const Product = require("../model/Products");

exports.createProductService = async (data) => {
    const result = await Product.create(data)
    return result;
}