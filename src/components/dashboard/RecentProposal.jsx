import { Badge } from "@/components/reui/badge";
import { Frame, FramePanel } from "@/components/reui/frame";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const proposals = [
  {
    name: "Alex Johnson",
    project: "E-commerce Web App",
    dateApplied: "Oct 24, 2023",
    bid: "$45/hr",
    avatar: "https://i.pravatar.cc/150?u=Alex",
    status: "Shortlisted",
    statusVariant: "success-light",
  },
  {
    name: "Maria Garcia",
    project: "Payment API Integration",
    dateApplied: "Oct 23, 2023",
    bid: "$1,200",
    avatar: "https://i.pravatar.cc/150?u=Maria",
    status: "New",
    statusVariant: "info-light",
  },
  {
    name: "James Smith",
    project: "Mobile App Redesign",
    dateApplied: "Oct 22, 2023",
    bid: "$3,500",
    avatar: "https://i.pravatar.cc/150?u=James",
    status: "Reviewing",
    statusVariant: "warning-light",
  },
  {
    name: "Linda Lee",
    project: "SEO Optimization",
    dateApplied: "Oct 21, 2023",
    bid: "$30/hr",
    avatar: "https://i.pravatar.cc/150?u=Linda",
    status: "Rejected",
    statusVariant: "destructive-light",
  },
  {
    name: "Hosena Garcia",
    project: "Payment API Integration",
    dateApplied: "Oct 23, 2023",
    bid: "$1,200",
    avatar: "https://i.pravatar.cc/150?u=Hosena",
    status: "New",
    statusVariant: "info-light",
  },
];

export default function RecentProposals() {
  return (
    <div className="flex w-full flex-col">
      <div className="flex items-center justify-between mb-4 mt-6">
        <h2 className="text-xl font-semibold text-foreground tracking-tight">
          Recent Proposals
        </h2>
        <a
          href="#"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          View all
        </a>
      </div>
      <Frame
        spacing="xs"
        className="bg-card shadow-sm rounded-xl border border-border"
      >
        <FramePanel className="p-0! overflow-hidden border-0">
          <Table>
            <TableHeader className="bg-accent/30 border-b border-border/80">
              <TableRow className="hover:bg-transparent border-0">
                <TableHead className="text-muted-foreground font-semibold text-[11px] uppercase tracking-wider h-11 px-4">
                  Freelancer
                </TableHead>
                <TableHead className="text-muted-foreground font-semibold text-[11px] uppercase tracking-wider h-11 px-4">
                  Project
                </TableHead>
                <TableHead className="text-muted-foreground font-semibold text-[11px] uppercase tracking-wider h-11 px-4">
                  Bid Amount
                </TableHead>
                <TableHead className="text-muted-foreground font-semibold text-[11px] uppercase tracking-wider h-11 px-4">
                  Date Applied
                </TableHead>
                <TableHead className="text-muted-foreground font-semibold text-[11px] uppercase tracking-wider h-11 px-4 text-right pr-6">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {proposals.map((proposal) => (
                <TableRow
                  key={proposal.name}
                  className="border-border/50 hover:bg-accent/5 transition-colors"
                >
                  <TableCell className="py-4">
                    <div className="flex items-center gap-3 pl-2">
                      <Avatar className="size-8 rounded-full border border-border">
                        <AvatarImage
                          src={proposal.avatar}
                          alt={proposal.name}
                        />
                        <AvatarFallback className="bg-accent text-accent-foreground text-xs font-medium">
                          {proposal.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-semibold text-foreground tracking-tight">
                        {proposal.name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="py-4">
                    <span className="text-sm text-muted-foreground">
                      {proposal.project}
                    </span>
                  </TableCell>
                  <TableCell className="py-4">
                    <span className="text-sm font-medium text-foreground">
                      {proposal.bid}
                    </span>
                  </TableCell>
                  <TableCell className="py-4">
                    <span className="text-sm text-muted-foreground">
                      {proposal.dateApplied}
                    </span>
                  </TableCell>
                  <TableCell className="py-4 text-right pr-6">
                    <Badge
                      variant={proposal.statusVariant}
                      size="default"
                      radius="full"
                      className="px-3 py-1 font-medium"
                    >
                      {proposal.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </FramePanel>
      </Frame>
    </div>
  );
}
