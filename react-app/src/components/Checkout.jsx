import React, { useState, useEffect } from "react";
import axios from "axios";
import API_URL from "../constants";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function Checkout() {
    let navigate = useNavigate();

    const [billingInfo, setBillingInfo] = useState({
        fullName: "",
        address: "",
        city: "",
        state: "",
        zip: ""
    });
    const [cardInfo, setCardInfo] = useState({
        cardNumber: "",
        expirationDate: "",
        cvv: ""
    });
    const [product, setProduct] = useState(null); // State to hold product details

    useEffect(() => {
        // Fetch product details using productId from localStorage
        const productId = localStorage.getItem("productId");
        if (productId) {
            axios.get(`${API_URL}/get-product/${productId}`)
                .then(response => {
                    setProduct(response.data.product);
                })
                .catch(error => {
                    console.error('Error fetching product:', error);
                });
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBillingInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCardInputChange = (e) => {
        const { name, value } = e.target;
        setCardInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Retrieve userId and productId from localStorage
        const userId = localStorage.getItem("userId");
        const productId = localStorage.getItem("productId");

        // Create order object
        const order = {
            user: userId ? String(userId) : "", // Convert to string and handle null case
            product: productId ? String(productId) : "", // Convert to string and handle null case
            quantity: 1, // Assuming one product per order
            totalPrice: product.price,
            billingInfo: {
                fullName: billingInfo.fullName,
                address: billingInfo.address,
                city: billingInfo.city,
                state: billingInfo.state,
                zip: billingInfo.zip
            },
            cardInfo: {
                cardNumber: cardInfo.cardNumber,
                expirationDate: cardInfo.expirationDate,
                cvv: cardInfo.cvv
            }
        };
        console.log(order);
        // Send order data to the server
        axios.post(`${API_URL}/checkout`, order)
            .then(response => {
                // Handle successful order submission
                console.log(response.data);
                alert('Order placed successfully!');
                navigate('/'); // Redirect back to the previous page
            })
            .catch(error => {
                // Handle error
                console.error('Error:', error);
                alert('Failed to place order!');
            });
    };

    return (
        <>
        <Header/>
        <div style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '24px', margin: '20px 0' }}>Checkout Page</div>
        <div style={{ display: "flex", maxWidth: "800px", margin: "0 auto", padding: "20px" }}>
            {/* Product information */}
            <div style={{ flex: 1, marginRight: "20px" }}>
                <h2>Product Details</h2>
                {product && (
                    <div>
                        <img src={`${API_URL}/${product.pimage}`} alt={product.pname} style={{ width: "350px", height: "350px", marginBottom: "10px" }} />
                        <h3>{product.pname}</h3>
                        <p>${product.price}</p>
                        <p>{product.pdesc}</p>
                        {/* Add more product details here if needed */}
                    </div>
                )}
            </div>

            {/* Billing information form */}
            <div style={{ flex: 1 }}>
                <h2>Billing Information</h2>
                <form onSubmit={handleSubmit}>
                    <input style={{ marginBottom: "10px", width: "100%", padding: "10px", fontSize: "16px" }} type="text" name="fullName" placeholder="Full Name" value={billingInfo.fullName} onChange={handleInputChange} required />
                    <input style={{ marginBottom: "10px", width: "100%", padding: "10px", fontSize: "16px" }} type="text" name="address" placeholder="Address" value={billingInfo.address} onChange={handleInputChange} required />
                    <input style={{ marginBottom: "10px", width: "100%", padding: "10px", fontSize: "16px" }} type="text" name="city" placeholder="City" value={billingInfo.city} onChange={handleInputChange} required />
                    <input style={{ marginBottom: "10px", width: "100%", padding: "10px", fontSize: "16px" }} type="text" name="state" placeholder="State" value={billingInfo.state} onChange={handleInputChange} required />
                    <input style={{ marginBottom: "10px", width: "100%", padding: "10px", fontSize: "16px" }} type="text" name="zip" placeholder="ZIP Code" value={billingInfo.zip} onChange={handleInputChange} required />

                    {/* Card details */}
                    <h2>Card Information</h2>
                    <input style={{ marginBottom: "10px", width: "100%", padding: "10px", fontSize: "16px" }} type="text" name="cardNumber" placeholder="Card Number" value={cardInfo.cardNumber} onChange={handleCardInputChange} required />
                    <input style={{ marginBottom: "10px", width: "100%", padding: "10px", fontSize: "16px" }} type="text" name="expirationDate" placeholder="Expiration Date" value={cardInfo.expirationDate} onChange={handleCardInputChange} required />
                    <input style={{ marginBottom: "10px", width: "100%", padding: "10px", fontSize: "16px" }} type="text" name="cvv" placeholder="CVV" value={cardInfo.cvv} onChange={handleCardInputChange} required />

                    <button style={{ width: "100%", padding: "15px", fontSize: "18px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }} type="submit">Place Order</button>
                </form>
            </div>
        </div>
        </>
    );
}

export default Checkout;
