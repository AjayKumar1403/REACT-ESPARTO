import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/home';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/register" Component={Register} />
      </Routes>
    </div>
  );
}

export default App;
