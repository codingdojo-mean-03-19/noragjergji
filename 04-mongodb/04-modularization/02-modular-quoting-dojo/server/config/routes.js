const quotes = require('../controllers/quotes.js');

module.exports = function(app){
    app.post('/quotes', function(req, res){
        quotes.post_quote(req,res)
    });
    
    app.get('/quotes', function(req, res){
        quotes.all_quotes(req, res);
    })
}