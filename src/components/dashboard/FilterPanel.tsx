import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { updateFilter, resetFilters } from '../../store/applicantsSlice';

export default function FilterPanel() {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.applicants.filters);

  return (
    <div className="bg-white rounded-[24px] p-6 shadow-[14px_41px_100px_0px_rgba(49,89,211,0.05)] border border-[#F6F4FF] w-full">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-[#11142D] text-lg font-bold" style={{ fontFamily: 'Poppins' }}>Filter</h3>
      </div>

      <div className="space-y-6">
        {/* Pay Section */}
        <div>
          <div className="flex justify-between items-center mb-4 cursor-pointer">
            <h4 className="text-[#11142D] font-bold text-sm">Pay:</h4>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="#11142D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1.5L6 6.5L11 1.5" /></svg>
          </div>
          
          <label className="flex items-center gap-3 mb-3 cursor-pointer">
            <div className={`w-5 h-5 rounded border ${filters.payType === 'hourly' ? 'bg-[#52B4DA] border-[#52B4DA]' : 'border-[#E4E4E4]'} flex items-center justify-center`}>
              {filters.payType === 'hourly' && <svg width="10" height="8" viewBox="0 0 10 8" fill="none" stroke="white" strokeWidth="2"><path d="M1 4L3.5 6.5L9 1" /></svg>}
            </div>
            <input type="radio" className="hidden" checked={filters.payType === 'hourly'} onChange={() => dispatch(updateFilter({ payType: 'hourly' }))} />
            <span className="text-[#808191] text-sm">Hourly</span>
          </label>
          
          <input 
            type="number" 
            placeholder="Max Hourly Rate" 
            className="w-full bg-[#F4F7FE] border-none rounded-xl p-4 text-sm mb-4 outline-none text-[#11142D]"
            value={filters.maxHourlyRate || ''}
            onChange={(e) => dispatch(updateFilter({ maxHourlyRate: e.target.value ? Number(e.target.value) : null }))}
          />

          <h4 className="text-[#11142D] font-bold text-sm mb-3">Sort Pay By:</h4>
          <div className="relative mb-5">
             <select className="w-full bg-[#F4F7FE] border-none rounded-xl p-4 text-sm outline-none appearance-none text-[#11142D]">
               <option>Select Option</option>
             </select>
             <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
               <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="#808191" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1.5L6 6.5L11 1.5" /></svg>
             </div>
          </div>

          <label className="flex items-center gap-3 mb-3 cursor-pointer">
            <div className={`w-5 h-5 rounded border ${filters.payType === 'annual' ? 'bg-[#52B4DA] border-[#52B4DA]' : 'border-[#E4E4E4]'} flex items-center justify-center`}>
              {filters.payType === 'annual' && <svg width="10" height="8" viewBox="0 0 10 8" fill="none" stroke="white" strokeWidth="2"><path d="M1 4L3.5 6.5L9 1" /></svg>}
            </div>
            <input type="radio" className="hidden" checked={filters.payType === 'annual'} onChange={() => dispatch(updateFilter({ payType: 'annual' }))} />
            <span className="text-[#808191] text-sm font-bold text-[#11142D]">Annual Salary</span>
          </label>
          
          <input 
            type="number" 
            placeholder="Max Annual Salary" 
            className="w-full bg-[#F4F7FE] border-none rounded-xl p-4 text-sm mb-4 outline-none text-[#11142D]"
            value={filters.maxAnnualSalary || ''}
            onChange={(e) => dispatch(updateFilter({ maxAnnualSalary: e.target.value ? Number(e.target.value) : null }))}
          />

          <label className="flex items-center gap-3 mb-6 cursor-pointer">
            <div className={`w-5 h-5 rounded border ${filters.payType === 'both' ? 'bg-[#52B4DA] border-[#52B4DA]' : 'border-[#E4E4E4]'} flex items-center justify-center`}>
              {filters.payType === 'both' && <svg width="10" height="8" viewBox="0 0 10 8" fill="none" stroke="white" strokeWidth="2"><path d="M1 4L3.5 6.5L9 1" /></svg>}
            </div>
            <input type="radio" className="hidden" checked={filters.payType === 'both'} onChange={() => dispatch(updateFilter({ payType: 'both' }))} />
            <span className="text-[#11142D] text-sm font-bold">Both Hourly & Salary</span>
          </label>
        </div>

        {/* Sort Salary By */}
        <div>
           <div className="flex justify-between items-center mb-4 cursor-pointer">
            <h4 className="text-[#11142D] font-bold text-sm">Sort Salary By:</h4>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="#11142D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1.5L6 6.5L11 1.5" /></svg>
          </div>
          <div className="flex gap-4 mb-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <div className={`w-5 h-5 rounded border ${filters.sortPayBy === 'ascending' ? 'bg-[#52B4DA] border-[#52B4DA]' : 'border-[#E4E4E4]'} flex items-center justify-center`}>
                {filters.sortPayBy === 'ascending' && <svg width="10" height="8" viewBox="0 0 10 8" fill="none" stroke="white" strokeWidth="2"><path d="M1 4L3.5 6.5L9 1" /></svg>}
              </div>
              <input type="checkbox" className="hidden" checked={filters.sortPayBy === 'ascending'} onChange={() => dispatch(updateFilter({ sortPayBy: filters.sortPayBy === 'ascending' ? null : 'ascending' }))} />
              <span className="text-[#808191] text-sm">Ascending</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <div className={`w-5 h-5 rounded border ${filters.sortPayBy === 'descending' ? 'bg-[#52B4DA] border-[#52B4DA]' : 'border-[#E4E4E4]'} flex items-center justify-center`}>
                {filters.sortPayBy === 'descending' && <svg width="10" height="8" viewBox="0 0 10 8" fill="none" stroke="white" strokeWidth="2"><path d="M1 4L3.5 6.5L9 1" /></svg>}
              </div>
              <input type="checkbox" className="hidden" checked={filters.sortPayBy === 'descending'} onChange={() => dispatch(updateFilter({ sortPayBy: filters.sortPayBy === 'descending' ? null : 'descending' }))} />
              <span className="text-[#808191] text-sm">Descending</span>
            </label>
          </div>
        </div>

        {/* Language */}
        <div>
          <h4 className="text-[#11142D] font-bold text-sm mb-3">Language:</h4>
          <div className="relative mb-6">
             <select className="w-full bg-[#F4F7FE] border-none rounded-xl p-4 text-sm outline-none appearance-none text-[#11142D]" defaultValue="">
               <option value="" disabled>Select Language</option>
               <option value="en">English</option>
               <option value="es">Spanish</option>
               <option value="fr">French</option>
             </select>
             <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
               <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="#808191" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1.5L6 6.5L11 1.5" /></svg>
             </div>
          </div>
        </div>

        {/* Countries */}
        <div>
          <h4 className="text-[#11142D] font-bold text-sm mb-3">Countries:</h4>
          <div className="w-full bg-[#F4F7FE] border-none rounded-xl p-2 min-h-[56px] flex flex-wrap gap-2 items-center mb-6">
            <div className="bg-white px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-sm border border-[#E4E4E4]">
              <span className="text-[#11142D] text-sm font-semibold">United States</span>
              <button className="text-[#808191] hover:text-[#11142D]">×</button>
            </div>
          </div>
        </div>

        <hr className="border-[#F6F4FF]" />

        {/* AI Ranking */}
        <div>
          <p className="text-[#FFB800] text-sm font-bold mb-4">Upgrade to Premium to Access</p>
          <div className="flex justify-between items-center mb-6">
            <h4 className="text-[#11142D] font-bold text-sm flex items-center gap-2">
              AI Ranking <span className="text-xl">👑</span>
            </h4>
            <button 
              className={`w-11 h-6 rounded-full relative transition-colors ${filters.aiRanking ? 'bg-[#52B4DA]' : 'bg-[#E4E4E4]'}`}
              onClick={() => dispatch(updateFilter({ aiRanking: !filters.aiRanking }))}
            >
              <div className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${filters.aiRanking ? 'left-6' : 'left-1'}`} />
            </button>
          </div>

          <div className={`transition-opacity ${!filters.aiRanking ? 'opacity-50 pointer-events-none' : ''}`}>
            <div className="mb-6 relative">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-[#11142D] font-bold text-sm">English Proficiency</h4>
                <span className="text-[#11142D] font-bold text-sm">{filters.englishProficiency}%</span>
              </div>
              <input 
                type="range" 
                className="w-full h-1 bg-[#E4E4E4] rounded-full appearance-none outline-none"
                value={filters.englishProficiency}
                onChange={(e) => dispatch(updateFilter({ englishProficiency: Number(e.target.value) }))}
              />
              <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-[#FFED43] text-[#1E3E85] text-xs font-bold px-3 py-1 rounded-lg shadow-sm whitespace-nowrap">
                Customize Ranking Filter
              </div>
            </div>

            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h4 className="text-[#11142D] font-bold text-sm">Experience Match</h4>
                <span className="text-[#11142D] font-bold text-sm">{filters.experienceMatch}%</span>
              </div>
              <input 
                type="range" 
                className="w-full h-1 bg-[#E4E4E4] rounded-full appearance-none outline-none"
                value={filters.experienceMatch}
                onChange={(e) => dispatch(updateFilter({ experienceMatch: Number(e.target.value) }))}
              />
            </div>
          </div>

          <a href="#" className="text-[#FFB800] text-sm font-bold flex items-center gap-1 mb-8">
            Why AI Ranking <span className="w-4 h-4 rounded-full border border-[#FFB800] flex items-center justify-center text-[10px]">?</span>
          </a>
        </div>

        <button 
          onClick={() => dispatch(resetFilters())}
          className="text-[#EB5757] font-bold text-sm w-full text-left"
        >
          Reset all filters
        </button>

      </div>
    </div>
  );
}
