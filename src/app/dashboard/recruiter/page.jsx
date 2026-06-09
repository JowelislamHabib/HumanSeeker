import DashboardStats from "@/components/dashboard/DashboardStats";
import RecentProposals from "@/components/dashboard/RecentProposal";
import TopCompanies from "@/components/dashboard/TopCompanies";

const RecruiterDashboard = () => {
  return (
    <div className="flex flex-col gap-6 w-full pb-8">
      <h1 className="text-3xl font-bold tracking-tight text-foreground">
        Dashboard
      </h1>
      <DashboardStats />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentProposals />
        </div>
        <div className="lg:col-span-1">
          <TopCompanies />
        </div>
      </div>
    </div>
  );
};

export default RecruiterDashboard;
