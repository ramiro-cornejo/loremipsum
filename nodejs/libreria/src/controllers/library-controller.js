const libraryService = require('../services/library-service')

async function getAllLibrary(req, res) {

  const libraries = await libraryService.getAll()

  res.status(200).send(libraries)
}

async function getLibraryById(req, res, next) {
  const { id } = req.params;

  try {
    const library = await libraryService.getById(id)

    res.status(200).send(library)
  } catch(error) {
    next(error)
  }
  
}

async function createLibrary(req, res) {
  const { name, location, telefono } = req.body;

  const library = await libraryService.createLibrary(name, location, telefono)

  res.status(201).send(library)
}

async function editLibrary(req, res) {
  const { id } = req.params
  const { name, location, telefono } = req.body;

  const library = await libraryService.editLibrary(id, name, location, telefono)

  res.status(201).send(library)
}

async function deleteLibrary(req, res) {
  const { id } = req.params

  await libraryService.deleteLibrary(id)

  res.status(200).send(`Libreria con el id ${id} ha sido eliminado exitosamente!`)
}

module.exports = { getAllLibrary, getLibraryById, createLibrary, editLibrary, deleteLibrary}