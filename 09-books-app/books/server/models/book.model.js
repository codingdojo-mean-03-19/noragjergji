const mongoose = require('mongoose');

const {Schema } = mongoose;

const BookSchema = new Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'Title is required'],
        minlength: [2, 'More than 1 character']
    },
    author: {
        type: String,
        trim: true,
        required: [true, 'Author is required'],
        minlength: [5, 'More than 4 characters']
    }, 
    pages: Number,
    year: Number,
    publisher: String
}, {timestamps: true}) 

module.exports = mongoose.model('Book', BookSchema)