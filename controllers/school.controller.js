const { schoolService } = require("../services");

let addSchool = async(req,res)=>{

    console.log(req.body);

    let school = await schoolService.addSchool(req.body)

    res.status(201).json({
        message:"school created success",
        school
    })

}


let getSchool =async (req,res)=>{

    let school = await schoolService.getSchool()

    res.status(200).json({
        message:"all school get success",
        school
    })
}

module.exports={addSchool,getSchool}