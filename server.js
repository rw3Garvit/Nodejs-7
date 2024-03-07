require('dotenv').config()
const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const connectDB = require('./db/dbConnect')
const routes = require('./routes')
const path = require('path')
const { studentService } = require('./services')
const cookieParser = require('cookie-parser')
const app = express()



//body parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cookieParser())

// app.use(express.json())
// app.use(express.urlencoded({extended:false}))


//view engine
app.set('view engine','ejs')

//routes
app.use('/v1',routes)

app.get('/',async (req,res)=>{


    let user = await studentService.getStudent()

    // console.log(user,"user");
    
    res.render('./index',{message:user})



})


//db connection
connectDB()


//server
http.createServer(app).listen(process.env.PORT,()=>{
    console.log('server start')
})

