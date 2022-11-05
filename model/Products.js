const mongoose = require("mongoose");
const validator = require('validator');
//schema design
const productSchema = mongoose.Schema({
    name: {
      type: String,
      required: [true, "Please provide a name for thid product"],
      trim: true,
      lowercase:true,
      minLength: [3, "Name mast be 3 characters"],
      maxLength: [100, "Name is too larges"],
    },
    description: {
      type: String,
      required: true
    },
    imageUrl:{
        type: String,
        validate: [validator.isURL, "Please provide a valid URL"]
    },
    price:{
        type:Number,
        required: true
    },
    brand:{
        type:String,
        require:true,
    }
   
  }, {
    timestamps: true
  })

  const Products = mongoose.model('Products', productSchema)

  module.exports=Products;