import { useEffect, useState } from "react";
import { FaArrowDownLong, FaQuoteLeft } from "react-icons/fa6";
import { FiMonitor } from "react-icons/fi";
import { TbBrandSketch } from "react-icons/tb";
import { HiOutlineDocumentText } from "react-icons/hi";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

export default function Home() {
  const [rotation, setRotation] = useState(0);

  const services = [
    {
      title: "UI/UX Design",
      desc: "Elevate your online presence with captivating user interfaces and seamless experiences.",
      icon: <FiMonitor size={40} color="var(--brand-color)" />,
    },
    {
      title: "Logo Design",
      desc: "Establish a strong and cohesive brand identity that resonates with your audience.",
      icon: <TbBrandSketch size={40} color="var(--brand-color)" />,
    },
    {
      title: "Branding",
      desc: "All of which have a singular goal: to build environments where our clients thrive.",
      icon: <HiOutlineDocumentText size={40} color="var(--brand-color)" />,
    },
  ];

  const languages = [
    { name: "English", level: 70 },
    { name: "Hindi", level: 100 },
    { name: "Gujarati", level: 100 },
  ];

  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;
    const handleScroll = () => setRotation(main.scrollTop * 0.35);
    main.addEventListener("scroll", handleScroll);
    return () => main.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative flex flex-col items-center bg-white text-center overflow-hidden py-16 sm:py-20 md:py-24">
      {/* ===== TOP LINE ===== */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center z-30">
        <div
          className="relative"
          style={{
            height: "70px",
            width: "2px",
            backgroundColor: "#e0e0e0",
          }}
        >
          <span
            style={{
              position: "absolute",
              bottom: "-4px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "var(--brand-color)",
              boxShadow: "0 0 6px rgba(176, 71, 130, 0.5)",
            }}
          ></span>
        </div>
      </div>

      {/* ===== HERO TITLE ===== */}
      <div className="flex flex-col items-center justify-center mb-14 mt-24 sm:mt-28 md:mt-32">
        <h3 className="text-xs sm:text-sm tracking-[0.35em] text-gray-500 uppercase mb-3">
          Hello! My name is
        </h3>

        <h1
          className="text-[40px] sm:text-[54px] md:text-[72px] font-extrabold leading-tight mb-4"
          style={{ color: "var(--brand-color)", letterSpacing: "-0.02em" }}
        >
          MAHI JANI
        </h1>

        <h2
          className="text-sm sm:text-base md:text-[18px] font-medium text-gray-600 uppercase tracking-[0.3em]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          UI / UX DESIGNER
        </h2>
      </div>

      {/* ===== SCROLL CAPSULE ===== */}
      <div
        className="relative flex flex-col items-center justify-center rounded-full bg-[#f4f4f4] mb-16 sm:mb-20"
        style={{
          width: "120px",
          height: "280px",
          boxShadow: "inset 0 0 0 2px #e5e5e5",
        }}
      >
        {/* ===== Rotating Circular Text ===== */}
        <div
          className="absolute left-1/2 top-[105px]"
          style={{
            width: 100,
            height: 100,
            transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
            transformOrigin: "center center",
            transition: "transform 0.08s linear",
          }}
        >
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full"
            style={{ transform: "rotate(-90deg)" }}
          >
            <defs>
              <path
                id="circlePath"
                d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0"
              />
            </defs>
            <text
              fill="#444"
              fontSize="11"
              fontWeight="600"
              letterSpacing="2"
              textAnchor="middle"
            >
              <textPath href="#circlePath" startOffset="50%">
                SCROLL DOWN • SCROLL DOWN • SCROLL DOWN •
              </textPath>
            </text>
          </svg>
        </div>

        {/* ===== Arrow Button ===== */}
        <div
          className="absolute left-1/2 top-[105px] flex items-center justify-center rounded-full text-white"
          style={{
            transform: "translate(-50%, -50%)",
            width: "46px",
            height: "46px",
            background: "var(--brand-color)",
            boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
          }}
        >
          <FaArrowDownLong size={18} />
        </div>

        {/* ===== Profile Circle ===== */}
        <div
          className="absolute bottom-[18px] left-1/2 rounded-full overflow-hidden"
          style={{
            transform: "translateX(-50%)",
            width: "100px",
            height: "100px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
          }}
        >
          <img
            src="/assets/pro.webp"
            alt="Mahi Jani"
            className="absolute object-cover"
            style={{
              width: "200%",
              height: "auto",
              top: "80%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      </div>

      {/* ===== INTRO TEXT ===== */}
      <div className="max-w-3xl mx-auto mb-10 px-6">
        <h1 className="text-[30px] sm:text-[40px] md:text-[50px] font-extrabold text-gray-900 leading-snug">
          Hi! My name is{" "}
          <span style={{ color: "var(--brand-color)" }}>Mahi</span>,
        </h1>
        <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-semibold text-gray-900 mt-1">
          I’m a{" "}
          <span style={{ color: "var(--brand-color)" }}>UI/UX Designer</span>{" "}
          based in Anand.
        </h2>
      </div>

      {/* ===== QUOTE ICON ===== */}
      <div
        className="flex items-center justify-center mb-10"
        style={{
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          backgroundColor: "var(--brand-color)",
        }}
      >
        <FaQuoteLeft size={20} color="#fff" />
      </div>

      {/* ===== PARAGRAPH ===== */}
      <div className="max-w-2xl mx-auto text-gray-500 text-[15px] sm:text-[16px] leading-relaxed mb-8 px-6">
        <p className="mb-3">
          I am a passionate and dedicated UI/UX designer with a strong focus on
          creating exceptional user experiences. I thrive on transforming
          complex ideas into intuitive and visually appealing designs.
        </p>
        <p>
          With a keen eye for detail and a user-centered approach, I strive to
          deliver impactful solutions that engage and delight users.
        </p>
      </div>

      {/* ===== SIGNATURE ===== */}
      <div className="mt-4 mb-16 sm:mb-20">
        <img
          src="/assets/sign.webp"
          alt="Signature"
          className="h-20  mx-auto opacity-90"
        />
      </div>

      {/* ===== SERVICES SECTION ===== */}
      <div className="max-w-6xl mx-auto mb-24 px-6">
        <div className="relative flex items-center justify-center mb-12">
          <span
            className="absolute left-0 w-16 sm:w-20 h-[2px]"
            style={{ backgroundColor: "var(--brand-color)" }}
          ></span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 uppercase tracking-wider">
            Services
          </h2>
          <span
            className="absolute right-0 w-16 sm:w-20 h-[2px]"
            style={{ backgroundColor: "var(--brand-color)" }}
          ></span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center px-4 sm:px-6 py-10 rounded-lg hover:bg-gray-50 transition-all duration-300"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full bg-gray-100 mb-6">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-xs">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-16 sm:py-20 md:py-28">
        {/* ===== Section Title ===== */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-16">
          <span
            className="block h-[2px] w-12 sm:w-20"
            style={{ backgroundColor: "var(--brand-color)" }}
          ></span>
          <h2 className="text-xl sm:text-3xl font-bold text-gray-900 uppercase tracking-wider">
            Language Skills
          </h2>
          <span
            className="block h-[2px] w-12 sm:w-20"
            style={{ backgroundColor: "var(--brand-color)" }}
          ></span>
        </div>

        {/* ===== Progress Circles ===== */}
        <div className="flex flex-wrap justify-center gap-10 sm:gap-14 md:gap-16">
          {languages.map((lang, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
            >
              <svg
                viewBox="0 0 100 100"
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="#e5e7eb"
                  strokeWidth="6"
                  fill="none"
                />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="var(--brand-color)"
                  strokeWidth="6"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 42}
                  strokeDashoffset={2 * Math.PI * 42}
                  animate={{
                    strokeDashoffset: 2 * Math.PI * 42 * (1 - lang.level / 100),
                  }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
                <text
                  x="50"
                  y="55"
                  textAnchor="middle"
                  fontSize="13"
                  fontWeight="700"
                  fill="#111"
                >
                  {lang.level}%
                </text>
              </svg>

              <p className="mt-3 text-base sm:text-lg font-semibold text-gray-900">
                {lang.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ===== CONTACT CTA ===== */}
      <div className="w-full border-t border-gray-200 mt-10 pt-20 pb-24 px-6">
        <div className="relative flex items-center justify-center mb-14">
          <span
            className="absolute left-0 w-16 sm:w-20 h-[2px]"
            style={{ backgroundColor: "var(--brand-color)" }}
          ></span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 uppercase tracking-wider">
            Contact
          </h2>
          <span
            className="absolute right-0 w-16 sm:w-20 h-[2px]"
            style={{ backgroundColor: "var(--brand-color)" }}
          ></span>
        </div>

        <div className="flex flex-col items-center justify-center text-center space-y-8">
          <h3 className="text-[22px] sm:text-[28px] md:text-[32px] font-semibold text-gray-900 max-w-2xl leading-snug">
            Ready to bring your ideas to life?{" "}
            <span style={{ color: "var(--brand-color)" }}>
              I'm here to help.
            </span>
          </h3>

          <a
            href="mailto:janimahi561@gmail.com"
            className="
              relative px-10 sm:px-12 py-3 sm:py-4 text-[14px] sm:text-[15px] font-semibold uppercase tracking-widest
              rounded-md border-2 transition-all duration-300
              text-[var(--brand-color)] border-[var(--brand-color)]
              hover:text-white hover:bg-[var(--brand-color)]
              shadow-sm hover:shadow-[0_8px_20px_rgba(176,71,130,0.3)]
            "
            style={{
              letterSpacing: "0.15em",
            }}
          >
            Contact Me
          </a>
        </div>
      </div>

      <Footer />
    </section>
  );
}
