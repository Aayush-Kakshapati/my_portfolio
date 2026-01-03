import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectPage";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </>
  );
}
