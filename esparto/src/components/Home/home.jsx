import '../Home/home.css';
import Carousel from '../Carousel/Carousel';
import Footer from '../Footer/Footer';
import AboutUs from '../AboutUs/AboutUs';
import CollectionsComponent from '../Collections/Collections';
import WhatsNewComponent from '../Whatsnew/Whatsnew';
function Home() {
  return (
    <div className="home">
      <Carousel />
      <br></br>
      <CollectionsComponent />
      <br></br>
      <WhatsNewComponent />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default Home;
