const express = require('express');
const userController = require('../controllers/user-controller');

const router = express.Router();


// Metodos HTTP
router.get("/obtener-todos", userController.getAllUsers)
router.get("/obtener-por-id/:id", userController.getUserById)
router.post("/crear", userController.createUser)
router.put("/editar/:id", userController.editUser)
router.delete("/eliminar/:id", userController.deleteUser)

module.exports = router;