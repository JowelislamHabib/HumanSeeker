import { serverFetch } from "../core/server";

export const getApplicationsByApplicant = async (applicantId) => {
  return await serverFetch(`/api/applications?applicantId=${applicantId}`);
};

export const getApplicationsByJobId = async (jobId) => {
  return await serverFetch(`/api/applications?jobId=${jobId}`);
};
