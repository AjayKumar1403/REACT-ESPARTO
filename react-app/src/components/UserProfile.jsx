import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './Header';
import './UserProfile.css';
import { FaHeart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import API_URL from "../constants";
import Categories from "./Categories";
import './Home.css';

function UserProfile() {
  const [userData, setUserData] = useState(null);
  const [id, setId] = useState('');
  const [products, setproducts] = useState([]);
  const [cproducts, setcproducts] = useState([]);
  const [search, setsearch] = useState('');
  const [refresh, setrefresh] = useState(false);

  // useEffect(() => {
  //     if (!localStorage.getItem('token')) {
  //         navigate('/login')
  //     }
  // }, [])

  useEffect(() => {
    const url = API_URL + '/my-products';
    let data = { userId: localStorage.getItem('userId') }
    axios.post(url, data)
      .then((res) => {
        if (res.data.products) {
          setproducts(res.data.products);
        }
      })
      .catch((err) => {
        alert('Server Err.')
      })
  }, [refresh])

  const handlesearch = (value) => {
    setsearch(value);
  }

  const handleClick = () => {
    let filteredProducts = products.filter((item) => {
      if (item.pname.toLowerCase().includes(search.toLowerCase()) ||
        item.pdesc.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase())) {
        return item;
      }
    })
    setcproducts(filteredProducts)

  }

  const handleCategory = (value) => {
    let filteredProducts = products.filter((item, index) => {
      if (item.category == value) {
        return item;
      }
    })
    setcproducts(filteredProducts)
  }

  const handleLike = (productId) => {
    let userId = localStorage.getItem('userId');
    setId(userId);
    const url = API_URL + '/like-product';
    const data = { userId, productId }
    axios.post(url, data)
      .then((res) => {
        if (res.data.message) {
          alert('Liked.')
        }
      })
      .catch((err) => {
        alert('Server Err.')
      })

  }

  const handleDel = (pid) => {
    if (!localStorage.getItem('userId')) {
      alert('Please Login First')
      return;
    }
    const url = API_URL + '/delete-product';
    const data = {
      pid,
      userId: localStorage.getItem('userId')
    }
    axios.post(url, data)
      .then((res) => {
        if (res.data.message) {
          alert('Delete Sucess.')
          setrefresh(!refresh)
        }
      })
      .catch((err) => {
        alert('Server Err.')
      })


  }

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userId = localStorage.getItem('userId');
        console.log(userId)
        const response = await axios.get(`http://localhost:4000/my-profile/${userId}`);
        console.log(response.data)
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <div>
      <Header />
      <div className="row py-5 px-4 profile-container">
        <div className="col-md-5 mx-auto">
          {/* Profile widget */}
          <div className="bg-white shadow rounded overflow-hidden">
            <div className="px-4 pt-0 pb-4 cover">
              <div className="media align-items-end profile-head">
                <div className="profile mr-3">
                  <img
                    src={API_URL + '/' + userData?.user.image}
                    alt="..."
                    width="130"
                    className="rounded mb-2 img-thumbnail"
                  />
                  <div className="media-body mb-5 text-white">
                    <h4 className="mt-0 mb-0">{userData?.user.username}</h4>
                    <p className="small mb-4">
                      <i className="fas fa-map-marker-alt mr-2"></i>{userData?.user.email}
                    </p>
                  </div>
                </div>
                <Link to={`/edit-profile/${id}`} >  Edit Profile </Link>
              </div>
            </div>
            <div className="bg-light p-4 d-flex justify-content-end text-center">

            </div>
            <div className="px-4 py-3">
              <h5 className="mb-0">About</h5>
              <div className="p-4 rounded shadow-sm bg-light">
                <p className="font-italic mb-0">{userData?.user.aboutMe}</p>
                <p className="font-italic mb-0">{userData?.user.mobile}</p>
              </div>
            </div>
            <div className="py-4 px-4">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h5 className="mb-0">My Arts</h5>

              </div>
              <div className="row">
                {products.length == 0 && <p>No Artworks yet...</p>}
                {products && products.length > 0 &&
                  products.map((item, index) => (
                    <div key={item._id} className="col-md-6">
                      <div className="card m-3">
                       
                        <img width="200px" height="200px" src={API_URL + '/' + item.pimage} />
                        <p className="m-2"> {item.pname} | {item.category} </p>
                        <h3 className="m-2 text-danger">$ {item.price} </h3>
                        <p className="m-2 text-success"> {item.pdesc} </p>
                        <p className="m-2 text-success">
                          <Link to={`/edit-product/${item._id}`} > Edit Product </Link>
                        </p>
                        <button onClick={() => handleDel(item._id)} > Delete Product </button>
                      </div>
                    </div>
                  ))}
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default UserProfile;
