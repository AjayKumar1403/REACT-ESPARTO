const mongoose = require('mongoose');

// Order Schema
const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
        
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
        
    },
    quantity: {
        type: Number,
        default: 1 // Assuming one product per order
    },
    totalPrice: {
        type: Number,
        required: true
    },
    orderDate: {
        type: Date,
        default: Date.now
    },
    billingInfo: {
        fullName: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zip: {
            type: String,
            required: true
        }
    }
});

const Order = mongoose.model('Order', orderSchema);

// Define controller methods here...

module.exports = {
    // Controller methods
    checkout: async (req, res) => {
        try {
            const { user, product, totalPrice, billingInfo } = req.body;
            console.log("userrr", req.body.user, "product", req.body.product);
            console.log(req.body);
            
            // Create order
            const order = new Order({
                user,
                product,
                totalPrice,
                billingInfo
            });

            // Save order to database
            await order.save();

            res.status(201).json({ message: 'Order placed successfully', order });
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({ message: 'Failed to place order' });
        }
    }
};


// Controller method to get orders for a specific user
module.exports.getOrdersForUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const orders = await Order.find({ user: userId }).populate('product'); // Populate product details
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ message: 'Failed to fetch orders' });
    }
};