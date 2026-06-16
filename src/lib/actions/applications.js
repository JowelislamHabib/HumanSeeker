"use server";

import { basePath } from "@/utils/EnvConfig";
import { serverMutation } from "../core/server";

export const submitApplication = async (applicationData) => {
  return await serverMutation(`${basePath}/api/applications`, applicationData);
};
