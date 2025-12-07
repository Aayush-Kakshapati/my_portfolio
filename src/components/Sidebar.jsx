import { useEffect, useState } from "react";

export default function Sidebar() {
  const sections = ["hero", "skills", "projects", "education", "contact"];
  const [active, setActive] = useState("hero");

  useEffect(() => {
    // Store visibility amount for each section
    const visibilityMap = {};

    const observer = new IntersectionObserver(
      (entries) => {
        // Update the visibility map with newest visibility values
        entries.forEach((entry) => {
          visibilityMap[entry.target.id] = entry.intersectionRatio;
        });

        // Find the section with the highest visible percentage
        const mostVisible = Object.entries(visibilityMap).reduce((a, b) =>
          a[1] > b[1] ? a : b
        )[0];

        // Update the active section
        setActive(mostVisible);
      },
      {
        // Track visibility changes smoothly from 0% to 100%
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    // Observe every section listed
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Cleanup when component unmounts
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="fixed left-0 top-1/2 -translate-y-1/2 px-6">
      <nav className="flex flex-col gap-4">
        {sections.map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className={`text-sm font-medium transition ${
              active === item
                ? "text-primary-500 font-semibold"
                : "text-gray-500 dark:text-gray-400"
            }`}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        ))}
      </nav>
    </aside>
  );
}
