const express = require('express')
const bookController = require('../controllers/book-controller')
const { isAuthenticated } = require('../middlewares/authentication')

const router = express.Router()

router.get("/all-books", bookController.getAllBooks)
router.get("/book-by-id/:id", bookController.getBookById)
router.post("/create",bookController.createBook) //isAuthenticated
router.put("/edit/:id",bookController.editBook) //isAuthenticated
router.delete("/delete/:id",bookController.deleteBook) //isAuthenticated
router.post("/authBook",bookController.auhtBook)

module.exports = router