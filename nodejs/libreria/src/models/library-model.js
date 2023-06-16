const { Model, DataTypes } = require('sequelize')
const { dbInstance } = require('../db/sequelize-config')

class Library extends Model {}

Library.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize: dbInstance,
    modelName: 'Library',
    createdAt: false,
    updatedAt: false,
})

module.exports = { Library }
