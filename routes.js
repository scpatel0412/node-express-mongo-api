const express = require('express')
const router = express.Router()
const {stars,user1,blogdata,bloguser, dailyfeed} = require('./modal')
const uploadMulter = require('./middlewares/upload.js')
const validation = require('./middlewares/validation.js')
const {createCategory} = require('./controllers/category.controllers')

const fs =require("fs");


router.get('/stars', async(req,res) => {
    try{
           const star = await stars.find()
           res.json(star)
    }catch(err){
        res.send('Error ' + err)
    }
}
)
router.get('/users', async(req,res) => {
    try{
           const star = await user1.find()
           res.json(star)
    }catch(err){
        res.send('Error ' + err)
    }
}
)
router.get('/bloguser', async(req,res) => {
    try{
           const bloguser1 = await bloguser.find()
           res.json(bloguser1)
    }catch(err){
        res.send('Error ' + err)
    }
}
)
router.get('/blogdata', async(req,res) => {
    try{
           const blogdata1 = await blogdata.find()
           res.json(blogdata1)
    }catch(err){
        res.send('Error ' + err)
    }
}
)
router.get('/dailyfeed', async(req,res) => {
    try{
           const dailyfeed2 = await dailyfeed.find()
           res.json(dailyfeed2)
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
router.get('/stars1/:id', async(req,res) => {
    
    try{
        
           const star = await stars.findById(req.params.id)
           res.json(star)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/bloguser/:id', async(req,res) => {
    
    try{
           const bloguser1 = await bloguser.findById(req.params.id)
           res.json(bloguser1)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.get('/dailyfeed/:id', async(req,res) => {
    
    try{
           const dailyfeed2 = await dailyfeed.findById(req.params.id)
           res.json(dailyfeed2)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.get('/blogdata/:id', async(req,res) => {
    
    try{
           const blogdata1 = await blogdata.findById(req.params.id)
           res.json(blogdata1)
    }catch(err){
        res.send('Error ' + err)
    }
})
router.get('/users/:id', async(req,res) => {
    
    try{
           const star = await user1.findById(req.params.id)
           res.json(star)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/stars', uploadMulter, validation, async(req,res) => {

    let name = req.body.name
    let image = req.file.path
      const star = new stars({
         title:req.body.title,
         description:req.body.description,
         type:req.body.type,
         set_id:req.body.set_id,
         name:name,
         image:image
    })
    if(star){
        // res.status(200).json(star)
        const a1 =  await star.save() 
        res.json(a1)
    }else{
        res.send('Error')
    }

   
})
router.post('/bloguser', async(req,res) => {

 
      const bloguser1 = new bloguser({
         email:req.body.email,
         pass:req.body.pass    
    })
   

    if(bloguser1){
        // res.status(200).json(star)
        const a1 =  await bloguser1.save() 
        res.json(a1)
    }else{
        res.send('Error')
    }
})
router.post('/blogdata', async(req,res) => {

      
      const blogdata1 = new blogdata({
         star_name:req.body.star_name,
         description:req.body.description,
         
         setId:req.body.setId,
         image:req.body.image
    })
   

    if(blogdata1){
        // res.status(200).json(star)
        const a1 =  await blogdata1.save() 
        res.json(a1)
    }else{
        res.send('Error')
    }
})
router.post('/users',async(req,res) => {
    let find1 = await user1.findOne({email:req.body.email})
    
      const user2 = new user1({
        email:req.body.email,
        pass:req.body.pass,
        isAdmin:req.body.isAdmin
    })
   

    if(find1){
        // res.status(200).json(star)
        res.status(409).json({
            errors:"Error"
        })
        
        // if(find1){
        //     if(find1.email == user2.email){
        //          res.send("error")
        //     }
        //     else{
        //         // const a1 =  await user2.save() 
        //         // res.json(a1)
        //          res.send("success")
        //     }
        // }
       
    }else{
        const a1 = await user2.save()
        res.json(a1)
    }
})
router.post('/dailyfeed',async(req,res) => {
   
    
    const dailyfeed2 = new dailyfeed({
     star_name:req.body.star_name,
     description:req.body.description,
     set_id:req.body.set_id,
     imageLink:req.body.imageLink,
     userEmail:req.body.userEmail
  })
 

  if(dailyfeed2){
      // res.status(200).json(star)
      const a1 =  await dailyfeed2.save() 
      res.json(a1)
  }else{
      res.send('Error')
  }
})
router.put('/stars/:id',uploadMulter,validation,  async(req,res) => {    
    if(stars){
        let findImage = await stars.findById(req.params.id);
        if(findImage && findImage.image){ 
           fs.unlinkSync(findImage.image);
        }
        let star = await stars.findOneAndUpdate({_id:req.params.id},{
            $set:{
                title:req.body.title,
                description:req.body.description,
                type:req.body.type,
                set_id:req.body.set_id,
                image:req.file.path,
                name:req.body.name
            }
        },{new:true})
        res.send(star)
        
    }else{
        res.send('Error')
    }
} )
router.put('/users/:id',async(req,res) => {    
    if(user1){
        // res.status(200).json(star)
        let user2 = await user1.findOneAndUpdate({_id:req.params.id},{
            $set:{
                email:req.body.email,
                pass:req.body.pass,
                isAdmin:req.body.isAdmin
            }
        },{new:true})
        res.send(user2)
        
    }else{
        res.send('Error')
    }
} )
router.put('/dailyfeed/:id',async(req,res) => {    
    if(dailyfeed){
        // res.status(200).json(star)
        let dailyfeed2 = await dailyfeed.findOneAndUpdate({_id:req.params.id},{
            $set:{
                star_name:req.body.star_name,
                description:req.body.description,
                set_id:req.body.set_id,
                imageLink:req.body.imageLink,
                userEmail:req.body.userEmail 
            }
        },{new:true})
        res.send(dailyfeed2)
        
    }else{
        res.send('Error')
    }
} )
router.put('/bloguser/:id',async(req,res) => {    
    if(bloguser){
        // res.status(200).json(star)
        let bloguser1 = await bloguser.findOneAndUpdate({_id:req.params.id},{
            $set:{
                email:req.body.email,
                pass:req.body.pass
                
            }
        },{new:true})
        res.send(bloguser1)
        
    }else{
        res.send('Error')
    }
} )
router.put('/blogdata/:id',async(req,res) => {    
    if(blogdata){
        // res.status(200).json(star)
        let blogdata1 = await blogdata.findOneAndUpdate({_id:req.params.id},{
            $set:{
                star_name:req.body.star_name,
                description:req.body.description,
                
                setId:req.body.setId,
                image:req.body.image
                
            }
        },{new:true})
        res.send(blogdata1)
        
    }else{
        res.send('Error')
    }
} )
router.delete('/stars/:id', async(req,res) => {    
    
    if(stars){
    
        let findImage = await stars.findById(req.params.id);
        if(findImage && findImage.image){ 
           fs.unlinkSync(findImage.image);
        }
        let star = await stars.findByIdAndDelete({_id:req.params.id})
        
        res.send(star)
        
    }else{
        res.send('Error')
    }
})
router.delete('/users/:id', async(req,res) => {    
    if(user1){
        // res.status(200).json(star)
        let user2 = await user1.findByIdAndDelete({_id:req.params.id})
        res.send(user2)
        
    }else{
        res.send('Error')
    }
})
router.delete('/dailyfeed/:id', async(req,res) => {    
    if(dailyfeed){
        // res.status(200).json(star)
        let dailyfeed2 = await dailyfeed.findByIdAndDelete({_id:req.params.id})
        res.send(dailyfeed2)
        
    }else{
        res.send('Error')
    }
})
router.delete('/bloguser/:id', async(req,res) => {    
    if(bloguser){
        // res.status(200).json(star)
        let bloguser1 = await bloguser.findByIdAndDelete({_id:req.params.id})
        res.send(bloguser1)
        
    }else{
        res.send('Error')
    }
})
router.delete('/blogdata/:id', async(req,res) => {    
    if(blogdata){
        // res.status(200).json(star)
        let blogdata1 = await blogdata.findByIdAndDelete({_id:req.params.id})
        res.send(blogdata1)
        
    }else{
        res.send('Error')
    }
})


module.exports = router