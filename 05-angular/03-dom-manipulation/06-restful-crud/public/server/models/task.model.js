const mongoose = require('mongoose');
const {Schema} = mongoose;

const TaskSchema = new Schema({
    title:{
        type: String,
        trim: true,
        required: [true, 'Title is required'],
        minlength: [2, 'Give me more than 1 character!']
    },
    description: {
        type: String,
        trim: true,
        minlength: [5, 'Give me more than 5 characters!']
    }
}, {timestamps:true});

module.exports = mongoose.model('Task', TaskSchema);