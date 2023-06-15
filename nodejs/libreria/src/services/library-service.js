const { Library } = require('../models/library-model');

const jwt = require('jsonwebtoken');

async function getAll() {
    const listLibrary = await Library.findAll();

    return listLibrary;
}

async function getById(id) {
    const library = await Library.findByPk(id);

    if(library == null) {
        throw new Error("user not found")
    }

    return library;
}

async function createLibrary(name, location, telefono) {
    const library = new Library();

    library.name = name;
    library.location = location;
    library.telefono = telefono;
    

    const libraryCreated = await library.save()

    return libraryCreated;
}

async function editLibrary(id, name, location, telefono) {
    const library = await getById(id);

    if(name) {
        library.name = name;
    }
    if(location) {
        library.location = location;
    }
    if(telefono) {
        library.telefono = telefono;
    }

    const libraryEdited = await library.save()

    return libraryEdited;
}

async function deleteLibrary(id) {
    const library = await getById(id);

    await library.destroy();
}

async function auhtLibrary(name,location,telefono) {
    const library = await Library.findOne({
        where: {
            name: name,
            location: location,
            telefono: telefono
        }
    })

    if(!library) {
        throw new Error("Datos incorrectos.Revisar")
    }
    const token = jwt.sign({
        id: library.id,
        name: library.name,
        telefono: library.telefono
    }, 'SecretLocation')

    return {
        accessToken: token
    }
}


module.exports = { getAll, getById, createLibrary, editLibrary, deleteLibrary, auhtLibrary  }