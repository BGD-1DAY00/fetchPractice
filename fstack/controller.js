const user = require('./db/model')
const path = require('path')
const getIndex = (req, res)=>{
    res.sendFile(path.join(__dirname,'../public/index.html'))
}
const getHome = (req, res)=>{
    res.sendFile(path.join(__dirname,'../public/home.html'))
}
const postHome = async (req,res,next)=>{
    try{
        const createUser = await user.create(req.body)
        res.status(201).json({ success: true, msg: "crate User", data: req.body });
    }catch(e){
        console.log(e)
    }
}
const getAllData = async(req, res, next)=>{
    const data = await user.find()
    console.log('getting all data from mongo')
    //console.log(data)
    res.json(data)

}
const delData = async(req, res,next)=>{
    console.log('sfd')
    console.log(req.params.id)
    const a = await user.findByIdAndDelete(req.params.id)
    next()
}
const updateNow = async(req, res, next)=>{
    const getUpdateUser = await user.findOne(req.params.id)
    console.log(getUpdateUser)
    res.status(200).json(getUpdateUser)
    next()
}
const getOther = (req,res,next)=>{
    console.log('sjfkl')
    res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.redirect('http://nodejs.org')
}
module.exports = {getHome, getIndex,postHome, getAllData, delData, updateNow,getOther}