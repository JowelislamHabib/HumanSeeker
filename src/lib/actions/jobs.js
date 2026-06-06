"use server";

import { serverMutation } from "../core/server";

export const createJob = async (newJobData) => {
  return await serverMutation("/api/jobs", newJobData);
};
