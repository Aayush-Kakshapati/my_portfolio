import useReveal from "../hooks/useReveal";

export default function Hero() {
  const ref = useReveal();

  const heroInfo = ["Frontend Developer", "Computer Applicaton Student"];

  const links = [
    {
      href: "https://github.com/yourusername",
      label: "GitHub",
      icon: "",
    },
    {
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
      icon: "",
    },
    {
      href: "https://yourportfolio.com",
      label: "Email",
      icon: "",
    },
  ];

  return (
    <section ref={ref} className="reveal max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
        Hi, I’m <span className="text-current">Aayush</span>
      </h1>

      <p className="mt-4 text-sm text-[var(--muted)]">{heroInfo.join(" • ")}</p>

      <p className="mt-4 text-sm text-[var(--muted)] max-w-xl">
        I build clean, maintainable, and user-friendly web interfaces, focusing
        on React and JavaScript. Currently a student, with academic and personal
        projects plus a real freelance deployment.
      </p>

      <div className="mt-6 flex gap-4">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-[var(--muted)] hover:text-current transition-colors"
            aria-label={link.label}
          >
            {link.icon}
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
