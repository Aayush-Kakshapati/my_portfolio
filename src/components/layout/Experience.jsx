import experience from "../../data/experience";
import ExperienceCard from "../ui/ExperienceCard";

export default function Experience() {
  return (
    <section id="experience" className=" max-w-6xl mx-auto px-6 scroll-mt-32">
      <h2 className="section-title">Experience</h2>

      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
        {experience.map((exp, idx) => (
          <ExperienceCard key={idx} experience={exp} />
        ))}
      </div>
    </section>
  );
}
