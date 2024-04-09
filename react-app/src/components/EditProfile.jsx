import { useEffect, useState } from "react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_URL from "../constants";

function EditProfile() {
    const navigate = useNavigate();
    const [uid, setUid] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [about, setAbout] = useState('');
    const [image, setImage] = useState('');
    const [oldImage, setOldImage] = useState('');

    useEffect(() => {
        if (!localStorage.getItem('token')) {
            navigate('/login');
        }
    }, []);

    useEffect(() => {
        // Fetch user details from the server using API
        const fetchUserProfile = async () => {
            try {
                const response = await axios.get(API_URL + '/get-user/' + localStorage.getItem('userId'));
                if (response.data.user) {
                    const user = response.data.user;
                    setUid(localStorage.getItem('userId'));
                    setUsername(user.username);
                    console.log("usname ", user)
                    setEmail(user.email);
                    setMobile(user.mobile);
                    setPassword(user.password);
                    setAbout(user.aboutMe);
                    setOldImage(user.image);
                }
            } catch (error) {
                console.log(error);
                alert('Server Error');
            }
        };

        fetchUserProfile();
    }, []);

    const handleApi = () => {
        const userData = {
            uid,
            username,
            email,
            mobile,
            password,
            about,
            image,
        };

        console.log("User Data: ", userData);

        const formData = new FormData();
        formData.append('uid', uid);
        formData.append('username', username);
        formData.append('email', email);
        formData.append('mobile', mobile);
        formData.append('password', password);
        formData.append('about', about);
        formData.append('image', image);

        const url = API_URL + '/edit-profile';
        axios.post(url, formData)
            .then((res) => {
                if (res.data.message) {
                    alert(res.data.message);
                    navigate('/my-profile');
                }
            })
            .catch((err) => {
                alert('Server Error');
            });
    };

    return (
        <div>
            <Header />
            <div className="p-3">
                <h2> EDIT PROFILE HERE : </h2>
                <label> Username </label>
                <input className="form-control" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label> Email </label>
                <input className="form-control" type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label> Mobile </label>
                <input className="form-control" type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                <label> Password </label>
                <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label> About </label>
                <textarea className="form-control" value={about} onChange={(e) => setAbout(e.target.value)} />
                <label> Profile Image </label>
                <input style={{ width: '50%' }} className="form-control" type="file" onChange={(e) => setImage(e.target.files[0])} />
                <img src={API_URL + '/' + oldImage} alt="Profile" width={100} height={50} /> <br />
                <button onClick={handleApi} className="btn btn-primary mt-3"> SUBMIT </button>
            </div>
        </div>
    );
}

export default EditProfile;
