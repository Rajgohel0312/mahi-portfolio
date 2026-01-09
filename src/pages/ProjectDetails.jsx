import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import Footer from "../components/Footer";

const ProjectDetails = () => {
  const { state: project } = useLocation();
  const navigate = useNavigate();
  const [isPortrait, setIsPortrait] = useState(false);
  const videoRef = useRef(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) return null;

  return (
    <section className="bg-white text-gray-900">
      <div className="text-center pt-16 pb-8">
        <p className="uppercase tracking-widest text-xs text-[var(--brand-color)]">
          Case Study
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mt-2">{project.title}</h1>
        <p className="uppercase text-xs tracking-wider text-gray-500 mt-1">
          {project.category}
        </p>
      </div>

      {/* UI/UX */}
      {project.type === "uiux" && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative max-w-4xl mx-auto"
        >
          <img
            src="/assets/project/laptop.webp"
            alt="Laptop Mockup"
            className="w-full drop-shadow-2xl"
          />

          <div
            className="absolute bg-white overflow-hidden"
            style={{
              top: "27.5%",
              left: "16.3%",
              width: "67.6%",
              height: "42.6%",
            }}
          >
            <motion.img
              src={project.image}
              animate={{ y: ["0%", "-25%"] }}
              transition={{
                duration: 14,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
              className="w-full"
            />
          </div>
        </motion.div>
      )}

      {/* GRAPHICS */}
      {project.type === "graphics" && (
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {project.posters.map((src, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl overflow-hidden bg-gray-100"
            >
              <img src={src} className="w-full h-auto" />
            </motion.div>
          ))}
        </div>
      )}

      {/* VIDEO */}
      {project.type === "video" && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto px-4"
        >
          <div
            className={`relative w-full ${
              isPortrait
                ? "aspect-[9/16] max-w-[220px] sm:max-w-[260px] md:max-w-[400px] mx-auto"
                : "aspect-video"
            }`}
          >
            <video
              ref={videoRef}
              controls
              muted
              playsInline
              preload="metadata"
              onLoadedMetadata={() => {
                const video = videoRef.current;
                if (!video) return;
                setIsPortrait(video.videoHeight > video.videoWidth);
              }}
              className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
            >
              <source src={project.video} type="video/mp4" />
            </video>
          </div>
        </motion.div>
      )}

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-gray-600"
        >
          <FaArrowLeft size={12} /> Back
        </button>

        <div>
          <h2 className="font-semibold text-[var(--brand-color)]">
            What I Learned
          </h2>
          <ul className="list-disc pl-5 text-sm">
            {project.learnings.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-semibold text-[var(--brand-color)]">
            Business Impact
          </h2>
          <p className="text-sm">{project.impact}</p>
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm"
          >
            View Live <FaExternalLinkAlt size={12} />
          </a>
        )}
      </div>

      <Footer />
    </section>
  );
};

export default ProjectDetails;
