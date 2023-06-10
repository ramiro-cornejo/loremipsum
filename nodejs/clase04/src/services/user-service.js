// import model
const { User } = require('../models/user-model');

async function getAll() {
    const listUsers = await User.findAll()

    return listUsers;
}

async function getById(id) {
    const user = await User.findByPk(id)
  
    if (user == null) {
      throw new Error("Usuario no encontrado")
    }
  
    return user
}
  
async function createUser(name, lastname, email, password) {
    const user = new User()
  
    user.name = name
    user.lastname = lastname
    user.email = email
    user.password = password  
  
    const userCreated = await user.save()
    return userCreated
}
  
async function editUser(id, name, lastname, email) {
    const user = await getById(id)
  
    if (name) {
      user.name = name
    }
    
    if (lastname) {
      user.lastname = lastname
    }
    
    if (email) {
      user.email = email
    }
    
    const userEdited = await user.save()
  
    return userEdited
}
  
async function deleteUser(id) {
    const user = await getById(id)
  
    await user.destroy()
}
  
module.exports = { getAll, getById, createUser, editUser, deleteUser }