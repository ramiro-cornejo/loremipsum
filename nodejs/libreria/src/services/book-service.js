const { Book } = require('../models/book-model');

const jwt = require('jsonwebtoken');

async function getAll() {
    const listBooks = await Book.findAll();

    return listBooks;
}

async function getById(id) {
    const book = await Book.findByPk(id);

    if(book == null) {
        throw new Error("book not found")
    }

    return book;
}

async function createBook(title, author, year, library) {
    const book = new Book();

    book.title = title;
    book.author = author;
    book.year = year;
    book.library = library;

    const bookCreated = await book.save()

    return bookCreated;
}

async function editBook(id, isbn, title, author, year, library) {
    const book = await getById(id);

    if(isbn) {
        book.isbn = isbn;
    }
    if(title) {
        book.title = title;
    }
    if(author) {
        book.author = author;
    }
    if(year) {
        book.year = year;
    }
    if(library) {
        book.library = library;
    }

    const bookEdited = await book.save()

    return bookEdited;
}

async function deleteBook(id) {
    const book = await getById(id);

    await book.destroy();
}

async function authBook(isbn, title, author, year, library) {
    const book = await Book.findOne({
        where: {
            isbn: isbn,
            title: title,
            author: author,
            year: year,
            library: library,           
        }
    })

    if(!book) {
        throw new Error("Datos de Book incorrectos.")
    }

    const token = jwt.sign({
        id: book.id,
        title: book.title,
        author: book.author,
        year: book.year,
        library: book.library
    }, 'SecretIsbn')

    return {
        accessToken: token
    }
}


module.exports = { getAll, getById, createBook,editBook, deleteBook, authBook}