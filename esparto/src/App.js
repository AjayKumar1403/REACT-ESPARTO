import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import './styles.css';

function App() {
  return (
    <div className="app-container">
       {/* Component responsible for navigation bar inside the project */}

      <Navbar />  
      {/* // Component responsible for Home page includes all the other stuff like painitings   */}
      <Home /> 
      {/* // About page responsible for about page */}
      <About/> 
    </div>
  
  )
}
export default App;