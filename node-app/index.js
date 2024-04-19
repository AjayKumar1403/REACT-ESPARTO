const express = require('express')
const cors = require('cors')
const path = require('path');
var jwt = require('jsonwebtoken');
const multer = require('multer')
const http = require('http');
const { Server } = require("socket.io");
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');
const orderController = require('./controllers/orderController');
const ratingController = require('./controllers/ratingController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
})

const upload = multer({ storage: storage })
const bodyParser = require('body-parser')
const app = express()
const httpServer = http.createServer(app)
const io = new Server(httpServer, {
    cors: {
        origin: '*'
    }
})

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 4000
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://esparta:esparta@esparta.uuf6dlg.mongodb.net/?retryWrites=true&w=majority')

app.get('/', (req, res) => {
    res.send('hello...')
})

app.get('/search', productController.search)
app.post('/like-product', userController.likeProducts)
app.post('/edit-profile', upload.fields([{name : 'image'}]), userController.editProfile)
app.post('/dislike-product', userController.dislikeProducts)
app.post('/add-product', upload.fields([{ name: 'pimage' }, { name: 'pimage2' }]), productController.addProduct)
app.post('/edit-product', upload.fields([{ name: 'pimage' }, { name: 'pimage2' }]), productController.editProduct)
app.get('/get-products', productController.getProducts)
app.post('/delete-product', productController.deleteProduct)
app.get('/get-product/:pId', productController.getProductsById)
app.post('/liked-products', userController.likedProducts)
app.post('/my-products', productController.myProducts)
app.post('/signup', userController.signup)
app.get('/my-profile/:userId', userController.myProfileById)
app.get('/get-user/:uId', userController.getUserById)
app.post('/login', userController.login)
app.post('/checkout', orderController.checkout)
app.get('/getorders/:userId', orderController.getOrdersForUser)
app.post('/save-rating', ratingController.saveRating);
app.get('/get-average-rating/:productId', ratingController.getAverageRating);
app.post('/fetchrating', ratingController.fetchRating);
app.post('/getsales', orderController.getOrdersForProducts);

let messages = [];

io.on('connection', (socket) => {
    console.log('Socket Connected', socket.id)

    socket.on('sendMsg', (data) => {
        messages.push(data);
        io.emit('getMsg', messages)
    })

    io.emit('getMsg', messages)
})

httpServer.listen(port, () => {
    console.log(`app listening on port ${port}`)
})
