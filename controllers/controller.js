const { validationResult } = require("express-validator")
const Todo = require("../models/todo")

// const getUsers = (req, res) => {
//     Todo.findAll()
//         .then(users => {
//             res.status(200).send(users)
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }

const getUsers = async (req, res) => {
    try {
        let tasks = await Todo.findAll()
        res.status(200).send(tasks)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// const createUser = (req, res) => {
//     const result = validationResult(req)
//     if (!result.isEmpty()) {
//         return res.status(400).send({ error: result.array() })
//     } else {
//         // const {name, task} = req.body
//         Todo.create({
//             name: req.body.name,
//             task: req.body.task
//         })
//             .then(result => {
//                 res.status(200).send(result)
//             })
//             .catch(err => {
//                 res.status(500).send(err.message)
//                 console.log(err)
//             })
//     }
// }

const createUser = async (req, res) => {
    try {
        const result = validationResult(req)
        if (!result.isEmpty()) {
            return res.status(400).send({ error: result.array() })
        } else {
            let task = await Todo.create({
                name: req.body.name,
                task: req.body.task
            })
            return res.status(200).send(task)
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// const getUser = (req, res) => {
//     Todo.findAll({ where: { id: req.params.id } })
//         .then(result => {
//             res.status(200).send(result)
//         })
//         .catch(err => {
//             res.status(500).send(err.message)
//             console.log(err)
//         })
// }

const getUser = async (req, res) => {
    try {
        let task = await Todo.findAll({ where: { id: req.params.id } })
        return res.status(200).send(task)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// const updateUser = (req, res) => {
//     const result = validationResult(req)
//     console.log(result)
//     if (!result.isEmpty()) {
//         return res.status(400).send({ error: result.array() })
//     } else {
//         Todo.update({
//             name: req.body.name, task: req.body.task
//         },
//             { where: { id: req.params.id } }
//         )
//             .then(result => {
//                 res.status(200).send(result)
//             })
//             .catch(err => {
//                 res.status(500).send(err.message)
//             })
//     }
// }

const updateUser = async (req, res) => {
    try {
        const result = validationResult(req)
        if (!result.isEmpty()) {
            return res.status(400).send({ error: result.array() })
        } else {
            let updateTask = await Todo.update({
                name: req.body.name, task: req.body.task
            }, {where: { id: req.params.id }})
            // return res.status(200).send(updateTask)
            return res.status(200).send("Record updated successfully..")
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// const deleteUser = (req, res) => {
//     Todo.destroy({ where: { id: req.params.id } })
//         .then(result => {
//             res.status(200).send(`Record of id: ${req.params.id} deleted successfully.`)
//         })
//         .catch(err => {
//             res.status(500).send(err.message)
//             console.log(err)
//         })
// }

const deleteUser = async (req, res) => {
    try {
        let delTask = await Todo.destroy({ where: { id: req.params.id } })
        return res.status(200).send(`Record of id: ${req.params.id} deleted successfully.`)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = { getUsers, createUser, getUser, updateUser, deleteUser }