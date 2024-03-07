let jwt = require('jsonwebtoken')
let secret = "Hiiiii"


let createToken = (data)=>{

   return jwt.sign({data},secret)

}


module.exports={createToken}