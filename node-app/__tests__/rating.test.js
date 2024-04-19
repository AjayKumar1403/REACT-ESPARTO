// const mongoose = require('mongoose');
// const ratingController = require('./../controllers/ratingController');

// describe('ratingController', () => {
//   let mockRatingModel;

//   beforeEach(() => {
//     // Mock the mongoose model
//     mockRatingModel = {
//       findOne: jest.fn(),
//       find: jest.fn(),
//       create: jest.fn(),
//       save: jest.fn(),
//     };
//     mongoose.model = jest.fn(() => mockRatingModel);
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   // Mock the request and response objects
//   const mockRequest = {};
//   const mockResponse = {
//     status: jest.fn().mockReturnThis(),
//     send: jest.fn(),
//   };

//   // Test cases for the saveRating method
//   describe('saveRating', () => {
//     it('should update an existing rating if it exists', async () => {
//       mockRequest.body = {
//         userId: 'user1',
//         productId: 'product1',
//         ratingValue: 4,
//       };
//       mockRatingModel.findOne.mockResolvedValue({ ratingValue: 3, save: jest.fn() });

//       await ratingController.saveRating(mockRequest, mockResponse);

//       expect(mockRatingModel.findOne).toHaveBeenCalledWith({ userId: 'user1', productId: 'product1' });
//       expect(mockRatingModel.save).toHaveBeenCalledWith({ ratingValue: 4 });
//       expect(mockResponse.status).toHaveBeenCalledWith(200);
//       expect(mockResponse.send).toHaveBeenCalledWith({ message: 'Rating saved successfully' });
//     });

//     it('should create a new rating if it does not exist', async () => {
//       mockRequest.body = {
//         userId: 'user1',
//         productId: 'product1',
//         ratingValue: 4,
//       };
//       mockRatingModel.findOne.mockResolvedValue(null);
//       mockRatingModel.create.mockResolvedValue({});

//       await ratingController.saveRating(mockRequest, mockResponse);

//       expect(mockRatingModel.findOne).toHaveBeenCalledWith({ userId: 'user1', productId: 'product1' });
//       expect(mockRatingModel.create).toHaveBeenCalledWith({ userId: 'user1', productId: 'product1', ratingValue: 4 });
//       expect(mockResponse.status).toHaveBeenCalledWith(200);
//       expect(mockResponse.send).toHaveBeenCalledWith({ message: 'Rating saved successfully' });
//     });

//     it('should send an error response if there is an error', async () => {
//       mockRequest.body = {
//         userId: 'user1',
//         productId: 'product1',
//         ratingValue: 4,
//       };
//       mockRatingModel.findOne.mockRejectedValue(new Error('Server error'));

//       await ratingController.saveRating(mockRequest, mockResponse);

//       expect(mockResponse.status).toHaveBeenCalledWith(500);
//       expect(mockResponse.send).toHaveBeenCalledWith({ message: 'Failed to save rating' });
//     });
//   });

//   // Add test cases for other methods (getAverageRating, fetchRating)
// });
