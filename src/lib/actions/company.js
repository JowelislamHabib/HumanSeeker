"use server";

import { serverFetch, serverMutation } from "../core/server";

export const createCompany = async (newCompanyData) => {
  return await serverMutation("/api/companies", newCompanyData);
};

export async function fetchCompaniesAction(agencyId) {
  return await serverFetch(`/api/my/companies?agencyId=${agencyId}`);
}
