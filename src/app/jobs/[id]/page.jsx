import React from "react";
import { getJobById } from "@/lib/api/job";
import { Button } from "@/components/ui/button";
import { MapPin, Briefcase, CircleDollarSign, Calendar, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default async function JobDetailsPage({ params }) {
  const { id } = await params;
  
  let jobData = null;
  try {
    const res = await getJobById(id);
    jobData = res?.data || res;
  } catch (error) {
    console.error("Failed to fetch job details:", error);
  }

  // Guard clause in case API fails or returns null
  if (!jobData) {
    return (
      <div className="w-full min-h-screen bg-background flex flex-col justify-center items-center text-foreground p-6">
        <p className="text-muted-foreground text-lg">Job position could not be found or is no longer active.</p>
      </div>
    );
  }

  // Salary string utility formatter
  const formatSalary = (amount) => {
    if (!amount) return "0";
    const numericAmount = parseInt(amount, 10);
    return numericAmount >= 1000 ? `${(numericAmount / 1000).toLocaleString()}k` : amount;
  };

  // Humanize standard date formats
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <main className="w-full min-h-screen bg-background text-foreground p-6 md:p-12 lg:p-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
        
        {/* LEFT BLOCK: Corporate Identity, Description & Details (Spans 2 columns) */}
        <div className="lg:col-span-2 space-y-8 mt-4">
          
          {/* Header Group */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              {jobData.companyLogo && (
                <img
                  src={jobData.companyLogo}
                  alt={`${jobData.companyName} Branding`}
                  className="w-14 h-14 object-contain bg-card border border-border p-2 rounded-xl shadow-xs"
                />
              )}
              <div>
                <h2 className="text-xl font-medium text-foreground/90">{jobData.companyName || "Confidential"}</h2>
                <p className="text-sm text-muted-foreground capitalize">{jobData.jobCategory} Role</p>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
              {jobData.jobTitle}
            </h1>
          </div>

          {/* Section: Responsibilities */}
          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-foreground">Core Responsibilities</h3>
            <p className="text-foreground/80 text-base leading-relaxed whitespace-pre-line">
              {jobData.responsibilities || "No specific responsibilities detailed for this listing."}
            </p>
          </section>

          {/* Section: Core Technical Requirements */}
          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-foreground">Requirements & Credentials</h3>
            <div className="bg-card border border-border rounded-2xl p-5 shadow-xs">
              <p className="text-foreground/80 text-base leading-relaxed whitespace-pre-line">
                {jobData.requirements || "Standard industry qualifications apply."}
              </p>
            </div>
          </section>

          {/* Section: Benefits & Perks */}
          {jobData.benefits && (
            <section className="space-y-3">
              <h3 className="text-xl font-semibold text-foreground">Benefits & Perks</h3>
              <p className="text-foreground/80 text-base leading-relaxed whitespace-pre-line">
                {jobData.benefits}
              </p>
            </section>
          )}
        </div>

        {/* RIGHT BLOCK: Core Structural Metadata Panel Widget */}
        <aside className="bg-card border border-border rounded-3xl p-6 lg:sticky lg:top-8 space-y-6 shadow-md mt-4">
          <h3 className="text-lg font-semibold text-foreground">Job Overview</h3>

          <div className="space-y-4">
            {/* Location Element */}
            <div className="flex items-start gap-3">
              <MapPin className="text-primary w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-xs text-muted-foreground block">Location</span>
                <span className="text-sm font-medium text-foreground/90">
                  {jobData.location} {jobData.isRemote && <span className="text-primary font-normal text-xs ml-1">(Remote Friendly)</span>}
                </span>
              </div>
            </div>

            {/* Position Type Element */}
            <div className="flex items-start gap-3">
              <Briefcase className="text-primary w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-xs text-muted-foreground block">Job Type</span>
                <span className="text-sm font-medium text-foreground/90 capitalize">{jobData.jobType?.replace("-", " ")}</span>
              </div>
            </div>

            {/* Comp/Salary Element */}
            <div className="flex items-start gap-3">
              <CircleDollarSign className="text-primary w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-xs text-muted-foreground block">Salary Range</span>
                <span className="text-sm font-medium text-foreground/90">
                  {jobData.minSalary && jobData.maxSalary
                    ? `$${formatSalary(jobData.minSalary)} – $${formatSalary(jobData.maxSalary)} / year`
                    : "Competitive Salary"}
                </span>
              </div>
            </div>

            {/* Deadline Element */}
            <div className="flex items-start gap-3">
              <Calendar className="text-primary w-5 h-5 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-xs text-muted-foreground block">Application Deadline</span>
                <span className="text-sm font-medium text-foreground/90">{formatDate(jobData.deadline)}</span>
              </div>
            </div>
          </div>

          {/* Action Button: Apply Routing Link Container */}
          <Button
            asChild
            size="lg"
            className="w-full font-medium py-6 rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2 mt-4"
          >
            <Link href={`/jobs/${id}/apply`}>
              Apply For This Job
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Link>
          </Button>
        </aside>

      </div>
    </main>
  );
}
