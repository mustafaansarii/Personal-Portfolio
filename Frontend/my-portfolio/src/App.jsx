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
import Admin from './Admin/Admin';
import Auth from './Admin/Auth';
import ProfileLinkTree from './pages/ProfileLinkTree';
import NotFound from "./NotFound"; // Import NotFound component

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

          {/* Admin Route */}
          <Route
            path="/admin"
            element={
              isAuthenticated ? <Admin /> : <Navigate to="/auth" replace />
            }
          />

          {/* Auth Route */}
          <Route
            path="/auth"
            element={<Auth setIsAuthenticated={setIsAuthenticated} />}
          />
          
          {/* Profile Links Route */}
          <Route path="/ProfileLinks" element={<ProfileLinkTree />} />

          {/* Not Found Route (Catch-All for undefined routes) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
