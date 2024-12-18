import React from "react";
import "./Services.css"; // Separate CSS for Services

function Services() {
  return (
    <section id="services" className="services">
      <h2 className="services-header">My Services</h2>
      <div className="service-cards">


      <div className="service-card">
          <h3>Network Management</h3>
          <p>Design and configure small-to-medium business networks.
            Troubleshoot network issues and optimize performance.
            Set up secure networks (VLANs, ACLs, VPNs).</p>
        </div>

        <div className="service-card">
          <h3>System Administration</h3>
          <p>Manage servers, DHCP, DNS, and file systems.
          Handle user accounts and permissions (Active Directory).</p>
        </div>

        <div className="service-card">
          <h3>Hardware Support</h3>
          <p>Repair and maintain PCs/laptops.
              Install and troubleshoot OS and software.
              Provide IT support for small businesses.</p>
        </div>
        <div className="service-card">
          <h3>Training and Consulting</h3>
          <p>Teach networking basics and IT skills.
          Advise businesses on IT infrastructure.</p>
        </div>

        <div className="service-card">
          <h3>Freelancing Opportunities</h3>
          <p>Provide remote IT support and troubleshooting.
          Offer services on platforms like Upwork or Fiverr.</p>
        </div>

        <div className="service-card">
          <h3>Potential Roles</h3>
          <p>IT Support Specialist, Network Engineer, System Admin, Helpdesk Analyst.</p>
        </div>
        
      </div>
    </section>
  );
}

export default Services;
