const express = require('express');
const router = express.Router();
require('../db/dbconfig');
const User = require('../models/userSchema')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// home
// router.get('/', (req, res ) => {
//     res.send("Home Page");
// })


// Login
router.post('/', async (req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password) {
            alert('Fill all the Credentials...');
        }

        const userLogin = await User.findOne({email: email});
        const isMatch = await bcrypt.compare(password, userLogin.password);
 
        if(userLogin) {
            if(!isMatch) alert('Wrong Credentials ...');
            else {
                const token = await userLogin.generateAuthToken();
                res.cookie('jwttoken', token, {
                    expires: new Date(Date.now() + 25892000000),
                    httpOnly: true
                });
                alert('User Signed In Successfully...')
            }
        } else {
            alert('Invalid Credentials ...');
        }

    } catch (error) {
        console.log(error)
    }
})

module.exports = router;