import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import './styles.css';
import Footer from './Footer';

function App() {
  return (
    <div className="app-container">
       {/* Component responsible for navigation bar inside the project */}

      <Navbar />  
      {/* // Component responsible for Home page includes all the other stuff like painitings   */}
      <Home /> 
      {/* // About page responsible for about page */}
      <About/> 
      {/* // Footer content goes here */}
      <Footer />
    </div>
  
  )
}
export default App;