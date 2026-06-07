import { serverFetch } from "../core/server";

export const getAgencyId = async (agencyId) => {
  return await serverFetch(`/api/my/companies?agencyId=${agencyId}`);
};
