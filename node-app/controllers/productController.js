const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    pname: String,
    pdesc: String,
    price: String,
    category: String,
    pimage: String,
    pimage2: String,
    addedBy: mongoose.Schema.Types.ObjectId,
   
})

// schema.index({ pLoc: '2dsphere' });

const Products = mongoose.model('Products', schema);


module.exports.search = (req, res) => {

    console.log(req.query)

    // let latitude = req.query.loc.split(',')[0]
    // let longitude = req.query.loc.split(',')[1]

    let search = req.query.search.toLowerCase();
    Products.find({
        $or: [
            { pname: { $regex: new RegExp(search, 'i') } }, // Case-insensitive regex
            { pdesc: { $regex: new RegExp(search, 'i') } },
            { price: { $regex: new RegExp(search, 'i') } },
        ],
    })
        .then((results) => {
            res.send({ message: 'success', products: results });
        })
        .catch((err) => {
            res.send({ message: 'server err' });
        });
}

module.exports.addProduct = (req, res) => {
    
    console.log(req.files);
    console.log(req.body);


 
    const pname = req.body.pname;
    const pdesc = req.body.pdesc;
    const price = req.body.price;
    const category = req.body.category;
    const pimage = req.files.pimage[0].path;
    const pimage2 = req.files.pimage2[0].path;
    const addedBy = req.body.userId;

    const product = new Products({
        pname, pdesc, price, category, pimage, pimage2, addedBy
    });
    product.save()
        .then(() => {
            res.send({ message: 'saved success.' })
        })
        .catch(() => {
            res.send({ message: 'server err' })
        })
}

// Vishnu


module.exports.deleteProduct = (req, res) => {

    Products.findOne({ _id: req.body.pid })
        .then((result) => {
            if (result.addedBy == req.body.userId) {
                Products.deleteOne({ _id: req.body.pid })
                    .then((deleteResult) => {
                        if (deleteResult.acknowledged) {
                            res.send({ message: 'success.' })
                        }
                    })
                    .catch(() => {
                        res.send({ message: 'server err' })
                    })
            }

        })
        .catch(() => {
            res.send({ message: 'server err' })
        })
}

