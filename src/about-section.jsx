import React from "react";
import "./about-section.css";

const AboutSection = () => {
  return (
    <div className="about-section-box">
      <div className="about-section container">
        <div className="about-image">
          <img
            className="hero-img"
            data-testid="slackProfilePicture"
            src="https://ca.slack-edge.com/T07466B189M-U079UMY5YKG-df1cc631da1a-512"
            alt="Slack Profile Picture"
          />
        </div>
        <div className="about-content">
          <p className="about">About Me</p>
          <h1 className="about-title">Personal Details</h1>
          <p className="about-description">
            I am a passionate Frontend Developer with a keen interest in DevOps.
            I specialize in building clean, interactive web interfaces using
            React, JavaScript, and modern tools. My goal is to blend creativity
            with performance to deliver exceptional user experiences.
          </p>
          <div>
            <a href="#learn-more" className="btn about-btn">
              View full detail
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
