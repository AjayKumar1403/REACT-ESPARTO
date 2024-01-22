const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString(),
    });
    try {
      const savedUser = await newUser.save();
      res.status(201).json(savedUser);
    } catch (err) {
      res.status(500).json(err);
    }
});


//LOGIN 

router.post('/login', async (req, res) => {
  try{
      console.log("when clicked on login "+ JSON.stringify(req.body, null, 2));
      
      const user = await User.findOne(

          {
              username: req.body.username,
              
          }
         
       );

});

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