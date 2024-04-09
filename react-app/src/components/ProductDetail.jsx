import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
// import StripeCheckout from 'react-stripe-checkout';
import io from 'socket.io-client';
import API_URL from "../constants";
import Header from "./Header";
// import Checkout from "./Checkout";

let socket;

function ProductDetail() {

    const [product, setproduct] = useState();
    const [ratingSubmitted, setRatingSubmitted] = useState(false);
    const [currentRating, setCurrentRating] = useState(() => {
        const storedRating = localStorage.getItem('currentRating');
        return storedRating ? parseInt(storedRating, 10) : 0;
    });
    const [msg, setmsg] = useState('');
    const [msgs, setmsgs] = useState([]);
    const [user, setuser] = useState();
    const [rating, setRating] = useState(0);
    const [error, setError] = useState(null);
    const [averageRating, setAverageRating] = useState(null);
    const { productId } = useParams();
    const p = useParams();
    const KEY = process.env.REACT_APP_STRIPE;
    const [stripeToken, setStripeToken] = useState(null);
    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        // Store currentRating in local storage
        localStorage.setItem('currentRating', currentRating.toString());
    }, [currentRating]);

    useEffect(() => {
        socket = io(API_URL);

        socket.on('connect', () => {
            console.log('con');
        });
        return () => {
            socket.off();
        };

    }, []);

    useEffect(() => {

        socket.on('getMsg', (data) => {

            const _data = data.filter((item, index) => {
                return item.productId == p.productId;
            });
            console.log(_data, "_data");
            setmsgs(_data);
        });
    }, [p.productId]);

    const handleSend = () => {

        const data = { username: localStorage.getItem('userName'), msg, productId: localStorage.getItem('productId') };
        console.log(data, "data send");
        socket.emit('sendMsg', data);
        setmsg('');
    };

    useEffect(() => {
        const url = API_URL + '/get-product/' + p.productId;
        axios.get(url)
            .then((res) => {
                if (res.data.product) {
                    setproduct(res.data.product);
                    localStorage.setItem('productId', res.data.product._id);
                }
            })
            .catch((err) => {
                alert('Server Err.');
            });
    }, []);


    const handleContact = (addedBy) => {
        console.log('id', addedBy);
        const url = API_URL + '/get-user/' + addedBy;
        axios.get(url)
            .then((res) => {
                if (res.data.user) {
                    setuser(res.data.user);
                }
            })
            .catch((err) => {
                alert('Server Err.');
            });
    };

    const buttonStyle = {
        margin: '10px', // Add margin to create gap between buttons
        backgroundColor: '#007bff', // Apply blue color to buttons
        color: '#fff', // Apply white color to button text
        border: 'none', // Remove button border
        padding: '10px 20px', // Add padding to button
        borderRadius: '5px', // Add border radius to button
        cursor: 'pointer', // Change cursor to pointer on hover
    };
    const handleRatingChange = (value) => {
        setCurrentRating(value);
        setRating(value);
    };

    const handleRatingSubmit = () => {
        // Send rating to backend
        const data = { userId: localStorage.getItem('userId'), productId, ratingValue: rating };
        axios.post(`${API_URL}/save-rating`, data)
            .then(response => {
                console.log(response.data);
                setRatingSubmitted(true);
                setCurrentRating(rating);
                setRating(0);
                // Rating saved successfully, you can show a success message if needed
            })
            .catch(error => {
                console.error('Error saving rating:', error);
                setError('Error saving rating. Please try again later.');
            });
    };

    useEffect(() => {
        const fetchAverageRating = async () => {
            try {
                const response = await axios.get(`${API_URL}/get-average-rating/${productId}`);
                setAverageRating(response.data.averageRating);
            } catch (error) {
                console.error('Error fetching average rating:', error);
                setError('Error fetching average rating. Please try again later.');
            }
        };

        fetchAverageRating();
    }, [productId, rating]);

    return (
        <>
            <Header />
            <div className="d-flex" style={{ paddingLeft: '40px', paddingRight: '80px' }}>
                {product &&

                    <div className="flex-grow-1" style={{ paddingTop: '10px'}}>
                        <h3 style={{ paddingLeft: '10px'}} > Product Details  </h3>
                        <img width="400px" height="400px" src={API_URL + '/' + product.pimage} alt="" />
                        
                        <h3>{product.pdesc}</h3>
                        <h3 className="m-2 price-text"> $ {product.price} /- </h3>
                        <p className="m-2"> {product.pname}  | {product.category} </p>
                        <p className="m-2 text-success"> {product.pdesc} </p>

                        {product.addedBy &&
                            <button onClick={() => handleContact(product.addedBy)} style={buttonStyle}>
                                SHOW CONTACT DETAILS
                            </button>}
                        {user && user.username && <h4>{user.username}</h4>}
                        {user && user.mobile && <h3>{user.mobile}</h3>}
                        {user && user.email && <h6>{user.email}</h6>}

                    </div>
                }

                <div className="flex-grow-1" style={{ paddingTop: '40px'}}>
                    <div style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                        <p>Rate this product:</p>
                        <div className="rating-stars">
                            {[1, 2, 3, 4, 5].map((value) => (
                                <button
                                    key={value}
                                    onClick={() => handleRatingChange(value)}
                                    className={value <= currentRating ? 'filled' : ''}
                                    style={{ fontSize: '24px', color: value <= currentRating ? 'gold' : 'gray', cursor: 'pointer' }}
                                >
                                    ★
                                </button>
                            ))}
                        </div>
                        <button onClick={handleRatingSubmit} className="submit-btn" style={{ marginTop: '10px', padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit Rating</button>
                    </div>
                    {ratingSubmitted && <p className="rating-feedback">Rating submitted successfully!</p>}
                    {averageRating !== null && (
                        <p>Average Rating: {averageRating}</p>
                    )}
                    CHATS
                    {msgs && msgs.length > 0 &&
                        msgs.map((item, index) => {
                            return (
                                <p key={item._id} style={{ color: item.username === localStorage.getItem('userName') ? '#fff' : '#000', marginLeft: item.username === localStorage.getItem('userName') ? '100px' : 0, marginRight: item.username !== localStorage.getItem('userName') ? '100px' : 0, background: item.username === localStorage.getItem('userName') ? '#282c34' : '#61dafb', borderRadius: '5px' }}>
                                    {item.username} : {item.msg}
                                </p>
                            )
                        })
                    }
                    <input value={msg} onChange={(e) => setmsg(e.target.value)} className="form-control" type="text" />
                    <button onClick={handleSend} className="btn btn-primary" style={buttonStyle}>SEND</button>
                    {product &&
                        <Link to={{ pathname: '/checkout' }} style={{ ...buttonStyle, textDecoration: 'none', backgroundColor: 'green', padding: '10px 20px' }}>
                            Checkout Now
                        </Link>
                    }
                </div>

            </div>


        </>
    )
}

export default ProductDetail;
