export default function ProjectCard({ project }) {
  return (
    <a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="card block p-4 border rounded-xl hover:shadow-md transition"
    >
      <div className="flex justify-between items-start">
        <h3 className="text-sm font-medium">{project.title}</h3>
        <span className="text-xs text-[var(--muted)]">{project.type}</span>
      </div>

      <p className="mt-2 text-sm text-[var(--muted)]">{project.description}</p>

      <div className="mt-3 flex flex-wrap gap-2">
        {project.tags.map((t) => (
          <span key={t} className="text-xs border px-2 py-0.5 rounded-full">
            {t}
          </span>
        ))}
      </div>
    </a>
  );
}
