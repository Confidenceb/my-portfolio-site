import React from "react";
import "./Projects.css";

import techGoalsTrackerImg from "./img/tech-goals-tracker.jpg";
import chatbotAppImg from "./img/chatbot-app.jpg";
import dockerizedNodeAppImg from "./img/dockerized-node-app.jpg";
import timbuCloudAppImg from "./img/timbu-cloud-app.jpg";

const projects = [
  {
    title: "Tech Goals Tracker",
    type: "Fullstack • React • Node.js",
    image: techGoalsTrackerImg,
    description:
      "A web app to set, track, and manage your tech learning goals.",
    github: "https://github.com/Confidenceb/tech-goals-tracker",
    live: "https://jamiu-tech-goals.netlify.app/",
  },
  {
    title: "Student CRUD API",
    type: "Backend • Node.js • PostgreSQL",
    image: chatbotAppImg,
    description:
      "RESTful API to manage student records with full CRUD operations.",
    github: "https://github.com/Confidenceb/student-crud-api",
    live: "https://studentcrudapi.onrender.com",
  },
  {
    title: "Simple ChatBot App",
    type: "Frontend • React • CSS",
    image: chatbotAppImg,
    description:
      "A simple chatbot built with React, featuring a typewriter effect and real-time responses using regular expressions to match user input. Styled with Tailwind CSS for a clean, responsive UI.",
    github: "https://github.com/Confidenceb/ChatBot",
    live: "https://chat-bot-jamiu.vercel.app/",
  },
  {
    title: "Dockerized Node App",
    type: "DevOps • Docker • Node.js",
    image: dockerizedNodeAppImg,
    description: "Node.js app containerized using Docker for deployment.",
    github: "https://github.com/Confidenceb/dockerized-node-app",
  },
  {
    title: "Timbu Cloud Shop",
    type: "Frontend • React • E-commerce UI",
    image: timbuCloudAppImg,
    description:
      "A modern e-commerce front-end built with React. Designed for seamless browsing with product categories, responsive layout, and a smooth user experience. Ideal for showcasing digital storefronts.",
    github: "https://github.com/Confidenceb/react-weather-app",
    live: "https://timbu-cloud-shop-zeta.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="portfolio">
      <div className="container">
        <div className="section-header">
          <p className="subtitle">Portfolio</p>
          <h2 className="projects-title">Featured Projects</h2>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glass-card">
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
              </div>
              <div className="project-info">
                <p className="project-type">{project.type}</p>
                <h3 className="project-name">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-links">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-github"
                  >
                    Source Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-live"
                    >
                      Live Preview ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
