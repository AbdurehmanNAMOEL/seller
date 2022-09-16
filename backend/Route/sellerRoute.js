const express = require('express');
const { signUp,signIn,updatePassword,getUser} = require('../controllers/sellerController');
const protect = require('../middleWare/authMiddleWare');
const route = express.Router()

route.post('/signup',signUp)
route.post('/signIn',signIn)
route.get('/getUser',protect,getUser)
route.put('/update',updatePassword)


module.exports= route