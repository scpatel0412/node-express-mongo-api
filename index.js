const express = require('express')
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 8000;
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors')
const path =require('path')
const dotenv = require('dotenv')
dotenv.config({path: './config.env'});

const db = process.env.DATABASE
mongoose.connect(db,() => ({
    useNewUrlParser:true,
    useFindAndModify:false
})).then(() => console.log('DB Connected'))
.catch((err)=>{
    console.log('connection failed');
});
// mongoose.Promise =global.Promise;




// app.use(express.static('public'));
app.use(morgan('dev'));
app.use(cors());
// app.use(express.json());
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
      extended: true
    })
);
app.get("/",(req, res) => res.send('welcome to server! All system operational'))
app.use(express.static(__dirname + '/uploads'));
app.use("/uploads",express.static('images'))
app.use('/api',require('./routes'));
// global.location.reload()
app.listen(port,() => {
    console.log(`listening on http://localhost:${port}`);
})