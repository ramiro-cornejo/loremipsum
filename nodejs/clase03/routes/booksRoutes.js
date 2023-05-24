// Routes --> Controller --> Services --> Models --> Database

var express = require('express');
const { getBooks } = require('./controllers/booksController');
var router = express.Router();

router.get('/books', getBooks)

router.post('/book', )

