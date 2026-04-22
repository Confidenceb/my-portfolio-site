import React, { useState } from "react";
import "./Projects.css";

// ── User-provided PNGs ───────────────────────────────────────────
import techGoalsImg  from "./img/techgoals.png";
import chatbotImg    from "./img/chatbot.png";
import elobsImg      from "./img/elobs.png";
import todoImg       from "./img/todo-list.png";
import lostFoundImg  from "./img/lostandfound.png";
import omnifoodImg   from "./img/omnifood.png";
import bankistImg    from "./img/bankist.png";
import pigGameImg    from "./img/pig-game.png";
import studySmartImg from "./img/studysmart.png";
import dockerizedImg from "./img/dockerized-node-app.jpg";
import timbuImg      from "./img/timbu-cloud-app.jpg";

const projects = [
  {
    title: "Tech Goals Tracker",
    type: "Frontend • HTML • CSS • JS",
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
    title: "Simple ChatBot App",
    type: "Frontend • React • CSS",
    image: chatbotImg,
    summary: "A conversational chatbot built with React that responds to user messages in real time.",
    problem: "Most beginner chatbot demos are static or hard to customize, making it difficult to learn how they actually work.",
    solution: "I built a lightweight chatbot using React that uses regex pattern matching to intelligently respond to user inputs, with a typewriter effect for personality.",
    whatYouDid: [
      "Developed the full UI in React with a smooth chat interface",
      "Implemented typewriter animation for bot responses",
      "Used regex to match user input and generate relevant replies",
    ],
    result: "The app provides a smooth and intuitive user experience and solves the curiosity about chatbot mechanics.",
    github: "https://github.com/Confidenceb/ChatBot",
    live: "https://chat-bot-jamiu.vercel.app/",
  },
  {
    title: "School Website (Elobs High School)",
    type: "Frontend • HTML • CSS • JavaScript",
    image: elobsImg,
    summary: "A fully responsive school website showcasing the school's programs, activities, and contact information.",
    problem: "Many schools lack a professional online presence, making it hard for prospective students and parents to find information.",
    solution: "I designed and built a clean, multi-section school website that presents all key information in an accessible and visually appealing format.",
    whatYouDid: [
      "Designed layouts for hero, about, programs, and contact sections",
      "Made the site fully responsive for mobile and desktop",
      "Applied modern CSS techniques for a polished, professional look",
    ],
    result: "The app provides a smooth and intuitive user experience and solves the lack of credible digital presence.",
    live: "https://elobshighschool.netlify.app",
  },
  {
    title: "To-do List App",
    type: "Frontend • JavaScript • DOM",
    image: todoImg,
    summary: "A dynamic task manager that lets users add, edit, complete, and delete tasks instantly.",
    problem: "People need a quick, no-fuss way to jot down and manage daily tasks without relying on heavy productivity apps.",
    solution: "I built a lightweight to-do app powered by pure JavaScript DOM manipulation — no frameworks, no backend, just fast and functional.",
    whatYouDid: [
      "Implemented full CRUD operations (Create, Read, Update, Delete) on tasks",
      "Used real-time DOM updates so changes appear instantly without page reload",
      "Added local persistence so tasks survive page refresh",
    ],
    result: "The app provides a smooth and intuitive user experience and solves the complexity of modern task management.",
    github: "https://github.com/Confidenceb/Todo-list-app",
    live: "https://todo-list-jamiu.netlify.app",
  },
  {
    title: "Lost and Found App",
    type: "Frontend • UX Design • JavaScript",
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
    title: "Omnifood Website",
    type: "Frontend • HTML • CSS • Animations",
    image: omnifoodImg,
    summary: "A modern, animated landing page for a fictional AI-powered food delivery service.",
    problem: "Food delivery platforms often have generic, uninspiring landing pages that fail to communicate their value clearly.",
    solution: "I built a polished, scroll-animated landing page that showcases the product with strong visual hierarchy, smooth transitions, and a compelling call to action.",
    whatYouDid: [
      "Built the full multi-section landing page with HTML & CSS",
      "Implemented smooth scroll animations and sticky navigation",
      "Applied responsive design across all breakpoints",
    ],
    result: "The app provides a smooth and intuitive user experience and solves the conversion gap for food delivery services.",
    github: "https://github.com/Confidenceb/omnifood-jamiu",
    live: "https://omnifood-jamiu.netlify.app",
  },
  {
    title: "Bankist Website",
    type: "Frontend • JavaScript • UI Animations",
    image: bankistImg,
    summary: "A simulated banking app interface showcasing advanced JavaScript UI patterns.",
    problem: "Learning advanced JavaScript UI techniques (lazy loading, intersection observers, tabs) can feel abstract without a real-world context.",
    solution: "I built the Bankist banking interface to practice and demonstrate these patterns in a realistic, feature-rich application.",
    whatYouDid: [
      "Implemented tabbed component UI for account features",
      "Used IntersectionObserver API for lazy image loading and sticky nav",
      "Added smooth scroll and fade-in animations throughout",
    ],
    result: "The app provides a smooth and intuitive user experience and solves the educational gap in advanced DOM techniques.",
    live: "https://bankist-jamiu.netlify.app",
  },
  {
    title: "Pig Game",
    type: "Frontend • JavaScript • Game Logic",
    image: pigGameImg,
    summary: "A fun 2-player browser dice game with scoring, turn switching, and win condition logic.",
    problem: "Understanding JavaScript event handling, conditionals, and state management is tricky without hands-on application.",
    solution: "I built the Pig Game — a classic dice game — from scratch to practise and show control flow, DOM events, and dynamic UI updates.",
    whatYouDid: [
      "Designed the full game flow: roll, hold, switch turns, and win logic",
      "Handled all game state with JavaScript variables — no libraries",
      "Built a clean, responsive game UI with visual feedback on every action",
    ],
    result: "The app provides a smooth and intuitive user experience and solves the boredom of learning logic without interactivity.",
    github: "https://github.com/Confidenceb/pig-game",
    live: "https://piggame-jamiu.netlify.app",
  },
  {
    title: "Study Smart – Techstars Hackathon 🏆",
    type: "Ed-Tech • Team Lead • 48-hour Build",
    image: studySmartImg,
    summary: "An ed-tech platform built in 48 hours that helps students study smarter, not harder — 2nd place at Techstars Hackathon.",
    problem: "Students often study inefficiently, spending hours on content without retaining much, especially under exam pressure.",
    solution: "I led a team to design and build Study Smart — a platform that structures study sessions, tracks retention, and delivers targeted content to fill knowledge gaps.",
    whatYouDid: [
      "Led a cross-functional team through ideation, design, and development",
      "Architected the core study session flow and user dashboard",
      "Delivered a working MVP within the 48-hour hackathon window",
    ],
    result: "The app provides a smooth and intuitive user experience and solves the efficiency gap in student revision.",
    github: "https://github.com/Confidenceb/Techstars-Hackathon-25",
    live: "https://techstars-hackathon-25.vercel.app/",
  },
  {
    title: "Dockerized Node App",
    type: "DevOps • Docker • Node.js",
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
    type: "Frontend • React • E-commerce UI",
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
                  <span className="project-type-badge">{project.type}</span>
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
