import './App.css';
import About from './components/About';
import Cards from './components/Cards';
import Eyes from './components/Eyes';
import FeaturedProjects from './components/FeaturedProjects';
import Footer from './components/Footer';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';
import Ready from './components/Ready';
import Reviews from './components/Reviews';
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  // eslint-disable-next-line no-unused-vars
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div id="main">
      <Navbar />
      <LandingPage />
      <div data-scroll data-scroll-section data-scroll-speed="0.2">
        <Marquee />
        <About />
      </div>
      <Eyes />
      <FeaturedProjects />
      <Reviews />
      <Cards />
      <Ready />
      <Footer />
    </div>
  )
}

export default App;
