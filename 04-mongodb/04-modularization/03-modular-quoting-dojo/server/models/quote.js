const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quote_db');

const UserSchema = new mongoose.Schema({
    name: {type: String, 
            required: true, 
            minlength: 1},
    quote: {type:String, 
            required: true, 
            maxlength: 250}
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema); 