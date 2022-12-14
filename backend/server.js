const express = require('express')
const cors = require('cors')
const connectDb = require('./configure/db')
const  route  = require('./Route/sellerRoute')
const gemStoneRoute = require('./Route/gemStoneRoute')
const app = express()
app.use(express.json({limit:"30mb", extended:true}))
app.use(express.urlencoded({limit:"30mb", extended:true}))
app.use(cors())
require('dotenv').config()
connectDb()
app.use('/home',route)
app.use('/home',gemStoneRoute)
app.listen(process.env.PORT_NUM || 5000,()=>{
    console.log('server is running')
})