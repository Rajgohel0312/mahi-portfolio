import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const projects = [
  {
    id: "spec-conference",
    category: "UI / UX",
    title: "SPEC Conference Website",
    image: "/assets/project/project-1.webp",
    position: "center top",
    link: "https://specstudent.in/international-conference",
    timeline: "Jan 2024 – Feb 2024",
    learnings: [
      "Learned about responsive event website design.",
      "Integrated smooth scroll-triggered animations with GSAP.",
      "Improved understanding of component structuring in React.",
    ],
    impact:
      "Increased online registrations by 60% and streamlined event management communication for students and faculty.",
  },
  {
    id: "spectech",
    category: "UI / UX",
    title: "SPEC TECH IT COMPANY",
    image: "/assets/project/project-2.webp",
    position: "center top",
    link: "https://spectechitsolution.com",
    timeline: "Mar 2024 – Apr 2024",
    learnings: [
      "Mastered full homepage layout and section transitions.",
      "Built reusable React components for scalable company websites.",
    ],
    impact:
      "Improved lead generation by 35% and provided a professional online presence for the IT training and development firm.",
  },
  {
    id: "exomax",
    category: "UI / UX Design",
    title: "Exomax",
    image: "/assets/project/project-3.webp",
    position: "center top",
    link: "https://exomaxcompany.com",
    timeline: "Jun 2024 – Jul 2024",
    learnings: [
      "Enhanced UX flow for eCommerce-style product presentation.",
      "Learned modular CSS and brand tone consistency in UI systems.",
    ],
    impact:
      "Boosted client’s brand presentation quality and consistency across digital channels.",
  },
  {
    id: "modern-technocrats",
    category: "UI / UX Design",
    title: "Modern Technocrats",
    image: "/assets/project/project-4.webp",
    position: "center top",
    link: "https://moderntechnocrats.in",
    timeline: "Aug 2024 – Sep 2024",
    learnings: [
      "Created UI for industrial product showcase platforms.",
      "Implemented SEO-friendly structure using Next.js principles.",
    ],
    impact:
      "Helped client establish a modern industrial identity online, resulting in 45% more inquiries within two months.",
  },
];

const Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (project) => {
    navigate(`/project/${project.id}`, { state: project });
  };

  return (
    <section className="w-full bg-white text-gray-900">
      {/* ===== HERO SECTION ===== */}
      <div className="w-full max-w-[1200px] mx-auto text-center pt-16 sm:pt-20 pb-8 sm:pb-12 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 sm:mb-6">
          Designing a <br />
          <span className="!text-[var(--brand-color)]">Better World Today</span>
        </h1>
        <div className="text-xs sm:text-sm uppercase tracking-wider text-gray-500">
          <span className="!text-[var(--brand-color)] font-semibold">
            Homepage
          </span>{" "}
          / Portfolio
        </div>
      </div>

      {/* ===== PROJECT GRID ===== */}
      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 pb-16 sm:pb-24">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            onClick={() => handleProjectClick(project)}
            className="group relative overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Project Image */}
            <div className="overflow-hidden rounded-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                style={{
                  objectPosition: project.position || "center center",
                }}
              />
            </div>

            {/* Info */}
            <div className="mt-3 sm:mt-4 flex items-center justify-between">
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-widest text-gray-500">
                  {project.category}
                </p>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mt-1 transition-colors group-hover:text-[var(--brand-color)]">
                  {project.title}
                </h3>
              </div>

              <div className="opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-500 text-[var(--brand-color)]">
                <FaArrowRight
                  size={14}
                  className="sm:w-4 sm:h-4 md:w-5 md:h-5"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </section>
  );
};

export default Projects;
