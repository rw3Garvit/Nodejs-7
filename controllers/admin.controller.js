const { adminService } = require("../services")

const addAdmin = async(req,res)=>{


    let {email,password} = req.body
    let profile = req.file.path

    let body ={
        email,
        password,
        profile
    }

    const admin= await adminService.addAdmin(body)


    res.status(200).json({
        message:"admin added success",
        admin
    })


}


let login =async (req,res)=>{

try{

    
    let {email,password} = req.body
    console.log(email);

    let admin = await adminService.findAdminByEmail(email)

    if(!admin)
    {
        throw new Error("admin not found")
    }else{
        if(password === admin.password)
        {
            res.status(200).json({message:"login success"})
        }else{
            throw new Error('password invalid')
        }
    }

}catch(err)
{
    res.status(500).json({success:false,err:err.message})
}

    

}


let getProfile =(req,res)=>{

    res.status(200).json({message:"profile get success"})

}

module.exports={addAdmin,login,getProfile}