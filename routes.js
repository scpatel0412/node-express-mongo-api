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
router.post('/stars', async(req,res) => {
    // const{star_name,star_type,distance,text} = req.body
    //  const star = new stars({
    //    
    //  })
    //  res.json(star)
      const star = new stars({
         star_name:req.body.star_name,
         star_type:req.body.star_type,
         distance:req.body.distance,
         text:req.body.text,
         set_id:req.body.set_id
    })
   

    if(star){
        // res.status(200).json(star)
        const a1 =  await star.save() 
        res.json(a1)
    }else{
        res.send('Error')
    }
})


router.put('/stars/:id', async(req,res) => {    
    if(stars){
        // res.status(200).json(star)
        let star = await stars.findOneAndUpdate({_id:req.params.id},{
            $set:{
                star_name:req.body.star_name,
                star_type:req.body.star_type,
                distance:req.body.distance,
                text:req.body.text,
                set_id:req.body.set_id
            }
        },{new:true})
        res.send(star)
        
    }else{
        res.send('Error')
    }
})
router.delete('/stars/:id', async(req,res) => {    
    if(stars){
        // res.status(200).json(star)
        let star = await stars.findByIdAndDelete({_id:req.params.id})
        res.send(star)
        
    }else{
        res.send('Error')
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