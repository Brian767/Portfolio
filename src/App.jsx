import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
