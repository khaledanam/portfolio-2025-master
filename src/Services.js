import React from "react";
import "./Services.css"; // Separate CSS for Services

function Services() {
  return (
    <section id="services" className="services">
      <h2 className="services-header">My Services</h2>
      <div className="service-cards">
        <div className="service-card">
          <h3>IT Support</h3>
          <p>Comprehensive technical support to resolve IT-related issues efficiently.</p>
        </div>
        <div className="service-card">
          <h3>Network Management</h3>
          <p>Configuration and troubleshooting of networks for smooth connectivity.</p>
        </div>
        <div className="service-card">
          <h3>Hardware Troubleshooting</h3>
          <p>Diagnosing and fixing hardware issues for optimized performance.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
