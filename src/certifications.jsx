import React, { useState } from "react";
import "./certifications.css";
import Lightbox from "./Lightbox";

import horizonHacksImg from "./img/horizon-hacks.jpg";
import innovativeMindImg from "./img/innovative-mind.JPG";
import bite3Img from "./img/bite-3.JPEG";
import techcrushImg from "./img/techcrush.JPG";

const certifications = [
  {
    title: "Horizon Hacks",
    issuer: "MLH / Major League Hacking",
    date: "2025",
    image: horizonHacksImg,
    link: "#",
    description:
      "Participated in an intensive 36-hour hackathon, building innovative solutions under time constraints.",
  },
  {
    title: "Innovative Mind Award",
    issuer: "Innovation Hub",
    date: "2025",
    image: innovativeMindImg,
    link: "#",
    description:
      "Recognized for creative problem-solving and out-of-the-box thinking in technology design.",
  },
  {
    title: "Bite 3.0 Hackathon",
    issuer: "Bite Community",
    date: "2024",
    image: bite3Img,
    link: "#",
    description:
      "Collaborated on a team project during a fast-paced coding competition focused on real-world impact.",
  },
  {
    title: "TechCrush Certification",
    issuer: "TechCrush",
    date: "2024",
    image: techcrushImg,
    link: "#",
    description:
      "Completed technical assessment demonstrating proficiency in modern development practices.",
  },
];

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="certifications-section" id="certifications">
      <div className="container">
        <div className="section-header">
          <p className="subtitle">Credentials</p>
          <h1 className="certifications-header">My Certifications</h1>
        </div>
        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="certification-card glass-card">
              <div
                className="cert-image-container"
                onClick={() => setSelectedCert(cert)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setSelectedCert(cert)}
              >
                <img src={cert.image} alt={cert.title} className="cert-image" />
              </div>
              <div className="cert-info">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
                {cert.description && (
                  <p className="cert-description">{cert.description}</p>
                )}
                <div className="cert-actions">
                  <button
                    className="cert-view-btn"
                    onClick={() => setSelectedCert(cert)}
                  >
                    View Certificate
                  </button>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cert-link"
                    >
                      Verify ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCert && (
        <Lightbox
          image={selectedCert.image}
          alt={selectedCert.title}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </div>
  );
};

export default Certifications;
