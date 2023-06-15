const express = require('express')
const libraryController = require('../controllers/library-controller')
const { isAuthenticated } = require('../middlewares/authentication')

const router = express.Router()

router.get("/all-libraries", libraryController.getAllLibrary)
router.get("/library-by-id/:id", libraryController.getLibraryById)
router.post("/create", isAuthenticated,libraryController.createLibrary)
router.put("/edit/:id", isAuthenticated,libraryController.editLibrary)
router.delete("/delete/:id", isAuthenticated,libraryController.deleteLibrary)
router.post("/authLibrary",libraryController.auhtLibrary)

module.exports = router