const express = require('express')
const { studentContoller } = require('../controllers')
const route = express.Router()


route.post('/add',studentContoller.addStudent)
route.get('/get',studentContoller.getStudent)
route.delete('/delete/:id',studentContoller.deleteStudent)




module.exports=route