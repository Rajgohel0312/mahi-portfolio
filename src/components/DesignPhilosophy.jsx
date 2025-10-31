import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaLaptopCode, FaUserTie, FaHeart } from "react-icons/fa";

export default function DesignPhilosophy() {
  const steps = [
    {
      icon: <FaLightbulb size={34} color="var(--brand-color)" />,
      title: "Think",
      desc: "Every design begins with empathy. I dive deep into user needs, motivations, and problems before moving pixels.",
    },
    {
      icon: <FaLaptopCode size={34} color="var(--brand-color)" />,
      title: "Create",
      desc: "I transform strategy into structure — clean layouts, clear hierarchy, and balanced interaction flows.",
    },
    {
      icon: <FaUserTie size={34} color="var(--brand-color)" />,
      title: "Collaborate",
      desc: "Design isn’t a solo act. I work with teams to iterate, test, and refine every detail until it feels right.",
    },
    {
      icon: <FaHeart size={34} color="var(--brand-color)" />,
      title: "Deliver",
      desc: "I deliver experiences that make users feel understood — visually elegant, functional, and memorable.",
    },
  ];

  return (
    <section className="relative w-full py-24 sm:py-32 px-6 sm:px-12 xl:px-24 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* ===== Section Header ===== */}
      <div className="max-w-6xl mx-auto text-center mb-16 sm:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 uppercase tracking-wide mb-4">
          Design Philosophy
        </h2>
        <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          My design journey flows through empathy, clarity, and collaboration —
          turning ideas into purposeful experiences that truly connect with
          users.
        </p>
      </div>

      {/* ===== LAYOUTS ===== */}
      <div className="max-w-6xl mx-auto">
        {/* === Desktop ≥1536px === */}
        <div className="relative hidden 2xl:flex items-start justify-between mt-20">
          {/* Connecting Line */}
          <div
            className="absolute h-[3px] bg-gradient-to-r from-[#d35a9f] to-[#00b9fe] rounded-full z-[1]"
            style={{
              width: "78%",
              top: "18px",
              left: "11%",
            }}
          ></div>

          {steps.map((step, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center text-center w-[22%] z-10"
            >
              {/* Dot */}
              <div className="w-9 h-9 rounded-full bg-[var(--brand-color)] border-[4px] border-white shadow-md mb-10"></div>

              {/* Card */}
              <div className="bg-white rounded-3xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-8 w-full flex flex-col items-center justify-start min-h-[320px]">
                <div className="w-14 h-14 flex items-center justify-center bg-[var(--brand-color)]/10 rounded-full mb-4">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* === Laptop & Mid Screens (768–1535px): 2 Columns === */}
        <div className="hidden md:grid 2xl:hidden grid-cols-2 gap-12 xl:gap-16 mt-16">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative bg-white rounded-3xl shadow-[0_8px_24px_rgba(0,0,0,0.08)] p-10 flex flex-col items-center text-center hover:shadow-[0_12px_30px_rgba(0,0,0,0.1)] transition-all duration-300"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-[var(--brand-color)]/10 rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* === Mobile ≤767px === */}
        <div className="flex flex-col md:hidden gap-10 mt-12 max-w-md mx-auto">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] rounded-3xl p-8 text-center flex flex-col items-center"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-[var(--brand-color)]/10 rounded-full mb-4">
                {step.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
