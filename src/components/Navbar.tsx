import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isWhiteBg = scrolled;

  return (
    <nav
      id="navbar"
      className={`navbar transition-all duration-300 ${
        scrolled ? "scrolled py-2" : "pt-[29px]"
      }`}
      role="navigation"
      aria-label="Main navigation"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        // When not scrolled, navbar sits at top-[29px] of the viewport.
        transform: scrolled ? "none" : "translateY(0)",
      }}
    >
      <div className=" mx-auto px-6 lg:px-[51px] h-[44px] flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="flex-shrink-0 transition-transform hover:scale-105"
          style={{ width: "110px", height: "44px" }}
          aria-label="RemoteRecruit home"
        >
          <Logo variant={isWhiteBg ? "color" : "white"} />
        </a>

        {/* Desktop action buttons */}
        <div className="hidden md:flex items-center gap-6">
          <a
            href="#signin"
            className={`font-semibold text-[14px] tracking-[0.4px] transition-colors duration-200 no-underline ${
              isWhiteBg
                ? "text-[#1e3e85] hover:text-[#52B4DA]"
                : "text-[#f5f7fe] hover:text-[#52B4DA]"
            }`}
            id="nav-signin"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Sign In
          </a>
          <a
            href="#signup"
            className="flex items-center justify-center font-semibold text-[14px] tracking-[0.4px] text-[#f5f7fe] hover:opacity-90 no-underline transition-all duration-200"
            id="nav-signup"
            style={{
              width: "102px",
              height: "38px",
              borderRadius: "16px",
              backgroundColor: "rgba(77, 168, 204, 0.9)",
              fontFamily: "Poppins, sans-serif",
            }}
          >
            Sign Up
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 cursor-pointer bg-transparent border-none focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          id="mobile-menu-btn"
        >
          <span
            className={`block w-6 h-[2px] transition-all duration-300 rounded ${
              isWhiteBg ? "bg-[#1E3E85]" : "bg-white"
            } ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
          />
          <span
            className={`block w-6 h-[2px] transition-all duration-300 rounded ${
              isWhiteBg ? "bg-[#1E3E85]" : "bg-white"
            } ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-[2px] transition-all duration-300 rounded ${
              isWhiteBg ? "bg-[#1E3E85]" : "bg-white"
            } ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{
          background: "rgba(255, 255, 255, 0.98)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(0,0,0,0.05)",
        }}
        id="mobile-menu"
      >
        <div className="px-6 py-6 flex flex-col gap-4">
          <a
            href="#signin"
            className="text-center py-3 rounded-full font-semibold text-[#1e3e85] border border-[#1e3e85]/20 no-underline transition-colors hover:bg-gray-50"
            onClick={() => setMenuOpen(false)}
          >
            Sign In
          </a>
          <a
            href="#signup"
            className="text-center py-3 rounded-[16px] font-semibold text-white no-underline transition-opacity hover:opacity-90"
            style={{ backgroundColor: "rgba(77, 168, 204, 0.9)" }}
            onClick={() => setMenuOpen(false)}
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
}
