import { useState } from "react";
import "./App.css";
import NavBar from "./nav-bar";
import Hero from "./hero";
import AboutSection from "./about-section";
import Services from "./services";
import Projects from "./project";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <div className="content container">
          <Hero />
        </div>
        <AboutSection />
        <Services />
        <Projects />
      </div>
    </>
  );
}

export default App;
