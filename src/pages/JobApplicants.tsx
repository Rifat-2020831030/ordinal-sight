import Sidebar from '../components/dashboard/Sidebar';
import ApplicantHeader from '../components/dashboard/ApplicantHeader';
import CategoryStats from '../components/dashboard/CategoryStats';
import ApplicantGrid from '../components/dashboard/ApplicantGrid';
import FilterPanel from '../components/dashboard/FilterPanel';

export default function JobApplicants() {
  return (
    <div className="h-screen bg-[#F4F7FE] flex overflow-hidden font-sans" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <Sidebar />
      <main className="flex-1 overflow-y-auto px-4 md:px-8 lg:px-12 py-8 relative">
        <ApplicantHeader />
        <CategoryStats />
        
        <div className="flex flex-col xl:flex-row gap-8">
          <ApplicantGrid />
          <div className="w-80 hidden xl:block flex-shrink-0">
             <FilterPanel />
          </div>
        </div>
      </main>
    </div>
  );
}
