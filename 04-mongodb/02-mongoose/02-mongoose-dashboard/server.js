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
    res.render("index");
})

app.listen(8000, function(){
    console.log("listening on port 8000");
})


