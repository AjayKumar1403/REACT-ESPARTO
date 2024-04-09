import axios from "axios";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import API_URL from "../constants";
import Header from "./Header";

function Signup() {

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [email, setemail] = useState('');
    const [mobile, setmobile] = useState('');
    // const navigate = useNavigate();

    const handleApi = () => {
        const url = API_URL + '/signup';
        const data = { username, password, mobile, email };
        axios.post(url, data)
            .then((res) => {
                if (res.data.message) {
                    alert(res.data.message);
                    return <Navigate to="/login" replace={true} />
                }
            })
            .catch((err) => {
                alert('SERVER ERR')
            })
    }

    return (
        <div style={{
            position: 'relative',
            minHeight: '100vh',
        }}>
            <Header style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999 }} />
            <div style={{
                paddingTop: '70px',
                backgroundSize: 'cover',
                display: 'flex',
                backgroundImage:"url('https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?q=80&w')",
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <div className="container">
                    <div className="row justify-content-center mt-5">
                        <div className="col-md-6">
                            <div  className="card p-3">
                                <h3 className="text-center mb-4">Welcome to Signup Page</h3>
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input
                                        id="username"
                                        className="form-control"
                                        type="text"
                                        value={username}
                                        onChange={(e) => setusername(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mobile">Mobile</label>
                                    <input
                                        id="mobile"
                                        className="form-control"
                                        type="text"
                                        value={mobile}
                                        onChange={(e) => setmobile(e.target.value)}
                                        required
                                        maxLength={10}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        id="email"
                                        className="form-control"
                                        type="text"
                                        value={email}
                                        onChange={(e) => setemail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div style={{
                                    marginBottom:"20px"
                                }} className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        id="password"
                                        className="form-control"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setpassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="text-center">
                                    <button style={{
                                    marginRight:"20px"
                                }} className="btn btn-primary mr-3" onClick={handleApi}>Signup</button>
                                    <Link className="btn btn-secondary" to="/login">Login</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;
