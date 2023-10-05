import "../Login/main.css";
import "../Login/util.css";

import React, { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import axios from 'axios';

import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from '../toast';
import { toast } from "react-toastify";

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");    
 //Peepa

 //Sailaja
   

//Sahithi
    return <div className="limiter">
        <ToastContainer/>
    <div className="container-login100">
        <div className="wrap-login100">
            <div className="login100-form validate-form p-l-55 p-r-55 p-t-178">
                <span className="login100-form-title">
                    Login
                </span>

               {/* // Thellaaaa */}


               {/* //Sai Vishnu */}

               
                <div>
                {/* <div className="text-right p-t-13 p-b-23">
                    <span className="txt1">
                    Forgot
                    </span>
                    
                    <a href="#" className="txt2">
                    Username / Password?
                    </a>
                </div> */}
                </div>

                <div className="container-login100-form-btn" onClick={LogInClick}>
                    <button className="login100-form-btn">
                        Login
                    </button>
                </div>

                <div className="flex-col-c p-t-100 p-b-40">
                    <span className="txt1 p-b-9">
                        Don’t have an account?
                    </span>
                    <a onClick={RegisterClick} href='/register'className="txt3" >
                        Register
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
//     <div className="limiter">
//     <input type="text" placeholder="Enter Username" value={username} onChange={event => setUsername(event.target.value)}/>
//     <input type="password" placeholder="Enter Password" value={password} onChange={event => setPassword(event.target.value)}/>
//     <button onClick={LogInClick}>Submit</button>
// </div> 
}

export default Login;