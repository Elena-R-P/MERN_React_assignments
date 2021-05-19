const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please fill out"],
        minLength: [3, "Must be at least 3 chars"]
    },
    price: {
        type: Number,
    },
    description: {
        type: String,
    }
}, {timestamps: true});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
