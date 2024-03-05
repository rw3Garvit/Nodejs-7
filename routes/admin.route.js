const express = require('express')
const { adminContoller } = require('../controllers')
const  validate  = require('../middlewares/validate')
const { adminValidation } = require('../validations')
const {upload} = require('../middlewares/multer')
const route = express.Router()




route.post('/add', upload.single('imageName'), adminContoller.addAdmin)

module.exports=route