import { Routes, Route } from "react-router-dom";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import HeroImage from "./components/HeroImage";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetails from "./pages/ProjectDetails";

export default function App() {
  return (
    <div className="fixed inset-0 flex flex-col bg-white w-screen h-screen">
      {/* ===== Topbar ===== */}
      <Topbar />

      {/* ===== Main Layout ===== */}
      <div className="flex flex-1">
        {/* Sidebar (Fixed Left) */}
        <Sidebar />

        {/* ===== Scrollable Main Content ===== */}
        <main
          className="
            relative flex-1 overflow-y-scroll overflow-x-hidden
            h-screen
            ml-[90px] 
            px-1 md:px-10 py-15
            z-10
            lg:mr-[25vw]  /* 👈 only on large screens */
          "
        >
          <div className=" mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>

        {/* ===== Hero Section (Fixed Right — visible only on large screens) ===== */}
        <div className="hidden lg:block">
          <HeroImage />
        </div>
      </div>
    </div>
  );
}
