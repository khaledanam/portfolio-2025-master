import React from "react";
import "./Skills.css";

function Skills() {
  return (
    <section className="skills">
      <h2 className="skills-header">My Skills</h2>
      <p className="skills-subheader">
        An overview of my technical expertise, skills and certifications.
      </p>

      {/* Skills Section */}
      <div className="skills-container">

{/* Networking & Hardware */}
<div className="skills-category">
          <h3>Networking</h3>
          <ul>
            <li>Routing Protocols: Configure RIP, EIGRP, OSPF, and BGP for dynamic routing.</li>
           <li> Design LAN/WAN setups and interconnect branch offices.</li>
            <li>Configure static routes and troubleshoot routing issues.</li>
            <li>Set up VLANs, NAT, and inter-VLAN routing on switches and routers.</li>
          </ul>
        </div>

{/* Hardware and IT Support */}
<div className="skills-category">
          <h3>Hardware and IT Support</h3>
          <ul>
            <li>Repair PCs/laptops and upgrade hardware.</li>
           <li> Install and configure operating systems like Windows/Linux.</li>
            <li>Provide technical support for network devices like routers and switches.</li>
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

 {/* Certifications */}
          <div className="skills-category">
          <h3>Certifications</h3>
          <ul>
            <li>CCNA</li>
            <li>CompTIA A+</li>
            <li>Microsoft Office Management</li>
            
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skills;
