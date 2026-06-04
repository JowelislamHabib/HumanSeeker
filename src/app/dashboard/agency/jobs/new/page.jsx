"use client";
import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const Label = ({ children, className, ...props }) => (
  <label
    className={`text-xs font-semibold text-foreground/80 mb-1.5 block ${className}`}
    {...props}
  >
    {children}
  </label>
);

const Select = ({ children, className, ...props }) => (
  <select
    className={`flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30 appearance-none ${className}`}
    {...props}
  >
    {children}
  </select>
);

const Textarea = ({ className, ...props }) => (
  <textarea
    className={`flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 dark:bg-input/30 ${className}`}
    {...props}
  />
);

const handleCreateNewJob = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  const { currency, salaryMin, salaryMax, ...rest } = Object.fromEntries(formData);
  const jobData = {
    ...rest,
    salaryRange: `${currency} ${salaryMin} - ${salaryMax}`,
  };

  console.log(jobData);
};

const mockCompanies = [
  {
    id: "c_1",
    name: "Google Inc.",
    category: "Technology",
    location: "Mountain View",
    logo: "https://logo.clearbit.com/google.com",
    status: "Approved",
  },
  {
    id: "c_2",
    name: "Apple",
    category: "Technology",
    location: "Cupertino",
    logo: "https://logo.clearbit.com/apple.com",
    status: "Approved",
  },
  {
    id: "c_3",
    name: "Microsoft",
    category: "Software",
    location: "Redmond",
    logo: "https://logo.clearbit.com/microsoft.com",
    status: "Approved",
  }
];

const CreateNewJobPage = () => {
  const [isRemote, setIsRemote] = React.useState(false);
  const [selectedCompanyId, setSelectedCompanyId] = React.useState(mockCompanies[0].id);

  const selectedCompany = mockCompanies.find(c => c.id === selectedCompanyId) || mockCompanies[0];

  return (
    <div className="flex w-full flex-col max-w-4xl py-6">
      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
        {/* Header */}
        <div className="px-6 py-5 border-b border-border/50">
          <h1 className="text-xl font-bold tracking-tight text-foreground">
            Post a New Job
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Fill out the details below to publish a new job opening for your
            company.
          </p>
        </div>

        {/* Form Body */}
        <form onSubmit={handleCreateNewJob} className="p-6 flex flex-col gap-8">
          {/* Section 1: Job Info */}
          <section className="flex flex-col gap-5">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground border-b border-border/50 pb-2">
              Job Info
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-1">
              <div>
                <Label>Job Title</Label>
                <Input
                  name="title"
                  placeholder="e.g. Senior Frontend Developer"
                  className="h-10"
                />
              </div>
              <div>
                <Label>Job Category</Label>
                <Select name="category" className="h-10">
                  <option value="">Select Category</option>
                  <option value="engineering">Engineering</option>
                  <option value="design">Design</option>
                  <option value="marketing">Marketing</option>
                  <option value="sales">Sales</option>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label>Job Type</Label>
                <Select name="type" className="h-10">
                  <option value="">Select Type</option>
                  <option value="full-time">Full-time</option>
                  <option value="part-time">Part-time</option>
                  <option value="contract">Contract</option>
                  <option value="internship">Internship</option>
                </Select>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <Label className="mb-0">Location</Label>
                  <div className="flex items-center gap-2">
                    <Label htmlFor="is-remote" className="mb-0 font-normal cursor-pointer text-muted-foreground">Remote</Label>
                    <Switch
                      id="is-remote"
                      checked={isRemote}
                      onCheckedChange={setIsRemote}
                    />
                  </div>
                </div>
                {isRemote ? (
                  <Input
                    key="remote"
                    name="location"
                    value="Remote"
                    readOnly
                    className="h-10 bg-muted text-muted-foreground cursor-not-allowed focus-visible:ring-0"
                  />
                ) : (
                  <Input
                    key="local"
                    name="location"
                    placeholder="City, Country"
                    className="h-10"
                  />
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label>Salary Range</Label>
                <div className="flex items-center gap-2">
                  <Input
                    name="salaryMin"
                    placeholder="Min"
                    className="h-10 w-full"
                    type="number"
                  />
                  <span className="text-muted-foreground">-</span>
                  <Input
                    name="salaryMax"
                    placeholder="Max"
                    className="h-10 w-full"
                    type="number"
                  />
                  <Select name="currency" className="w-24 h-10">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                  </Select>
                </div>
              </div>
              <div>
                <Label>Application Deadline</Label>
                <Input
                  name="applicationDeadline"
                  type="date"
                  className="h-10 text-foreground"
                />
              </div>
            </div>
          </section>

          {/* Section 2: Job Description */}
          <section className="flex flex-col gap-5">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground border-b border-border/50 pb-2">
              Job Description
            </h2>
            <div className="mt-1">
              <Label>Responsibilities</Label>
              <Textarea
                name="responsibilities"
                placeholder="What will the day-to-day look like? (Use markdown or plain text)"
              />
            </div>
            <div>
              <Label>Requirements</Label>
              <Textarea
                name="requirements"
                placeholder="What skills and experience are needed?"
              />
            </div>
            <div>
              <Label>Benefits (Optional)</Label>
              <Textarea
                name="benefits"
                placeholder="What perks do you offer?"
                className="min-h-[80px]"
              />
            </div>
          </section>

          {/* Section 3: Company Auto-fill */}
          <section className="flex flex-col gap-5">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground border-b border-border/50 pb-2">
              Company Details
            </h2>
            <div className="mt-1">
              <Label>Select Company</Label>
              <Select
                name="companyId"
                value={selectedCompanyId}
                onChange={(e) => setSelectedCompanyId(e.target.value)}
                className="h-10 mb-4"
              >
                {mockCompanies.map((company) => (
                  <option key={company.id} value={company.id}>
                    {company.name}
                  </option>
                ))}
              </Select>
            </div>
            
            <div className="bg-accent/10 border border-border/50 rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-lg bg-accent/50 border border-border flex items-center justify-center shrink-0 overflow-hidden relative">
                  <Image
                    src={selectedCompany.logo}
                    alt={selectedCompany.name}
                    width={48}
                    height={48}
                    className="size-full object-cover relative z-10"
                    unoptimized
                  />
                  <span className="text-muted-foreground text-xs font-semibold absolute z-0">
                    LOGO
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="font-semibold text-foreground">
                    {selectedCompany.name}
                  </span>
                  <span className="text-xs text-muted-foreground mt-0.5">
                    {selectedCompany.category} • {selectedCompany.location}
                  </span>
                </div>
              </div>
              <span className="text-xs font-medium bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20 dark:text-emerald-400 px-2.5 py-1 rounded-full border border-emerald-500/20">
                {selectedCompany.status}
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              This job will be linked to your registered company profile and
              made publicly visible.
            </p>
          </section>

          {/* Footer Actions */}
          <div className="flex items-center justify-end gap-3 pt-6 mt-2 border-t border-border/50">
            <Button
              type="button"
              variant="outline"
              className="px-6 border-border text-foreground hover:bg-accent hover:text-foreground h-10"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="px-6 bg-primary text-primary-foreground hover:bg-primary/90 h-10 font-semibold shadow-md"
            >
              Post Job
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNewJobPage;
