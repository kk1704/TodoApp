const Sequelize = require("sequelize")
const dotenv = require("dotenv").config()

const database = process.env.DATABASE
const username = process.env.USERNAME
const password = process.env.PASSWORD

const sequelize = new Sequelize(database, 'root', password, {
    dialect: 'mysql',
    host: process.env.HOST || 'localhost'
})

module.exports = sequelize