const { getBooksFromDataBase, insertBookInDatabase } = require("../services/booksService");

export function getBooks(req, res) {
    let listBooks = getBooksFromDataBase();

    return res.status(200).send(listBooks)
}

export function createBook(req, res) {
    let codigo = req.body.codigo;
    let nombre = req.body.nombre;
    let editorial = req.body.editorial;

    insertBookInDatabase(codigo, nombre , editorial)

    return res.status(200).send('Book creado correctamente')
}