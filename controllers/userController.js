const e = require('express')
const models = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const userController = {}

userController.creatUser = async (req, res) =>{
    try {
        const hashedPassword = bcrypt.hashSync(req.body.password, 10)

        const user = await models.user.create({
            name: req.body.name,
            email:req.body.email,
            password: hashedPassword
        })
        const encryptedId = jwt.sign({ userId: user.id }, process.env.JWT_SECRET)
        res.json({user})
    } catch (error) {
        console.log(error)
        res.json({error})
    }
}

userController.login = async (req,res) => {
    try {
        const user = await models.user.findOne({
            where:{
                email: req.body.email
            }
        })
        if (bcrypt.compareSync(req.body.password, user.password)){
            const encryptedId = jwt.sign({ userId: user.id }, process.env.JWT_SECRET)
            res.json({user, encryptedId})
        }
        else{
            res.status(401).json({message: 'login failed'})
        }
    } catch (error) {
        res.status(400).json({ error: error.message })
        console.log(error)
    }
}

userController.verify = async (req, res) => {
    try {
        const encryptedId = req.headers.authorization
        const decryptedId = await jwt.verify(encryptedId, process.env.JWT_SECRET)
        
        const user = await models.user.findOne({
            where:{
                id: decryptedId.userId
            }
        })
        if(user){
            res.json({user})
        }
        else{
            res.status(404).json({message: 'user not found'})
            console.log(error)
        }
    } catch (error) {
        res.json({error})
        console.log(error)
    }
}

userController.getUserInfo = async (req, res) => {
    try{
        const encryptedId = req.headers.authorization
        const decryptedId = await jwt.verify(encryptedId, process.env.JWT_SECRET)
        const user = await models.user.findOne({
            where: {
                id: decryptedId.userId
            }
        })
        res.json({
            user: user
        })    
    }
    catch (error) {
        res.json({
            error
        })
    }
}


module.exports = userController; 