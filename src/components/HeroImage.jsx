import React from "react";
import { useEffect, useRef, useState } from "react";

const HeroImage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);
  const currentTilt = useRef({ x: 0, y: 0 });

  // ===== Scroll Progress (Optimized) =====
  useEffect(() => {
    const main = document.querySelector("main");
    if (!main) return;

    const handleScroll = () => {
      const scrollTop = main.scrollTop;
      const scrollHeight = main.scrollHeight - main.clientHeight;
      const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setScrollProgress(Math.min(Math.max(progress, 0), 100));
    };

    handleScroll(); // initialize once
    main.addEventListener("scroll", handleScroll);
    return () => main.removeEventListener("scroll", handleScroll);
  }, []);

  // ===== Parallax Hover Motion =====
  useEffect(() => {
    let animationFrame;
    const animate = () => {
      currentTilt.current.x += (tilt.x - currentTilt.current.x) * 0.08;
      currentTilt.current.y += (tilt.y - currentTilt.current.y) * 0.08;
      animationFrame = requestAnimationFrame(animate);
    };
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [tilt]);

  const handleMouseMove = (e) => {
    const rect = heroRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        fixed top-0 right-0
        w-[25vw]
        h-screen
        flex items-center justify-center
        overflow-hidden
        border-l border-gray-200
        z-30
      "
      style={{
        perspective: "1400px",
        backgroundImage: "url('/assets/bg-hero.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transformStyle: "preserve-3d",
      }}
    >
      {/* ==== Overlay ==== */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)",
          mixBlendMode: "overlay",
          zIndex: 0,
        }}
      ></div>

      {/* ==== Background Depth Layer ==== */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(176,71,130,0.2), rgba(122,45,88,0.2))",
          transform: `translate3d(${currentTilt.current.x * -40}px, ${
            currentTilt.current.y * -40
          }px, -80px) scale(1.05)`,
          transition: "transform 0.1s linear",
          zIndex: 1,
        }}
      ></div>

      {/* ==== Subject Image (Main Layer) ==== */}
      <img
        src="/assets/sub.webp"
        alt="Profile"
        className="absolute rounded-xl shadow-2xl object-cover"
        style={{
          height: "100%",
          transform: `
            translate3d(${currentTilt.current.x * 20}px, calc(${
            currentTilt.current.y * 20
          }px + 40px), 60px)
            rotateY(${currentTilt.current.x * 10}deg)
            rotateX(${currentTilt.current.y * -10}deg)
            scale(1.05)
          `,
          transition: "transform 0.1s linear",
          zIndex: 3,
        }}
      />

      {/* ==== Floating Elements ==== */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate3d(${currentTilt.current.x * 60}px, ${
            currentTilt.current.y * 60
          }px, 150px)`,
          transition: "transform 0.1s linear",
          zIndex: 4,
        }}
      >
        {/* Glow Dots */}
        <div
          className="absolute w-6 h-6 rounded-full blur-md opacity-70"
          style={{ top: "25%", left: "30%", background: "var(--brand-color)" }}
        ></div>
        <div
          className="absolute w-4 h-4 rounded-full blur-sm opacity-70"
          style={{
            top: "65%",
            right: "25%",
            background: "var(--brand-color-light)",
          }}
        ></div>
        <div
          className="absolute w-5 h-5 rounded-full blur-sm opacity-60"
          style={{
            bottom: "15%",
            left: "40%",
            background: "var(--brand-color-dark)",
          }}
        ></div>

        {/* Floating Icons */}
        <img
          src="/assets/figma.webp"
          alt="Figma"
          className="absolute"
          style={{
            top: "20%",
            right: "18%",
            width: "70px",
            height: "70px",
            transform: "rotate(-10deg) scale(1.05)",
            filter:
              "drop-shadow(0 0 15px rgba(176,71,130,0.6)) drop-shadow(0 4px 6px rgba(0,0,0,0.3))",
            zIndex: 5,
          }}
        />
        <img
          src="/assets/photo.webp"
          alt="Photoshop"
          className="absolute"
          style={{
            bottom: "25%",
            left: "20%",
            width: "60px",
            height: "60px",
            transform: "rotate(8deg) scale(1.05)",
            filter:
              "drop-shadow(0 0 15px rgba(176,71,130,0.4)) drop-shadow(0 4px 6px rgba(0,0,0,0.25))",
            zIndex: 1,
          }}
        />
        <img
          src="/assets/illustrator.webp"
          alt="Illustrator"
          className="absolute"
          style={{
            top: "55%",
            left: "55%",
            width: "60px",
            height: "60px",
            transform: "rotate(-5deg) scale(1.05)",
            filter:
              "drop-shadow(0 0 12px rgba(176,71,130,0.5)) drop-shadow(0 3px 4px rgba(0,0,0,0.2))",
            zIndex: 7,
          }}
        />
      </div>

      {/* ==== Scroll Progress Bar ==== */}
      <div
        className="absolute left-3 top-0 bottom-0 w-[3px] bg-gray-200 rounded-full overflow-hidden"
        style={{ zIndex: 10 }}
      >
        <div
          className="w-full bg-[var(--brand-color)] rounded-full origin-top"
          style={{
            height: `${scrollProgress}%`,
            transition: "height 0.3s ease-out",
          }}
        ></div>
      </div>
    </div>
  );
};

export default HeroImage;
