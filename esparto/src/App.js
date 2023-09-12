import './App.css';
import Navbar from './Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import './styles.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Home />
      <About/>
    </div>
  
  )
}
export default App;