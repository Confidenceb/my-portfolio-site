import React from "react";
import { Mail, MessageCircle, MapPin, Award, BookOpen, User, Code, Globe, Sparkles, ExternalLink } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import aboutImg from "../img/olacloud-full-logo.png";
import "./AboutPage.css";

const AboutPage = () => {
  return (
    <div className="about-page-wrapper">
      <div className="container">
        {/* Header Section */}
        <header className="about-header">
          <div className="glass-card header-glass">
            <h1 className="page-title">About <span className="highlight">Me</span></h1>
            <p className="lead-text">
              Frontend Developer & Chemistry Student at UNILAG, exploring the intersection of Cloud Computing and Product Management.
            </p>
          </div>
        </header>

        {/* Main Content Grid */}
        <div className="about-main-content">
          
          {/* Profile & Contact Card (Horizontal on Desktop) */}
          <section className="profile-contact-hero glass-card luxury-glass">
            <div className="profile-main">
              <div className="profile-img-box">
                <img 
                  src={aboutImg} 
                  alt="Ola Cloud" 
                  className="profile-img"
                />
              </div>
              <div className="profile-info">
                <h2 className="profile-name">Noibi Jamiu</h2>
                <p className="profile-tagline">Ola Cloud | Frontend, PM & Cloud</p>
                <div className="quick-summary">
                  <p>Lagos, Nigeria • Remote Expert • Built for Scale</p>
                </div>
              </div>
            </div>

            <div className="contact-details-box">
              <h3>Get In Touch</h3>
              <div className="contact-links-grid">
                <div className="contact-small-item">
                  <Mail size={18} />
                  <span>gboljamiu207@gmail.com</span>
                </div>
                <div className="contact-small-item">
                  <MapPin size={18} />
                  <span>Lagos (Remote)</span>
                </div>
                <div className="contact-small-item">
                  <Globe size={18} />
                  <span>English (Fluent)</span>
                </div>
              </div>
              <div className="social-icon-box">
                <a href="https://github.com/Confidenceb" target="_blank" className="mini-social-btn glass-card" title="Github">
                  <FontAwesomeIcon icon={faGithub} style={{ color: "#fff", fontSize: "22px" }} />
                </a>
                <a href="https://wa.me/2349136936326" target="_blank" className="mini-social-btn glass-card" title="WhatsApp">
                  <FontAwesomeIcon icon={faWhatsapp} style={{ color: "#fff", fontSize: "22px" }} />
                </a>
              </div>
            </div>
          </section>

          {/* Text & Skills Grid */}
          <div className="about-details-grid">
            <div className="bio-container">
              <div className="glass-card bio-inner luxury-glass">
                <div className="title-row">
                  <Sparkles className="accent-icon" />
                  <h2>My Story</h2>
                </div>
                <p>
                  I’m a frontend developer and a Chemistry student at the University of Lagos, passionate about building digital solutions that solve real-world problems.
                </p>
                <p>
                  My journey into tech started from curiosity and exploration. I initially spent a few months learning graphic design, followed by motion graphics, before realizing I wanted to build more functional and interactive products.
                </p>
                <p>
                  That curiosity led me into programming, where I started with Python. Along the way, I encountered challenges that pushed me to rethink my path, and I eventually transitioned into HTML and CSS, this marked the beginning of my frontend development journey. Since then, I’ve been consistently improving my skills and building user-focused web applications.
                </p>
                <p>
                  As I continued growing, I became increasingly interested in how scalable systems work, which led me to explore Cloud Computing, an interest that also inspired my identity as “OlaCloud.”
                </p>
                <p>
                  Over time, I’ve also recognized my natural inclination toward leadership and organization. This has driven me to start exploring Product Management, where I can combine my technical background with problem-solving, user understanding, and decision-making.
                </p>
                <p>
                  My goal is to grow into a well-rounded builder, someone who not only develops products but also understands how to design, manage, and scale them effectively.
                </p>
              </div>
            </div>

            <div className="skills-column">
              <div className="glass-card competency-card luxury-glass">
                <div className="title-row">
                  <Code className="accent-icon" />
                  <h2>Key Competencies</h2>
                </div>
                <div className="tags-flex-wrapper">
                  <span className="skill-pill">React</span>
                  <span className="skill-pill">TypeScript</span>
                  <span className="skill-pill">Node.js</span>
                  <span className="skill-pill">AWS Cloud</span>
                  <span className="skill-pill">Docker</span>
                  <span className="skill-pill">Terraform</span>
                  <span className="skill-pill">Product Mgmt</span>
                  <span className="skill-pill">CI/CD</span>
                </div>
              </div>

               <div className="expertise-row">
                <div className="exp-card-small glass-card luxury-glass">
                  <Award size={24} />
                  <h3>Product Management</h3>
                </div>
                <div className="exp-card-small glass-card luxury-glass">
                  <Award size={24} />
                  <h3>Frontend</h3>
                </div>
                <div className="exp-card-small glass-card luxury-glass">
                  <BookOpen size={24} />
                  <h3>DevOps</h3>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;
