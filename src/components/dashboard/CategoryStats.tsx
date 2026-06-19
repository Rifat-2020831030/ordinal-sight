import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store';
import { setActiveCategory } from '../../store/applicantsSlice';

export default function CategoryStats() {
  const dispatch = useDispatch();
  const activeCategory = useSelector((state: RootState) => state.applicants.activeCategory);

  const categories = [
    { id: 'new', label: 'New Applicants', count: '+50 Individuals', icon: '/assets/Group.svg' },
    { id: 'invites', label: 'Invites', count: '50 Individuals', icon: '/assets/noun-mails-5651346 1.svg' },
    { id: 'shortlisted', label: 'Shortlisted', count: '50 Individuals', icon: '/assets/noun-selected-document-3165343 1.svg' },
    { id: 'rejected', label: 'Rejected', count: '50 Individuals', icon: '/assets/rejected_icon.svg' },
  ] as const;

  return (
    <div className="mb-8">
      <h2 className="text-[#52B4DA] text-xs font-bold uppercase tracking-wider mb-4">Key Categories:</h2>
      <div className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => dispatch(setActiveCategory(cat.id))}
              className={`flex-shrink-0 w-60 h-[100px] rounded-[14px] flex items-center gap-4 px-6 transition-all border ${
                isActive
                  ? 'bg-[#11142D] border-transparent shadow-[14px_41px_100px_0px_rgba(49,89,211,0.05)]'
                  : 'bg-white border-[#E4E4E4] hover:border-[#11142D]'
              }`}
            >
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                <img src={cat.icon} alt="" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="text-left">
                <p className={`font-semibold text-base mb-1 ${isActive ? 'text-white' : 'text-[#11142D]'}`} style={{ fontFamily: 'Poppins' }}>
                  {cat.label}
                </p>
                <p className={`text-xs ${isActive ? 'text-[#00B67A]' : 'text-[#808191]'}`}>
                  {cat.count}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
