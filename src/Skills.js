import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section className="skills">
      <h2 className="skills-header">My Skills</h2>
      <p className="skills-subheader">
        A quick overview of my technical expertise and certifications.
      </p>

      {/* Skills Section */}
      <div className="skills-container">

{/* Networking & Hardware */}
<div className="skills-category">
          <h3>Networking & Hardware</h3>
          <ul>
            <li>Router Configuration</li>
            <li>Network Troubleshooting</li>
            <li>Hardware Repair & Maintenance</li>
            <li>LAN/WAN Management</li>
          </ul>
        </div>

        {/* Certifications */}
        <div className="skills-category">
          <h3>Certifications</h3>
          <ul>
            <li>CCNA</li>
            <li>CompTIA A+</li>
            <li>Microsoft Office Management</li>
            
          </ul>
        </div>

        {/* Tools & Frameworks */}
        <div className="skills-category">
          <h3>Tools & Frameworks</h3>
          <ul>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Blockchain</li>
            <li>Hardhat</li>
            <li>Metamask</li>
          </ul>
        </div>
{/* Programming Languages */}
<div className="skills-category">
          <h3>Programming Languages</h3>
          <ul>
            <li>Python</li>
            <li>Javascript</li>
            <li>HTML & CSS</li>
          </ul>
        </div>
        
      </div>
    </section>
  );
}

export default Skills;
