import React, { useEffect, useState } from "react";
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
                  "DevOps Enthusiast",
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
            I build clean, interactive web interfaces and robust cloud architectures. 
            Blending creativity with performance. Currently exploring Product Management 
            with Notion & Trello.
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
          </div>

        </div>

        <div className="hero-visual">
          <div className="image-wrapper glass-card">
            <img
              className="hero-img"
              src="https://ca.slack-edge.com/T07466B189M-U079UMY5YKG-df1cc631da1a-512"
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

