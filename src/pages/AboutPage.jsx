import { Mail, MessageCircle, MapPin, Award, BookOpen, Clock, User, Code } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <div className="hero-content-wrapper">
            <div className="hero-text">
              <h1 className="page-title">About <span className="highlight">Me</span></h1>
              <p className="lead-text">
                I'm Ola Cloud, a specialized Frontend Developer and DevOps enthusiast building the future of the web.
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="about-content-section container">
        <div className="about-grid">
          <div className="profile-sidebar">
            <div className="profile-img-card glass-card">
              <img 
                src="https://ca.slack-edge.com/T07466B189M-U079UMY5YKG-df1cc631da1a-512" 
                alt="Ola Cloud" 
                className="profile-img"
              />
            </div>
            <div className="quick-info glass-card">
              <h3>Quick Details</h3>
              <div className="info-item">
                <MapPin size={18} />
                <span>Nigeria (Remote)</span>
              </div>
              <div className="info-item">
                <Mail size={18} />
                <span>gboljamiu207@gmail.com</span>
              </div>
              <div className="social-links-about">
                <a href="#"><User size={20} /></a>
                <a href="#"><Code size={20} /></a>
              </div>
            </div>
          </div>

          <div className="main-about">
            <div className="about-block glass-card">
              <h2>My Journey</h2>
              <p>
                My passion for technology started with a simple curiosity about how the web works. 
                Over the years, I've honed my skills in Frontend Development, finding the perfect balance 
                between aesthetic design and technical performance.
              </p>
              <p>
                As I delved deeper, I discovered the world of DevOps and Cloud Engineering. I believe 
                that a great developer shouldn't just write code, but also understand how that code 
                is deployed, scaled, and maintained in robust environments.
              </p>
            </div>

            <div className="skills-block glass-card">
              <h2>Expertise</h2>
              <div className="skills-grid">
                <div className="skill-item">
                  <div className="skill-icon"><Award /></div>
                  <h4>Frontend</h4>
                  <p>React, JavaScript (ES6+), Modern CSS (Glassmorphism, Tailwind)</p>
                </div>
                <div className="skill-item">
                  <div className="skill-icon"><BookOpen /></div>
                  <h4>DevOps</h4>
                  <p>Docker, CI/CD Pipelines, Cloud Infrastructure (AWS)</p>
                </div>
                <div className="skill-item">
                  <div className="skill-icon"><Clock /></div>
                  <h4>Management</h4>
                  <p>Product Management, Notion, Trello, Agile Methodologies</p>
                </div>
              </div>
            </div>

            <div className="philosophy-block glass-card">
              <h2>My Philosophy</h2>
              <blockquote>
                "Design is not just what it looks like and feels like. Design is how it works."
              </blockquote>
              <p>
                I strive to build applications that are not only visually stunning but also 
                accessible, performant, and secure. Every line of code I write is aimed at 
                creating a better experience for the end-user.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
