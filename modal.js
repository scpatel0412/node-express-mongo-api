const mongoose = require('mongoose');

var starSchema = new mongoose.Schema({
    star_name:{
        type:String,
        require:true,
    },
    star_type:{
        type:String,
        require:true
    },
    distance:{
        type:String,
        require:true
    },
    text:{
        type:String,
        require:true,
    }

})
const categorySchema = new mongoose.Schema({
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
}, {
    timestamps: true
})
const stars = mongoose.model('stars',starSchema);
const images1 = mongoose.model("images",categorySchema)
module.exports = {stars,images1}