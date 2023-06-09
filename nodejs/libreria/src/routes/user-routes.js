const express = require('express')
const userController = require('../controllers/user-controller')

const router = express.Router()

router.get("/all-users", userController.getAllUsers)
router.get("/user-by-id/:id", userController.getUserById)
router.post("/create", userController.createUser)
router.put("/edit/:id", userController.editUser)
router.delete("/delete/:id", userController.deleteUser)

module.exports = router