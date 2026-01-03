import projects from "../data/projects";
import ProjectCard from "../components/ui/ProjectCard";

const ProjectPage = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="section-title">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
