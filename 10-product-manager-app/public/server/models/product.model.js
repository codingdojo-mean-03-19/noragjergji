const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Product Name is required'],
        minlength: [3, 'Product Name should have at least 3 characters']
    },
    quantity: {
        type: Number,
        required: [true, 'Please select a quantity'],      
    },
    price: {
        type: Number,
        required: [true, 'Please select a price'], 
    }
}, {timestamps: true});

module.exports = mongoose.model('Product', ProductSchema);