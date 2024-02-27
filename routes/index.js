const express = require('express')
const routes = express.Router()
const studentRoute = require('./student.route')
const adminRoute = require('./admin.route')


routes.use('/student',studentRoute)
routes.use('/admin',adminRoute)




module.exports=routes