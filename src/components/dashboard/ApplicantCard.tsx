import { useDispatch } from 'react-redux';
import type { Applicant } from '../../data/mockApplicants';
import { shortlistApplicant, rejectApplicant } from '../../store/applicantsSlice';

export default function ApplicantCard({ applicant }: { applicant: Applicant }) {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-[20px] p-5 shadow-[14px_41px_100px_0px_rgba(49,89,211,0.05)] border border-[#F6F4FF]">
      <p className="text-[#52B4DA] text-xs font-bold uppercase tracking-wider mb-3">Cover Letter Video</p>
      
      {/* Video Thumbnail Placeholder mapped to the design */}
      <div className="relative w-full h-[160px] rounded-2xl overflow-hidden mb-4 bg-gray-200">
        <img 
          src={applicant.thumbnailUrl || "/assets/81e6760bf2d30fbba3e24c65f7f345497900298d.png"} 
          alt="Video Thumbnail" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Play Button Overlay */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
             <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center pl-1">
               <svg width="12" height="14" viewBox="0 0 12 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#11142D]"><path d="M2 2v10l8-5-8-5z" fill="currentColor"/></svg>
             </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="text-[#808191] text-xs font-medium mb-1">{applicant.name}</p>
          <h3 className="text-[#11142D] text-lg font-bold" style={{ fontFamily: 'Poppins' }}>{applicant.role}</h3>
        </div>
        <div className="text-right">
          <p className="text-[#52B4DA] text-sm font-semibold">${applicant.hourlyRateMin} - ${applicant.hourlyRateMax}</p>
          <p className="text-[#808191] text-[10px]">per hour</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {applicant.skills.map(skill => (
          <span key={skill} className="bg-[#1E3E85] text-white text-[10px] px-3 py-1.5 rounded-full font-medium">
            {skill}
          </span>
        ))}
      </div>

      <div className="flex gap-4">
        <button 
          onClick={() => dispatch(shortlistApplicant(applicant.id))}
          className="flex-1 bg-[#24C16B] hover:bg-[#1fa95e] text-white py-3 rounded-xl text-sm font-bold transition flex items-center justify-center gap-2 shadow-sm"
        >
          <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 5L5 9L13 1" /></svg>
          Shortlist
        </button>
        <button 
          onClick={() => dispatch(rejectApplicant(applicant.id))}
          className="flex-1 bg-[#EB5757] hover:bg-[#d64f4f] text-white py-3 rounded-xl text-sm font-bold transition flex items-center justify-center gap-2 shadow-sm"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 1L11 11M11 1L1 11" /></svg>
          Reject
        </button>
      </div>
    </div>
  );
}
