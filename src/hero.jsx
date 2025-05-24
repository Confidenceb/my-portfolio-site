import React, { useEffect, useState } from "react";
import "./hero.css";

const Hero = () => {
  const [utcTime, setUtcTime] = useState("");
  const [dayOfWeek, setDayOfWeek] = useState("");

  useEffect(() => {
    const updateTimeAndDate = () => {
      const now = new Date();
      const utc = now.toUTCString().split(" ")[4];
      const day = now.toLocaleDateString("en-US", { weekday: "long" });

      setUtcTime(utc);
      setDayOfWeek(day);
    };

    updateTimeAndDate();
    const interval = setInterval(updateTimeAndDate, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero container">
      <div className="hero-content">
        <p className="this-is-me">This is me</p>
        <h1 className="hero-title">Ola Cloud</h1>
        <p className="hero-description">
          <strong>Frontend Developer & DevOps Enthusiast</strong>. I build
          clean, interactive web interfaces with React, JavaScript, and modern
          tools – blending creativity with performance. Passionate about cloud
          infrastructure and automation, I'm currently exploring DevOps to
          bridge the gap between development and deployment. Let’s build
          something awesome together.
        </p>
        <p data-testid="slackEmail">gboljamiu207@gmail.com</p>
        <p data-testid="currentTimeUTC">
          Current Time in UTC: <b>{utcTime}</b>
        </p>
        <p data-testid="currentDay" className="current-day">
          Current Day: <b>{dayOfWeek}</b>
        </p>
        <a href="#learn-more" className="btn hero-btn">
          Discover More
        </a>
      </div>
      <div className="hero-image">
        <img
          className="hero-img"
          data-testid="slackProfilePicture"
          src="https://ca.slack-edge.com/T07466B189M-U079UMY5YKG-df1cc631da1a-512"
          alt="Slack Profile Picture"
        />
      </div>
    </div>
  );
};

export default Hero;
