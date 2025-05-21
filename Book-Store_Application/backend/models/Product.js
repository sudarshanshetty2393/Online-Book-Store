const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    title: String,
    category: String, // "Book" or "Movie"
    description: String,
    price: Number,
    imageURL: String,
    stock: Number
});
module.exports = mongoose.model('Product', productSchema);
