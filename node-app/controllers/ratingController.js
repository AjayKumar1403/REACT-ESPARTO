const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    productId: { type: mongoose.Schema.Types.ObjectId, required: true },
    ratingValue: { type: Number, required: true }
});

const Rating = mongoose.model('Rating', ratingSchema);

// Save rating for a product
module.exports.saveRating = async (req, res) => {
    try {
        const { userId, productId, ratingValue } = req.body;

        // Check if the rating already exists for the user and product
        const existingRating = await Rating.findOne({ userId, productId });

        if (existingRating) {
            // Update existing rating
            existingRating.ratingValue = ratingValue;
            await existingRating.save();
        } else {
            // Create new rating
            await Rating.create({ userId, productId, ratingValue });
        }

        res.status(200).send({ message: 'Rating saved successfully' });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ message: 'Failed to save rating' });
    }
};

// Get average rating for a product
module.exports.getAverageRating = async (req, res) => {
    try {
        const productId = req.params.productId;

        // Calculate average rating for the product
        const ratings = await Rating.find({ productId });
        if (ratings.length === 0) {
            res.status(200).send({ message: 'No Ratings' });
            return;
        }

        const totalRating = ratings.reduce((acc, rating) => acc + rating.ratingValue, 0);
        const averageRating = totalRating / ratings.length;

        res.status(200).send({ averageRating });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send({ message: 'Failed to calculate average rating' });
    }
};