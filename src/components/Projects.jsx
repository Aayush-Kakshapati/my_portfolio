import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import useReveal from "../hooks/useReveal";

export default function Projects() {
  const ref = useReveal();

  return (
    <section
      id="projects"
      ref={ref}
      className="reveal max-w-6xl mx-auto px-6 scroll-mt-32"
    >
      <h2 className="section-title">Projects</h2>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
