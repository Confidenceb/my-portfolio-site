// import React from "react";
// import "./ClientFeedback.css";

// const ClientFeedback = () => {
//   const testimonials = [
//     {
//       quote:
//         "A purpose is the eternal condition for success. Every former smoker can tell you just how hard it is to stop smoking cigarettes.",
//       name: "Carolyn Craig",
//       title: "CEO at Facebook",
//       image: "https://dummyimage.com/100x100/000/fff",
//     },
//     {
//       quote:
//         "Do you want to be even more successful? Learn to love learning and growth. The more effort you put into improving your skills, the bigger the payoff you.",
//       name: "Harriet Maxwell",
//       title: "CEO at Google",
//       image: "https://dummyimage.com/100x100/000/fff",
//     },
//   ];

//   return (
//     <div className="client-feedback">
//       <div className="container">
//         <h2>Client's Feedback About Me</h2>
//         <div className="feedback-cards">
//           {testimonials.map((item, index) => (
//             <div className="feedback-card" key={index}>
//               <img
//                 src={item.image}
//                 alt="Feedback Icon"
//                 className="feedback-icon"
//               />
//               <div>
//                 <p className="quote">"{item.quote}"</p>
//                 <p className="name">{item.name}</p>
//                 <p className="title">{item.title}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClientFeedback;
import React, { useState } from "react";
import { FaArrowUp, FaArrowDown } from "@fortawesome/react-fontawesome";

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
    <div className="client-feedback">
      <h2>Client's Feedback About Me</h2>

      <div className="nav-buttons">
        <button onClick={handleUp}>
          <FaArrowUp />
        </button>
        <button onClick={handleDown}>
          <FaArrowDown />
        </button>
      </div>

      <div className="feedback-cards-wrapper">
        <div className="feedback-cards slide">
          {[leftCard, rightCard].map((card, i) => (
            <div key={i} className="feedback-card">
              <img src={card.img} alt={card.name} className="feedback-icon" />
              <div>
                <p className="quote">"{card.quote}"</p>
                <p className="name">{card.name}</p>
                <p className="title">{card.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientFeedback;
