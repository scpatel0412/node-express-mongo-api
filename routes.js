const express = require('express')
const router = express.Router()
const {stars,images1} = require('./modal')
const uploadMulter = require('./middlewares/upload.js')
const validation = require('./middlewares/validation.js')
const {createCategory} = require('./controllers/category.controllers')


router.get('/stars', async(req,res) => {
    try{
           const star = await stars.find()
           res.json(star)
    }catch(err){
        res.send('Error ' + err)
    }
}
)
router.get('/stars/:id', async(req,res) => {
    try{
           const star = await stars.findById(req.params.id)
           res.json(star)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.post('/category', uploadMulter, validation, createCategory)
router.get('/category', async(req,res) => {
    try{
           const star = await images1.find()
           res.json(star)
    }catch(err){
        res.send('Error ' + err)
    }
}
)
router.get('/category/:id', async(req,res) => {
    try{
           const star = await images1.findById(req.params.id)
           res.json(star)
    }catch(err){
        res.send('Error ' + err)
    }
})

module.exports = router