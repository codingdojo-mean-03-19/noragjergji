const mongoose = require('mongoose');
const User = mongoose.model('User')

module.exports = function(app){
    app.post('/quotes', function(req, res){
        User.create(req.body, function (err) {
            if (err) { console.log(err); }
            res.redirect('/quotes');
        });
    });
    
    app.get('/quotes', function(req, res){
        User.find({}, function(err, users){
            if (err) {
                console.log(err);
            } else {
                res.render('quotes', { msg: "Users and Quotes", users });
            }
        }).sort({ createdAt: 'desc' });
    })
}