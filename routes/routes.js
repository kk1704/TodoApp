const express = require("express")
const router = express.Router()
const { body } = require("express-validator")
const { getUsers, createUser, getUser, updateUser, deleteUser } = require("../controllers/controller")



router.get('/', getUsers)

router.post('/', [
    body('name').notEmpty(),
    body('task').notEmpty()
], createUser)

router.get('/:id', getUser)

router.put('/:id', [
    body('name').notEmpty(),
    body('task').notEmpty()
], updateUser)

router.delete('/:id', deleteUser)

module.exports = router
