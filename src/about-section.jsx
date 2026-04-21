import { Link } from "react-router-dom";
import "./about-section.css";
import aboutImg from "./img/about-img.JPEG";

const AboutSection = () => {
  return (
    <div className="about-section-box" id="about">

      <div className="about-section container">
        <div className="about-image">
          <img
            className="hero-img"
            data-testid="slackProfilePicture"
            src={aboutImg}
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
            <Link to="/about" className="btn about-btn">
              View full detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
