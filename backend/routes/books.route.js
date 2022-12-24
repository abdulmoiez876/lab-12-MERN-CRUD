const express = require('express');
const books = require('../Models/books.js');

const booksRouter = express.Router();


const getBooks = async (req, res) => {
    const result = await books.find({});
    res.status(200).send(result);
}

const getBookById = async (req, res) => {
    const result = await books.findOne({_id: req.params.id});
    res.status(200).send(result);
}

const updateBook = async (req, res) => {
    const result = await books.updateOne({_id: req.body._id}, {
        ...req.body
    })

    res.status(200).send(result);
}

const deleteBook = async (req, res) => {
    const result = await books.deleteOne({
        _id: req.body._id
    })

    res.status(200).send(result);
}

const getLatestId = async (req, res) => {
    const latestBook = await books.findOne().sort('-_id');
    if(!latestBook) {
        return 1;
    }
    console.log(latestBook)
    return +(latestBook._id) + 1;
}

const addBook = async (req, res) => {
    const _id = await getLatestId();

    const result = await books.create({
        _id,
        ...req.body
    })

    res.status(200).send(result)
}

booksRouter.get('/books', getBooks);
booksRouter.get('/book/:id', getBookById);
booksRouter.post('/book', updateBook);
booksRouter.post('/deleteBook', deleteBook);
booksRouter.post('/addBook', addBook);

module.exports = booksRouter