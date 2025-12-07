// const skills = {
//   Frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind"],
//   Tools: ["Git", "GitHub", "ESLint", "Figma", "GIMP", "MongoDB"],
//   Other: ["Accessibility", "UX Design"],
// };
const skills = {
  Frontend: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React",
    "Redux",
    "Tailwind CSS",
    "Responsive design",
    "REST APIs",
  ],

  Tools: ["Git & GitHub", "ESLint & Prettier", "Figma"],

  BackendBasics: ["Node.js", "Express", "MongoDB", "Postman (API testing)"],

  Other: ["Problem solving"],
};

export default function Skills() {
  return (
    <section id="skills" className="py-12 scroll-mt-12">
      {" "}
      <h2 className="text-3xl font-bold">Skills</h2>
      <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-xl">
        A quick overview of the tools, technologies, and concepts I work with.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {Object.entries(skills).map(([category, list]) => (
          <div
            key={category}
            className="p-6 rounded-xl bg-white dark:bg-gray-900 shadow-sm border border-gray-100 dark:border-gray-800"
          >
            <h3 className="font-semibold text-lg">{category}</h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {list.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-400"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
