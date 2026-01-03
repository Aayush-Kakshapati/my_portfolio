import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SunIcon from "../../assets/SunIcon";
import MoonIcon from "../../assets/MoonIcon";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "system"
  );

  const location = useLocation();

  useEffect(() => {
    const root = document.documentElement;
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    root.classList.toggle("dark", isDark);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const links = [
    { name: "projects", path: "/projects" },
    { name: "experience", path: "/experience" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-(--border) bg-(--bg-color)/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between relative">
        <Link
          to="/"
          className="text-sm font-semibold tracking-wide"
          onClick={() => setIsOpen(false)}
        >
          AAYUSH
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-xs tracking-widest">
          {links.map((l) => (
            <Link
              target="_blank"
              rel="noreferrer"
              key={l.name}
              to={l.path}
              className={`underline-offset-4 hover:underline ${
                location.pathname === l.path ? "underline" : ""
              }`}
            >
              {l.name.toUpperCase()}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-xs border px-2 py-1 rounded focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current"
          >
            {theme === "dark" ? (
              <SunIcon className="w-4 h-4 text-current" />
            ) : (
              <MoonIcon className="w-4 h-4 text-current" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle menu"
            className="md:hidden text-xs tracking-widest relative
                       after:absolute after:left-0 after:-bottom-1 after:h-px
                       after:w-full after:bg-current after:scale-x-0
                       after:origin-left after:transition-transform
                       hover:after:scale-x-100
                       focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-current"
          >
            {isOpen ? "CLOSE" : "MENU"}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute left-0 right-0 top-full
          bg-(--bg-color) border-b border-(--border)
          transition-all duration-200
          ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <nav className="flex flex-col px-6 py-6 gap-4 text-xs tracking-widest">
            {links.map((l) => (
              <Link
                target="_blank"
                rel="noreferrer"
                key={l.name}
                to={l.path}
                className={`underline-offset-4 hover:underline ${
                  location.pathname === l.path ? "underline" : ""
                }`}
              >
                {l.name.toUpperCase()}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
