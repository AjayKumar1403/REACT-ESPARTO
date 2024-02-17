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

    let search = req.query.search;
    Products.find({
        $or: [
            { pname: { $regex: search } },
            { pdesc: { $regex: search } },
            { price: { $regex: search } },
        ],
       
    })
        .then((results) => {
            res.send({ message: 'success', products: results })
        })
        .catch((err) => {
            res.send({ message: 'server err' })
        })
}