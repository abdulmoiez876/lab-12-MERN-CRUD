const express = require('express');
const books = require('../Models/books.js');

const booksRouter = express.Router();

const getBooks = async (req, res) => {
    const result = await books.find({});

    res.status(200).send(result);
}

booksRouter.get('/books', getBooks);

module.exports = booksRouter