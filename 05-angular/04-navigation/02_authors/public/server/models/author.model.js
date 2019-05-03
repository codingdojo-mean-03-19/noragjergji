const mongoose = require('mongoose');
const {Schema} = mongoose;

const AuthorSchema = new Schema({
    name:{
        type: String,
        trim: true,
        required: [true, 'First name is required']
    }
}, {timestamps:true});

module.exports = mongoose.model('Author', AuthorSchema);