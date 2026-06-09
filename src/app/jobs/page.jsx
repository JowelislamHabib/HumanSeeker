import JobListingContainer from "@/components/jobs/JobListingContainer";
import { getJobs } from "@/lib/api/job";

export const metadata = {
  title: "Open Positions | Worklix",
  description: "Browse and apply for the latest job openings.",
};

export default async function JobsPage() {
  // Fetched server-side on the initial request
  let jobs = [];
  try {
    jobs = await getJobs();
  } catch (error) {
    console.error("Failed to fetch jobs:", error);
  }

  return (
    <div className="w-full min-h-screen bg-background p-6 md:p-12 text-foreground">
      <div className="max-w-7xl mx-auto mb-10 mt-6">
        <h1 className="text-4xl font-bold tracking-tight">Open Positions</h1>
        <p className="text-muted-foreground mt-2 text-lg">Discover your next career opportunity.</p>
      </div>

      {/* Pass data to the Client Wrapper to handle filtering interactivity */}
      <JobListingContainer initialJobs={jobs?.data || jobs || []} />
    </div>
  );
}
