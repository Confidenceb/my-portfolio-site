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
            I’m a frontend developer and a Chemistry student at the University of Lagos, passionate about building digital solutions that solve real-world problems. 
            From my roots in graphic design and motion graphics to my current focus on Product Management and Cloud Computing, I blend technical skills with strategic thinking to build scalable, user-centric applications.
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
