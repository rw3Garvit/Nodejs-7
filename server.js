require('dotenv').config()
const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

const route = express.Router()


//body parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

route.get('/',(req,res,next)=>{

const file = path.join(__dirname,'/index.html')

    res.sendFile(file)
})


route.post('/',(req,res,next)=>{

let {username,password} = req.body
    console.log(req.body)

    res.status(200).json({
        message:'data add success',
        data:{username}
    })

})


route.post('/add',(req,res,next)=>{


    const body = req.body

    let num1=parseInt(body.num1)
    let num2=parseInt(body.num2)
    
    let sum=num1+num2

    res.status(200).json({
        message:'sum complate',
        sum
    })

})




//routes
app.use(route)

//server
http.createServer(app).listen(process.env.PORT,()=>{
    console.log('server start')
})

// app.listen(3001,()=>{
//     console.log('server started')
// })