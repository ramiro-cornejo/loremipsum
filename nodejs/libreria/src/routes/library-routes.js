const express = require('express')
const libraryController = require('../controllers/library-controller')

const router = express.Router()

router.get("/all-libraries", libraryController.getAllLibrary)
router.get("/library-by-id/:id", libraryController.getLibraryById)
router.post("/create", libraryController.createLibrary)
router.put("/edit/:id", libraryController.editLibrary)
router.delete("/delete/:id", libraryController.deleteLibrary)

module.exports = router