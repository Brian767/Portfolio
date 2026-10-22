export default function Home() {
  return (
    <section id="home" className="home">
      <div className="home-content">
        <p className="home-eyebrow">Frontend Developer</p>
        <h1 className="home-title">Hi, I'm Brian.</h1>
        <p className="home-tagline">
          I build fast, accessible React interfaces that are a pleasure to use.
        </p>
        <div className="home-actions">
          <a href="#projects" className="home-btn home-btn-primary">
            View My Work
          </a>
          <a
            href="https://github.com/Brian767"
            className="home-btn home-btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}