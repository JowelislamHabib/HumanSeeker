"use server";

export async function fetchCompaniesAction() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/companies`);
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
