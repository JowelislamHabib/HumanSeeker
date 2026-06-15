"use server";

import { serverMutation } from "../core/server";

export const createSubscription = async (subInfo) => {
  return await serverMutation("/api/subscriptions", subInfo);
};
