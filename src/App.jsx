import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import pikaBndrScreenshot from "./assets/Laptop-Home.png";

import "./App.css";

const PROJECTS = [
  {
    title: "PIKA BNDR",
    description:
      "Search Pokémon TCG cards, track your collection and estimated market value, and organize cards in a nine-pocket digital binder. Your collection and binder are saved on your device.",
    technologies: ["React", "React Router", "Vite", "TCGdex API", "localStorage"],
    image: pikaBndrScreenshot,
    imageAlt: "PIKA BNDR home screen with card search, collection, and binder features",
    link: "https://pikabndr.netlify.app/",
    linkLabel: "Visit live site",
    repo: "https://github.com/Brian767/Poke-Binder",
  },
];

function App() {
  return (
    <>
      <Header />
      <Home />
      <Projects>
        {PROJECTS.map((project) => (
          <Project key={project.title} {...project} />
        ))}
      </Projects>
      <About />
      <Contact />
      <Navbar />
      <Footer />
    </>
  );
}

export default App;
