// const mongoose = require('mongoose');
// const productController = require('./../controllers/productController');

// describe('productController', () => {
//   // Mock the mongoose model
//   const mockProduct = {
//     find: jest.fn(),
//     findOne: jest.fn(),
//     updateOne: jest.fn(),
//     deleteOne: jest.fn(),
//     save: jest.fn(),
//   };
//   const mockModel = jest.fn(() => mockProduct);
//   jest.spyOn(mongoose, 'model').mockReturnValue(mockModel());

//   // Mock the request and response objects
//   const mockRequest = {};
//   const mockResponse = {
//     send: jest.fn(),
//   };

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   // Test cases for the search method
//   describe('search', () => {
//     it('should search for products and send a success response', async () => {
//       mockRequest.query = { search: 'product' };
//       mockProduct.find.mockResolvedValue([{ pname: 'Painting 1' }]);

//       await productController.search(mockRequest, mockResponse);

//       expect(mockProduct.find).toHaveBeenCalledWith({
//         $or: [
//           { pname: { $regex: /product/i } },
//           { pdesc: { $regex: /product/i } },
//           { price: { $regex: /product/i } },
//         ],
//       });
//       expect(mockResponse.send).toHaveBeenCalledWith({
//         message: 'success',
//         products: [{ pname: 'Product 1' }],
//       });
//     });

//     it('should send a server error response if there is an error', async () => {
//       mockRequest.query = { search: 'product' };
//       mockProduct.find.mockRejectedValue(new Error('Server error'));

//       await productController.search(mockRequest, mockResponse);

//       expect(mockResponse.send).toHaveBeenCalledWith({ message: 'server err' });
//     });
//   });

//   // Add test cases for other methods (addProduct, editProduct, getProducts, getProductsById, myProducts, deleteProduct)
// });
