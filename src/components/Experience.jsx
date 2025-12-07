const experience = [
  {
    id: 1,
    company: "Acme Inc",
    role: "Frontend Engineer",
    period: "2022 - Present",
    desc: "Built UI components and improved performance.",
  },
  {
    id: 2,
    company: "Beta Co",
    role: "Junior Developer",
    period: "2020 - 2022",
    desc: "Worked on integrations and automation.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-12 scroll-mt-12 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <div className="space-y-6">
          {experience.map((e) => (
            <div
              key={e.id}
              className="p-4 rounded-lg bg-white dark:bg-gray-900 shadow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{e.role}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {e.company}
                  </p>
                </div>
                <div className="text-sm text-gray-500">{e.period}</div>
              </div>
              <p className="mt-3 text-gray-700 dark:text-gray-300">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
