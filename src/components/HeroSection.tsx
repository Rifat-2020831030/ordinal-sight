export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "704px", background: "#ffffff" }}
      aria-label="Hero section"
    >
      {/* Background container scaled and centered at 1440px wide */}
      <div
        className="absolute left-1/2 top-0 w-full  h-[704px] -translate-x-1/2 pointer-events-none overflow-hidden"
        style={{ zIndex: 1 }}
      >
        {/* Light Blue Background Wave */}
        <img
          src="/assets/hero-bg-light.svg"
          className="absolute top-0 left-0 w-full h-full object-fill"
          style={{ minWidth: "1439px" }}
          alt=""
        />
        {/* Dark Blue Background Wave */}
        <img
          src="/assets/hero-bg-dark.svg"
          className="absolute top-0 left-0 w-full h-full object-fill"
          style={{ minWidth: "1440px" }}
          alt=""
        />

        {/* Ellipses container masked by the dark blue background curve */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            maskImage: "url('/assets/hero-bottom-ellipse-mask.svg')",
            maskSize: "100% 100%",
            maskRepeat: "no-repeat",
            WebkitMaskImage: "url('/assets/hero-bottom-ellipse-mask.svg')",
            WebkitMaskSize: "100% 100%",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          {/* Top-left Ellipse */}
          <img
            src="/assets/hero-top-ellipse-fill.svg"
            className="absolute left-[-6px] top-[-367px] w-[524px] h-[524px] max-w-none"
            alt=""
          />
          {/* Bottom-right Ellipse */}
          <img
            src="/assets/hero-bottom-ellipse-fill.svg"
            className="absolute left-[632px] top-[372px] w-[524px] h-[524px] max-w-none"
            alt=""
          />
        </div>
      </div>

      {/* Content wrapper */}
      <div className="relative z-10  mx-auto px-6 lg:px-[200px] pt-[225px] pb-[160px] flex flex-col items-center justify-center text-center">
        {/* Text Container */}
        <div className="max-w-[1040px] w-full flex flex-col items-center">
          {/* Title */}
          <div className="hero-title w-full">
            <h1
              className="text-white font-bold m-0"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: "clamp(32px, 4.5vw, 53px)",
                lineHeight: "clamp(42px, 6vw, 68px)",
              }}
            >
              RemoteRecruit’s Difference
            </h1>
          </div>

          {/* Subtitle */}
          <div className="hero-subtitle mt-6 lg:mt-8 max-w-[800px] w-full">
            <p
              className="text-white m-0 opacity-80"
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 500,
                fontSize: "clamp(15px, 2vw, 20px)",
                lineHeight: "clamp(26px, 3vw, 32px)",
              }}
            >
              RemoteRecruit is connecting the world with an easy-to-use platform
              that lets full-time, part-time, and freelance workers showcase
              their talents to businesses that need them. With no paywalls, no
              fees, and no barriers, there’s nothing but you, your talents, and
              the next step in your career.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
