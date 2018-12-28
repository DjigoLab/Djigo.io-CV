const express = require('express');
const router = express.Router();
const model = require('../models/User')

router.get('/', async (req, res) => {
    const users = await model.find()
    res.json(users)
    res.send('API users its working')
})

router.post('/', async (req, res) => {
    const user = new model(req.body)
    await user.save();
    res.json({
        status: "User added to our DB!"
    })
    console.log(user)

    res.json('Data recieved!')
})

router.delete('/:id', async (req, res) => {
    await model.findByIdAndDelete(req.params.id)
    res.json('User deleted!')
})

module.exports = router;