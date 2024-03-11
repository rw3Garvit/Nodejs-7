const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    },
    profile:{
        type:String
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }
})


const user = mongoose.model('userSchema',userSchema)

module.exports=user