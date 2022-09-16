const mongoose= require('mongoose')

const connectDb = ()=>{
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log('the Db is connected');
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connectDb