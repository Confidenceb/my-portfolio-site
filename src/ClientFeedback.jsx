import React, { useState } from "react";
import "./ClientFeedback.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const feedbackData = [
  {
    quote:
      "This developer exceeded our expectations. Timely, professional, and incredibly talented.",
    name: "Samuel David",
    title: "CTO at Amazon",
    img: "https://via.placeholder.com/100",
  },
  {
    quote:
      "A reliable freelancer. Our project wouldn’t have succeeded without his contributions.",
    name: "Angela White",
    title: "Founder at Startup Inc.",
    img: "https://via.placeholder.com/100",
  },
  {
    quote:
      "Creative and efficient. Highly recommend for any frontend development work.",
    name: "Michael Chen",
    title: "Tech Lead at ByteLabs",
    img: "https://via.placeholder.com/100",
  },
  {
    quote:
      "Consistently delivers high-quality code. Communication was clear and prompt.",
    name: "Lina Torres",
    title: "Manager at SoftHub",
    img: "https://via.placeholder.com/100",
  },
];

const ClientFeedback = () => {
  const [index, setIndex] = useState(0);

  const total = feedbackData.length;

  const handleUp = () => {
    setIndex((prev) => (prev + 1) % total);
  };

  const handleDown = () => {
    setIndex((prev) => (prev - 1 + total) % total);
  };

  const leftCard = feedbackData[index];
  const rightCard = feedbackData[(index + 1) % total];

  return (
    <section className="client-feedback">
      <div className="container">
        <div className="section-header">
          <p className="subtitle">Testimonials</p>
          <h2 className="feedback-title">Client's Feedback</h2>
        </div>

        <div className="feedback-content">
          <div className="nav-buttons">
            <button onClick={handleUp} className="nav-btn" aria-label="Previous">
              <FontAwesomeIcon icon={faAngleUp} />
            </button>
            <button onClick={handleDown} className="nav-btn" aria-label="Next">
              <FontAwesomeIcon icon={faAngleDown} />
            </button>
          </div>

          <div className="feedback-cards-wrapper">
            <div className="feedback-cards">
              {[leftCard, rightCard].map((card, i) => (
                <div key={i} className="feedback-card glass-card">
                  <div className="feedback-header">
                    <img src={card.img} alt={card.name} className="feedback-icon" />
                    <div>
                      <p className="name">{card.name}</p>
                      <p className="title">{card.title}</p>
                    </div>
                  </div>
                  <div className="quote-content">
                    <p className="quote">"{card.quote}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientFeedback;

