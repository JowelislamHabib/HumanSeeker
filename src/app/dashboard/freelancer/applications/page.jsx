import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { getApplicationsByApplicant } from '@/lib/api/applications';
import { getUserSession } from '@/lib/core/session';
import { AlertCircle, Briefcase, Building2, Calendar, FileText, Link as LinkIcon } from "lucide-react";
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "My Applications | WorkLix",
};

const ApplicationPage = async () => {
    const user = await getUserSession();
    const jobs = await getApplicationsByApplicant(user.id) || [];
    const applications = jobs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return (
        <div className="min-h-[100dvh] w-full p-6 md:p-10 lg:p-12">
            <div className="max-w-[1400px] mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-2">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground">
                            Applications
                        </h1>
                        <p className="text-base text-muted-foreground max-w-[65ch] leading-relaxed">
                            Track the status of your submitted job applications and review the details you provided.
                        </p>
                    </div>
                    <div className="flex items-center gap-3 bg-muted/30 px-5 py-3 rounded-2xl border border-border/40 shrink-0">
                        <Briefcase className="w-5 h-5 text-primary" />
                        <div>
                            <span className="text-xl font-bold font-mono tracking-tight">{applications.length}</span>
                            <span className="text-sm text-muted-foreground ml-2 font-medium">Total Applied</span>
                        </div>
                    </div>
                </div>

                {/* Table Section */}
                {applications.length > 0 ? (
                    <div className="w-full bg-card/40 backdrop-blur-xl border border-border/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] overflow-hidden">
                        <div className="overflow-x-auto">
                            <Table className="w-full">
                                <TableHeader className="bg-muted/20">
                                    <TableRow className="border-border/40 hover:bg-transparent">
                                        <TableHead className="py-5 px-6 font-semibold text-foreground">Company</TableHead>
                                        <TableHead className="py-5 px-6 font-semibold text-foreground">Details</TableHead>
                                        <TableHead className="py-5 px-6 font-semibold text-foreground">Date Applied</TableHead>
                                        <TableHead className="py-5 px-6 font-semibold text-foreground text-right">Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {applications.map((app, i) => (
                                        <TableRow 
                                            key={app._id} 
                                            className="border-border/40 transition-colors hover:bg-muted/20 even:bg-muted/10 group"
                                            style={{ animationDelay: `${i * 100}ms` }}
                                        >
                                            <TableCell className="p-6 align-top">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0 ring-1 ring-primary/20 group-hover:scale-105 transition-transform overflow-hidden">
                                                        {app?.companyLogo ? (
                                                            <Image src={app.companyLogo} alt={app.companyName || "Logo"} width={48} height={48} className="w-full h-full object-contain p-2" />
                                                        ) : (
                                                            <span className="text-lg font-bold text-primary">{app?.companyName?.charAt(0).toUpperCase() || <Building2 className="w-6 h-6 text-primary" />}</span>
                                                        )}
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-lg">{app.companyName || "Unknown Company"}</p>
                                                        <p className="text-sm text-muted-foreground flex items-center gap-1.5 mt-0.5">
                                                            <Briefcase className="w-3.5 h-3.5" />
                                                            ID: {app.jobId?.slice(-6) || "N/A"}
                                                        </p>
                                                    </div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="p-6 align-top max-w-[300px]">
                                                <div className="space-y-2">
                                                    {app.portfolio && (
                                                        <a href={app.portfolio} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors">
                                                            <LinkIcon className="w-4 h-4 text-muted-foreground" />
                                                            Portfolio
                                                        </a>
                                                    )}
                                                    {app.resumeLink && (
                                                        <div className="flex items-center gap-1.5 text-sm">
                                                            <FileText className="w-4 h-4 text-muted-foreground shrink-0" />
                                                            <a href={app.resumeLink} target="_blank" rel="noopener noreferrer" className="truncate hover:text-primary transition-colors hover:underline">
                                                                {app.resumeLink}
                                                            </a>
                                                        </div>
                                                    )}
                                                    {app.message && (
                                                        <p className="text-sm text-muted-foreground line-clamp-2 mt-2 leading-relaxed">
                                                            "{app.message}"
                                                        </p>
                                                    )}
                                                </div>
                                            </TableCell>
                                            <TableCell className="p-6 align-top whitespace-nowrap">
                                                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                                                    <Calendar className="w-4 h-4" />
                                                    {app.createdAt ? new Intl.DateTimeFormat('en-US', {
                                                        month: 'short',
                                                        day: 'numeric',
                                                        year: 'numeric'
                                                    }).format(new Date(app.createdAt)) : "N/A"}
                                                </div>
                                            </TableCell>
                                            <TableCell className="p-6 align-top text-right">
                                                <Link 
                                                    href={`/jobs/${app.jobId}`}
                                                    className="inline-flex h-10 items-center justify-center rounded-xl bg-background border border-border/50 px-4 text-sm font-medium transition-all hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring hover:-translate-y-[1px] active:scale-[0.98] active:translate-y-[0px] shadow-sm"
                                                >
                                                    View Job
                                                </Link>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                ) : (
                    <div className="w-full flex flex-col items-center justify-center py-24 md:py-32 px-6 bg-card/20 backdrop-blur-sm border border-dashed border-border/60 rounded-[2.5rem]">
                        <div className="w-20 h-20 bg-muted/50 rounded-3xl flex items-center justify-center mb-6 ring-1 ring-border/50">
                            <AlertCircle className="w-10 h-10 text-muted-foreground/50" />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight mb-2">No Applications Yet</h3>
                        <p className="text-muted-foreground text-center max-w-md leading-relaxed mb-8">
                            You haven't applied to any jobs yet. Start exploring opportunities and your applications will appear here.
                        </p>
                        <Link 
                            href="/jobs"
                            className="inline-flex h-12 items-center justify-center rounded-xl bg-primary text-primary-foreground px-8 text-base font-medium shadow-lg shadow-primary/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Explore Jobs
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ApplicationPage;