const express = require('express')
const userController = require('../controllers/user-controller')
const { isAuthenticated } = require('../middlewares/authentication');

const router = express.Router()

router.get("/all-users",isAuthenticated,userController.getAllUsers)
router.get("/user-by-id/:id", userController.getUserById)
router.post("/create", isAuthenticated,userController.createUser)
router.put("/edit/:id", isAuthenticated,userController.editUser)
router.delete("/delete/:id", userController.deleteUser)
router.post("/login",userController.login)

module.exports = router
