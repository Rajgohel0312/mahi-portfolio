import React from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Sidebar = () => {
  const { pathname } = useLocation();

  const sidebarTexts = {
    "/": { title: "HOMEPAGE", sub: "Design. Code. Create." },
    "/projects": { title: "PROJECTS", sub: "Ideas turned real." },
    "/about": { title: "ABOUT", sub: "Meet the mind behind." },
    "/contact": { title: "CONTACT", sub: "Let’s make it happen." },
  };

  const current = sidebarTexts[pathname] || sidebarTexts["/"];

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-20 bg-black text-white flex flex-col justify-between py-6 items-center z-40 border-r border-gray-700">
      {/* Logo */}
      <div
        className="w-10 h-10 flex items-center justify-center font-bold text-lg rounded"
        style={{
          background: "var(--brand-color)",
          fontFamily: "var(--font-display)",
        }}
      >
        C
      </div>

      {/* Center Label Section */}
      <div className="relative flex items-center justify-center h-48">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center justify-center text-center rotate-[-90deg] space-y-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {/* Title */}
          <div className="text-xs sm:text-sm tracking-[0.35em] text-gray-300 font-semibold whitespace-nowrap">
            {current.title}
          </div>

          {/* Divider */}
          <div className="w-10 h-[2px] bg-gradient-to-r from-[#d35a9f] to-[#00b9fe] opacity-70" />

          {/* Subtext */}
          <div className="text-[10px] sm:text-[11px] tracking-[0.2em] text-gray-500 font-light whitespace-nowrap">
            {current.sub}
          </div>
        </motion.div>
      </div>

      {/* Social Icons */}
      <div className="flex flex-col gap-4 text-gray-400 text-lg">
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[var(--brand-color)] transition-colors"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[var(--brand-color)] transition-colors"
        >
          <i className="fab fa-behance"></i>
        </a>
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="hover:text-[var(--brand-color)] transition-colors"
        >
          <i className="fab fa-dribbble"></i>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
