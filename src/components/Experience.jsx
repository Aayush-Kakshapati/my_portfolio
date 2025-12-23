import experience from "../data/experience";
import ExperienceCard from "./ExperienceCard";
import useReveal from "../hooks/useReveal";

export default function Experience() {
  const ref = useReveal();

  return (
    <section
      id="experience"
      ref={ref}
      className="reveal max-w-6xl mx-auto px-6 scroll-mt-32"
    >
      <h2 className="section-title">Experience</h2>

      <div className="mt-10 space-y-6">
        {experience.map((exp, i) => (
          <ExperienceCard key={i} exp={exp} />
        ))}
      </div>
    </section>
  );
}
