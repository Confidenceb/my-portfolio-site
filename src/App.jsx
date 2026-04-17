import "./App.css";
import NavBar from "./nav-bar";
import Hero from "./hero";
import AboutSection from "./about-section";
import Services from "./services";
import Projects from "./project";
import ClientFeedback from "./ClientFeedback";
import Contact from "./Contact";

import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <div className="app-wrapper">
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <footer className="footer-simple">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Ola Cloud. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

