export default function Projects({ children }) {
  return (
    <section id="projects">
        <h2 className="projects-title">Projects</h2>
      <div className="projects-content">
        {children}
      </div>
    </section>
  );
}
