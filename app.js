const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');    

const userRouter = require('./routes/user.js');
const port = process.env.PORT || 5000;


const app = express();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://robot:ticker@ds111882.mlab.com:11882/bufengyiran-finance');


app.use(bodyParser.json({limit: '1mb'}));  
app.use(bodyParser.urlencoded({extended: true}));


app.use('/user',userRouter);

app.listen(port);

console.log('start '+ port);