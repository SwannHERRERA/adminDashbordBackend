const express = require('express')
const User = require('../models/user')
const userController = require('../controller/user')
const auth = require('../middleware/auth')
const { checkSchema } = require('express-validator')
const router = express.Router()

router.get('/', userController.getEditUser)
router.get('/list', userController.getUsers)
router.post('/', userController.addUser)
router.put('/', userController.postEditUser)
router.delete('/', userController.deleteUser)

module.exports = router
