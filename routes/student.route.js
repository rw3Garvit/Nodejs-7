const express = require('express')
const { studentContoller } = require('../controllers')
const route = express.Router()


route.post('/add',studentContoller.addStudent)
route.get('/get',studentContoller.getStudent)




module.exports=route