import './App.css';
import Download from '../src/components/download/Download';
import Footer from '../src/components/footer/Footer';
import Intro from '../src/components/Intro/Intro';
import TopMenu from '../src/components/topMenu/TopMenu';
import AboutUs from '../src/pages/aboutUs/AboutUs';
import OurRestaurants from '../src/pages/our_restaurants/OurRestaurants';
import LandingPage from './pages/landingPage/LandingPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
        <div className='land_page' >
            <div className='topmenu'>
                <TopMenu />
            </div>
            <Routes>
                <Route exact path='/' element={<LandingPage />} />
               <Route element={<Intro />} />
               <Route path='/about-us' element={ <AboutUs />} />
               <Route path='/restaurants' element={ <OurRestaurants />} />
               <Route element={ <Download />} /> 
            </Routes>
            <div>
              <Footer />
            </div>
        </div>
    </Router>
  );
}

export default App;
