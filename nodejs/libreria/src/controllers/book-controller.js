const bookService = require('../services/book-service')

async function getAllBooks(req, res) {

  const books = await bookService.getAll()

  res.status(200).send(books)
}

async function getBookById(req, res, next) {
  const { id } = req.params;

  try {
    const book = await bookService.getById(id)

    res.status(200).send(book)
  } catch(error) {
    next(error)
  }
  
}

async function createBook(req, res) {
  const { isbn, title, author, year, library } = req.body;

  const book = await bookService.createBook(isbn, title, author, year, library)

  res.status(201).send(book)
}

async function editBook(req, res) {
  const { id } = req.params
  const { isbn, title, author, year, library} = req.body;

  const book = await bookService.editBook(id, isbn, title, author, year, library)

  res.status(200).send(book)
}

async function deleteBook(req, res) {
  const { id } = req.params

  await bookService.deleteBook(id)

  res.status(200).send(`Book con el id ${id} ha sido eliminado exitosamente!`)
}

async function auhtBook(req, res, next) {
  const { isbn, title, author, year, library } = req.body;

  try {
    const resultado = await bookService.authBook(isbn, title, author, year, library)
    res.status(200).send(resultado);
  } catch(error) {
    next(error)
  }
}

module.exports = { getAllBooks, getBookById, createBook, editBook, deleteBook, auhtBook }