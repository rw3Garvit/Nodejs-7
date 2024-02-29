const mongoose= require('mongoose')


const schoolSchema = new mongoose.Schema({

    name:{
        type:String
    },
    shortCode:{
        type:String
    },
    admin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'adminSchema'
    }
   
 
})


const school = mongoose.model('schoolSchema',schoolSchema)

module.exports=school