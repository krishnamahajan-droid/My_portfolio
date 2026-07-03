import { ArrowIcon } from "./Icons";

// "project" is a prop — data passed in from the parent (Projects.jsx)
export default function ProjectCard({ project }) {
  // When the mouse moves over the card, tilt it slightly in 3D
  // based on how far the cursor is from the card's center.
  function handleMouseMove(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;  // -0.5 to 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateY(${x * 8}deg) rotateX(${-y * 8}deg)`;
  }

  // When the mouse leaves, reset the tilt back to flat
  function handleMouseLeave(e) {
    e.currentTarget.style.transform = "rotateY(0deg) rotateX(0deg)";
  }

  return (
    <div
      className="project-card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-top">
        <h3>{project.title}</h3>
        <span className="project-tag">{project.tag}</span>
      </div>

      <p>{project.desc}</p>

      <div className="project-stack">
        {project.stack.map((item) => (
          <span className="stack-tag" key={item}>{item}</span>
        ))}
      </div>

      <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
        View On GitHub <ArrowIcon />
      </a>
    </div>
  );
}