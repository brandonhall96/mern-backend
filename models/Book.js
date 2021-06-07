const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookShema = new Schema({

    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    pages: Number,
    genre: String,
    price: Number,
    isbn: String

})

const Book = mongoose.model('Book', bookShema)
modeule.exports = Book;