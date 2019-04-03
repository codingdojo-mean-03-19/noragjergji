const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/quote_db');

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 1},
    quote: {type:String, required: true, maxlength: 250}
}, {timestamps: true});

mongoose.model('User', UserSchema); 
const User = mongoose.model('User')

const route = require('./server/config/routes')(app);

app.listen(8000, function(){
    console.log("listening on port 8000");
})