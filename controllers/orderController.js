const e = require('express')
const models = require('../models')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const orderController = {}

orderController.create = async (req, res) => {
    try {
        const decryptedId = jwt.verify(req.body.userId, process.env.JWT_SECRET)
        let order = await models.order.create({
            userId: decryptedId.userId,
            productId: req.body.productId,
            creditcard: req.body.creditcard,
            address: req.body.address, 
            groupId: req.body.groupId
        })
        res.send(order)
    } catch (error) {
        res.send(error)
    }
}

orderController.historyCreate = async(req, res) => {
    try {
        const decryptedId = jwt.verify(req.body.userId, process.env.JWT_SECRET)
        let order = await models.history.create({
            userId: decryptedId.userId,
            groupId: req.body.groupId
        })
        res.send(order)
    } catch (error) {
        res.send(error)
    }
}


orderController.getAll = async (req, res) => {
    try {
        console.log(req.headers)
        const decryptedId = jwt.verify(req.headers.userid, process.env.JWT_SECRET)
        let order = await models.history.findAll({
            where: {
                userId: decryptedId.userId
            },
            order: [
                ['createdAt', 'DESC']
            ]
        })
        res.send(order)
    } catch (error) {
        res.send(error)
    }
}

orderController.getOne = async (req, res) => {
    try {
        let order = await models.order.findAll({
            where:{
                groupId: req.headers.groupid
            }
        })
        res.send(order)
    } catch (error) {
        res.send(error)
    }
}

module.exports = orderController