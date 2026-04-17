import React, { useState } from "react";
import "./Contact.css";
import { Mail, MessageCircle, MapPin } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mkgowndk", { // Using the user's email endpoint placeholder or actual
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          ...formData,
          _to: "gboljamiu207@gmail.com" // Explicitly mentioned target
        })
      });

      if (response.ok) {
        alert("Success! Your message has been sent to Ola Cloud.");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        alert("Oops! There was a problem sending your message.");
      }
    } catch (error) {
      alert("Error reaching the server. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

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

            <a href="https://wa.me/2349136936326" target="_blank" rel="noreferrer" className="info-card glass-card clickable-card">
              <div className="icon-box">
                <MessageCircle size={24} />
              </div>
              <div className="info-text">
                <p className="info-label">WhatsApp</p>
                <p className="info-link">+2349136936326</p>
              </div>
            </a>

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
                <Mail size={20} />
              </a>
              <a href="#" className="social-btn glass-card">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <form className="contact-form glass-card" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                placeholder="John Doe" 
                required 
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                placeholder="john@example.com" 
                required 
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                placeholder="Project Inquiry" 
                required 
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                rows="5" 
                placeholder="Tell me about your project..." 
                required
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
