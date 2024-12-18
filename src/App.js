import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FaLinkedinIn, FaGithub } from "react-icons/fa"; // Import icons from react-icons
import "./App.css";
import profile from "./assets/profile.jpg";
import Services from "./Services";
import Skills from "./Skills"; 
import Contact from "./Contact";

function App() {
  return (
    <Router>
      <div className="container">
        {/* Header Section */}
        <header>
          <div className="logo">Khaled Anam</div>
          <nav>
            <a href="/">Home</a>
            <a href="/skills">Skills</a>
            <a href="/services">Services</a>
            <a href="/contact">Contact</a>
            <button className="btn-download"><a href="https://drive.google.com/file/d/1bMIRbyq5K6ziJzfp8Q-FyGCoWGcMadts/view?usp=drive_link"target="_blank"> View CV </a></button>
          </nav>
        </header>

        {/* Main Content - React Router */}
        <Routes>
          <Route
            path="/"
            element={
              <section id="home" className="hero">
                <div className="content">
                  <h2>Hello I'm</h2>
                  <h1>Khaled Anam</h1>
                  <h3>IT Professional from Chattogram, Bangladesh</h3>
                  <p>
                    I am a passionate IT professional with a strong foundation in Computer Science,
                    holding a BSc in CSE and certifications in CCNA and CompTIA A+.
                    I currently work as an IT Support Junior Executive, where I support network infrastructure,
                    hardware troubleshooting, and IT systems management.
                  </p>
                </div>
                <div className="image">
                  <img src={profile} alt="Khaled Anam" />
                </div>
              </section>
            }
          />
          <Route path="/skills" element={<Skills />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Footer Section */}
        <footer>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/khaled-anam/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/khaledanam/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaGithub />
            </a>
          </div>
          
        </footer>
      </div>
    </Router>
  );
}

export default App;
