"use server";

import { serverMutation } from "../core/server";
import { basePath } from "@/utils/EnvConfig";

export const createCompany = async (newCompanyData) => {
  return await serverMutation("/api/companies", newCompanyData);
};

export async function fetchCompaniesAction() {
  try {
    const res = await fetch(`${basePath}/api/companies`, {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch companies");
    }
    const data = await res.json();
    return { success: true, data };
  } catch (error) {
    console.error("fetchCompaniesAction Error:", error);
    return { success: false, error: error.message };
  }
}
