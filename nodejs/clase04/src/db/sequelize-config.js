const { Sequelize } = require('sequelize');

// Instancia de conexion
const dbInstance = new Sequelize({
    host: "localhost",
    database: "Xacademy",
    username: "Xacademy",
    password: "santex",
    port: 3306,
    dialect: "mysql"
});

module.exports = { dbInstance };