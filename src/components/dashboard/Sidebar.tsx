
const navItems = [
  { icon: '/assets/search (4) 1.svg', label: 'Find Candidates', path: '/find-candidates' },
  { icon: '/assets/job_post_icon.svg', label: 'Your Job Posts', path: '/dashboard', badge: 8, active: true },
  { icon: '/assets/account (5) 1.svg', label: 'Profile', path: '/profile' },
  { icon: '/assets/message_icon.svg', label: 'Messages', path: '/messages', badge: 23 },
  { icon: '/assets/setting_icon.svg', label: 'Settings', path: '/settings' },
  { icon: '/assets/question_mark_icon.svg', label: 'Help', path: '/help' },
];

export default function Sidebar() {
  return (
    <aside
      className="w-[232px] flex-shrink-0 h-screen sticky top-0 flex flex-col overflow-y-auto"
      style={{
        background: 'linear-gradient(180deg, #1D3461 0%, #1A2F5A 100%)',
        scrollbarWidth: 'none',
      }}
    >
      <style>{`aside::-webkit-scrollbar { display: none; }`}</style>

      {/* Logo */}
      <div className="flex flex-col items-center pt-10 pb-8 px-6">
        <img
          src="/assets/ae6337293b20a2cf8fde03374cf898dff51019ce.svg"
          alt="RR"
          className="w-12 h-12 mb-2"
        />
        <p className="text-white font-bold text-base tracking-wide" style={{ fontFamily: 'Poppins', letterSpacing: '0.04em' }}>RemoteRecruit</p>
      </div>

      {/* Nav Menu */}
      <nav className="px-4 flex-1">
        {navItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </nav>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Why You Should Try Premium card */}
      <div className="mx-4 mb-4">
        <div
          className="rounded-2xl p-5 relative overflow-hidden"
          style={{
            background: 'linear-gradient(134deg, #4A86D8 0%, #1D3461 100%)',
          }}
        >
          {/* Badge */}
          <img
            src="/assets/discount badge.png"
            alt=""
            className="absolute top-0 right-0 w-14 h-14 object-contain"
          />
          <h4
            className="text-white font-bold text-base leading-snug mb-4 relative z-10"
            style={{ fontFamily: 'Poppins' }}
          >
            Why You Should<br />Try Premium
          </h4>
          <button className="relative z-10 flex items-center gap-2 bg-white/10 hover:bg-white/20 transition px-4 py-2 rounded-full text-white text-sm font-semibold">
            <span className="w-7 h-7 rounded-full bg-white flex items-center justify-center">
              <img src="/assets/play.svg" alt="play" className="w-3 h-3 ml-0.5" />
            </span>
            Watch Video
          </button>
        </div>
      </div>

      {/* Basic Plan card */}
      <div className="mx-4 mb-4">
        <div
          className="rounded-2xl p-5"
          style={{ background: 'rgba(255,255,255,0.07)' }}
        >
          <h4 className="text-white font-bold text-lg mb-4" style={{ fontFamily: 'Poppins' }}>Basic</h4>

          <div className="mb-3">
            <div className="flex justify-between text-white/70 text-xs mb-1.5">
              <span>Free Messages</span>
              <span>1/5</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-1">
              <div className="h-1 rounded-full w-1/5" style={{ background: 'linear-gradient(90deg, #52B4DA, #4A86D8)' }} />
            </div>
          </div>

          <div className="mb-5">
            <div className="flex justify-between text-white/70 text-xs mb-1.5">
              <span>Free Invites</span>
              <span>1/5</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-1">
              <div className="h-1 rounded-full w-1/5" style={{ background: 'linear-gradient(90deg, #52B4DA, #4A86D8)' }} />
            </div>
          </div>

          <button
            className="w-full py-2.5 rounded-full text-[#1D3461] font-bold text-sm hover:opacity-90 transition"
            style={{ background: 'linear-gradient(90deg, #FFED43 0%, #F29939 100%)' }}
          >
            Upgrade
          </button>
          <p className="text-center text-[#FFB800] text-xs mt-3 cursor-pointer hover:underline">
            Why you should try premium?
          </p>
        </div>
      </div>

      {/* User Profile */}
      <div
        className="flex items-center gap-3 px-5 py-4 border-t cursor-pointer hover:bg-white/5 transition"
        style={{ borderColor: 'rgba(255,255,255,0.12)' }}
      >
        <img
          src="/assets/Ellipse 61.png"
          alt="Bungie"
          className="w-9 h-9 rounded-full object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <p className="text-white text-sm font-semibold truncate">Bungie</p>
          <p className="text-white/50 text-xs truncate">Premium</p>
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" />
        </svg>
      </div>
    </aside>
  );
}

function NavItem({
  icon,
  label,
  badge,
  active = false,
}: {
  icon: string;
  label: string;
  path: string;
  badge?: number;
  active?: boolean;
}) {
  return (
    <a
      href="#"
      className={`flex items-center gap-3 px-4 py-3 rounded-xl mb-1 transition-all ${
        active
          ? 'text-white'
          : 'text-white/55 hover:text-white/80 hover:bg-white/5'
      }`}
      style={active ? { background: 'rgba(255,255,255,0.12)' } : {}}
    >
      <span className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
        <img
          src={icon}
          alt=""
          className="w-full h-full object-contain"
          style={{
            filter: active
              ? 'brightness(0) invert(1)'
              : 'brightness(0) invert(1) opacity(0.55)',
          }}
        />
      </span>
      <span className="font-medium text-sm flex-1">{label}</span>
      {badge !== undefined && (
        <span
          className="text-white text-[10px] font-bold px-2 py-0.5 rounded-full min-w-[20px] text-center"
          style={{ background: '#52B4DA' }}
        >
          {badge}
        </span>
      )}
    </a>
  );
}
