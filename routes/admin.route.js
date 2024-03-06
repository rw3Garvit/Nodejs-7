const express = require('express')
const { adminContoller } = require('../controllers')
const  validate  = require('../middlewares/validate')
const { adminValidation } = require('../validations')
const {upload} = require('../middlewares/multer')
const route = express.Router()




route.post('/register', upload.single('profile'), adminContoller.addAdmin)
route.post('/login',adminContoller.login)
route.get('/profile',adminContoller.getProfile)

module.exports=route