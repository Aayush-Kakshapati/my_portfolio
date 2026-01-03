const education = [
  {
    degree: "Bachelor of Computer Application",
    school: "Tribhuvan University",
    period: "2022 – 2026",
  },
  {
    degree: "Higher Secondary Education (Computer)",
    school: "Khwopa Higher Secondary School",
    period: "2021 – 2022",
  },
];

export default function Education() {
  return (
    <section id="education" className=" max-w-6xl mx-auto px-6">
      <h2 className="section-title">Education</h2>

      <div className="mt-10 space-y-6">
        {education.map((e) => (
          <div
            key={e.degree}
            className="bg-(--bg-soft) border border-(--border) rounded-xl p-6"
          >
            <div className="flex justify-between text-sm uppercase tracking-wider">
              <span>{e.degree}</span>
              <span className="text-(--muted)">{e.period}</span>
            </div>
            <p className="mt-2 text-(--muted)">{e.school}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
