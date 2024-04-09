// MyOrders.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from "../constants";
import Header from './Header';

function MyOrders() {
    const [orders, setOrders] = useState([]);
    const [ordersWithProducts, setOrdersWithProducts] = useState([]);

    useEffect(() => {
        // Fetch orders for the current user
        const userId = localStorage.getItem('userId');
        axios.get(API_URL + `/getorders/${userId}`)
            .then(response => {
                setOrders(response.data);
            })
            .catch(error => {
                console.error('Error fetching orders:', error);
            });
    }, []);

    useEffect(() => {
        // Fetch product details for each order
        const fetchProductDetails = async () => {
            const ordersWithProductsPromises = orders.map(async (order) => {
                try {
                    const response = await axios.get(API_URL + `/get-product/${order.product}`);
                    const product = response.data.product;
                    return { ...order, product };
                } catch (error) {
                    console.error('Error fetching product details:', error);
                    return { ...order, product: null };
                }
            });
            const resolvedOrdersWithProducts = await Promise.all(ordersWithProductsPromises);
            setOrdersWithProducts(resolvedOrdersWithProducts);
        };

        if (orders.length > 0) {
            fetchProductDetails();
        }
    }, [orders]);

    return (
        <>
        <Header/>
        <div style={{ margin: '20px auto', maxWidth: '800px' }}>
            <h2>My Orders</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {ordersWithProducts.map(order => (
                    <li key={order._id} style={{ border: '1px solid #ddd', marginBottom: '20px', padding: '20px' }}>
                        <div style={{ marginBottom: '20px' }}>
                            <h3>Order ID: {order._id}</h3>
                            <p>Total Price: ${order.totalPrice}</p>
                            <p>Order Date: {new Date(order.orderDate).toLocaleString()}</p>
                        </div>
                        <div style={{ display: 'flex' }}>
                            {order.product ? (
                                <>
                                    <img src={`${API_URL}/${order.product.pimage}`} alt={order.product.pname} style={{ width: '150px', height: '100px', marginRight: '20px' }} />
                                    <div style={{ flex: 1 }}>
                                        <h3>{order.product.pname}</h3>
                                        <p>${order.product.price}</p>
                                        <p>{order.product.pdesc}</p>
                                    </div>
                                </>
                            ) : (
                                <p>Loading product details...</p>
                            )}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
        </>
    );
}

export default MyOrders;
