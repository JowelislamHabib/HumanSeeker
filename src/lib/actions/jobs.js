"use server";

import { revalidatePath } from "next/cache";
import { serverMutation } from "../core/server";

export const createJob = async (newJobData) => {
  const result = await serverMutation("/api/jobs", newJobData);
  revalidatePath("/dashboard/recruiter/jobs");
  revalidatePath("/jobs");
  return result;
};
