const express = require("express");
const app = express();
const session = require("express-session")

app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');

app.use(session({
    secret: 'q1w2e3r4t5',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

app.get('/', function(req, res){
    if(!req.session.counter){
        req.session.counter = 1;
    }
    else{
        req.session.counter++;
    }
    res.render("index", {counter: req.session.counter});
})

app.get('/addtwo', function(req, res){
    req.session.counter = req.session.counter + 1;
    res.redirect('/')
})

app.get('/reset', function(req, res){
    req.session.counter = null;
    res.redirect('/')
})


app.listen(8000, function(){
    console.log("listening on port 8000");
})