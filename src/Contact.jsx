import React from "react";
import "./Contact.css";
import { Mail, Github, Linkedin, Slack, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <p className="subtitle">Get In Touch</p>
          <h2 className="contact-title">Let's Work Together</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card glass-card">
              <div className="icon-box">
                <Mail size={24} />
              </div>
              <div className="info-text">
                <p className="info-label">Email Me</p>
                <a href="mailto:gboljamiu207@gmail.com" className="info-link">
                  gboljamiu207@gmail.com
                </a>
              </div>
            </div>

            <div className="info-card glass-card">
              <div className="icon-box">
                <Slack size={24} />
              </div>
              <div className="info-text">
                <p className="info-label">Slack</p>
                <p className="info-link">Ola Cloud (Noibi Jamiu)</p>
              </div>
            </div>

            <div className="info-card glass-card">
              <div className="icon-box">
                <MapPin size={24} />
              </div>
              <div className="info-text">
                <p className="info-label">Location</p>
                <p className="info-link">Nigeria (Remote Ready)</p>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/Confidenceb" target="_blank" rel="noreferrer" className="social-btn glass-card">
                <Github size={20} />
              </a>
              <a href="#" className="social-btn glass-card">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <form className="contact-form glass-card" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" placeholder="John Doe" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="john@example.com" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Project Inquiry" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" placeholder="Tell me about your project..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
