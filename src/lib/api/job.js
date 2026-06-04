import { basePath } from "@/utils/EnvConfig";

export const getCompanyJobs = async (companyId = "", status = "active") => {
  const companyQuery = companyId ? `companyId=${companyId}&` : "";
  const res = await fetch(
    `${basePath}/api/jobs?${companyQuery}status=${status}`,
  );
  return res.json();
};
