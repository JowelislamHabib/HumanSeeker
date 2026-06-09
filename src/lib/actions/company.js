"use server";

import { serverFetch, serverMutation } from "../core/server";
import { getUserSession } from "../core/session";
import { getRecruiterId } from "../api/company";

export const createCompany = async (newCompanyData) => {
  return await serverMutation("/api/companies", newCompanyData);
};

export async function fetchCompaniesAction(recruiterId) {
  return await serverFetch(`/api/my/companies?recruiterId=${recruiterId}`);
}

export const getLoggedInRecruiterCompany = async () => {
  const user = await getUserSession();
  return getRecruiterId(user?.id);
};
