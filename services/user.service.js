const User = require("../model/User");


exports.createUserService = async (userInfo) => {
    const catagory = await User.create(userInfo)
    return catagory;
}

exports.getUserByEmail=async(email)=>{
    return await User.findOne({email})
}

exports.updateUserService = async (id,data) => {
    const result = await User.updateOne({_id:id},data,{
        runValidators:true
    })
    return result;
}

