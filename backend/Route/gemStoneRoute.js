const express = require('express');
const { createGemStone,getGemStone,updateStone,deleteStone} = require('../controllers/gemStoneController');
const protect = require('../middleWare/authMiddleWare');


const gemStoneRoute = express.Router()

gemStoneRoute.post('/upload',protect,createGemStone)
gemStoneRoute.get('/getStone',protect,getGemStone)
gemStoneRoute.put('/edit/:id',protect,updateStone)
gemStoneRoute.delete('/delete/:id',protect,deleteStone)


module.exports= gemStoneRoute