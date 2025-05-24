import { useState } from "react";
import "./App.css";
import NavBar from "./nav-bar";
import Hero from "./hero";

function App() {
  return (
    <>
      <div>
        <NavBar />
        <div className="content container">
          <Hero />
        </div>
      </div>
    </>
  );
}

export default App;
