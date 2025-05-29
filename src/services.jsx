import { React, useState } from "react";
import "./services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faServer,
  faPalette,
  faLayerGroup,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const servicesData = [
    {
      icon: faCode,
      title: "Frontend Development",
      description:
        "Building responsive user interfaces with HTML, CSS, JavaScript, and React.",
    },
    {
      icon: faServer,
      title: "Web Deployment",
      description:
        "Deploying and managing web applications using tools like Docker and cloud platforms.",
    },
    {
      icon: faPalette,
      title: "Graphic Design",
      description:
        "Designing visually appealing graphics for web, print, and social media content.",
    },
    {
      icon: faLayerGroup,
      title: "UI Implementation",
      description:
        "Translating design mockups into pixel-perfect and functional web layouts.",
    },
    {
      icon: faCodeBranch,
      title: "Version Control",
      description:
        "Using Git and GitHub to manage code changes and collaborate on projects efficiently.",
    },
  ];

  const statsData = [
    {
      count: 8,
      label: "Projects Completed",
    },
    {
      count: 3,
      label: "Happy Clients",
    },
    {
      count: 6,
      label: "Technologies Mastered",
    },
    {
      count: 1,
      label: "Year of Experience",
    },
  ];

  return (
    <>
      <div className="services-section">
        <div className="container">
          <h1 className="services-header">My Offered Services</h1>
          <div className="services-list">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="service-item"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                style={{
                  cursor: activeIndex === index ? "pointer" : "default",
                }}
              >
                <FontAwesomeIcon
                  icon={service.icon}
                  className="service-icon"
                  style={{
                    color: activeIndex === index ? "#d95a" : "#fff",
                    transition: "color 0.3s ease",
                  }}
                />
                <h2
                  className="service-title"
                  style={{
                    color: activeIndex === index ? "#d95a" : "#fff",
                    transition: "color 0.3s ease",
                  }}
                >
                  {service.title}
                </h2>
                <p className="service-description">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="achievement-section">
        <div className="achievement container">
          <div className="achievement-list">
            {statsData.map((stat, index) => (
              <div key={index} className="achievement-item">
                <h2 className="achievement-count">{stat.count}</h2>
                <p className="achievement-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
