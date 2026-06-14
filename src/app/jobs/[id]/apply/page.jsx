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
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Premium subtle background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-10 pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary via-background to-background" />
      
      <div className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          {canApply ? (
            <div className="flex flex-col gap-8 items-center">
              {/* Quota Top Bar */}
              <div className="w-full lg:w-2/3 xl:w-1/2 bg-card/40 backdrop-blur-xl border border-border/40 rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex flex-col md:flex-row gap-6 md:gap-8 items-center animate-in fade-in slide-in-from-top-4 duration-700">
                <div className="flex-1 space-y-3 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex shrink-0 items-center justify-center ring-1 ring-emerald-500/20">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    </div>
                    <h2 className="text-xl font-bold tracking-tight">
                      Application Quota
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    You are currently on the{" "}
                    <span className="font-semibold text-foreground capitalize">
                      {plan.name}
                    </span>{" "}
                    plan. You have <span className="font-medium text-foreground">{remaining}</span>{" "}
                    {remaining === 1 ? "application" : "applications"} remaining
                    this month.
                  </p>
                </div>

                <div className="w-full md:w-64 shrink-0 space-y-4">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-muted-foreground">{applicationsCount} Used</span>
                    <span className="text-foreground">{maxApps} Total</span>
                  </div>
                  <div className="h-2 w-full bg-secondary/50 rounded-full overflow-hidden">
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

              {/* Form Section */}
              <div className="w-full lg:w-2/3 xl:w-1/2 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-150 fill-mode-both">
                <JobApply applicant={user} job={job} />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 animate-in fade-in zoom-in-95 duration-700">
              <div className="bg-card/40 backdrop-blur-xl border border-border/40 rounded-3xl p-10 md:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)] text-center space-y-8 w-full lg:w-2/3 xl:w-1/2 mx-auto">
                <div className="w-20 h-20 bg-destructive/10 rounded-3xl flex items-center justify-center mx-auto ring-1 ring-destructive/20">
                  <AlertCircle className="w-10 h-10 text-destructive" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-3xl font-bold tracking-tight">
                    Monthly Limit Reached
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    You have used all {maxApps} applications for this month. Upgrade
                    your plan to unlock unlimited potential and apply for more jobs.
                  </p>
                </div>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center rounded-xl text-base font-medium transition-all hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 shadow-xl shadow-primary/20"
                >
                  Explore Premium Plans
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;
