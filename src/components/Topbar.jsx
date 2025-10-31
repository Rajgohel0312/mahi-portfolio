import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Topbar = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/about", label: "About" },
  ];

  // Pre-filled email link
  const mailtoLink = `mailto:janimahi561@gmail.com?subject=Let's%20interact%20and%20make%20something%20amazing!&body=Hey%20Mahi,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20potential%20collaboration.%0A%0A—%20Best,%0A`;

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md border-b border-gray-200 flex items-center justify-between px-6 sm:px-12 z-50">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded flex items-center justify-center text-white font-bold text-xl"
          style={{
            background: "var(--brand-color)",
            fontFamily: "var(--font-display)",
          }}
        >
          MJ
        </div>
        <span
          className="text-lg font-semibold tracking-wide"
          style={{
            fontFamily: "var(--font-display)",
            color: "var(--text-dark)",
          }}
        >
          Mahi Jani
        </span>
      </div>

      {/* Desktop Links */}
      <ul className="hidden md:flex items-center gap-8 uppercase tracking-wider text-sm">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`transition-colors duration-300 ${
                pathname === link.path ? "font-semibold" : "font-normal"
              }`}
              style={{
                color:
                  pathname === link.path
                    ? "var(--brand-color)"
                    : "var(--text-dark)",
                fontFamily: "var(--font-display)",
              }}
            >
              {link.label}
            </Link>
          </li>
        ))}

        {/* CTA Contact Button */}
        <li>
          <a
            href={mailtoLink}
            className="px-5 py-2 rounded-md border-2 border-[var(--brand-color)] text-[var(--brand-color)] text-sm font-semibold uppercase tracking-wide transition-all duration-300 ease-out hover:bg-[var(--brand-color)] hover:text-white"
            style={{
              fontFamily: "var(--font-display)",
            }}
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-2xl text-gray-800"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-t border-gray-200 shadow-lg md:hidden flex flex-col items-center py-6 gap-6">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`uppercase text-sm ${
                pathname === link.path
                  ? "text-[var(--brand-color)] font-semibold"
                  : "text-gray-800 font-medium"
              }`}
              style={{
                fontFamily: "var(--font-display)",
              }}
            >
              {link.label}
            </Link>
          ))}

          {/* CTA in mobile menu */}
          <a
            href={mailtoLink}
            onClick={() => setMenuOpen(false)}
            className="px-6 py-2 rounded-md border-2 border-[var(--brand-color)] text-[var(--brand-color)] text-sm font-semibold uppercase tracking-wide transition-all duration-300 hover:bg-[var(--brand-color)] hover:text-white"
            style={{
              fontFamily: "var(--font-display)",
            }}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Topbar;
