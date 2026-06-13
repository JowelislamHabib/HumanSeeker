"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Briefcase,
  Link as LinkIcon,
  FileText,
  Send,
  User,
} from "lucide-react";
import { Field, FieldLabel, FieldContent } from "@/components/ui/field";
import Image from "next/image";

const JobApply = ({ job, applicant }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="container max-w-2xl mx-auto py-12 px-4">
      <Card className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            {job?.companyLogo ? (
              <Image
                width={50}
                height={50}
                src={job.companyLogo}
                alt={job.companyName || "Company"}
                className="w-12 h-12 rounded-xl object-cover shadow-sm ring-1 ring-border"
              />
            ) : (
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl ring-1 ring-primary/20">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
            )}
            <div>
              <CardTitle className="text-2xl">
                Apply for {job?.jobTitle || job?.title || "Position"}
              </CardTitle>
              <CardDescription className="text-base mt-1">
                {job?.companyName || "Company Name"} •{" "}
                {job?.jobType || "Full-time"}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-6 pb-4">
            <div className="bg-muted/40 p-4 rounded-xl flex items-center gap-4 border border-border/50">
              <Avatar className="w-12 h-12">
                <AvatarImage
                  src={applicant?.image || applicant?.avatar}
                  alt={applicant?.name}
                />
                <AvatarFallback className="bg-secondary">
                  <User className="w-6 h-6 text-secondary-foreground" />
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">
                  Applying as {applicant?.name || "Freelancer"}
                </p>
                <p className="text-sm text-muted-foreground">
                  {applicant?.email || "freelancer@example.com"}
                </p>
              </div>
            </div>

            <Field>
              <FieldContent>
                <FieldLabel htmlFor="resume">Resume Link</FieldLabel>
                <div className="relative">
                  <LinkIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="resume"
                    placeholder="https://drive.google.com/..."
                    className="pl-10"
                    required
                  />
                </div>
              </FieldContent>
            </Field>

            <Field>
              <FieldContent>
                <FieldLabel htmlFor="portfolio">Portfolio URL</FieldLabel>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="portfolio"
                    placeholder="https://yourportfolio.com"
                    className="pl-10"
                    required
                  />
                </div>
              </FieldContent>
            </Field>

            <Field>
              <FieldContent>
                <FieldLabel htmlFor="message">
                  Short Message (Cover Letter)
                </FieldLabel>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <textarea
                    id="message"
                    placeholder="Why are you a good fit for this role?"
                    className="flex min-h-[140px] w-full rounded-md border border-input bg-background pl-10 pr-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-y"
                    required
                  />
                </div>
              </FieldContent>
            </Field>
          </CardContent>
          <CardFooter className="bg-muted/20 pt-6 rounded-b-2xl border-t border-border/50">
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
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
