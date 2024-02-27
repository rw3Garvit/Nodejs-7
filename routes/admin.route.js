const express = require('express')
const { adminContoller } = require('../controllers')
const  validate  = require('../middlewares/validate')
const { adminValidation } = require('../validations')
const route = express.Router()




route.post('/add',validate(adminValidation.admin), adminContoller.addAdmin)

module.exports=route