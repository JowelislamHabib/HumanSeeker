import { getCompanyJobs } from "@/lib/api/job";
import { Eye, Edit2, Trash2 } from "lucide-react";
import { Badge } from "@/components/reui/badge";
import { Frame, FramePanel } from "@/components/reui/frame";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";

const RecruiterJobsPage = async () => {
  const jobs = (await getCompanyJobs()) || [];

  return (
    <div className="flex w-full flex-col">
      <div className="flex items-center justify-between mb-4 mt-6">
        <h2 className="text-xl font-semibold text-foreground tracking-tight">
          Company Jobs
        </h2>
        <Button asChild>
          <Link href="/dashboard/recruiter/jobs/new">Post New Job</Link>
        </Button>
      </div>
      <Frame
        spacing="xs"
        className="bg-card shadow-sm rounded-xl border border-border"
      >
        <FramePanel className="p-0! overflow-hidden border-0">
          <TooltipProvider>
            <Table>
              <TableHeader className="bg-accent/30 border-b border-border/80">
                <TableRow className="hover:bg-transparent border-0">
                  <TableHead className="text-muted-foreground font-semibold text-[11px] uppercase tracking-wider h-11 px-4">
                    Job Title
                  </TableHead>
                  <TableHead className="text-muted-foreground font-semibold text-[11px] uppercase tracking-wider h-11 px-4">
                    Type
                  </TableHead>
                  <TableHead className="text-muted-foreground font-semibold text-[11px] uppercase tracking-wider h-11 px-4">
                    Salary Range
                  </TableHead>
                  <TableHead className="text-muted-foreground font-semibold text-[11px] uppercase tracking-wider h-11 px-4">
                    Deadline
                  </TableHead>
                  <TableHead className="text-muted-foreground font-semibold text-[11px] uppercase tracking-wider h-11 px-4">
                    Status
                  </TableHead>
                  <TableHead className="text-muted-foreground font-semibold text-[11px] uppercase tracking-wider h-11 px-4 text-right pr-6">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobs.map((job) => (
                  <TableRow
                    key={job._id || job.id}
                    className="border-border/50 hover:bg-accent/5 transition-colors"
                  >
                    <TableCell className="py-4">
                      <div className="flex flex-col pl-2">
                        <span className="text-sm font-semibold text-foreground tracking-tight">
                          {job.jobTitle}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {job.jobCategory} • {job.location || "Remote"}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="py-4">
                      <span className="text-sm text-muted-foreground capitalize">
                        {job.jobType}
                      </span>
                    </TableCell>
                    <TableCell className="py-4">
                      <span className="text-sm font-medium text-foreground">
                        {job.currency} {job.minSalary} - {job.maxSalary}
                      </span>
                    </TableCell>
                    <TableCell className="py-4">
                      <span className="text-sm text-muted-foreground">
                        {job.deadline}
                      </span>
                    </TableCell>
                    <TableCell className="py-4">
                      <Badge
                        variant={
                          job.status === "active"
                            ? "success-light"
                            : "info-light"
                        }
                        size="default"
                        radius="full"
                        className="px-3 py-1 font-medium capitalize"
                      >
                        {job.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="py-4 text-right pr-6">
                      <div className="flex items-center justify-end gap-2">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="size-8 text-muted-foreground hover:text-foreground"
                            >
                              <Eye className="size-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>View Job</p>
                          </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="size-8 text-muted-foreground hover:text-foreground"
                            >
                              <Edit2 className="size-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Edit Job</p>
                          </TooltipContent>
                        </Tooltip>

                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="size-8 text-destructive hover:text-destructive/90 hover:bg-destructive/10"
                            >
                              <Trash2 className="size-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Delete Job</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
                {jobs.length === 0 && (
                  <TableRow>
                    <TableCell
                      colSpan={6}
                      className="h-24 text-center text-muted-foreground"
                    >
                      No jobs found.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TooltipProvider>
        </FramePanel>
      </Frame>
    </div>
  );
};

export default RecruiterJobsPage;
