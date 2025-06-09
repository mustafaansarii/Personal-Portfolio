import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import HeroSection from './components/hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
function App() {


  return (
    <Router>
      <div>
        <Sidebar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
