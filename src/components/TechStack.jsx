import useReveal from "../hooks/useReveal";

const stack = {
  Frontend: ["JavaScript", "React", "Tailwind"],
  Backend: ["Node.js", "Express", "MongoDB"],
  Tools: ["Git", "GitHub", "Figma", "Postman"],
};

export default function TechStack() {
  const ref = useReveal();

  return (
    <section
      id="skills"
      ref={ref}
      className="reveal max-w-6xl mx-auto px-6 scroll-mt-32"
    >
      <h2 className="section-title">Tech Stack</h2>

      <div className="grid gap-4 md:grid-cols-3">
        {Object.entries(stack).map(([title, items]) => (
          <div key={title} className="card">
            <h3 className="text-xs tracking-widest mb-3">{title}</h3>
            <p className="text-sm text-[var(--muted)]">{items.join(" • ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
