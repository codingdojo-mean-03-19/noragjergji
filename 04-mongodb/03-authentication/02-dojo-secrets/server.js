const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      session = require('express-session'),
      bcrypt = require('bcrypt'),
      flash = require('express-flash'),
      app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static"));
app.use(flash());
app.use(session({
    secret: 'q@1w2e3r4t5',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

mongoose.connect('mongodb://localhost/secrets_db',{useNewUrlParser: true});

const secretSchema = new mongoose.Schema({
    content: {type: String, required: [true, 'Secret Field is required'], minlength: 15}
}, {timestamps: true});

const userSchema = new mongoose.Schema({
    first_name: {type: String, required: [true, 'Name Field is required'], minlength: 1},
    last_name: {type: String, required: [true, "Last Name Field is required"], minlength: 1},
    email: {type: String, required: [true, "Email Field is required" ], match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Please provide a valid email address"],
    existing_email: "Email already in use!"},
    password: {type: String, required: true, minlength: [8, "Password must be longer than eight characters."]},
    secrets: [secretSchema]
}, {timestamps: true});

var User = mongoose.model('User', userSchema); 
var Secret = mongoose.model('Secret', secretSchema);

app.get('/', function(req, res){
    res.render("index");
})

app.get('/secrets', function(req, res){
    if(req.session.user_id){ 
        Secret.find({}, function(err, response){
            if(err){console.log(err)};
            res.render("secret", {response});
        });
    }
    else {res.redirect('/secrets'); }
})

//Registration 
app.post('/register', function(req, res){
    var salt = bcrypt.genSaltSync(10)
    var hash = bcrypt.hashSync(req.body.pw_hash, salt);
    var user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password:  hash
    })    
    user.save(function(err){
        if(err){ 
            console.log('Registration was not successful!');
            for(var key in err.errors){
                req.flash('registration', err.errors[key].message);
            }
            res.redirect('/');
        }
        else {
            console.log('Successfully registered!');
            req.session.user_id = user._id;
            res.redirect('/secrets');
        }
    });
})

//Login

app.post('/login', function(req,res){
    User.findOne({email:req.body.email}, function(err,user){
        if(err) {return render.json('Fields are empty');}
        if(user){
            console.log('Email found, check for password');
            var comparePass = bcrypt.compareSync(req.body.pw_hash, user.password);
            if (comparePass){
                req.session.user_id = user._id;
                return res.redirect('/secrets');
            }
        }
        res.redirect('/');
    });
})

app.post('/secret', function(req, res){
    console.log(req.body)
    Secret.create(req.body, function (err) {
        if (err) { console.log(err); }
        res.redirect('/secrets');
    });
})

app.get('/logout', function(req,res){
    req.session.destroy();
    res.redirect('/');
})

app.listen(8000, function(){
    console.log("listening on port 8000");
})