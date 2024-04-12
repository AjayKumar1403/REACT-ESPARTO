import { useState } from 'react';
import { FaSearch, FaUser } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';


function Header(props) {

    // const [loc, setLoc] = useState('');
    const [showOver, setshowOver] = useState(false);

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        navigate('/login');
    }

    const imageStyle = {
        width: '50px', // Adjust width as needed
        height: 'auto', // Maintain aspect ratio
        borderRadius: '50%', // Apply rounded corners
        border: '2px solid #ccc', // Add border
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Add shadow
      };

      const handleSearch = () => {
        // Trigger search action
        console.log('Search clicked or enter pressed!');
        // Add your search logic here
    }

    return (
        <div className='header-container d-flex justify-content-between'>

            <div className="header">
                <img src="/logo.jpg" alt="My Logo" style={imageStyle} />
                <Link className='links' to="/">  ESPARTA </Link>
                {/* <select value={loc} onChange={(e) => {
                    localStorage.setItem('userLoc', e.target.value)
                    setLoc(e.target.value)
                }} >
                    {
                        locations.map((item, index) => {
                            return (
                                <option value={`${item.latitude},${item.longitude}`} >
                                    {item.placeName}
                                </option>
                            )
                        })
                    }
                </select> */}
                {/* <input className='search'
                    type='text'
                    value={props && props.search}
                    onChange={(e) => props.handlesearch && props.handlesearch(e.target.value)
                    }
                /> */}
                  <input className='search'
                    type='text'
                    value={props && props.search}
                    onChange={(e) => props.handlesearch && props.handlesearch(e.target.value)}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch(); // Trigger search action when Enter key is pressed
                        }
                    }}
                />
                <button className='search-btn' onClick={() => props.handleClick && props.handleClick()} > <FaSearch /> </button>
            </div>

            <div>
                <div
                    onClick={() => {
                        setshowOver(!showOver)
                    }}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: '#002f34',
                        width: '40px',
                        height: '40px',
                        color: '#fff',
                        fontSize: '14px',
                        borderRadius: '50%'
                    }} > <FaUser />   </div>

                {showOver && <div style={{
                    minHeight: '100px',
                    width: '200px',
                    background: '#eee',
                    position: 'absolute',
                    top: '0',
                    right: '0',
                    zIndex: 1,
                    marginTop: '50px',
                    marginRight: '50px',
                    color: 'red',
                    fontSize: '14px',
                    background: '#002f34',
                    borderRadius: '7px'
                }}>
                    <div>
                        {!!localStorage.getItem('token') &&
                            <Link to="/add-product">
                                <button className="logout-btn">ADD PRODUCT  </button>
                            </Link>}
                    </div>
                    <div>
                        {!!localStorage.getItem('token') &&
                            <Link to="/liked-products">
                                <button className="logout-btn"> FAVOURITES  </button>
                            </Link>}
                    </div>
                    <div>
                        {!!localStorage.getItem('token') &&
                            <Link to="/my-products">
                                <button className="logout-btn">My ARTS </button>
                            </Link>}
                    </div>
                    <div>
                        {!!localStorage.getItem('token') &&
                            <Link to="/my-profile">
                                <button className="logout-btn">My PROFILE  </button>
                            </Link>}
                    </div>
                    <div>
                        {!!localStorage.getItem('token') &&
                            <Link to="/myorders">
                                <button className="logout-btn">My Orders  </button>
                            </Link>}
                    </div>
                    <div>
                        {!!localStorage.getItem('token') &&
                            <Link to="/mysales">
                                <button className="logout-btn">My Sales</button>
                            </Link>}
                    </div>
                    <div>
                        {!localStorage.getItem('token') ?
                            <button style={{
                                margin: '10px', // Add margin to create gap between buttons
                                backgroundColor: 'black', // Apply blue color to buttons
                                color: '#ffff', // Apply white color to button text
                                border: 'none', // Remove button border
                                padding: '10px 20px', // Add padding to button
                                borderRadius: '5px', // Add border radius to button
                                cursor: 'pointer', // Change cursor to pointer on hover                           
                            }}><Link to="/login">  LOGIN </Link></button> :
                            <button  className='logout-btn' onClick={handleLogout}> LOGOUT </button>}
                    </div>
                </div>}
            </div>

        </div>
    )
}


export default Header;
