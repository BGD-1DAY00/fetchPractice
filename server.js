const express = require('express')
const app = express()
const path = require('path')
const {router} = require("./fstack/routes");
const dotenv = require('dotenv')
const {connectdb} = require('./fstack/db/connect')
const cors = require('cors')
//Config dotenv
dotenv.config({path: "./config/config.env"})
//Connecting Database
connectdb()
const corsOption = {
    origin: ['http://localhost:5100'],
};
app.use(cors(corsOption))

app.use(express.json())
app.use(express.urlencoded({extended:false}))
//Middleware
app.use(express.static('public'))
app.use('/', router)
const PORT = process.env.PORT || 5200

app.listen(PORT, console.log('running'))