const orderRoutes = require('express').Router()
const orderController = require('../controllers/orderController')

orderRoutes.post('/', orderController.create)
orderRoutes.post('/history', orderController.historyCreate)
orderRoutes.get('/', orderController.getAll)
orderRoutes.get('/one', orderController.getOne)

module.exports = orderRoutes