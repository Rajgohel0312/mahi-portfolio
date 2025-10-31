export default function Footer() {
  return (
    <footer
      className="w-full border-t border-gray-200  mt-24 text-center"
      style={{ fontFamily: "var(--font-display)" }}
    >
      {/* Brand Line Accent */}
      <div
        className="w-16 h-[2px] mx-auto mb-6"
        style={{ backgroundColor: "var(--brand-color)" }}
      ></div>

      {/* Name */}
      <h3
        className="text-[20px] font-semibold mb-1"
        style={{ color: "var(--brand-color)" }}
      >
        Mahi Jani
      </h3>

      {/* Role */}
      <p className="text-gray-500 text-sm mb-4 tracking-wide">
        UI/UX Designer
      </p>

      {/* Divider */}
      <div className="w-10 h-[1px] mx-auto mb-4 bg-gray-200"></div>

      {/* Copyright */}
      <p className="text-gray-400 text-xs tracking-widest">
        © {new Date().getFullYear()} Mahi Jani · All Rights Reserved
      </p>
    </footer>
  );
}
