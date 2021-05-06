const cartRoutes = require('express').Router()
const cartController = require('../controllers/cartController')
cartRoutes.get('/', cartController.getAll)
cartRoutes.post('/:id', cartController.post)
cartRoutes.delete('/', cartController.delete)
cartRoutes.delete('/all', cartController.deleteAll)

module.exports = cartRoutes;