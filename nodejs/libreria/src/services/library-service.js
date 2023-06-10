const { Library } = require('../models/library-model');

async function getAll() {
    const listLibrary = await Library.findAll();

    return listLibrary;
}

module.exports = { getAll }