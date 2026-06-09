import React from "react";
import Link from "next/link";
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from "@/components/ui/card";
import { MapPin, Briefcase, CircleDollarSign, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function JobCard({ job }) {
  if (!job) return null;

  const formatSalary = (amount) => {
    if (!amount) return "0";
    const numericAmount = parseInt(amount, 10);
    return numericAmount >= 1000 ? `${numericAmount / 1000}k` : amount;
  };

  const salaryRange = job.minSalary && job.maxSalary
    ? `$${formatSalary(job.minSalary)}–$${formatSalary(job.maxSalary)} / year`
    : "Salary Negotiable";

  const jobId = job._id?.$oid || job._id || job.id;

  return (
    <Card className="w-full max-w-[440px] shadow-md hover:shadow-lg transition-shadow duration-200 border border-border bg-card text-card-foreground">
      
      <CardHeader className="flex flex-col items-start gap-3 pb-3">
        <div className="flex items-center gap-3">
          {job.companyLogo && (
            <img
              src={job.companyLogo}
              alt={`${job.companyName || "Company"} logo`}
              className="w-8 h-8 object-contain rounded-md"
            />
          )}
          <span className="text-sm font-medium text-muted-foreground">
            {job.companyName || "Confidential"}
          </span>
        </div>
        
        <CardTitle className="text-2xl font-semibold tracking-tight text-foreground leading-tight line-clamp-2">
          {job.jobTitle}
        </CardTitle>
        
        {job.responsibilities && (
          <CardDescription className="text-sm line-clamp-2 mt-1">
            {job.responsibilities}
          </CardDescription>
        )}
      </CardHeader>

      <CardContent className="flex flex-col gap-4 py-2">
        <div className="flex flex-wrap gap-2">
          {job.location && (
            <div className="flex items-center gap-1.5 bg-secondary/50 px-3 py-1.5 rounded-full border border-border/50 text-secondary-foreground">
              <MapPin className="text-primary w-3.5 h-3.5" />
              <span className="text-[13px] font-medium">
                {job.location} {job.isRemote && "(Remote)"}
              </span>
            </div>
          )}

          {job.jobType && (
            <div className="flex items-center gap-1.5 bg-secondary/50 px-3 py-1.5 rounded-full border border-border/50 text-secondary-foreground">
              <Briefcase className="text-primary w-3.5 h-3.5" />
              <span className="text-[13px] font-medium capitalize">
                {job.jobType.replace("-", " ")}
              </span>
            </div>
          )}

          <div className="flex items-center gap-1.5 bg-secondary/50 px-3 py-1.5 rounded-full border border-border/50 text-secondary-foreground w-fit">
            <CircleDollarSign className="text-primary w-3.5 h-3.5" />
            <span className="text-[13px] font-medium">{salaryRange}</span>
          </div>
        </div>

        {(job.requirements || job.benefits) && (
          <div className="text-[13px] text-muted-foreground space-y-1.5 border-t border-border pt-4">
            {job.requirements && (
              <p><strong className="text-foreground/80 font-semibold">Reqs:</strong> <span className="line-clamp-1 inline">{job.requirements}</span></p>
            )}
            {job.benefits && (
              <p><strong className="text-foreground/80 font-semibold">Perks:</strong> <span className="line-clamp-1 inline">{job.benefits}</span></p>
            )}
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-4">
        <Button asChild variant="ghost" className="group flex justify-start items-center gap-2 p-0 h-auto text-sm font-medium hover:bg-transparent hover:text-primary transition-colors">
          <Link href={`/jobs/${jobId}`}>
            Apply Now
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </Button>
      </CardFooter>

    </Card>
  );
}
