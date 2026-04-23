import React, { useState } from "react";
import "./Projects.css";

// ── User-provided PNGs ───────────────────────────────────────────
import techGoalsImg  from "./img/techgoals.png";
import lostFoundImg  from "./img/lostandfound.png";
import studySmartImg from "./img/studysmart.png";
import dockerizedImg from "./img/dockerized-node-app.jpg";
import timbuImg from "./img/timbu-cloud-app.jpg";
import hungerHeatmapImg from "./img/hunger-heatmap.png";
import prisusImg from "./img/prisus.png";
import campusTradeImg from "./img/campus-trade.png";
import awsImg from "./img/aws.jpeg";
import githubActionsImg from "./img/github-actions.webp";

const projects = [
  {
    title: "Tech Goals Tracker",
    tags: ["Frontend", "HTML/CSS", "JavaScript"],
    image: techGoalsImg,
    summary: "An interactive web app that helps developers track and manage their tech learning goals.",
    problem: "Many developers struggle to stay consistent with learning new technologies — there's no structured way to set and monitor progress.",
    solution: "I built a goal-tracking platform that lets users define learning targets, mark milestones, and visualise their progress in real time.",
    whatYouDid: [
      "Built a clean, responsive UI using HTML, CSS, and vanilla JavaScript",
      "Implemented real-time DOM updates for adding and completing goals",
      "Organised the layout for clarity and ease of use on all screen sizes",
    ],
    result: "The app provides a smooth and intuitive user experience and solves the consistency problem in learning.",
    github: "https://github.com/Confidenceb/HNG-Stage-1-Project",
    live: "https://jamiu-tech-goals.netlify.app",
  },
  {
    title: "Prisus AI",
    tags: ["React", "AI Integration", "EdTech"],
    image: prisusImg,
    summary: "An AI-powered study assistant that converts notes into flashcards and quizzes to improve active learning.",
    problem: "Students often rely on passive study methods, making it difficult to retain and recall information effectively.",
    solution: "I built Prisus AI to transform study materials into interactive flashcards and quizzes, encouraging active recall and better retention.",
    whatYouDid: [
      "Built a clean and responsive interface using React for seamless interaction",
      "Integrated AI-powered content generation via backend API",
      "Designed a smooth workflow from note input to quiz generation",
    ],
    result: "The app enhances study efficiency by turning static notes into engaging, interactive learning experiences.",
    github: "https://github.com/Confidenceb/Prisus",
    live: "https://prisus.vercel.app",
  },
  {
    title: "Hunger Heatmap",
    tags: ["Frontend", "Data Viz", "Social Impact"],
    image: hungerHeatmapImg,
    summary: "A real-time, crowdsourced platform that visualizes hunger hotspots to support faster and smarter aid distribution.",
    problem: "Hunger in many communities often goes unnoticed until it becomes critical, due to lack of accessible and real-time data for decision-making.",
    solution: "I built a map-based platform that allows users to report hunger incidents, which are then aggregated into an interactive heatmap highlighting high-need areas.",
    whatYouDid: [
      "Designed an interactive map UI to visualize hunger data clearly using modern frontend tools",
      "Structured user-reported data into meaningful geographic insights",
      "Focused on usability to ensure both technical and non-technical users can navigate easily",
    ],
    result: "The platform transforms scattered reports into actionable insights, helping organizations and individuals respond more effectively to hunger crises.",
    github: "https://github.com/Confidenceb/Hunger-Heatmap",
    live: "https://hungerheatmap.vercel.app/",
  },
  {
    title: "Serverless Contact Form (AWS)",
    tags: ["AWS", "Serverless", "Cloud"],
    image: awsImg,
    summary: "A fully serverless contact form built using AWS services for scalable and cost-efficient form handling.",
    problem: "Traditional contact forms require backend servers, increasing cost and maintenance complexity.",
    solution: "I implemented a serverless architecture using AWS services to handle form submissions without managing servers.",
    whatYouDid: [
      "Configured AWS services for serverless form processing",
      "Handled request flow from frontend to cloud backend",
      "Ensured secure and reliable data handling",
    ],
    result: "The solution reduces infrastructure overhead while maintaining scalability and reliability.",
    github: "https://github.com/Confidenceb/TechCrush-CapstoneProject-AWS-Serverless-ContactForm",
  },
  {
    title: "Lost and Found App",
    tags: ["Frontend", "UX Design", "JavaScript"],
    image: lostFoundImg,
    summary: "A community platform where users can report lost items and find ones that have been recovered.",
    problem: "When people lose items on campus or in the community, there's no centralised, easy-to-use platform to reunite them with their belongings.",
    solution: "I developed a Lost & Found web app where users can post and browse lost/found item listings with descriptions and contact details.",
    whatYouDid: [
      "Designed an intuitive UI with clear categories for lost and found items",
      "Built listing cards with item details, date, and contact information",
      "Prioritised fast navigation so users can quickly scan through reports",
    ],
    result: "The app provides a smooth and intuitive user experience and solves the stress of recovering lost items.",
    github: "https://github.com/Confidenceb/lost-and-found-app",
    live: "https://lost-and-found-app-iota.vercel.app/",
  },
  {
    title: "Blue-Green Deployment Pipeline",
    tags: ["DevOps", "CI/CD", "Zero Downtime"],
    image: dockerizedImg,
    summary: "A deployment strategy implementation that ensures zero downtime releases using blue-green environments.",
    problem: "Deploying updates can cause downtime or introduce bugs into live systems, affecting users.",
    solution: "I implemented a blue-green deployment strategy to safely release updates with instant rollback capability.",
    whatYouDid: [
      "Set up parallel environments for safe deployment switching",
      "Simulated production deployment workflow",
      "Tested rollback strategies for failure scenarios",
    ],
    result: "Ensures reliable deployments with minimal downtime and reduced risk.",
    github: "https://github.com/Confidenceb/blue-green-deployment",
  },
  {
    title: "StudyMart – Techstars Hackathon 🏆",
    tags: ["Marketplace", "Team Lead", "Hackathon"],
    image: studySmartImg,
    summary: "A peer-to-peer student marketplace for buying, selling, and exchanging textbooks, lab materials, and essentials, built during the Techstars UNILAG Hackathon.",
    problem: "Students often struggle to find affordable textbooks, lab materials, and essentials within their campus, relying on scattered and unreliable channels.",
    solution: "We built StudyMart — a campus-focused marketplace that enables students to easily list, discover, and exchange items within their community.",
    whatYouDid: [
      "Led a cross-functional team through ideation, product design, and development",
      "Defined the core marketplace flow (browse, list, contact seller)",
      "Designed a clean and intuitive UI for seamless product discovery",
      "Coordinated rapid MVP delivery within a 48-hour hackathon window",
    ],
    result: "Delivered a functional MVP that simplifies student-to-student commerce and improves accessibility to essential academic materials.",
    github: "https://github.com/Confidenceb/Techstars-Hackathon-25",
    live: "https://techstars-hackathon-25.vercel.app/",
  },
  {
    title: "Dockerized Node App",
    tags: ["DevOps", "Docker", "Node.js"],
    image: dockerizedImg,
    summary: "A Node.js application fully containerized with Docker for consistent, portable deployment.",
    problem: "Shipping Node.js apps across different environments often leads to 'works on my machine' issues due to dependency mismatches.",
    solution: "I containerized the app using Docker so it runs identically in any environment — local, staging, or production.",
    whatYouDid: [
      "Wrote a production-ready Dockerfile with optimised layer caching",
      "Configured environment variable handling inside the container",
      "Tested the container locally and verified deployment readiness",
    ],
    result: "The app provides a smooth and intuitive user experience and solves the environment inconsistency problem.",
    github: "https://github.com/Confidenceb/dockerized-node-app",
  },
  {
    title: "Timbu Cloud Shop",
    tags: ["React", "E-commerce", "API Integration"],
    image: timbuImg,
    summary: "A modern e-commerce storefront built with React, pulling product data from the Timbu Cloud API.",
    problem: "Building e-commerce UIs that feel polished, responsive, and connected to real data is a key frontend skill often missing from portfolios.",
    solution: "I built a full product listing and browsing experience using React, integrating with the Timbu Cloud API for real product data.",
    whatYouDid: [
      "Fetched and displayed real product data from the Timbu Cloud API",
      "Built responsive product grid with category filtering",
      "Designed a clean, conversion-focused storefront UI",
    ],
    result: "The app provides a smooth and intuitive user experience and solves the technical hurdle of integrating complex commerce APIs.",
    github: "https://github.com/Confidenceb/react-weather-app",
    live: "https://timbu-cloud-shop-zeta.vercel.app/",
  },
  {
    title: "CI/CD Pipeline with GitHub Actions",
    tags: ["DevOps", "CI/CD", "Automation"],
    image: githubActionsImg,
    summary: "An automated CI pipeline that builds, tests, and deploys applications using GitHub Actions.",
    problem: "Manual testing and deployment slow down development and increase the risk of errors.",
    solution: "I built a CI/CD pipeline to automate testing, linting, and deployment processes.",
    whatYouDid: [
      "Configured GitHub Actions workflows for automation",
      "Integrated testing and linting steps into the pipeline",
      "Ensured efficient and reliable build processes",
    ],
    result: "Improves development speed and reduces human error in deployments.",
    github: "https://github.com/Confidenceb/hng13-stage1-devops",
  },
  {
    title: "Campus Trade",
    tags: ["React", "Marketplace", "Product Design"],
    image: campusTradeImg,
    summary: "A campus-focused marketplace where students can buy and sell items easily.",
    problem: "Students often struggle to find a trusted platform to buy and sell items within their campus community.",
    solution: "I built a marketplace platform tailored for students to list, browse, and connect over items for sale.",
    whatYouDid: [
      "Designed a user-friendly marketplace interface",
      "Built product listing and browsing features",
      "Focused on simplicity and trust within a campus environment",
    ],
    result: "Creates a convenient and accessible trading platform for students.",
    github: "https://github.com/Confidenceb/Campus-Trade",
    live: "https://campus-trade-phi.vercel.app/",
  }
];

export default function Projects() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggle = (i) => setExpandedIndex(expandedIndex === i ? null : i);

  return (
    <section className="projects-section" id="portfolio">
      <div className="container">
        <div className="section-header">
          <p className="subtitle">Portfolio</p>
          <h2 className="projects-title">Featured Projects</h2>
          <p className="projects-intro">
            Each project was built to solve a real problem.
          </p>
        </div>
        <div className="projects-grid">
          {projects.map((project, index) => {
            const isOpen = expandedIndex === index;
            return (
              <div key={index} className={`project-card glass-card ${isOpen ? "expanded" : ""}`}>
                <div className="project-image-container">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-tags">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="project-tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="project-info">
                  <h3 className="project-name">{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>

                  {isOpen && (
                    <div className="project-details">
                      <div className="detail-block">
                        <span className="detail-label">🚩 Problem</span>
                        <p>{project.problem}</p>
                      </div>
                      <div className="detail-block">
                        <span className="detail-label">💡 Solution</span>
                        <p>{project.solution}</p>
                      </div>
                      <div className="detail-block">
                        <span className="detail-label">🛠 What I Did</span>
                        <ul className="detail-list">
                          {project.whatYouDid.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="detail-block result-block">
                        <span className="detail-label">✅ Result</span>
                        <p>{project.result}</p>
                      </div>
                    </div>
                  )}

                  <div className="project-footer">
                    <div className="project-links">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="link-github">
                          Source
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="link-live">
                          Live ↗
                        </a>
                      )}
                    </div>
                    <button className="toggle-btn" onClick={() => toggle(index)} aria-label="Toggle details">
                      {isOpen ? "Close ▲" : "Learn more ▼"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
