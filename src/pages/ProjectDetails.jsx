import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import Footer from "../components/Footer";

const ProjectDetails = () => {
  const { state: project } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project)
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-50">
        <p className="text-gray-600 text-lg mb-4">Project not found.</p>
        <button
          onClick={() => navigate("/")}
          className="px-5 py-2 rounded-md bg-[var(--brand-color)] text-white hover:opacity-90 transition"
        >
          Back to Portfolio
        </button>
      </div>
    );

  return (
    <section className="w-full bg-white text-gray-900 overflow-hidden">
      {/* ===== HERO ===== */}
      <div className="relative flex flex-col items-center text-center bg-white pb-4 sm:pb-8">
        {/* Hero Content */}
        <div className="pt-10 sm:pt-14 pb-0">
          <motion.p
            className="uppercase !text-[var(--brand-color)] tracking-[3px] text-[10px] sm:text-xs font-semibold mb-1 sm:mb-2"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Case Study
          </motion.p>

          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-1 sm:mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {project.title}
          </motion.h1>

          <p className="uppercase tracking-wider text-gray-500 text-[10px] sm:text-xs md:text-sm">
            {project.category}
          </p>
        </div>

        {/* MacBook Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-[260px] sm:w-[420px] md:w-[620px] lg:w-[740px] -mt-6 sm:-mt-10"
        >
          <img
            src="/assets/project/laptop.webp"
            alt="Laptop Mockup"
            className="relative z-10 w-full h-auto pointer-events-none select-none drop-shadow-2xl"
          />

          <div
            className="absolute overflow-y-scroll rounded-[3px] shadow-inner scrollbar-hide bg-white"
            style={{
              top: "27.5%",
              left: "16.3%",
              width: "67.6%",
              height: "42.6%",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <motion.img
              src={project.designImage || project.image}
              alt={`${project.title} design`}
              className="w-full h-auto object-top"
              animate={{ y: ["0%", "-25%"] }}
              transition={{
                duration: 14,
                ease: "linear",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-10 space-y-6 sm:space-y-10">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-gray-600 !hover:text-[var(--brand-color)] text-xs sm:text-sm transition"
        >
          <FaArrowLeft size={12} /> Back
        </button>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-base sm:text-lg font-semibold !text-[var(--brand-color)] mb-1">
            Timeline
          </h2>
          <p className="text-gray-700 text-xs sm:text-sm">{project.timeline}</p>
        </motion.div>

        {/* Learnings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h2 className="text-base sm:text-lg font-semibold !text-[var(--brand-color)] mb-2">
            What I Learned
          </h2>
          <ul className="list-disc pl-5 space-y-1 text-gray-700 text-[13px] sm:text-[14px] leading-relaxed">
            {project.learnings.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>

        {/* Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-base sm:text-lg font-semibold !text-[var(--brand-color)] mb-2">
            Business Impact
          </h2>
          <p className="text-gray-700 text-[13px] sm:text-[14px] leading-relaxed">
            {project.impact}
          </p>
        </motion.div>

        {/* Live Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center pt-2 sm:pt-4"
        >
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 text-gray-700 !hover:text-[var(--brand-color)] text-xs sm:text-sm transition"
          >
            View Live <FaExternalLinkAlt size={12} />
          </a>
        </motion.div>
      </div>

      <Footer />
    </section>
  );
};

export default ProjectDetails;
