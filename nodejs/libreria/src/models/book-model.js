/*
const { Model, DataTypes } = require('sequelize');
const { dbInstance } = require('../db/sequelize-config');

class Book extends Model {}

Book.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    isbn: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: dbInstance,
    modelName: 'Book',
    createdAt: false,
    updatedAt: false
})

module.exports = { Book }
*/