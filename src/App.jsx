import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Projects>
        <Project
          title="Project 1"
          description="Description for Project 1"
          technologies={["React", "Node.js"]}
          image="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
          link="https://google.com"
        />
        <Project
          title="Project 2"
          description="Description for Project 2"
          technologies={["HTML", "CSS", "JavaScript", "React"]}
          image="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
          link="https://google.com"
        />
      </Projects>
      <About />
      <Contact />
      <Navbar />
      <Footer />
    </>
  );
}

export default App;
