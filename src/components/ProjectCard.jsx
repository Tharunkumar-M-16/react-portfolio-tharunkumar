function ProjectCard({
  title,
  description,
  tech,
  category,
  year,
  github
}) {
  return (
    <div>

      <h3>{title}</h3>

      {category && <p><strong>{category}</strong></p>}
      {year && <p><strong>Year:</strong> {year}</p>}

      <p>{description}</p>

      <p>
        <strong>Tech Stack:</strong> {tech}
      </p>

      {github && (
        <a href={github} target="_blank" rel="noreferrer">
          View on GitHub
        </a>
      )}
    </div>
  );
}

export default ProjectCard;
