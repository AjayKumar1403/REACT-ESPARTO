import './index.css';
import * as React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from './components/Home';
import ReactDOM from 'react-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import AddProduct from './components/AddProduct';
import LikedProducts from './components/LikedProducts';
import ProductDetail from './components/ProductDetail';
import CategoryPage from './components/CategoryPage';
import MyProducts from './components/MyProducts';
import MyProfile from './components/MyProfile';
import EditProduct from './components/EditProduct';
import UserProfile from './components/UserProfile';
import EditProfile from './components/EditProfile';
import Checkout from './components/Checkout';
import MyOrders from './components/myorders';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:catName" element={<CategoryPage />} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:productId" element={<EditProduct />} />
        <Route path="/edit-profile" element={<EditProfile/>}/>
        <Route path="/liked-products" element={<LikedProducts />} />
        <Route path="/my-products" element={<MyProducts />} />
        <Route path="/my-profile" element={<UserProfile />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/myorders" element={<MyOrders/>} />
      </Routes>
    </Router>
  );
};

// Render the application
ReactDOM.render(<App />, document.getElementById("root"));
