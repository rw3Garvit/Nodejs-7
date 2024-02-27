const { adminSchema } = require("../models")

const addAdmin =(body)=>{

    return adminSchema.create(body)

}

module.exports={addAdmin}