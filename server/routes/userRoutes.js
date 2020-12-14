const router = require('express').Router();
const User = require('../models/userModel');

router.post('/register', async (req, res) => {

    const {email, password} = req.body;

    const newUser = new User({
        email,
        password
    });

    try {
        const savedUser = await newUser.save();
        res.json(savedUser);
    } catch (error) {
        console.log(error)
    }
});

module.exports = router;