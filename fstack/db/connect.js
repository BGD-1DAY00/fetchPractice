const mongoose = require('mongoose')
const dotenv = require('dotenv')
const connectdb = async () =>{
    const db = await mongoose.connect(process.env.MONGO)
    console.log(db.connection.name)
}

module.exports = {connectdb}