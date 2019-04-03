const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quote_db');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("index");
})

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 1},
    quote: {type:String, required: true, maxlength: 250}
}, {timestamps: true});

mongoose.model('User', UserSchema); 
const User = mongoose.model('User')

app.post('/quotes', function(req, res){
    User.create(req.body, function (err) {
        if (err) { console.log(err); }
        res.redirect('/quotes');
    });
});

app.get('/quotes', function(req, res){
    User.find({}, function(err, users){
        if (err) {
            console.log(err);
        } else {
            res.render('quotes', { msg: "Users and Quotes", users });
        }
    }).sort({ createdAt: 'desc' });
})

app.listen(8000, function(){
    console.log("listening on port 8000");
})