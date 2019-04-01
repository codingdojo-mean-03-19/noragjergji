//Missing one feature; user can't see previous messages - yet.

const express = require('express');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');
const server = app.listen(8000);
const io = require('socket.io')(server);

const messages = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/static'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(session({
    secret: 'a1s2d3f4',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.get('/', function(req, res){
    res.render('index');
})

io.sockets.on('connection', function (socket) { 
    socket.on('posting_message', function(data){
        messages.push({name: data.name, message: data.content})
        io.emit('new_message', {name: data.name, message: data.content}); 
    }); 
});