import { projects } from "../data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="alt-bg">
      <div className="wrap">
        <div className="section-head">
          <span className="section-tag"><span className="num">04</span> Projects</span>
          <h2>Things That Are Actually Shipped.</h2>
        </div>

        <div className="project-grid">
          {/* .map() turns each project object into a <ProjectCard /> component */}
          {projects.map((project) => (
            <ProjectCard project={project} key={project.title} />
          ))}
        </div>
      </div>
    </section>
  );
}