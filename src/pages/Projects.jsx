import React from "react";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const projects = [
  // ================= UI / UX PROJECTS =================
  {
    id: "spec-conference",
    type: "uiux",
    category: "UI / UX",
    title: "SPEC Conference Website",
    image: "/assets/project/project-1.webp",
    position: "center top",
    link: "https://specstudent.in/international-conference",
    timeline: "Jan 2024 – Feb 2024",
    learnings: [
      "Responsive event website design",
      "Scroll-triggered animations",
      "React component structuring",
    ],
    impact:
      "Increased online registrations by 60% and improved communication flow.",
  },
  {
    id: "spectech",
    type: "uiux",
    category: "UI / UX",
    title: "SPEC TECH IT COMPANY",
    image: "/assets/project/project-2.webp",
    position: "center top",
    link: "https://spectechitsolution.com",
    timeline: "Mar 2024 – Apr 2024",
    learnings: ["Homepage layout mastery", "Reusable component architecture"],
    impact: "Improved lead generation by 35% with a professional web presence.",
  },
  {
    id: "exomax",
    type: "uiux",
    category: "UI / UX Design",
    title: "Exomax",
    image: "/assets/project/project-3.webp",
    position: "center top",
    link: "https://exomaxcompany.com",
    timeline: "Jun 2024 – Jul 2024",
    learnings: ["E-commerce UX flow", "Brand-consistent UI systems"],
    impact: "Improved brand perception and consistency across platforms.",
  },
  {
    id: "modern-technocrats",
    type: "uiux",
    category: "UI / UX Design",
    title: "Modern Technocrats",
    image: "/assets/project/project-4.webp",
    position: "center top",
    link: "https://moderntechnocrats.in",
    timeline: "Aug 2024 – Sep 2024",
    learnings: ["Industrial UI layouts", "SEO-friendly structure"],
    impact: "45% increase in inquiries within two months.",
  },

  // ================= GRAPHICS PROJECT =================
  {
    id: "graphic-creatives",
    type: "graphics",
    category: "Graphics Design",
    title: "Brand Graphic Creatives",
    image: "/assets/graphics/cover.webp",
    learnings: [
      "Poster composition and hierarchy",
      "Typography and color balance",
      "Designing for social media engagement",
    ],
    impact: "Strengthened brand identity and improved visual consistency.",
    posters: [
      "/assets/graphics/project(1).webp",
      "/assets/graphics/project(2).webp",
      "/assets/graphics/project(3).webp",
      "/assets/graphics/project(4).webp",
      "/assets/graphics/project(5).webp",
      "/assets/graphics/project(6).webp",
    ],
  },

  // ================= VIDEO PROJECT =================
  {
    id: "restaurant-reel",
    type: "video",
    category: "Motion / Video",
    title: "Luxury Restaurant Promotional Video",
    image: "/assets/graphics/restaurant_promo.webp",
    learnings: [
      "Food-focused visual storytelling using close-up shots.",
      "Editing for rhythm, pacing, and beat-matched transitions.",
      "Color grading to enhance food textures and premium ambience.",
    ],
    impact:
      "Helped elevate the restaurant’s premium brand image and increased reel engagement and profile visits on social media.",
    video: "/assets/video/restaurant_promo.mp4",
  },
  {
    id: "restaurant-reel",
    type: "video",
    category: "Motion / Video",
    title: "Restaurant Motion Reel",
    image: "/assets/graphics/restaurant_reel.webp",
    learnings: [
      "Cinematic food storytelling using controlled close-up and macro shots.",
      "Editing for rhythm, pacing, and beat-synced transitions.",
      "Advanced color grading to enhance food texture, warmth, and premium ambience.",
    ],
    impact:
      "Strengthened the restaurant’s premium visual identity, increased reel engagement, and drove higher profile visits across social platforms.",
    video: "/assets/video/restaurant_reel.mp4",
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-white text-gray-900">
      <div className="max-w-[1200px] mx-auto text-center pt-16 pb-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Designing a <br />
          <span className="text-[var(--brand-color)]">Better World Today</span>
        </h1>
        <p className="text-sm uppercase tracking-wider text-gray-500">
          Homepage / Portfolio
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-24">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            onClick={() =>
              navigate(`/project/${project.id}`, { state: project })
            }
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[340px] object-cover group-hover:scale-105 transition duration-700"
              />
            </div>

            <div className="mt-4 flex justify-between items-center">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  {project.category}
                </p>
                <h3 className="text-lg font-semibold mt-1">{project.title}</h3>
              </div>
              <FaArrowRight className="text-[var(--brand-color)] opacity-0 group-hover:opacity-100 transition" />
            </div>
          </motion.div>
        ))}
      </div>

      <Footer />
    </section>
  );
};

export default Projects;
