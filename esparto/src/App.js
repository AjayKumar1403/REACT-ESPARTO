import './App.css';
import Navbar from './Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import './styles.css';

function App() {
  return (
    <div className="app-container">
      <Navbar /> // Component responsible for navigation bar inside the project
      <Home /> // Component responsible for Home page includes all the other stuff like painitings
      <About/> // About page responsible for about page
    </div>
  
  )
}
export default App;