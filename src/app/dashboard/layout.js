import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { SidebarProvider } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";

const DashboardLayout = ({ children }) => {
  return (
    <TooltipProvider suppressHydrationWarning>
      <SidebarProvider defaultOpen={true}>
        <div className="flex min-h-[100dvh] bg-background w-full selection:bg-primary/20">
          <DashboardSidebar />
          <main className="flex-1 flex flex-col w-full overflow-hidden">
            <div className="flex-1 overflow-auto bg-background text-foreground flex flex-col relative transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
              <DashboardHeader />
              <div className="w-full px-4 sm:px-6 lg:px-8 py-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)]">
                {children}
              </div>
            </div>
          </main>
        </div>
      </SidebarProvider>
      <Toaster />
    </TooltipProvider>
  );
};

export default DashboardLayout;
