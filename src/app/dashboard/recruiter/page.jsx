import DashboardStats from "@/components/dashboard/DashboardStats";
import RecentProposals from "@/components/dashboard/RecentProposal";
import TopCompanies from "@/components/dashboard/TopCompanies";

const RecruiterDashboard = () => {
  return (
    <div className="flex flex-col gap-10 lg:gap-14 w-full pb-24">
      <div className="flex flex-col gap-3 animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)]">
        <div className="rounded-full px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-accent/50 text-muted-foreground w-fit border border-border/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
          Recruiter Workspace
        </div>
        <h1 className="text-5xl md:text-6xl font-black font-heading text-foreground tracking-tight">
          Dashboard
        </h1>
      </div>
      
      <DashboardStats />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        <div className="lg:col-span-8 h-full">
          <RecentProposals />
        </div>
        <div className="lg:col-span-4 h-full">
          <TopCompanies />
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
