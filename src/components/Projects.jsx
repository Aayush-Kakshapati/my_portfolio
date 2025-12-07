import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-12 scroll-mt-12">
      <h2 className="text-2xl font-bold">Selected Projects</h2>
      <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 max-w-2xl">
        A curated list of work that demonstrates problem solving, front-end
        fundamentals, and user-focused UI. Click any project to view code or a
        live demo.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
