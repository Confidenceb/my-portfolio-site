import { Mail, MessageCircle, MapPin, Award, BookOpen, Clock, User, Code, Calendar, Globe, Sparkles } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="about-page-wrapper">
      <div className="about-hero-section">
        <div className="container">
          <div className="glass-hero-card">
            <h1 className="page-title">About <span className="highlight">Me</span></h1>
            <p className="lead-text">
              Pioneering digital experiences with a focus on Frontend excellence and DevOps stability.
            </p>
          </div>
        </div>
      </div>

      <section className="about-details-section container">
        <div className="about-grid">
          <div className="profile-column">
            <div className="profile-card glass-card luxury-glass">
              <div className="profile-img-container">
                <img 
                  src="https://ca.slack-edge.com/T07466B189M-U079UMY5YKG-df1cc631da1a-512" 
                  alt="Ola Cloud" 
                  className="profile-img"
                />
              </div>
              <div className="profile-meta">
                <h2>Noibi Jamiu</h2>
                <p>Ola Cloud</p>
              </div>
            </div>

            <div className="contact-summary glass-card luxury-glass">
              <h3>Get In Touch</h3>
              <div className="summary-item">
                <MapPin size={18} />
                <span>Nigeria, Lagos (Remote)</span>
              </div>
              <div className="summary-item">
                <Mail size={18} />
                <span>gboljamiu207@gmail.com</span>
              </div>
              <div className="summary-item">
                <Globe size={18} />
                <span>English (Fluent)</span>
              </div>
              <div className="about-social-row">
                <a href="#" className="social-icon-btn glass-card"><Github size={20} /></a>
                <a href="#" className="social-icon-btn glass-card"><Linkedin size={20} /></a>
              </div>
            </div>
          </div>

          <div className="content-column">
            <div className="bio-card glass-card luxury-glass">
              <div className="card-header">
                <Sparkles className="header-icon" />
                <h2>My Journey</h2>
              </div>
              <p>
                My professional journey is defined by a relentless pursuit of technical mastery. 
                What started as an interest in crafting beautiful interfaces has evolved into 
                a comprehensive focus on build efficiency, deployment automation, and user-centric design.
              </p>
              <p>
                As "Ola Cloud," I bridge the gap between creative visual development and the 
                robust backend architectures that power modern applications.
              </p>
            </div>

            <div className="expertise-grid">
              <div className="exp-card glass-card luxury-glass">
                <div className="exp-icon"><Award /></div>
                <h3>Frontend Pro</h3>
                <p>React expert with a eye for pixel-perfect glassmorphism and performance.</p>
              </div>
              <div className="exp-card glass-card luxury-glass">
                <div className="exp-icon"><BookOpen /></div>
                <h3>DevOps</h3>
                <p>Automating workflows with Docker, GitHub Actions, and AWS infrastructure.</p>
              </div>
            </div>

            <div className="stats-card glass-card luxury-glass">
              <div className="card-header">
                <Calendar className="header-icon" />
                <h2>Key Competencies</h2>
              </div>
              <div className="skills-tags">
                <span className="skill-tag glass-card">React</span>
                <span className="skill-tag glass-card">TypeScript</span>
                <span className="skill-tag glass-card">Node.js</span>
                <span className="skill-tag glass-card">AWS</span>
                <span className="skill-tag glass-card">Docker</span>
                <span className="skill-tag glass-card">Terraform</span>
                <span className="skill-tag glass-card">Product Mgmt</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
