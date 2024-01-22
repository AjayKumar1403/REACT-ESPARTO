const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
//Manoj

 // Vishnu

//LOGIN - Varsha

const accessToken = jwt.sign(
    {
        id: user._id,
        isAdmin: user.isAdmin,
    },
    process.env.JWT_SEC,
        {expiresIn:"3d"}
    );
    console.log(user);
    const { password, ...others } = user._doc;  
    res.status(200).json({...others, accessToken});



module.exports = router;