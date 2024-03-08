let jwt = require('jsonwebtoken')
let secret = "Hiiiii"


let createToken = (data)=>{
   return jwt.sign({data},secret)
}


let autheticate = (req,res,next)=>{
   let token = req.cookies['token']
   console.log(token);

   if(!token)
   {
      res.status(400).json({message:"you are not login"})
   }

   let admin = jwt.verify(token,secret)

   console.log(admin.data);

   req.admin =admin
   next()


}

module.exports={createToken,autheticate}