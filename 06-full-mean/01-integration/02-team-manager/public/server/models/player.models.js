const mongoose = require('mongoose');
const { Schema } = mongoose;

const PlayerSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Player Name is required'],
        minlength: [3, 'Player Name should have at least 3 characters']
    },
    position: {
        type: String,
        trim: true       
    },
    status1: {
        type: String,
        trim: true,
        default: 'Undecided'
    },
    status2: {
        type: String,
        trim: true,
        default: 'Undecided'
    },
    status3: {
        type: String,
        trim: true,
        default: 'Undecided'
    }
}, {timestamps: true});

module.exports = mongoose.model('Player', PlayerSchema);