const mongoose = require('mongoose');
const { Schema } = mongoose;
const NoteSchema = new Schema({
    content: {
        type: String,
        trim: true,
        required: [true, 'Note Content is required'],
        minlength: [3, 'Note must contain more than 3 characters']
    },
    date: {
        type: Date,
        default: Date.now(),
    }
},{
    timestamps: true,
  }
);

module.exports = mongoose.model('Note', NoteSchema);