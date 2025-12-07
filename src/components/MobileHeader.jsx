import { useState } from "react";

export default function MobileHeader({ theme, setTheme }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="lg:hidden sticky top-0 z-40 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center text-white font-bold">
            A
          </div>
          <div className="text-sm font-medium">Aayush</div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-2 py-1 rounded-md border text-sm"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md border"
          >
            ☰
          </button>
        </div>
      </div>

      {/* simple mobile nav */}
      {open && (
        <div className="px-4 pb-4">
          <nav className="flex flex-col gap-2">
            <a href="#projects" onClick={() => setOpen(false)} className="py-2">
              Projects
            </a>
            <a href="#skills" onClick={() => setOpen(false)} className="py-2">
              Skills
            </a>
            <a
              href="#education"
              onClick={() => setOpen(false)}
              className="py-2"
            >
              Education
            </a>
            <a href="#contact" onClick={() => setOpen(false)} className="py-2">
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
