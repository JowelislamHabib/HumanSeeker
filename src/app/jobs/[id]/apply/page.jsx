import ApplyNotAllowed from "@/components/jobs/ApplyNotAllowed";
import { getJobById } from "@/lib/api/job";
import { getUserSession } from "@/lib/core/session";
import { redirect } from "next/navigation";
import JobApply from "./JobApply";
import { getApplicationsByApplicant } from "@/lib/api/applications";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const ApplyPage = async ({ params }) => {
  const { id } = await params;
  const user = await getUserSession();

  if (!user) {
    redirect(`/login?redirect=/jobs/${id}/apply`);
  }
  if (user.role !== "freelancer") {
    return <ApplyNotAllowed />;
  }
  const job = await getJobById(id);
  const plan = {
    name: "free",
    maxApplicationsPerMonth: 3,
  };
  const applications = await getApplicationsByApplicant(user?.id);
  const applicationsCount = applications?.length || 0;
  const maxApps = plan.maxApplicationsPerMonth;
  const remaining = maxApps - applicationsCount;
  const progressPercentage = Math.min((applicationsCount / maxApps) * 100, 100);
  const canApply = applicationsCount < maxApps;

  return (
    <div className="min-h-[calc(100vh-80px)] bg-linear-to-b from-background to-muted/20 py-8 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto space-y-8">
        {canApply ? (
          <>
            <div className="bg-card/50 backdrop-blur-md border border-border/50 rounded-2xl p-6 shadow-sm flex flex-col md:flex-row gap-6 items-center justify-between animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="flex-1 space-y-2 text-center md:text-left">
                <h2 className="text-xl font-semibold flex items-center justify-center md:justify-start gap-2">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                  Application Quota
                </h2>
                <p className="text-muted-foreground text-sm">
                  You are on the{" "}
                  <span className="font-semibold text-primary capitalize">
                    {plan.name}
                  </span>{" "}
                  plan. You have {remaining}{" "}
                  {remaining === 1 ? "application" : "applications"} remaining this
                  month.
                </p>
              </div>

              <div className="w-full md:w-64 space-y-3">
                <div className="flex justify-between text-sm font-medium">
                  <span>{applicationsCount} Used</span>
                  <span>{maxApps} Total</span>
                </div>
                <div className="h-3 w-full bg-secondary rounded-full overflow-hidden shadow-inner">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${
                      progressPercentage >= 100
                        ? "bg-destructive"
                        : progressPercentage >= 80
                          ? "bg-amber-500"
                          : "bg-primary"
                    }`}
                    style={{ width: `${progressPercentage}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150 fill-mode-both">
              <JobApply applicant={user} job={job} />
            </div>
          </>
        ) : (
          <div className="text-center py-12 space-y-6 animate-in fade-in zoom-in-95 duration-500">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4 ring-1 ring-destructive/20">
                <AlertCircle className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">
                Monthly Limit Reached
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                You have used all {maxApps} applications for this month. Upgrade
                your plan to apply for more jobs.
              </p>
            </div>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 py-2"
            >
              Upgrade Plan
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplyPage;
