import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import ApplicantCard from './ApplicantCard';

export default function ApplicantGrid() {
  const applicants = useSelector((state: RootState) => state.applicants.items);
  const activeCategory = useSelector((state: RootState) => state.applicants.activeCategory);
  const filters = useSelector((state: RootState) => state.applicants.filters);

  // Filter based on active category and panel filters
  const filteredApplicants = applicants.filter(app => {
    // 1. Category Filter
    if (activeCategory === 'new' && app.status !== 'new') return false;
    if (activeCategory === 'invites' && app.status !== 'new') return false; 
    if (activeCategory !== 'new' && activeCategory !== 'invites' && app.status !== activeCategory) return false;

    // 2. Pay Filter
    if (filters.payType === 'hourly' || filters.payType === 'both') {
      if (filters.maxHourlyRate && app.hourlyRateMax > filters.maxHourlyRate) return false;
    }

    return true;
  });

  // Sort based on sortPayBy
  if (filters.sortPayBy === 'ascending') {
    filteredApplicants.sort((a, b) => a.hourlyRateMin - b.hourlyRateMin);
  } else if (filters.sortPayBy === 'descending') {
    filteredApplicants.sort((a, b) => b.hourlyRateMax - a.hourlyRateMax);
  }

  return (
    <div className="flex-1">
      {/* Top controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <span className="text-[#808191] text-sm">View</span>
          <div className="bg-white border border-[#E4E4E4] rounded-lg px-3 py-1 flex items-center gap-2 cursor-pointer shadow-sm">
            <span className="text-sm font-semibold">25</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 3.75L5 6.25L7.5 3.75" /></svg>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="text-[#808191] text-sm">Sort by</span>
          <div className="bg-white border border-[#E4E4E4] rounded-lg px-3 py-1 flex items-center gap-2 cursor-pointer shadow-sm">
            <span className="text-sm font-semibold">All</span>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 3.75L5 6.25L7.5 3.75" /></svg>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
        {filteredApplicants.map(applicant => (
          <ApplicantCard key={applicant.id} applicant={applicant} />
        ))}
        {filteredApplicants.length === 0 && (
          <div className="col-span-full py-12 text-center text-gray-500">
            No applicants found in this category.
          </div>
        )}
      </div>

      {/* Pagination */}
      {filteredApplicants.length > 0 && (
        <div className="flex justify-center items-center gap-2 mt-10">
          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-[#808191] hover:bg-white">&lt;</button>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center font-semibold text-white bg-[#52B4DA]">1</button>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center font-medium text-[#11142D] hover:bg-white">2</button>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center font-medium text-[#11142D] hover:bg-white">3</button>
          <span className="text-[#808191]">...</span>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center font-medium text-[#11142D] hover:bg-white">7</button>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-[#11142D] hover:bg-white">&gt;</button>
        </div>
      )}
    </div>
  );
}
