const express = require('express')
const { schoolContoller } = require('../controllers')
const validate = require('../middlewares/validate')
const { schoolValidation } = require('../validations')
const route = express.Router()


route.post('/add',validate(schoolValidation.school), schoolContoller.addSchool)
route.get('/get',schoolContoller.getSchool)
// route.get('/get/:id',schoolContoller.getSchool)




module.exports = route