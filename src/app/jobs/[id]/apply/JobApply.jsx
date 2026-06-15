"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { submitApplication } from "@/lib/actions/applications";
import {
    Briefcase,
    FileText,
    Link as LinkIcon,
    Send,
    User,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const JobApply = ({ job, applicant }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target);
    const submissionData = {
      jobId: job._id || job.id,
      companyName: job.companyName,
      companyLogo: job.companyLogo,
      applicantId: applicant._id || applicant.id,
      resumeLink: formData.get("resume"),
      portfolio: formData.get("portfolio"),
      message: formData.get("message"),
    };

    const res = await submitApplication(submissionData);
    router.refresh();
    setIsSubmitting(false);
  };

  return (
    <div className="w-full">
      <Card className="border-border/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] bg-card/40 backdrop-blur-xl rounded-3xl overflow-hidden">
        <CardHeader className="bg-muted/20 border-b border-border/40 pb-8 pt-8 px-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-2">
            {job?.companyLogo ? (
              <Image
                width={64}
                height={64}
                src={job.companyLogo}
                alt={job.companyName || "Company"}
                className="w-16 h-16 rounded-2xl object-cover shadow-sm ring-1 ring-border/50"
              />
            ) : (
              <div className="flex shrink-0 items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl ring-1 ring-primary/20">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
            )}
            <div>
              <CardTitle className="text-2xl sm:text-3xl font-bold tracking-tight">
                Apply for {job?.jobTitle || job?.title || "Position"}
              </CardTitle>
              <CardDescription className="text-base sm:text-lg mt-2 text-muted-foreground flex flex-wrap items-center gap-2">
                <span className="font-medium text-foreground">{job?.companyName || "Company Name"}</span>
                <span className="hidden sm:inline">•</span>
                <span>{job?.jobType || "Full-time"}</span>
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-8 p-8">
            <div className="bg-background/60 p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center gap-5 border border-border/40 shadow-sm">
              <Avatar className="w-14 h-14 ring-2 ring-background shadow-sm">
                <AvatarImage
                  src={applicant?.image || applicant?.avatar}
                  alt={applicant?.name}
                />
                <AvatarFallback className="bg-primary/10 text-primary">
                  <User className="w-6 h-6" />
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-base font-semibold">
                  Applying as {applicant?.name || "Freelancer"}
                </p>
                <p className="text-sm text-muted-foreground mt-0.5">
                  {applicant?.email || "freelancer@example.com"}
                </p>
              </div>
            </div>

            <Field>
              <FieldContent>
                <FieldLabel htmlFor="resume" className="text-base font-medium">Resume Link</FieldLabel>
                <div className="relative mt-2">
                  <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="resume"
                    name="resume"
                    placeholder="https://drive.google.com/..."
                    className="pl-12 h-14 rounded-xl bg-background/50 border-border/50 focus-visible:ring-primary/30 focus-visible:border-primary transition-all text-base"
                    required
                  />
                </div>
              </FieldContent>
            </Field>

            <Field>
              <FieldContent>
                <FieldLabel htmlFor="portfolio" className="text-base font-medium">Portfolio URL</FieldLabel>
                <div className="relative mt-2">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="portfolio"
                    name="portfolio"
                    placeholder="https://yourportfolio.com"
                    className="pl-12 h-14 rounded-xl bg-background/50 border-border/50 focus-visible:ring-primary/30 focus-visible:border-primary transition-all text-base"
                    required
                  />
                </div>
              </FieldContent>
            </Field>

            <Field>
              <FieldContent>
                <FieldLabel htmlFor="message" className="text-base font-medium">
                  Short Message (Cover Letter)
                </FieldLabel>
                <div className="relative mt-2">
                  <FileText className="absolute left-4 top-4 h-5 w-5 text-muted-foreground" />
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Why are you a good fit for this role?"
                    className="flex min-h-[160px] w-full rounded-xl border border-border/50 bg-background/50 pl-12 pr-4 py-4 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary disabled:cursor-not-allowed disabled:opacity-50 resize-y transition-all"
                    required
                  />
                </div>
              </FieldContent>
            </Field>
          </CardContent>
          <CardFooter className="bg-muted/10 p-8 border-t border-border/40 rounded-b-3xl">
            <Button
              type="submit"
              size="lg"
              className="w-full h-14 text-lg font-medium rounded-xl shadow-lg shadow-primary/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Submitting Application..."
              ) : (
                <>
                  <Send className="w-5 h-5 mr-3" />
                  Submit Application
                </>
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default JobApply;
