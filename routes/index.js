const express = require('express')
const routes = express.Router()
const studentRoute = require('./student.route')
const adminRoute = require('./admin.route')
const schoolRoute = require('./school.route')
const userRoute = require('./user.route')
const { autheticate } = require('../middlewares/auth')


routes.use('/student',autheticate,studentRoute)
routes.use('/admin',adminRoute)
routes.use('/school',schoolRoute)
routes.use('/user',userRoute)




module.exports=routes