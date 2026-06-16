import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../hero";
import AboutSection from "../about-section";
import Services from "../services";
import Certifications from "../certifications";
import Projects from "../project";
import ClientFeedback from "../ClientFeedback";
import Contact from "../Contact";
import CallToAction from "../CallToAction";

const HomePage = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <AboutSection />
      <Services />
      <Certifications />
      <Projects />
      <CallToAction />
      <ClientFeedback />
      <Contact />
    </>
  );
};

export default HomePage;
