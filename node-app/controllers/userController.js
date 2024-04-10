//Ajay

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