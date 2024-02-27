const { adminService } = require("../services")

const addAdmin = async(req,res)=>{

    console.log(req.body)

    const admin= await adminService.addAdmin(req.body)


    res.status(200).json({
        message:"admin added success",
        admin
    })


}


module.exports={addAdmin}