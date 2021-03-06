const express = require('express');
const path = require('path');
const app = express();
const connectDB = require('./config/db');
const  cors = require('cors');
connectDB();
var PORT = process.env.PORT || 5000;

//cors
const corsOptions = {
    origin: process.env.ALLOWED_CLIENTS.split(',')
}

app.use(cors(corsOptions));
//Template engine

app.set('views',path.join(__dirname,'/views'));
app.set('view engine','ejs');

//Routes
app.use(express.json());
app.use(express.static('public'));
app.use('/api/files',require('./routes/files'));
//app.use('/api/files/send',require('./routes/email.js'));
app.use('/files',require('./routes/show'));
app.use('/files/download',require('./routes/download'));
app.listen(PORT,()=>{

    console.log(`server is running on ${PORT}`);
});