import { basePath } from "@/utils/EnvConfig";

export const serverMutation = async (path, data) => {
  const res = await fetch(`${basePath}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};
