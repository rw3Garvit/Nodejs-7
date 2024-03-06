const { adminSchema } = require("../models")

const addAdmin =(body)=>{

    return adminSchema.create(body)

}

const findAdminByEmail = (email)=>{

    return adminSchema.findOne({email})

}

module.exports={addAdmin,findAdminByEmail}