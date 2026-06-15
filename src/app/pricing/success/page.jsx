import { redirect } from "next/navigation";
import Link from "next/link";
import { CheckCircle, ArrowRight, Mail } from "lucide-react";

import { stripe } from "@/lib/stripe";
import { createSubscription } from "@/lib/actions/subscriptions";

const SuccessPage = async ({ searchParams }) => {
  const params = await searchParams;
  const session_id = params?.session_id;

  if (!session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  const {
    status,
    customer_details: { email: customerEmail },
    metadata,
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  if (status === "open") {
    return redirect("/");
  }

  if (status === "complete") {
    const subsInfo = { email: customerEmail, planId: metadata.planId };
    // Update the user table after payment success
    const result = await createSubscription(subsInfo);
    console.log(result);

    return (
      <div className="min-h-[80vh] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-xl backdrop-blur-xl text-center space-y-6">
          <div className="mx-auto w-20 h-20 bg-green-100 dark:bg-green-500/10 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-500" />
          </div>

          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white tracking-tight">
            Payment Successful!
          </h1>

          <p className="text-zinc-600 dark:text-zinc-400">
            We appreciate your business. Your subscription is now active and
            ready to use.
          </p>

          <div className="bg-zinc-50 dark:bg-zinc-950/50 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-center gap-3 border border-zinc-100 dark:border-zinc-800/50">
            <Mail className="w-5 h-5 text-zinc-400" />
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300 text-center sm:text-left break-all">
              Receipt sent to{" "}
              <span className="text-zinc-900 dark:text-white">
                {customerEmail}
              </span>
            </span>
          </div>

          <div className="pt-4 space-y-4">
            <Link
              href="/dashboard"
              className="w-full flex items-center justify-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 py-3.5 rounded-full font-medium hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-all active:scale-[0.98]"
            >
              Go to Dashboard
              <ArrowRight className="w-4 h-4" />
            </Link>

            <p className="text-xs text-zinc-500 dark:text-zinc-500">
              Questions? Contact us at{" "}
              <a
                href="mailto:support@example.com"
                className="text-zinc-900 dark:text-zinc-300 hover:underline"
              >
                support@example.com
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
};

export default SuccessPage;
