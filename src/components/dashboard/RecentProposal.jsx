import { Badge } from "@/components/reui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { RiArrowRightUpLine } from "react-icons/ri";

const proposals = [
  {
    name: "Alex Johnson",
    project: "E-commerce Web App",
    dateApplied: "Oct 24, 2023",
    bid: "$45/hr",
    avatar: "https://i.pravatar.cc/150?u=Alex",
    status: "Shortlisted",
    statusVariant: "success-light",
    delay: "delay-[100ms]",
  },
  {
    name: "Maria Garcia",
    project: "Payment API Integration",
    dateApplied: "Oct 23, 2023",
    bid: "$1,200",
    avatar: "https://i.pravatar.cc/150?u=Maria",
    status: "New",
    statusVariant: "info-light",
    delay: "delay-[150ms]",
  },
  {
    name: "James Smith",
    project: "Mobile App Redesign",
    dateApplied: "Oct 22, 2023",
    bid: "$3,500",
    avatar: "https://i.pravatar.cc/150?u=James",
    status: "Reviewing",
    statusVariant: "warning-light",
    delay: "delay-[200ms]",
  },
  {
    name: "Linda Lee",
    project: "SEO Optimization",
    dateApplied: "Oct 21, 2023",
    bid: "$30/hr",
    avatar: "https://i.pravatar.cc/150?u=Linda",
    status: "Rejected",
    statusVariant: "destructive-light",
    delay: "delay-[250ms]",
  },
  {
    name: "Hosena Garcia",
    project: "Payment API Integration",
    dateApplied: "Oct 23, 2023",
    bid: "$1,200",
    avatar: "https://i.pravatar.cc/150?u=Hosena",
    status: "New",
    statusVariant: "info-light",
    delay: "delay-[300ms]",
  },
];

export default function RecentProposals() {
  return (
    <div className="flex w-full flex-col h-full animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] delay-300 fill-mode-both">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold font-heading text-foreground tracking-tight">
          Recent Proposals
        </h2>
        <a
          href="#"
          className="group flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
        >
          View all
          <RiArrowRightUpLine className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
      
      <div className="p-1.5 rounded-[2rem] bg-accent/30 dark:bg-accent/10 border border-border/40 flex-1">
        <div className="bg-card/90 backdrop-blur-md rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] border border-border/20 overflow-hidden h-full">
          <Table>
            <TableHeader className="bg-accent/30 dark:bg-white/5 border-b border-border/40">
              <TableRow className="hover:bg-transparent border-0">
                <TableHead className="text-muted-foreground font-bold text-[10px] uppercase tracking-[0.1em] h-12 px-6">
                  Freelancer
                </TableHead>
                <TableHead className="text-muted-foreground font-bold text-[10px] uppercase tracking-[0.1em] h-12 px-6">
                  Project
                </TableHead>
                <TableHead className="text-muted-foreground font-bold text-[10px] uppercase tracking-[0.1em] h-12 px-6">
                  Bid Amount
                </TableHead>
                <TableHead className="text-muted-foreground font-bold text-[10px] uppercase tracking-[0.1em] h-12 px-6">
                  Date Applied
                </TableHead>
                <TableHead className="text-muted-foreground font-bold text-[10px] uppercase tracking-[0.1em] h-12 px-6 text-right">
                  Status
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {proposals.map((proposal) => (
                <TableRow
                  key={proposal.name}
                  className={`border-b border-border/40 even:bg-muted/10 hover:bg-muted/40 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 fill-mode-both ease-[cubic-bezier(0.32,0.72,0,1)] ${proposal.delay}`}
                >
                  <TableCell className="py-5 px-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="size-10 rounded-full border border-border/50 ring-2 ring-background">
                        <AvatarImage
                          src={proposal.avatar}
                          alt={proposal.name}
                        />
                        <AvatarFallback className="bg-accent text-accent-foreground text-xs font-bold">
                          {proposal.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-bold text-foreground tracking-tight">
                        {proposal.name}
                      </span>
                    </div>
                  </TableCell>
                  <TableCell className="py-5 px-6">
                    <span className="text-sm font-medium text-muted-foreground">
                      {proposal.project}
                    </span>
                  </TableCell>
                  <TableCell className="py-5 px-6">
                    <span className="text-sm font-bold text-foreground">
                      {proposal.bid}
                    </span>
                  </TableCell>
                  <TableCell className="py-5 px-6">
                    <span className="text-sm font-medium text-muted-foreground">
                      {proposal.dateApplied}
                    </span>
                  </TableCell>
                  <TableCell className="py-5 px-6 text-right">
                    <Badge
                      variant={proposal.statusVariant}
                      size="default"
                      className="px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-full"
                    >
                      {proposal.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
