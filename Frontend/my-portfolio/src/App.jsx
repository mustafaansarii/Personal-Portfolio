import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React, { useState } from "react"; 
import './App.css';
import Hero from './pages/Hero';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import AdminConfig from './pages/admin_component/admin_config';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to manage authentication

  return (
    <Router>
      <div>
        <Routes>
          {/* Default Routes */}
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <div id="about">
                  <About />
                </div>
                <div id="Resume">
                  <Resume />
                </div>
                <div id="skills">
                  <Skills />
                </div>
                <div id="projects">
                  <Projects />
                </div>
                <div id="contact">
                  <Contact />
                </div>
                <Footer />
              </>
            }
          />


          
          <Route
            path="/adminpannel"
            element={<AdminConfig />}
          />

         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
