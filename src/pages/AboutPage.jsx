import React from "react";
import { Mail, MessageCircle, MapPin, Award, BookOpen, Clock, User, Code, Calendar, Globe, Sparkles, ExternalLink } from "lucide-react";
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
              Pioneering digital experiences with a focus on Frontend excellence and DevOps stability.
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
                  src="https://ca.slack-edge.com/T07466B189M-U079UMY5YKG-df1cc631da1a-512" 
                  alt="Ola Cloud" 
                  className="profile-img"
                />
              </div>
              <div className="profile-info">
                <h2 className="profile-name">Noibi Jamiu</h2>
                <p className="profile-tagline">Ola Cloud | Frontend & DevOps</p>
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
                  <ExternalLink size={22} strokeWidth={2.5} />
                </a>
                <a href="https://wa.me/2349136936326" target="_blank" className="mini-social-btn glass-card" title="WhatsApp">
                  <MessageCircle size={22} strokeWidth={2.5} />
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
                  As "Ola Cloud," I specialize in building robust, user-centric web applications. 
                  My journey is defined by a commitment to bridging the gap between artistic frontend design 
                  and secure, automated backend architectures.
                </p>
                <p>
                  I'm dedicated to producing high-quality code and scalable systems that truly deliver value.
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
