const userRoutes = require('express').Router()
const userController = require('../controllers/userController')

userRoutes.post('/login', userController.login)
userRoutes.post('/create', userController.createUser)


module.exports = userRoutes; 