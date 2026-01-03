import Hero from "../components/layout/Hero";
import TechStack from "../components/layout/TechStack";
import Projects from "../components/layout/Projects";
import Education from "../components/layout/Education";
import Experience from "../components/layout/Experience";

export default function Home() {
  return (
    <main className="space-y-24 md:space-y-32 max-w-4xl mx-auto px-6 py-16">
      <Hero />
      <TechStack />
      <Projects />
      <Education />
      <Experience />
    </main>
  );
}
