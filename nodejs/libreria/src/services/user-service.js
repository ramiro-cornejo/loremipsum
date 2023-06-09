const { User } = require('../models/user-model')

async function getAll() {
  const listUsers = await User.findAll()

  return listUsers
}

async function getById(id) {
  const user = await User.findByPk(id)

  if (user == null) {
    throw new Error("Usuario no encontrado")
  }

  return user
}

async function createUser(name, password) {
  const user = new User()

  user.name = name
  user.password = password

  const userCreated = await user.save()
  return userCreated
}

async function editUser(id, name, password) {
  const user = await getById(id)

  if (name) {
    user.name = name
  }
  
  if (password) {
    user.password = password
  }
  
  const userEdited = await user.save()

  return userEdited
}

async function deleteUser(id) {
  const user = await getById(id)

  await user.destroy()
}

module.exports = { getAll, getById, createUser, editUser, deleteUser }