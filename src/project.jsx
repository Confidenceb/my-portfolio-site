import React from "react";
import "./Projects.css";

import techGoalsTrackerImg from "./img/tech-goals-tracker.jpg";
import chatbotAppImg from "./img/chatbot-app.jpg";
import dockerizedNodeAppImg from "./img/dockerized-node-app.jpg";
import timbuCloudAppImg from "./img/timbu-cloud-app.jpg";

const projects = [
  // ── Previously existing ──────────────────────────────────────────────────
  {
    title: "Tech Goals Tracker",
    type: "Frontend • HTML • CSS • JS",
    image: techGoalsTrackerImg,
    description:
      "Built an interactive progress tracker for learning new technologies. Focused on usability and clear goal-setting.",
    github: "https://github.com/Confidenceb/HNG-Stage-1-Project",
    live: "https://jamiu-tech-goals.netlify.app",
  },
  {
    title: "Simple ChatBot App",
    type: "Frontend • React • CSS",
    image: chatbotAppImg,
    description:
      "A simple chatbot built with React, featuring a typewriter effect and real-time responses. Styled with Tailwind CSS for a clean, responsive UI.",
    github: "https://github.com/Confidenceb/ChatBot",
    live: "https://chat-bot-jamiu.vercel.app/",
  },
  {
    title: "Dockerized Node App",
    type: "DevOps • Docker • Node.js",
    image: dockerizedNodeAppImg,
    description: "Node.js app containerized using Docker for easy, consistent deployment.",
    github: "https://github.com/Confidenceb/dockerized-node-app",
  },
  {
    title: "Timbu Cloud Shop",
    type: "Frontend • React • E-commerce UI",
    image: timbuCloudAppImg,
    description:
      "A modern e-commerce front-end built with React. Designed for seamless browsing with product categories and a smooth user experience.",
    github: "https://github.com/Confidenceb/react-weather-app",
    live: "https://timbu-cloud-shop-zeta.vercel.app/",
  },
  // ── Newly added ──────────────────────────────────────────────────────────
  {
    title: "School Website (Elobs High School)",
    type: "Frontend • HTML • CSS • JavaScript",
    image: techGoalsTrackerImg,
    description:
      "Designed a personal and responsive portfolio site using HTML, CSS, and JavaScript. Showcases interests, skills, and future goals.",
    live: "https://elobshighschool.netlify.app",
  },
  {
    title: "To-do List App",
    type: "Frontend • JavaScript • DOM",
    image: chatbotAppImg,
    description:
      "Created a dynamic app with task add, edit, and delete features. Applied JavaScript logic for real-time DOM updates.",
    github: "https://github.com/Confidenceb/Todo-list-app",
    live: "https://todo-list-jamiu.netlify.app",
  },
  {
    title: "Lost and Found App",
    type: "Frontend • UX Design • JavaScript",
    image: timbuCloudAppImg,
    description:
      "Developed a platform to report and find lost items. Prioritized user-friendly design and quick navigation.",
    github: "https://github.com/Confidenceb/Lost-Found",
    live: "https://lost-found-project.netlify.app",
  },
  {
    title: "Omnifood Website",
    type: "Frontend • HTML • CSS • Animations",
    image: dockerizedNodeAppImg,
    description:
      "Built a modern, animated landing page for a food delivery service with smooth scroll effects and responsive layouts.",
    github: "https://github.com/Confidenceb/omnifood-jamiu",
    live: "https://omnifood-jamiu.netlify.app",
  },
  {
    title: "Bankist Website",
    type: "Frontend • JavaScript • UI Animations",
    image: chatbotAppImg,
    description:
      "Simulated a banking app interface with JavaScript-based UI animations including lazy loading, sticky nav, and tabbed components.",
    live: "https://bankist-jamiu.netlify.app",
  },
  {
    title: "Pig Game",
    type: "Frontend • JavaScript • Game Logic",
    image: techGoalsTrackerImg,
    description:
      "Developed a 2-player dice game with scoring, turn switching, and reset logic. A fun deep-dive into pure JavaScript event handling.",
    github: "https://github.com/Confidenceb/pig-game",
    live: "https://piggame-jamiu.netlify.app",
  },
  {
    title: "Study Smart – Techstars Hackathon 🏆",
    type: "Ed-Tech • Team Lead • 48-hour Build",
    image: timbuCloudAppImg,
    description:
      "Led a team to design and build an ed-tech solution within 48 hours at the Techstars Hackathon, securing 2nd place. Focus on accessible, student-centred learning.",
    github: "https://github.com/Confidenceb/Techstars-Hackathon-25",
    live: "https://techstars-hackathon-25.vercel.app/",
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
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-github"
                    >
                      Source Code
                    </a>
                  )}
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
