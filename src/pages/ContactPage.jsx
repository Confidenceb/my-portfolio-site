import React from "react";
import Contact from "../Contact";
import "./ContactPage.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1 className="page-title">Contact <span className="highlight">Me</span></h1>
          <p className="lead-text">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </div>
      </div>
      <Contact />
      <div className="extra-space"></div>
    </div>
  );
};

export default ContactPage;
