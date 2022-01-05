const Sequelize = require("sequelize");

// Banco de dados
const sequelize = new Sequelize('postapp', 'root', 'rmm112805', {
    host: "localhost",
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}