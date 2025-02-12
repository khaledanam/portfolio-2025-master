import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { FaLinkedinIn, FaGithub } from "react-icons/fa"; 
import "./App.css";
import profile from "./assets/profile.jpg";
import Services from "./Services";
import Skills from "./Skills"; 
import Contact from "./Contact";
import Projects from "./Projects";
import Dashboard from "./Dashboard";

function App() {
  const [data, setData] = useState({
    home: {
      name: "Khaled Anam",
      profession: "IT Professional from Chattogram, Bangladesh",
      description:
        "I am a passionate IT professional with a strong foundation in Computer Science, holding a BSc in CSE and certifications in CCNA and CompTIA A+. I currently work as an IT Support Junior Executive, where I support network infrastructure, hardware troubleshooting, and IT systems management.",
    },
    skills: "Skills Content Here",
    services: "Services Content Here",
    contact: "Contact Content Here",
    projects: "Projects Content Here",
  });

  const handleDataChange = (section, value) => {
    setData(prevState => ({
      ...prevState,
      [section]: value
    }));
  };

  return (
    <Router>
      <div className="container">
        {/* Header Section */}
        <header>
          <div className="logo">Khaled Anam</div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/skills">Skills</Link>
            <Link to="/services">Services</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/projects">Projects</Link>
            
            <button className="btn-download">
              <a
                href="https://drive.google.com/file/d/1bMIRbyq5K6ziJzfp8Q-FyGCoWGcMadts/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                View CV
              </a>
            </button>
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
                  <h1>{data.home.name}</h1>
                  <h3>{data.home.profession}</h3>
                  <p>{data.home.description}</p>
                </div>
                <div className="image">
                  <img src={profile} alt="Khaled Anam" />
                </div>
              </section>
            }
          />
          <Route path="/skills" element={<Skills content={data.skills} />} />
          <Route path="/services" element={<Services content={data.services} />} />
          <Route path="/contact" element={<Contact content={data.contact} />} />
          <Route path="/projects" element={<Projects content={data.projects} />} />
          <Route path="/dashboard" element={<Dashboard data={data} handleDataChange={handleDataChange} />} />
        </Routes>

        {/* Footer Section */}
        <footer>
          <div className="social-media">
            <a
              href="https://www.linkedin.com/in/khaled-anam/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/khaledanam/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaGithub />
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
