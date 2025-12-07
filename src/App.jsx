import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import HeaderMobile from "./components/MobileHeader";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="lg:flex lg:items-stretch">
        <aside className="hidden lg:block lg:w-80 xl:w-96 border-r border-gray-100 dark:border-gray-800">
          <Sidebar theme={theme} setTheme={setTheme} />
        </aside>

        <div className="flex-1">
          {/* mobile header */}
          <HeaderMobile theme={theme} setTheme={setTheme} />
          <main className="max-w-4xl mx-auto px-6 py-10">
            <Hero />
            <Skills />
            <Projects />
            <Education />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
