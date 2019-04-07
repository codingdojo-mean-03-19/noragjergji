const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/message_board');

const commentSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength:1},
    comment: {type: String, required: [true, "Comment field is required"], minlength: 10}
}, {timestamps: true});

const messageSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Name field is required'], minlength: 1},
    message: {type: String, required: [true, 'Message Field is required']},
    comments: [commentSchema]
}, {timestamps: true});

mongoose.model('Message', messageSchema); 
mongoose.model('Comment', commentSchema); 
const Comment = mongoose.model('Comment');
const Message = mongoose.model('Message');

app.get('/', function(req, res){
    Message.find({}, function(err, response){
        if(err){console.log(err)};
        res.render("index", {response});
    });
})

app.post('/message', function(req, res){
    Message.create(req.body, function (err) {
        if (err) { console.log(err); }
        res.redirect('/');
    });
})

app.post('/comment/:id', function(req, res){
    Comment.create(req.body, function (err) {
        if (err) { console.log(err); }
        else {
            Message.updateOne({_id: req.params.id}, {$push: {comments: comment}}, function(err, comment){
                if (err) { console.log(err); }
                res.redirect('/');
            })
        };
    });
})

app.listen(8000, function(){
    console.log("listening on port 8000");
})