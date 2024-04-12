const mongoose = require('mongoose');
var jwt = require('jsonwebtoken');

const Users = mongoose.model('Users', {
    username: String,
    mobile: String,
    email: String,
    password: String,
    likedProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Products' }],
    image: {
        type: String,
        default: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80', // Default image URL
    },

    aboutMe: {
        type: String,
        default: 'No information available', // Default about me text
    }
});

module.exports.likeProducts = (req, res) => {
    let productId = req.body.productId;
    let userId = req.body.userId;

    Users.updateOne({ _id: userId }, { $addToSet: { likedProducts: productId } })
        .then(() => {
            res.send({ message: 'liked success.' })
        })
        .catch(() => {
            res.send({ message: 'server err' })
        })

}

module.exports.dislikeProducts = (req, res) => {
    let productId = req.body.productId;
    let userId = req.body.userId;

    Users.updateOne({ _id: userId }, { $pull: { likedProducts: productId } })
        .then(() => {
            res.send({ message: 'Disliked success.' })
        })
        .catch(() => {
            res.send({ message: 'server err' })
        })

}

module.exports.signup = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const mobile = req.body.mobile;
    const user = new Users({ username: username, password: password, email, mobile });
    user.save()
        .then(() => {
            res.send({ message: 'saved success.' })
        })
        .catch(() => {
            res.send({ message: 'server err' })
        })

}

module.exports.myProfileById = (req, res) => {
    let uid = req.params.userId

    Users.findOne({ _id: uid })
        .then((result) => {
            res.send({
                message: 'success.', user: {
                    email: result.email,
                    mobile: result.mobile,
                    username: result.username,
                    aboutMe: result.aboutMe,
                    password: result.password,
                    image : result.image,
                }
            })
        })
        .catch(() => {
            res.send({ message: 'server err' })
        })

    return;

}

module.exports.getUserById = (req, res) => {
    const _userId = req.params.uId;
    Users.findOne({ _id: _userId })
        .then((result) => {
            res.send({
                message: 'success.', user: {
                    email: result.email,
                    mobile: result.mobile,
                    username: result.username,
                    aboutMe: result.aboutMe,
                    password: result.password,
                    image : result.image,

                }
            })
        })
        .catch(() => {
            res.send({ message: 'server err' })
        })
}

module.exports.login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    Users.findOne({ username: username })
        .then((result) => {
            if (!result) {
                res.send({ message: 'user not found.' })
            } else {
                if (result.password == password) {
                    const token = jwt.sign({
                        data: result
                    }, 'MYKEY', { expiresIn: '1h' });
                    res.send({ message: 'find success.', token: token, userId: result._id, username: result.username })
                }
                if (result.password != password) {
                    res.send({ message: 'password wrong.' })
                }

            }

        })
        .catch(() => {
            res.send({ message: 'server err' })
        })

}

module.exports.likedProducts = (req, res) => {

    Users.findOne({ _id: req.body.userId }).populate('likedProducts')
        .then((result) => {
            res.send({ message: 'success', products: result.likedProducts })
        })
        .catch((err) => {
            res.send({ message: 'server err' })
        })

}


module.exports.editProfile = async(req, res) => {

    console.log("Hello");
    // console.log(req.files);
    // console.log(req.body);
    console.log("ksfkshfskf");
    const uid = req.body.uid;
    const username = req.body.username;
    const email = req.body.email;
    const mobile = req.body.mobile;
    const password = req.body.password;
    const about = req.body.about;
    let image = '';
    if (req.files && req.files.image && req.files.image.length > 0) {
        image = req.files.image[0].path;
    }

    const editObj = await Users.findOne({ _id: uid });

    if (username) {
        editObj.username = username;
    }
    if (email) {
        editObj.email = email;
    }
    if (password) {
        editObj.password = password;
    }
    if (about) {
        editObj.aboutMe = about;
    }
    if(image){
        editObj.image = image;
    }
    if (mobile) {
        editObj.mobile = mobile;
    }
    console.log(editObj);
    Users.updateOne({ _id: uid }, editObj, { new: true })
        .then((result) => {
            res.send({ message: 'saved success.', user: result })
        })
        .catch(() => {
            res.send({ message: 'server err' })
        })
}