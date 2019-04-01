const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const server = app.listen(8000);
const io = require("socket.io")(server);

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(session({
    secret: 'a1s2d3f4',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.get('/', function(req, res){
    res.render("index");
})



io.sockets.on('connection', function(socket){
    var counter = 1;
    socket.on('updateNr', function(data){
        io.emit('click_counter', {response: counter++});
    });

    socket.on('resetNr', function(data){
        io.emit('click_counter', {response : counter=0});
    })
});

