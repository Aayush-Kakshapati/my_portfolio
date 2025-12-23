import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="space-y-24 md:space-y-32 max-w-4xl mx-auto px-6">
      <Header />

      <main className="space-y-24 md:space-y-32 max-w-4xl mx-auto px-6">
        <Hero />
        <TechStack />
        <Projects />
        <Education />
        <Experience />
      </main>

      <Footer />
    </div>
  );
}
