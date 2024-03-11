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

   let user = jwt.verify(token,secret)

   console.log(user.data);

   req.user =user
   next()

}


let auth=([...role])=>{


   return (req,res,next)=>{
      let user = req.user


      if(role.includes(user.data.role))
      {
     
         next()
      }

      res.status(400).json({message:"you are not authorized"})
   }

}

module.exports={createToken,autheticate,auth}