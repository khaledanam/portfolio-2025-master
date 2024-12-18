import React from "react";
import "./Contact.css"; // Separate CSS for Contact
import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin } from "react-icons/fa"; // Import social media icons

function Contact() {

  return (

    <section id="contact" className="contact">

      {/* Contact Form - Positioned at the bottom */}
      <div className="contact-form-container">
        <h2 className="contact-header">Contact Me</h2>
        <p className="contact-subheader">
          Get in touch for collaborations or service inquiries.
        </p>
      </div>
      {/* Contact Information - Positioned at the top */}
      <div className="contact-info">
        <p className="contact-details">
          <FaEnvelope /> <strong>Email: </strong>
          <a href="mailto:your-email@example.com">mdkhaledanam@gmail.com</a>
        </p>
        <p className="contact-details">
          <FaPhone /> <strong>Phone: </strong>
          <a href="tel:+123456789">+880 1991207878</a>
        </p>
        <p className="contact-details">
          <FaWhatsapp /> <strong>WhatsApp: </strong>
          <a href="https://wa.me/123456789">01991207878</a>
        </p>
        <p className="contact-details">
          <FaLinkedin /> <strong>LinkedIn: </strong>
          <a href="https://www.linkedin.com/in/khaled-anam" target="_blank" rel="noopener noreferrer">khaled-anam</a>
        </p>
      </div>

      
    </section>
  );
}

export default Contact;
