import { basePath } from "@/utils/EnvConfig";

export const getCompanyJobs = async (companyId, status = "active") => {
  const res = await fetch(
    `${basePath}/api/jobs?companyId=${companyId}&status=${status}`,
  );
  return res.json();
};
