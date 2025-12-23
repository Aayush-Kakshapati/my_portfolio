export default function ExperienceCard({ exp }) {
  return (
    <div className="bg-[var(--bg-soft)] border border-[var(--border)] rounded-xl p-6 hover:-translate-y-0.5 transition">
      <div className="flex justify-between items-center text-sm uppercase tracking-wider text-[var(--muted)]">
        <span>{exp.type}</span>
        <span>{exp.year}</span>
      </div>

      <h3 className="mt-2 font-medium">{exp.title}</h3>

      <p className="mt-2 text-sm text-[var(--muted)]">{exp.description}</p>

      {exp.tags.length > 0 && (
        <p className="mt-2 text-sm text-[var(--muted)]">
          {exp.tags.join(" • ")}
        </p>
      )}
    </div>
  );
}
