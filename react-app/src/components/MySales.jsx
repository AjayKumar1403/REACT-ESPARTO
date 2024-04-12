import axios from "axios";
import { useEffect, useState } from "react";
import API_URL from "../constants";
import Header from "./Header";

function MySales() {
    const [products, setProducts] = useState([]);
    const [filteredOrders, setFilteredOrders] = useState([]);
    const [search, setSearch] = useState('');
    const [totalRevenue, setTotalRevenue] = useState(0);

    useEffect(() => {
        const url = API_URL + '/my-products';
        const data = { userId: localStorage.getItem('userId') };
        
        axios.post(url, data)
            .then((res) => {
                if (res.data.products) {
                    setProducts(res.data.products);
                    fetchOrdersForProducts(res.data.products);
                }
            })
            .catch((err) => {
                console.error('Server error:', err);
                alert('Server Error. Failed to fetch products.');
            });
    }, []);

    const fetchOrdersForProducts = (products) => {
        const productIds = products.map(product => product._id);
        const url = API_URL + '/getsales';
        const data = { productIds };

        axios.post(url, data)
            .then((res) => {
                const ordersWithProductDetails = res.data.map(order => {
                    const product = products.find(product => product._id === order.product);
                    return { ...order, product };
                });
                setFilteredOrders(ordersWithProductDetails);
                calculateTotalRevenue(ordersWithProductDetails);
            })
            .catch((err) => {
                console.error('Server error:', err);
                alert('Server Error. Failed to fetch orders for products.');
            });
    };

    const calculateTotalRevenue = (orders) => {
        let revenue = 0;
        orders.forEach(order => {
            revenue += order.totalPrice;
        });
        setTotalRevenue(revenue);
    };

    return (
        <div style={{ padding: '20px' }}>
            <Header />
            <h2>My Sales</h2>

            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Product Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Image</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Date</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Price</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>Order ID</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left', backgroundColor: '#f2f2f2' }}>User ID</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredOrders.map((order) => (
                        <tr key={order._id}>
                            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{order.product ? order.product.pname : '-'}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>
                                {order.product ? <img src={`${API_URL}/${order.product.pimage}`} alt={order.product.pname} style={{ width: '50px', height: '50px' }} /> : '-'}
                            </td>
                            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{order.orderDate}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{typeof order.totalPrice === 'number' ? `$${order.totalPrice}` : '-'}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{order._id}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>{order.user}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div style={{ marginTop: '20px' }}>
                <h3>Total Revenue: {isNaN(totalRevenue) ? '-' : `$${totalRevenue}`}</h3>
            </div>
        </div>
    );
}

export default MySales;
