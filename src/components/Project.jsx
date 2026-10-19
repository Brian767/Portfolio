export default function Project({
  title,
  description,
  technologies,
  image,
  link,
}) {
  return (
      <div  className="project">
        <img className="project-image" src={image} alt="Project" />
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <ul className="project-technologies">
          {technologies.map((tech, i) => (
            <li key={i} className="project-technology">
              {tech}
            </li>
          ))}
        </ul>
        <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      </div>
  );
}
