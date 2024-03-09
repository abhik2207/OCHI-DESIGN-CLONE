import './App.css';
import About from './components/About';
import Eyes from './components/Eyes';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import Navbar from './components/Navbar';

function App() {
  return (
    <div id="main">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
    </div>
  )
}

export default App;
