import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import Image from "next/image";
import { Toaster } from "@/components/ui/sonner";
const DashboardLayout = ({ children }) => {
  return (
    <TooltipProvider suppressHydrationWarning>
      <SidebarProvider defaultOpen={true}>
        <div className="flex min-h-screen bg-background w-full">
          <DashboardSidebar />
          <main className="flex-1 overflow-auto bg-background text-foreground flex flex-col">
            <header className="flex h-14 shrink-0 items-center gap-2 border-b border-border px-4 md:hidden">
              <SidebarTrigger className="-ml-1 text-muted-foreground hover:text-foreground" />
              <div className="ml-2">
                <Image
                  src="/worklix-white.png"
                  alt="WorkLix"
                  width={120}
                  height={28}
                  className="h-6 w-auto object-contain dark:block hidden"
                  priority
                />
                <Image
                  src="/worklix-dark.png"
                  alt="WorkLix"
                  width={120}
                  height={28}
                  className="h-6 w-auto object-contain dark:hidden block"
                  priority
                />
              </div>
            </header>
            <div className="container mx-auto max-w-7xl p-4 md:p-6">
              {children}
            </div>
          </main>
        </div>
      </SidebarProvider>
      <Toaster />
    </TooltipProvider>
  );
};

export default DashboardLayout;
