// Project.jsx
export default function Project({
  title,
  description,
  technologies = [],
  image,
  imageAlt,
  link,
  repo, // optional: link to source code
}) {
  return (
    <article className="project">
      {image && (
        <img
          className="project-image"
          src={image}
          alt={imageAlt ?? `Screenshot of ${title}`}
          loading="lazy"
        />
      )}

      <div className="project-body">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>

        <ul className="project-technologies" aria-label="Technologies used">
          {technologies.map((tech) => (
            <li key={tech} className="project-technology">
              {tech}
            </li>
          ))}
        </ul>

        <div className="project-links">
          <a
            className="project-link project-link-primary"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project<span className="sr-only">: {title}</span>
          </a>
          {repo && (
            <a
              className="project-link project-link-secondary"
              href={repo}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source Code<span className="sr-only">: {title}</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}