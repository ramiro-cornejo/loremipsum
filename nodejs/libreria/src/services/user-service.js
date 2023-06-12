const { User } = require('../models/user-model');

const jwt = require('jsonwebtoken');

async function getAll() {
    const listUsers = await User.findAll();

    return listUsers;
}

async function getById(id) {
    const user = await User.findByPk(id);

    if(user == null) {
        throw new Error("user not found")
    }

    return user;
}

async function createUser(name, password) {
    const user = new User();

    user.name = name;
    user.password = password;

    const userCreated = await user.save()

    return userCreated;
}

async function editUser(id, name, password) {
    const user = await getById(id);

    if(name) {
        user.name = name;
    }
    if(password) {
        user.password = password;
    }

    const userEdited = await user.save()

    return userEdited;
}

async function deleteUser(id) {
    const user = await getById(id);

    await user.destroy();
}

async function login(name,password) {
    const user = await User.findOne({
        where: {
            name: name,
            password: password
        }
    })

    if(!user) {
        throw new Error("Name y/o Password incorrectos.")
    }

    const token = jwt.sign({
        id: user.id,
        name: user.name
    }, 'SecretPassword')

    return {
        accessToken: token
    }
}


module.exports = { getAll, getById, createUser,editUser, deleteUser, login}