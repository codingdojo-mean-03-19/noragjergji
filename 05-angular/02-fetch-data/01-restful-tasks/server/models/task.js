const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {type: String, 
            required: [true,
            'Title field is required']},
    description: {type:String, 
            default: ""},
    completed: {type: Boolean, default: false},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Task', TaskSchema);