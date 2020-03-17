const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    bookName: {
        type: String,
        required: true
    },
    purchaseDate: {
        type: Date, 
        required: true
    },
}, {
    timestamps: true,
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;