import { serverFetch } from "../core/server";

export const getRecruiterId = async (recruiterId) => {
  return await serverFetch(`/api/my/companies?recruiterId=${recruiterId}`);
};
