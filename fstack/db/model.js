const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:String,
    info: String,
    birthDay: String,
    a:String,
    b:String
})

module.exports = mongoose.model('Users', userSchema)