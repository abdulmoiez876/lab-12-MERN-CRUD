let mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
    _id: Number,
    title: String,
    isbn: String,
    pageCount: Number,
    publishedDate: Date,
    thumbnailUrl: String,
    shortDescription: String,
    longDescription: String,
    status: String,
    authors: [String],
    categories: [String]
})

module.exports = mongoose.model('book', booksSchema);