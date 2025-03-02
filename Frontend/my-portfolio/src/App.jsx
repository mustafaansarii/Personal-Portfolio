import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React, { useState, useEffect } from "react"; 
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
import AdminLogin from './pages/admin_component/AdminLogin';

function App() {
  // Initialize isAuthenticated from localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem('isAuthenticated') === 'true'
  );

  // Update localStorage whenever isAuthenticated changes
  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

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
            element={
              isAuthenticated ? (
                <AdminConfig />
              ) : (
                <Navigate to="/adminlogin" />
              )
            }
          />
          <Route
            path="/adminlogin"
            element={
              <AdminLogin setIsAuthenticated={setIsAuthenticated} />
            }
          />

         
        </Routes>
      </div>
    </Router>
  );
}

export default App;
