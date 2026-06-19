
export default function ApplicantHeader() {
  return (
    <header className="flex flex-col gap-6 mb-8 mt-4">
      <div>
        <p className="text-[#808191] font-medium text-sm mb-1" style={{ fontFamily: 'Poppins' }}>Welcome Bungie</p>
        <h1 className="text-3xl md:text-4xl font-bold text-[#11142D]" style={{ fontFamily: 'Poppins' }}>Job Applicants</h1>
      </div>
      
      <div className="bg-white border border-[#F6F4FF] rounded-2xl p-5 md:p-6 flex items-center gap-4 shadow-[14px_41px_100px_0px_rgba(49,89,211,0.05)] w-full">
        <div className="w-12 h-12 rounded-xl bg-[#F4F7FE] flex items-center justify-center flex-shrink-0">
          <img src="/assets/bungie_logo.png" alt="Bungie" className="w-8 h-8 object-contain" />
        </div>
        <div className="flex-1">
          <p className="text-[#808191] text-[10px] font-bold uppercase tracking-wider mb-1">Your Job Post</p>
          <p className="text-[#11142D] text-sm font-semibold" style={{ fontFamily: 'Poppins' }}>Senior UI/UX Designer needed for ongoing support</p>
        </div>
        <button className="w-8 h-8 flex items-center justify-center text-[#52B4DA] hover:bg-[#F4F7FE] rounded-lg transition" aria-label="Edit Job Post">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
        </button>
      </div>
    </header>
  );
}
