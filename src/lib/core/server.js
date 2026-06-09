import { basePath } from "@/utils/EnvConfig";

export const serverFetch = async (path) => {
  if (!basePath) {
    throw new Error("Missing NEXT_PUBLIC_BASE_URL in .env");
  }
  const res = await fetch(`${basePath}${path}`, { cache: "no-store" });
  return res.json();
};

export const serverMutation = async (path, data) => {
  if (!basePath) {
    throw new Error("Missing NEXT_PUBLIC_BASE_URL in .env");
  }
  const res = await fetch(`${basePath}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
