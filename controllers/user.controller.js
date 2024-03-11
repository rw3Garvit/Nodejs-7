const { createToken } = require("../middlewares/auth")
const { adminService, userService } = require("../services")
const { sendEmail } = require("../services/email.service")

const addUser = async(req,res)=>{



  

  
    const user= await userService.addUser(req.body)

    // let testMail =  await sendEmail(email,'Test Mail','Hello this is test mail')
    // console.log(testMail);

    res.status(200).json({
        message:"admin added success",
        user
    })


}


let login =async (req,res)=>{

try{

    
    let {email,password} = req.body
    console.log(email);

    let user = await userService.findUserByEmail(email)

    if(!user)
    {
        throw new Error("admin not found")
    }else{
        if(password === user.password)
        {
            console.log(user)
            let token = createToken(user)
            res.cookie("token",token)
            res.status(200).json({message:"login success",token})
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

    let user = req.user

    res.status(200).json({message:"profile get success",user})

}

module.exports={addUser,login,getProfile}