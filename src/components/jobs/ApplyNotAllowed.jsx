import { ShieldAlert, ArrowLeft } from "lucide-react";
import Link from "next/link";

const ApplyNotAllowed = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="bg-destructive/10 text-destructive p-4 rounded-full mb-6 animate-in zoom-in duration-300">
        <ShieldAlert className="w-12 h-12" />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
        Access Restricted
      </h2>
      <p className="text-muted-foreground max-w-md mx-auto mb-8">
        Only freelancers can apply for jobs. Please log in with a freelancer
        account to continue.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/jobs"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-10 px-6 py-2"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Browse Jobs
        </Link>
        <Link
          href="/login"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-10 px-6 py-2"
        >
          Login as Freelancer
        </Link>
      </div>
    </div>
  );
};

export default ApplyNotAllowed;
