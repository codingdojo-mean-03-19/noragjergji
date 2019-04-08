const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quote_db');

const UserSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 1},
    quote: {type:String, required: true, maxlength: 250}
}, {timestamps: true});

mongoose.model('User', UserSchema); 
const User = mongoose.model('User')

module.exports = {
    post_quote: function(req, res){
        User.create(req.body, function (err) {
            if (err) { console.log(err); }
            res.redirect('/quotes');
        });
    },
    all_quotes: function(req, res){
        User.find({}, function(err, users){
            if (err) {
                console.log(err);
            } else {
                res.render('quotes', { msg: "Users and Quotes", users });
            }
        }).sort({ createdAt: 'desc' });
    }
}