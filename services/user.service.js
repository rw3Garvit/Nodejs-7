const {  userSchema } = require("../models")

const addUser =(body)=>{
    return userSchema.create(body)
}

const findUserByEmail = (email)=>{
    return userSchema.findOne({email})
}

module.exports={addUser,findUserByEmail}