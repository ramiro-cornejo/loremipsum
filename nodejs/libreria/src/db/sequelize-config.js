const { Sequelize } = require('sequelize');

const dbInstance = new Sequelize({
    host: "localhost",
    database: "appacademy",
    username: "Xacademy",
    password: "santex",
    port: 3306,
    dialect: "mysql"
});

module.exports = { dbInstance };