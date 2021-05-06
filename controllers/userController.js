const e = require('express')
const models = require('../models')


const userController = {}

userController.creatUser = async (req, res) =>{
    try {
       
        const user = await models.user.create({
            name: req.body.name,
            email:req.body.email,
            password: req.body.password
        })
        res.json({user})
    } catch (error) {
        console.log(error)
        res.json({error})
    }
}

module.exports = userController; 