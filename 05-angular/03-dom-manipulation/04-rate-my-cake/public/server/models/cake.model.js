const mongoose = require('mongoose');

const { Schema } = mongoose;

const CakeSchema = new Schema({
    baker_name:{
        type: String,
        trim: true,
        required: [true, 'Baker Name is required'],
        minlength: [2, 'More than 1 character needed']
    },
    url: {
        type: String,
        required: [true, 'Please provide an URL for a cake picture']
    }    
},{timestamps: true});

module.exports = mongoose.model('Cake', CakeSchema);