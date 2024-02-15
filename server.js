require('dotenv').config()
const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const connectDB = require('./db/dbConnect')
const routes = require('./routes')
const app = express()



//body parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



//routes
app.use('/v1',routes)


//db connection
connectDB()


//server
http.createServer(app).listen(process.env.PORT,()=>{
    console.log('server start')
})

