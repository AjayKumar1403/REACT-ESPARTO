// const mongoose = require('mongoose');
// const userController = require('./../controllers/userController');

// describe('userController', () => {
//   // Mock the mongoose model
//   const mockUser = {
//     updateOne: jest.fn(),
//     findOne: jest.fn(),
//     save: jest.fn(),
//     populate: jest.fn(),
//   };
//   const mockModel = jest.fn(() => mockUser);
//   mongoose.model = mockModel;

//   // Mock the request and response objects
//   const mockRequest = {};
//   const mockResponse = {
//     send: jest.fn(),
//   };

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   // Test cases for the likeProducts method
//   describe('likeProducts', () => {
//     it('should like a product and send a success response', async () => {
//       mockRequest.body = {
//         productId: 'product1',
//         userId: 'user1',
//       };
//       mockUser.updateOne.mockResolvedValue({});

//       await userController.likeProducts(mockRequest, mockResponse);

//       expect(mockUser.updateOne).toHaveBeenCalledWith({ _id: 'user1' }, { $addToSet: { likedProducts: 'product1' } });
//       expect(mockResponse.send).toHaveBeenCalledWith({ message: 'liked success.' });
//     });

//     it('should send a server error response if there is an error', async () => {
//       mockRequest.body = {
//         productId: 'product1',
//         userId: 'user1',
//       };
//       mockUser.updateOne.mockRejectedValue(new Error('Server error'));

//       await userController.likeProducts(mockRequest, mockResponse);

//       expect(mockResponse.send).toHaveBeenCalledWith({ message: 'server err' });
//     });
//   });

//   // Add test cases for other methods (dislikeProducts, signup, myProfileById, getUserById, login, likedProducts, editProfile)
// });
