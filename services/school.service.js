const { schoolSchema } = require("../models")

let addSchool = (body)=>{

    return schoolSchema.create(body)

}

let getSchool = ()=>{
    return schoolSchema.find().populate('admin')
}

module.exports = {addSchool,getSchool}