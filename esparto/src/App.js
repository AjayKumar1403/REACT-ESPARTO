import './App.css';
import LoginArtist from './Artist/Login/Login';
import LoginBuyer from './Buyer/Login/Login';
import ArtistPage from './Artist/ArtistPage/ArtistPage';
import BuyerPage from './Buyer/BuyerPage/BuyerPage';
import Register from './components/Register/Register';
import { Route, Routes } from 'react-router-dom';
import UserProfile from './components/UserProfile/UserProfile';
import Home from './components/Home/home';
import Paintings from './CollectionPages/Painting';
import Drawings from './CollectionPages/Drawing';
import Sculptures from './CollectionPages/Sculpture';
import Collage from './CollectionPages/Collage';
import Photography from './CollectionPages/Photography';
import ExcitingFeatures from './Whatsnew/ExcitingFeatures';
import FeaturedArtists from './Whatsnew/FeaturedArtists';
import NewArtworks from './Whatsnew/NewArtworks';
import Start from './Start/start';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/" element={<Start />} />
        <Route exact path="/login-artist" Component={LoginArtist} />
        <Route exact path="/artist-page" Component={ArtistPage} />
        <Route exact path="/buyer-page" Component={BuyerPage} />
        <Route exact path="/login-buyer" Component={LoginBuyer} />
        <Route exact path="/register" Component={Register} />
        <Route exact path="/userProfile" Component={UserProfile} />
        <Route exact path="/paintings" Component={Paintings} />
        <Route exact path="/photography" Component={Photography} />
        <Route exact path="/collage" Component={Collage} />
        <Route exact path="/sculpture" Component={Sculptures} />
        <Route exact path="/drawings" Component={Drawings} />
        <Route exact path="/new-artworks" Component={NewArtworks} />
        <Route exact path="/featured-artists" Component={FeaturedArtists} />
        <Route exact path="/exciting-features" Component={ExcitingFeatures} />
      </Routes>
    </div>
  );
}

export default App;
