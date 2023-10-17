import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/home';
import { Route, Routes } from 'react-router-dom';
import UserProfile from './components/UserProfile/UserProfile';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import ParentContainer from './ParentContainer';
function App() {
  return (
    <div className="App" style={{ background: '#4e54c8' }}>
      <Navbar />
      {/* <Route exact path="/sidebar" Component={Sidebar} /> */}
      {/* <Sidebar /> */}
      <Routes>
        {/* <Route exact path="/" Component={Home} /> */}
        <Route exact path="/" element={<ParentContainer />} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/register" Component={Register} />
        <Route exact path="/userProfile" Component={UserProfile} />
      </Routes>
    </div>
  );
}

export default App;
