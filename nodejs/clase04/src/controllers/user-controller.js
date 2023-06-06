const userService = require('../services/user-service');

// Controller para peticion
// Endpoint
async function getAllUsers(req, res) {
    const users = await userService.getAll()
    res.status(200).send(users)
}

async function getUserById(req, res, next) {
    const { id } = req.params;
  
    try {
      const user = await userService.getById(id)
  
      res.status(200).send(user)
    } catch(error) {
      next(error)
    }
    
}

async function createUser(req, res) {
    const { name, lastname, email, password } = req.body;
  
    const user = await userService.createUser(name, lastname, email, password)
  
    res.status(201).send(user)
}

async function editUser(req, res) {
    const { id } = req.params
    const { name, lastname, email } = req.body;
  
    const user = await userService.editUser(id, name, lastname, email)
  
    res.status(201).send(user)
}

async function deleteUser(req, res) {
    const { id } = req.params
  
    await userService.deleteUser(id)
  
    res.status(200).send(`Usuario con el id ${id} ha sido eliminado exitosamente!`)
}

// Exportar para poder usar function
module.exports = { getAllUsers, getUserById, createUser, editUser, deleteUser };