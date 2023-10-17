import '../Home/home.css';
import Slides from '../Carousel/Carousel';
import Footer from '../Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
function Home() {
  return (
    <div className="home">
      <Slides />
      <br></br>
      <AboutUs />
      <Footer />
    </div>
  );
}

export default Home;
