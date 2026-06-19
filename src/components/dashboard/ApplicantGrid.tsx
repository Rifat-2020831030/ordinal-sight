import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../../store';
import { updateFilter } from '../../store/applicantsSlice';
import ApplicantCard from './ApplicantCard';

/* ─── reusable dropdown ─── */
function Dropdown<T extends string | number>({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: T;
  options: { label: string; value: T }[];
  onChange: (val: T) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const current = options.find(o => o.value === value)?.label ?? String(value);

  return (
    <div className="flex items-center gap-2">
      <span className="text-[#808191] text-sm" style={{ fontFamily: 'Poppins' }}>{label}</span>
      <div className="relative" ref={ref}>
        <button
          onClick={() => setOpen(v => !v)}
          className="bg-white border border-[#E4E4E4] rounded-lg px-3 py-1.5 flex items-center gap-2 shadow-sm hover:border-[#52B4DA] transition-colors"
          style={{ fontFamily: 'Poppins' }}
        >
          <span className="text-sm font-semibold text-[#11142D]">{current}</span>
          <svg
            width="10" height="10" viewBox="0 0 10 10" fill="none"
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
            style={{ transition: 'transform 0.2s', transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
          >
            <path d="M2.5 3.75L5 6.25L7.5 3.75" />
          </svg>
        </button>

        {open && (
          <div
            className="absolute right-0 mt-1 bg-white border border-[#F0EFFF] rounded-xl shadow-[0_8px_32px_rgba(49,89,211,0.12)] z-50 overflow-hidden"
            style={{ minWidth: '140px' }}
          >
            {options.map(opt => (
              <button
                key={String(opt.value)}
                onClick={() => { onChange(opt.value); setOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-[#F4F7FE] ${
                  opt.value === value
                    ? 'font-semibold text-[#52B4DA] bg-[#F4F7FE]'
                    : 'font-medium text-[#11142D]'
                }`}
                style={{ fontFamily: 'Poppins' }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

type SortKey = 'newest' | 'name_asc' | 'name_desc' | 'rate_asc' | 'rate_desc';

const SORT_OPTIONS: { label: string; value: SortKey }[] = [
  { label: 'Newest',    value: 'newest' },
  { label: 'Name A→Z', value: 'name_asc' },
  { label: 'Name Z→A', value: 'name_desc' },
  { label: 'Rate ↑',   value: 'rate_asc' },
  { label: 'Rate ↓',   value: 'rate_desc' },
];

const VIEW_OPTIONS = [
  { label: '10', value: 10 },
  { label: '25', value: 25 },
  { label: '50', value: 50 },
  { label: 'All', value: 9999 },
];

export default function ApplicantGrid() {
  const dispatch = useDispatch();
  const applicants    = useSelector((state: RootState) => state.applicants.items);
  const activeCategory = useSelector((state: RootState) => state.applicants.activeCategory);
  const filters       = useSelector((state: RootState) => state.applicants.filters);

  /* ── 1. Filter by category & pay ── */
  let result = applicants.filter(app => {
    if (activeCategory === 'new'        && app.status !== 'new') return false;
    if (activeCategory === 'invites'    && app.status !== 'new') return false;
    if (activeCategory !== 'new' && activeCategory !== 'invites' && app.status !== activeCategory) return false;

    if ((filters.payType === 'hourly' || filters.payType === 'both') && filters.maxHourlyRate) {
      if (app.hourlyRateMax > filters.maxHourlyRate) return false;
    }
    if ((filters.payType === 'annual' || filters.payType === 'both') && filters.maxAnnualSalary) {
      if (app.annualSalary && app.annualSalary > filters.maxAnnualSalary) return false;
    }

    return true;
  });

  /* ── 2. Sort ── */
  result = [...result]; // don't mutate redux state copy
  switch (filters.sortBy) {
    case 'name_asc':  result.sort((a, b) => a.name.localeCompare(b.name)); break;
    case 'name_desc': result.sort((a, b) => b.name.localeCompare(a.name)); break;
    case 'rate_asc':  result.sort((a, b) => a.hourlyRateMin - b.hourlyRateMin); break;
    case 'rate_desc': result.sort((a, b) => b.hourlyRateMax - a.hourlyRateMax); break;
    case 'newest':
    default: break; // keep insertion order (newest first in mockData)
  }

  /* ── 3. Paginate by viewCount ── */
  const viewCount = filters.viewCount ?? 25;
  const displayed = result.slice(0, viewCount);

  return (
    <div className="flex-1">
      {/* Top controls */}
      <div className="flex items-center justify-between mb-6">
        <Dropdown
          label="View"
          value={viewCount}
          options={VIEW_OPTIONS}
          onChange={(val) => dispatch(updateFilter({ viewCount: val }))}
        />
        <Dropdown<SortKey>
          label="Sort by"
          value={(filters.sortBy as SortKey) ?? 'newest'}
          options={SORT_OPTIONS}
          onChange={(val) => dispatch(updateFilter({ sortBy: val }))}
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
        {displayed.map(applicant => (
          <ApplicantCard key={applicant.id} applicant={applicant} />
        ))}
        {displayed.length === 0 && (
          <div className="col-span-full py-12 text-center text-gray-500" style={{ fontFamily: 'Poppins' }}>
            No applicants found in this category.
          </div>
        )}
      </div>

      {/* Result count */}
      {result.length > 0 && (
        <p className="text-center text-xs text-[#808191] mt-4" style={{ fontFamily: 'Poppins' }}>
          Showing {Math.min(viewCount, result.length)} of {result.length} applicants
        </p>
      )}

      {/* Pagination */}
      {result.length > 0 && (
        <div className="flex justify-center items-center gap-2 mt-6">
          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-[#808191] hover:bg-white">&#8249;</button>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center font-semibold text-white bg-[#52B4DA]">1</button>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center font-medium text-[#11142D] hover:bg-white">2</button>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center font-medium text-[#11142D] hover:bg-white">3</button>
          <span className="text-[#808191]">...</span>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center font-medium text-[#11142D] hover:bg-white">7</button>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-[#11142D] hover:bg-white">&#8250;</button>
        </div>
      )}
    </div>
  );
}
