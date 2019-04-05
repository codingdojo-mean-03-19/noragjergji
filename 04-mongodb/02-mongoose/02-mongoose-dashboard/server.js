const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/sloth_db');
const SlothSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength:1},
    toes: {type: Number, required: true},
    species: {type: String, required: true},
    description: {type: String, required: true}
}, {timestamps: true})
mongoose.model('Sloth', SlothSchema);

const Sloth = mongoose.model('Sloth');

app.get('/', function(req, res){
    Sloth.find({}, function(err, sloths){
        if(err){console.log(err)};
        res.render("index", {sloths});
    });
});

app.get('/sloth/new', function(req, res){
    res.render("new")
})

app.post('/sloths', function(req, res){
    Sloth.create(req.body, function (err) {
        if (err) { console.log(err); }
        res.redirect('/');
    });
});

app.get('/sloth/:id', function(req, res){
    var id = req.params.id;
    Sloth.find({ _id: id},function(err, sloth){
        if(err){console.log(err)};
        res.render("show_one", {sloth});
    });
})

app.get('/sloth/edit/:id', function(req, res){
    var id = req.params.id;
    Sloth.find({ _id: id},function(err, sloth){
        if(err){console.log(err)};
        res.render("edit", {sloth});
    });
})

app.post('/sloth/:id', function(req, res){
    var id = req.params.id;
    Sloth.update({ _id: id},function(err, sloth){
        if(err){console.log(err)};
        res.redirect('/');
    });
});

app.post('/sloth/destroy/:id', function(req, res){
    var id = req.params.id;
    Sloth.remove({ _id: id},function(err, sloth){
        if(err){console.log(err)};
        res.redirect('/');
    });
})

app.listen(8000, function(){
    console.log("listening on port 8000");
})


