import '../Home/home.css';
import NavBar from '../Navbar/Navbar';
import Slides from '../Carousel/Carousel';
import Footer from '../Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
function Home() {
  return (
    <div>
      <NavBar />
      <br />
      <Slides />
      <br></br>
      <AboutUs />
      <Footer />
    </div>
  );
}

export default Home;
