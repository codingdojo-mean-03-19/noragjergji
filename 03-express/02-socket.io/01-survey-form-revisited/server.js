const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require('express-session');
const server = app.listen(8000);

const io = require('socket.io')(server);

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));

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

io.on('connection', function (socket) { 
    socket.on('posting_form', function(data){
    var random_number = Math.floor(Math.random() * 1000) + 1;
    socket.emit('updated_message', {response: data}); 
    socket.emit('random_number', {response: random_number});
    }); 
});

