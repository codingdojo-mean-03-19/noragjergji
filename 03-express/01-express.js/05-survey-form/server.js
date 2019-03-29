const express = require("express");
const app = express();
const session = require("express-session");

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(session({
    secret: 'q1w2e3r4t5',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.get('/', function(req, res){
    res.render("index");
})

app.get('/results', function(req, res){
    res.render("result", {name: req.session.fname, ninja: req.session.ninja, location: req.session.location, language: req.session.language, comment: req.session.comment})
})


app.post('/process', function (req, res){
    req.session.ninja = req.body.ninja;
    req.session.location = req.body.location;
    req.session.language = req.body.language;
    req.session.comment = req.body.comment;
    res.redirect('/results');
});


app.listen(8000, function(){
    console.log("listening on port 8000");
})