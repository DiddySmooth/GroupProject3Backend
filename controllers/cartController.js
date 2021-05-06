const e = require('express')
const models = require('../models')
const jwt = require('jsonwebtoken')

const cartController = {}

cartController.getAll = async (req, res) => {
    try {
        const decryptedId = jwt.verify(req.body.userId, process.env.JWT_SECRET)

        const cart = await models.cart.findAll({
            where:{
                userId: decryptedId.userId
            }
        })
        
        res.send(cart)
    } catch (error) {
        res.send(error)
    }
}

cartController.put = async (req, res) => {
    try {
        const decryptedId = jwt.verify(req.body.userId, process.env.JWT_SECRET)
        
        const cart = await models.cart.create({
            where:{
                userId: decryptedId.userId,
                productId: req.params.productId
            }
        })

        res.send(cart)
    } catch (error) {
        res.send(error)
    }
}

cartController.delete = async (req, res) => {
    try {
                
        const cart = await models.cart.destroy({
            where:{
                id:req.body.id
            }
        })

        res.send(cart)
    } catch (error) {
        res.send(error)
    }
}

cartController.deleteAll = async (req, res) => {
    try {
        const decryptedId = jwt.verify(req.body.userId, process.env.JWT_SECRET)
        
        const cart = await models.cart.destroy({
            where:{
                userId: decryptedId.userId,
            }
        })

        res.send(cart)
    } catch (error) {
        res.send(error)
    }
}

module.exports = cartController; 