"use server";

import { basePath } from "@/utils/EnvConfig";

export const createJob = async (newJobData) => {
  const res = await fetch(`${basePath}/api/jobs`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newJobData),
  });
  return res.json();
};
