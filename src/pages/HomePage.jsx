import React from "react";
import Hero from "../hero";
import AboutSection from "../about-section";
import Services from "../services";
import Projects from "../project";
import ClientFeedback from "../ClientFeedback";
import Contact from "../Contact";

const HomePage = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <Services />
      <Projects />
      <ClientFeedback />
      <Contact />
    </>
  );
};

export default HomePage;
