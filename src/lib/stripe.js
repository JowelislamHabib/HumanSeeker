import "server-only";

import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const plansId = {
  seeker_pro: "price_1TiIvkGb34rQNtt8rAgLYmJE",
  seeker_premium: "price_1TiOH0Gb34rQNtt8h81AvnN8",
  recruiter_growth: "price_1TiOHvGb34rQNtt8OogRGlNB",
  recruiter_enterprise: "price_1TiOJIGb34rQNtt87or8PCfu",
};
