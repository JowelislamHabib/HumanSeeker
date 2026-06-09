import { basePath } from "@/utils/EnvConfig";
import { serverFetch } from "../core/server";

export const getCompanyJobs = async (companyId = "", status = "active") => {
  const companyQuery = companyId ? `companyId=${companyId}&` : "";
  return serverFetch(`/api/jobs?${companyQuery}status=${status}`);
};

export const getJobs = async () => {
  return serverFetch('/api/jobs');
};

export const getJobById = async (jobId) => {
  return serverFetch(`/api/jobs/${jobId}`);
};
