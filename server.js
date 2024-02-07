require('dotenv').config()
const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const app =express()
const route = express.Router()



app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


route.get('/',(req,res,next)=>{
    res.status(200).json({
        message:"get req success",
        data:[1,2,3]
    })
})

route.get('/getuser',(req,res,next)=>{
    res.status(200).json({
        message:'user get success'
    })
})


route.post('/',(req,res,next)=>{

    console.log(req.body)

    let body = req.body


    res.status(200).json({
        message:"data added success",
        data:body
    })
  

})




app.use(route)


http.createServer().listen(process.env.PORT,()=>{
    console.log("server started");
})