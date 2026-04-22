import React from "react";
import "./CallToAction.css";

const CallToAction = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-card glass-card">
          <div className="cta-content">
            <h2 className="cta-title">Got a project or idea?</h2>
            <p className="cta-description">
              Let’s work together to bring it to life. I'm currently available for freelance work and open to full-time opportunities.
            </p>
            <a href="#contact" className="btn btn-primary cta-btn">
              📩 Contact me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
