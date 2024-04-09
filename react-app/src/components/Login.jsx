import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API_URL from "../constants";
import Header from "./Header";

function Login() {
    const navigate = useNavigate();

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [error, setError] = useState('');

    const handleApi = () => {
        const url = API_URL + '/login';
        const data = { username, password };
        axios.post(url, data)
            .then((res) => {
                if (res.data.message) {
                    if (res.data.token) {
                        localStorage.setItem('token', res.data.token);
                        localStorage.setItem('userId', res.data.userId);
                        localStorage.setItem('userName', res.data.username);
                        navigate('/');
                    } else {
                        setError(res.data.message);
                    }
                }
            })
            .catch((err) => {
                setError('Server error occurred');
            });
    };

    return (
        <div style={{
            position: 'relative', // Ensure relative positioning for children
            minHeight: '100vh', // Ensure the content takes at least the full viewport height
        }}>
            <Header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999 }} />
            <div style={{
                paddingTop: '70px', // Adjust top padding to accommodate the fixed header
                backgroundSize: 'cover',
                display: 'flex',
                backgroundImage:"url('https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?q=80&w')",
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div className="container">
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-6">
                            <div   className="card p-3">
                                <h3 className="text-center mb-4">Welcome to Login Page</h3>
                                {error && <div className="alert alert-danger">{error}</div>}
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input
                                        id="username"
                                        className="form-control"
                                        type="text"
                                        value={username}
                                        onChange={(e) => setusername(e.target.value)}
                                    />
                                </div>
                                <div style={{
                                    marginBottom:"80px"
                                }} className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        id="password"
                                        className="form-control"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setpassword(e.target.value)}
                                    />
                                </div>
                                <div  className="text-center">
                                    <button style={{
                                    marginRight:"20px"
                                }} className="btn btn-primary mr-3" onClick={handleApi}>Login</button>
                                    <Link className="btn btn-secondary" to="/signup">Sign Up</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
