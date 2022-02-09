const express = require('express')
const mongoose = require('mongoose');
const app = express();
const port = 8000;
const morgan = require('morgan');
const bodyParser = require('body-parser')
const cors = require('cors')
const path =require('path')


mongoose.connect('mongodb://localhost:27017/test',() => ({
    useNewUrlParser:true,
    useFindAndModify:false,
    useCreateIndex:true,
    useUnifiedTopology:true
})).then(() => console.log('DB Connected'));
mongoose.Promise =global.Promise;




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