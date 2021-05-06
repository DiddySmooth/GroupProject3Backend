const e = require('express')
const models = require('../models')

const productController = {}

productController.getOne = (req, res) => {
    try {
        const product = await models.product.findOne({
            where:{
                id: req.params.id
            }
        })
        res.send(product)
    } catch (error) {
        res.send(error)
    }
}

productController.getAll = async (req, res) => {
    try {
        const products = await models.product.findAll()
        res.send(products)
    } catch (error) {
        res.send(error)

    }
}

module.exports = productController; 