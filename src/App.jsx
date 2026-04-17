import "./App.css";
import NavBar from "./nav-bar";
import Hero from "./hero";
import AboutSection from "./about-section";
import Services from "./services";
import Projects from "./project";
import ClientFeedback from "./ClientFeedback";
import Contact from "./Contact";

function App() {
  return (
    <div className="app-wrapper">
      <NavBar />
      <main className="main-content">
        <Hero />
        <AboutSection />
        <Services />
        <Projects />
        <ClientFeedback />
        <Contact />
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

