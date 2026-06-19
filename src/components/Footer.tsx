
export default function Footer() {
  return (
    <footer
      id="footer"
      className="relative w-full overflow-hidden"
      style={{
        minHeight: '569px',
        background: '#0d2060', // Fallback color
      }}
      aria-label="Footer"
    >
      {/* Background container scaled and centered at 1440px wide */}
      <div className="absolute left-1/2 top-0 w-full h-[634px] -translate-x-1/2 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
        <img
          src="/assets/footer-bg.svg"
          className="absolute top-0 left-0 w-full h-full object-fill"
          style={{ minWidth: '1440px' }}
          alt=""
        />
      </div>

      {/* Main content wrapper */}
      <div className="relative z-10 mx-auto min-h-[569px] w-full px-6 lg:px-[200px]">
        {/* Top Area (Desktop absolute / Mobile stacked) */}
        <div className="pt-[160px] lg:pt-[319px] pb-[40px] flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
          {/* Logo */}
          <a
            href="#"
            className="flex-shrink-0 transition-transform hover:scale-105"
            style={{ width: '184px', height: '74px' }}
            aria-label="RemoteRecruit home"
          >
            <img src="/assets/footer-logo.svg" className="w-full h-full object-contain" alt="RemoteRecruit Logo" />
          </a>

          {/* Social Icons */}
          <div className="flex items-center gap-3 lg:mt-[7px]">
            {/* Facebook */}
            <a href="#facebook" id="footer-facebook" className="transition-transform hover:-translate-y-1" aria-label="Facebook">
              <div
                className="w-[44px] h-[44px] rounded-full border border-white/12 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(235,237,255,0.15) 0%, rgba(173,184,255,0.15) 100%)' }}
              >
                <img src="/assets/footer-facebook.svg" className="w-[18px] h-[18px]" alt="" />
              </div>
            </a>

            {/* Twitter */}
            <a href="#twitter" id="footer-twitter" className="transition-transform hover:-translate-y-1" aria-label="Twitter">
              <div
                className="w-[44px] h-[44px] rounded-full border border-white/12 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(235,237,255,0.15) 0%, rgba(173,184,255,0.15) 100%)' }}
              >
                <img src="/assets/footer-twitter.svg" className="w-[18px] h-[18px]" alt="" />
              </div>
            </a>

            {/* LinkedIn */}
            <a href="#linkedin" id="footer-linkedin" className="transition-transform hover:-translate-y-1" aria-label="LinkedIn">
              <div
                className="w-[44px] h-[44px] rounded-full border border-white/12 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, rgba(235,237,255,0.15) 0%, rgba(173,184,255,0.15) 100%)' }}
              >
                <img src="/assets/footer-linkedin.svg" className="w-[18px] h-[18px]" alt="" />
              </div>
            </a>

            {/* Instagram */}
            <a href="#instagram" id="footer-instagram" className="transition-transform hover:-translate-y-1 relative" aria-label="Instagram">
              <div className="w-[44px] h-[44px] flex items-center justify-center relative">
                <img src="/assets/footer-insta-ellipse.svg" className="absolute inset-0 w-full h-full" alt="" />
                <img src="/assets/footer-insta-icon.svg" className="absolute w-[18px] h-[18px] z-10" style={{ left: '13px', top: '13px' }} alt="" />
              </div>
            </a>

            {/* GitHub */}
            <a href="#github" id="footer-github" className="transition-transform hover:-translate-y-1" aria-label="GitHub">
              <div className="w-[32px] h-[32px] flex items-center justify-center">
                <img src="/assets/footer-github.svg" className="w-full h-full" alt="" />
              </div>
            </a>

            {/* Dribbble */}
            <a href="#dribbble" id="footer-dribbble" className="transition-transform hover:-translate-y-1" aria-label="Dribbble">
              <div className="w-[32px] h-[32px] flex items-center justify-center">
                <img src="/assets/footer-dribbble.svg" className="w-full h-full" alt="" />
              </div>
            </a>
          </div>
        </div>

        {/* Divider & Centered Bottom Logo Icon */}
        <div className="absolute left-0 bottom-0 w-full" style={{ zIndex: 10 }}>
          {/* Divider Line */}
          <div
            className="w-full h-[1px] opacity-50"
            style={{ backgroundColor: '#8ba3cc' }}
          />

          {/* Centered RR Icon & Copyright */}
          <div className="py-6 flex flex-col items-center gap-4 bg-transparent">
            <a href="#" className="transition-transform hover:scale-105" aria-label="RemoteRecruit home scroll top">
              <img
                src="/assets/footer-rr-icon.svg"
                className="w-[40px] h-[32px] object-contain"
                alt="RR logo icon"
              />
            </a>
            <p
              className="m-0 text-center text-[14px]"
              style={{
                fontFamily: 'Poppins, sans-serif',
                color: 'rgba(255,255,255,0.45)',
              }}
            >
              © {new Date().getFullYear()} RemoteRecruit. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
