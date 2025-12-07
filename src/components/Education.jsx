const education = [
  {
    id: 1,
    title: "Bachelors of Computer Application",
    subtitle: "Tribhuvan University • 2022–2026",
  },
  {
    id: 2,
    title: "Computer",
    subtitle: "Khwopa Higher Secondary School • 2021-2022",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-12 scroll-mt-12">
      <h2 className="text-2xl font-bold">Education</h2>
      <div className="mt-6 grid md:grid-cols-2 gap-4">
        {education.map((e) => (
          <div
            key={e.id}
            className="p-4 rounded-lg bg-white dark:bg-gray-900 shadow"
          >
            <div className="font-semibold">{e.title}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {e.subtitle}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
