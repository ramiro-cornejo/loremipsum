/*
const { Model, DataTypes } = require('sequelize');
const { dbInstante } = require('../db/sequelize-config');

class Library extends Model{}

Library.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize: dbInstante,
    modelName: 'Library',
    createdAt: false,
    updatedAt: false
})

module.exports = { Library }
*/