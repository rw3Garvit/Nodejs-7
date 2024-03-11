const express = require('express')
const { adminContoller, userContoller } = require('../controllers')
const { autheticate, auth } = require('../middlewares/auth')
const route = express.Router()




route.post('/register', userContoller.addUser)
route.post('/login',userContoller.login)
route.get('/profile',autheticate,auth(['user','admin']), userContoller.getProfile)

module.exports=route