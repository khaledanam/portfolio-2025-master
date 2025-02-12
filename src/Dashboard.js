import React, { useState } from 'react';
import './Dashboard.css';

function Dashboard({ data, handleDataChange }) {
  const [inputData, setInputData] = useState(data);
  const [activeSection, setActiveSection] = useState('home');
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleChange = (e, section) => {
    const { name, value } = e.target;
    setInputData(prevState => ({
      ...prevState,
      [section]: {
        ...prevState[section],
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e, section) => {
    e.preventDefault();
    handleDataChange(section, inputData[section]);
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="dashboard">
      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        {sidebarVisible ? 'Hide Sidebar' : 'Show Sidebar'}
      </button>

      <div className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
        <ul>
          <li className={activeSection === 'home' ? 'active' : ''} onClick={() => handleSectionClick('home')}>Home</li>
          <li className={activeSection === 'skills' ? 'active' : ''} onClick={() => handleSectionClick('skills')}>Skills</li>
          <li className={activeSection === 'services' ? 'active' : ''} onClick={() => handleSectionClick('services')}>Services</li>
          <li className={activeSection === 'contact' ? 'active' : ''} onClick={() => handleSectionClick('contact')}>Contact</li>
          <li className={activeSection === 'projects' ? 'active' : ''} onClick={() => handleSectionClick('projects')}>Projects</li>
        </ul>
      </div>

      <div className="main-content">
        <form onSubmit={(e) => handleSubmit(e, activeSection)}>
          <h2>{`${activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} Section`}</h2>

          {activeSection === 'home' && (
            <>
              <h6>Upload Image</h6>
              <input type="file" name="image" onChange={(e) => handleChange(e, 'home')} accept="image/*" />

              <h6>Input Name</h6>
              <input type="text" name="name" onChange={(e) => handleChange(e, 'home')} placeholder="Write here..." />

              <h6>Input Profession</h6>
              <input type="text" name="profession" onChange={(e) => handleChange(e, 'home')} placeholder="Write here..." />

              <h6>Input Bio</h6>
              <textarea name="description" onChange={(e) => handleChange(e, 'home')} placeholder="Write here..." />
            </>
          )}

          {activeSection === 'skills' && (
            <>
              <h6>Skill Name</h6>
              <input type="text" name="skillName" onChange={(e) => handleChange(e, 'skills')} placeholder="Enter skill name..." />

              <h6>Proficiency (%)</h6>
              <input type="number" name="proficiency" onChange={(e) => handleChange(e, 'skills')} placeholder="Enter proficiency (0-100)..." />
            </>
          )}

          {activeSection === 'services' && (
            <>
              <h6>Service Name</h6>
              <input type="text" name="serviceName" onChange={(e) => handleChange(e, 'services')} placeholder="Enter service name..." />

              <h6>Service Description</h6>
              <textarea name="serviceDescription" onChange={(e) => handleChange(e, 'services')} placeholder="Describe the service..." />
            </>
          )}

          {activeSection === 'contact' && (
            <>
              <h6>Email</h6>
              <input type="email" name="email" onChange={(e) => handleChange(e, 'contact')} placeholder="Enter email..." />

              <h6>Phone Number</h6>
              <input type="tel" name="phone" onChange={(e) => handleChange(e, 'contact')} placeholder="Enter phone number..." />

              <h6>Address</h6>
              <textarea name="address" onChange={(e) => handleChange(e, 'contact')} placeholder="Enter address..." />
            </>
          )}

          {activeSection === 'projects' && (
            <>
              <h6>Project Title</h6>
              <input type="text" name="projectTitle" onChange={(e) => handleChange(e, 'projects')} placeholder="Enter project title..." />

              <h6>Project Description</h6>
              <textarea name="projectDescription" onChange={(e) => handleChange(e, 'projects')} placeholder="Describe the project..." />

              <h6>Project Link</h6>
              <input type="url" name="projectLink" onChange={(e) => handleChange(e, 'projects')} placeholder="Enter project URL..." />
            </>
          )}

          <button type="submit">{`Save ${activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} Section`}</button>
        </form>
      </div>
    </div>
  );
}

export default Dashboard;