const express = require('express')
const routes = express.Router()
const studentRoute = require('./student.route')
const adminRoute = require('./admin.route')
const schoolRoute = require('./school.route')


routes.use('/student',studentRoute)
routes.use('/admin',adminRoute)
routes.use('/school',schoolRoute)




module.exports=routes