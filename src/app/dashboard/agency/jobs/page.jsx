import { getCompanyJobs } from "@/lib/api/job";

const AgenciesJobsPage = async () => {
  const companyId = "c_3";
  const jobs = await getCompanyJobs(companyId);
  console.log("jobs data", jobs);
  return <div>This is a Agencies job page</div>;
};

export default AgenciesJobsPage;
