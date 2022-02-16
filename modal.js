const mongoose = require('mongoose');

var starSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true
    },
   
    type:{
        type:String,
        require:true,
    },
    set_id:{
        type:String,
        require:true,
    },
     name: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: String,
        trim: true,
        required: true
    }
},{
    timestamps: true
})
const user = new mongoose.Schema({
    email: {
        type: String,
        
        required: true
    },
    pass: {
        type: String,
        
        required: true
    },
    isAdmin:{
        type:String,
        
        required: true
    }
}, {
    timestamps: true
})
const data1 = new mongoose.Schema({
    star_name: {
        type: String,
        
        required: true
    },
    description: {
        type: String,
        
        required: true
    },
    setId:{
        type:String,
        
        required: true
    },    
    image: {
        type: String,
        trim: true,
        required: true
    }
}, {
    timestamps: true
}
)
const user2 = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    pass: {
        type: String,
        
        required: true
    }
}, {
    timestamps: true
})
const dailyfeeddata = new mongoose.Schema({
    star_name: {
        type: String,
        
        required: true
    },
    description: {
        type: String,
        
        required: true
    },
    set_id:{
        type:String,
        
        required: true
    }, 
    imageLink: {
        type: String,
        trim: true,
        required: true
    },
    userEmail:{
        type:String,
        required:true
    }
}, {
    timestamps: true
}
)
const stars = mongoose.model('stars',starSchema);
 const user1 = mongoose.model("users",user)
 const bloguser = mongoose.model("blog-user",user2)
 const blogdata = mongoose.model("blog",data1)
 const dailyfeed = mongoose.model("dailyfeed",dailyfeeddata)
module.exports = {user1,stars,blogdata,bloguser,dailyfeed}