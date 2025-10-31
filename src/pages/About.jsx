import React from "react";
import { motion } from "framer-motion";
import DesignPhilosophy from "../components/DesignPhilosophy";
import Footer from "../components/Footer";
export default function About() {
  return (
    <section
      className="w-full bg-white text-gray-800 py-24 sm:py-28 px-6 sm:px-10 xl:px-24"
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* ===== PAGE HEADER ===== */}
      <motion.div
        className="text-center max-w-3xl mx-auto mb-24 sm:mb-32"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1
          className="text-[38px] sm:text-[52px] md:text-[64px] font-extrabold mb-6 leading-tight"
          style={{ color: "var(--brand-color)" }}
        >
          About Me
        </h1>
        <p className="text-gray-500 text-base sm:text-lg md:text-xl leading-relaxed px-2 sm:px-4">
          I’m a UI/UX Designer passionate about crafting experiences that
          combine purpose, usability, and aesthetics. I believe great design is
          invisible — it simply feels right.
        </p>
      </motion.div>

      {/* ===== BIO SECTION ===== */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 sm:gap-20 mb-32 sm:mb-48">
        {/* Image Section */}
        <motion.div
          className="relative flex justify-center items-end flex-1"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          style={{ minHeight: "500px" }}
        >
          {/* Gradient Backdrop */}
          <div className="absolute bottom-0 w-[115%] h-[100%] rounded-[2rem] bg-gradient-to-t from-[#d35a9f] to-[#00b9fe] shadow-[0_40px_80px_rgba(0,0,0,0.08)] blur-[2px]" />

          {/* Ground Shadow */}
          <div className="absolute bottom-[18px] w-[60%] h-[25px] bg-black/10 blur-[10px] rounded-full z-[5]" />

          {/* Image */}
          <img
            src="/assets/photo-2.webp"
            alt="Mahi Jani"
            className="relative rounded-[2rem] w-[80%] sm:w-[70%] md:w-[60%] max-w-sm object-cover z-[10]"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-left max-w-xl"
        >
          <h2 className="text-[28px] sm:text-[32px] md:text-[38px] font-bold text-gray-900 mb-6 sm:mb-8">
            Hi, I’m{" "}
            <span style={{ color: "var(--brand-color)" }}>Mahi Jani</span>
          </h2>
          <p className="text-gray-600 text-[16px] sm:text-[18px] leading-relaxed mb-6 sm:mb-8">
            I’m at the beginning of my design journey, learning how to create
            interfaces that feel simple, usable, and visually consistent. I
            enjoy turning ideas into interactive experiences that look clean and
            make sense to real users.
          </p>
          <p className="text-gray-600 text-[16px] sm:text-[18px] leading-relaxed">
            Right now, I’m focused on building strong fundamentals in UI/UX and
            front-end design — learning design systems, usability principles,
            and how to balance creativity with clarity. Each project I work on
            helps me grow sharper, faster, and more confident as a designer.
          </p>
        </motion.div>
      </div>

      {/* ===== SKILLS SECTION ===== */}
      <div className="max-w-6xl mx-auto text-center mb-24 sm:mb-32">
        <div className="flex items-center justify-center w-full mb-8">
          <div className="hidden sm:block flex-1 h-[2px] bg-[var(--brand-color)] max-w-[80px]" />
          <h2 className="mx-4 text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-wide whitespace-nowrap">
            Core Skills
          </h2>
          <div className="hidden sm:block flex-1 h-[2px] bg-[var(--brand-color)] max-w-[80px]" />
        </div>
        <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto mb-12">
          My creative and technical toolkit for crafting digital experiences
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-10">
          {[
            "UI/UX Design",
            "Wireframing & Prototyping",
            "Design Systems",
            "Webflow / Figma",
            "User Research",
            "Responsive Design",
            "Front-End Handoff",
            "Interaction Design",
          ].map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center h-32 sm:h-36 border border-gray-200 rounded-2xl bg-white transition-all duration-300"
            >
              <p className="text-gray-700 font-medium text-[15px] sm:text-[17px] px-4 text-center">
                {skill}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== DESIGN PHILOSOPHY ===== */}
      <DesignPhilosophy />

      {/* ===== CTA SECTION ===== */}
      <div className="text-center pt-16 border-t border-gray-200">
        <h3 className="text-[24px] sm:text-[30px] md:text-[36px] font-semibold mb-6 text-gray-900 leading-snug">
          Ready to collaborate on your next project?
        </h3>
        <a
          href="mailto:janimahi561@gmail.com"
          className="inline-block px-10 sm:px-14 py-4 sm:py-5 font-semibold uppercase tracking-wider rounded-md border-2 transition-all duration-300 text-[var(--brand-color)] border-[var(--brand-color)] hover:text-white hover:bg-[var(--brand-color)] shadow-sm hover:shadow-[0_10px_25px_rgba(176,71,130,0.35)]"
        >
          Let’s Connect
        </a>
      </div>

      <Footer />
    </section>
  );
}
