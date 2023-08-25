const Sequelize = require("sequelize")

const sequelize = require("../database/db")

const Todo = sequelize.define('todo', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    task: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Todo