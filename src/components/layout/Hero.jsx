import ResumeIcon from "../../assets/ResumeIcon";

export default function Hero() {
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
    <section className=" max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
        Hi, I’m <span className="text-current">Aayush</span>
      </h1>

      <p className="mt-4 text-sm text-(--muted)">{heroInfo.join(" • ")}</p>

      <p className="mt-4 text-sm text-(--muted) max-w-xl">
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
            className="flex items-center gap-2 text-sm text-(--muted) hover:text-current transition-colors"
            aria-label={link.label}
          >
            {link.icon}
            {link.label}
          </a>
        ))}

        <a
          href="/Aayush_Kakshapati.pdf"
          download
          className="text-(--muted) hover:text-current transition-colors w-6 h-6"
          aria-label="Download Resume"
        >
          <ResumeIcon className="w-full h-full" />
        </a>
      </div>
    </section>
  );
}
