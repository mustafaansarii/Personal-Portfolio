import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import HeroSection from './components/hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
function App() {


  return (
    <Router>
    <Navbar />
    <HeroSection />
    <About />
    <Resume />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
    </Router>
  );
}

export default App;
