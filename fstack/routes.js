const path = require('path')
const express = require('express')
const router = express.Router()
const {getHome, getIndex, postHome, getAllData, delData,updateNow,getOther} = require('./controller.js')

router.get('/',getIndex )
router.get('/getToOther',getOther )
router.get('/home', getHome)
router.post('/home', postHome)
router.get('/index', getAllData)
router.delete('/:id', delData)
router.put('/:id', updateNow)

module.exports = {router}