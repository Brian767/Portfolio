// Projects.jsx
export default function Projects({ children }) {
  return (
    <section id="projects" className="projects">
      <div className="projects-inner">
        <h2 className="projects-title">Projects</h2>
        <p className="projects-intro">A few things I've built recently.</p>
        <div className="projects-content">{children}</div>
      </div>
    </section>
  );
}