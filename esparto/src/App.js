import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import { Route, Routes } from 'react-router-dom';
import UserProfile from './components/UserProfile/UserProfile';
import ParentContainer from './ParentContainer';
import Paintings from './CollectionPages/Painting';
import Drwaings from './CollectionPages/Drawing';
import Sculptures from './CollectionPages/Sculpture';
import Collage from './CollectionPages/Collage';
import Photography from './CollectionPages/Photography';
import ExcitingFeatures from './Whatsnew/ExcitingFeatures';
import FeaturedArtists from './Whatsnew/FeaturedArtists';
import NewArtworks from './Whatsnew/NewArtworks';
import Start from './Start/start';
function App() {
  return (
    <div className="App" style={{ background: '#4e54c8' }}>
      <Routes>
        <Route exact path="/home" element={<ParentContainer />}></Route>
        <Route exact path="/" element={<Start />} />
        <Route exact path="/login" Component={Login} />
        <Route exact path="/register" Component={Register} />
        <Route exact path="/userProfile" Component={UserProfile} />
        <Route exact path="/paintings" Component={Paintings} />
        <Route exact path="/photography" Component={Photography} />
        <Route exact path="/collage" Component={Collage} />
        <Route exact path="/sculpture" Component={Sculptures} />
        <Route exact path="/drawings" Component={Drwaings} />
        <Route exact path="/new-artworks" Component={NewArtworks} />
        <Route exact path="/featured-artists" Component={FeaturedArtists} />
        <Route exact path="/exciting-features" Component={ExcitingFeatures} />
      </Routes>
    </div>
  );
}

export default App;
