const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('test', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres'
})

module.exports = sequelize