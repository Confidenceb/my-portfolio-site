import React, { useEffect, useState } from "react";
import heroImg from "./img/hero-img.JPEG";

import "./hero.css";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const [utcTime, setUtcTime] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");

  useEffect(() => {
    const updateTimeAndDate = () => {
      const now = new Date();
      const utc = now.toUTCString().split(" ")[4];
      const day = now.toLocaleDateString("en-US", { weekday: "long" });

      setUtcTime(utc);
      setDayOfWeek(day);
    };

    updateTimeAndDate();
    const interval = setInterval(updateTimeAndDate, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-badge">Available for Projects</div>
          <h1 className="hero-title">
            Hi, I'm <span className="highlight">Ola Cloud</span>
          </h1>
          <div className="hero-typing">
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "DevOps Engineer",
                  "Cloud Engineer",
                  "Product Management",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
              }}
            />
          </div>
          <p className="hero-description">
            Frontend Developer building clean, user-focused web applications.
            With a growing focus on Product Management and Cloud Computing, I design and build solutions that solve real problems.
          </p>
          
          <div className="hero-info-grid">
            <div className="info-item">
              <span className="info-label">Current Time (UTC)</span>
              <span className="info-value">{utcTime}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Current Day</span>
              <span className="info-value">{dayOfWeek}</span>
            </div>
          </div>

          <div className="hero-actions">
            <a href="#portfolio" className="btn btn-primary">
              View Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Let's Talk
            </a>
            <a
              href="/Noibi_Jamiu_Resume.pdf"
              download="Noibi_Jamiu_Resume.pdf"
              className="btn btn-download"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Resume
            </a>
          </div>

        </div>

        <div className="hero-visual">
          <div className="image-wrapper glass-card">
            <img
              className="hero-img"
              src={heroImg}
              alt="Ola Cloud Profile"
            />
          </div>
          <div className="floating-card c1 glass-card">🚀 React</div>
          <div className="floating-card c2 glass-card">☁️ AWS</div>
          <div className="floating-card c3 glass-card">🎨 UI/UX</div>
          <div className="floating-card c4 glass-card">📝 PM</div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

