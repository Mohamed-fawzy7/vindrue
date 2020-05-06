const mongoose = require("mongoose");
const router = require("express").Router();

const User = require('../models/user');

router.post("/createuser", (req, res) => {
    console.log(req.body);
    const user = new User(req.body);
    user.save().then(()=>{
        res.send("user created successfully");
    }).catch((ex) => {
        res.status(400).json({message: 'this email is used'});
    });
    
})

module.exports = router;