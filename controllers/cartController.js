const e = require('express')
const models = require('../models')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const cartController = {}

cartController.getAll = async (req, res) => {
    // console.log(req.headers)
    try {
        const decryptedId = jwt.verify(req.headers.userid, process.env.JWT_SECRET)

        const cart = await models.cart.findAll({
            where:{
                userId: decryptedId.userId
            
            },
            attributes:["id", "productId", "userId", "createdAt", "updatedAt"]
        })
        console.log(cart)
        res.send(cart)

        // const cart = await models.cart.findAll({
        //     where: {
        //         id: 2

        //     }
        // }
        // )
        // console.log(cart)
        // const user = await models.user.findOne({
        //     where:{
        //         userId: decryptedId.userId
        //     }
        // })
        // let cart = await user.getCarts()
        // console.log(cart.userId)
        // res.send(cart)
    } catch (error) {
        res.send(error)
    }
}

cartController.post = async (req, res) => {
    try {
        console.log(req.params.id, req.body)
        const decryptedId = jwt.verify(req.body.userId, process.env.JWT_SECRET)

        const cart = await models.cart.create({
            userId: decryptedId.userId,
            productId: req.params.id
        })

        res.send(cart)
    } catch (error) {
        res.send(error)
    }
}

cartController.delete = async (req, res) => {
    try {

        const cart = await models.cart.findOne({
            where: {
                id: req.body.id
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
            where: {
                userId: decryptedId.userId,
            }
        })

        res.send(cart)
    } catch (error) {
        res.send(error)
    }
}

module.exports = cartController;