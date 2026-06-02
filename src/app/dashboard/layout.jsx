import React from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";

const DashboardLayout = ({ children }) => {
  return (
    <TooltipProvider>
      <SidebarProvider>
        <DashboardSidebar />
        <SidebarInset className="bg-zinc-50 dark:bg-zinc-900 overflow-x-hidden">
          <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b border-zinc-200 dark:border-zinc-800 bg-white px-6 dark:bg-zinc-950">
            <SidebarTrigger />
          </header>
          <main className="flex-1 w-full h-full p-6">
            {children}
          </main>
        </SidebarInset>
      </SidebarProvider>
    </TooltipProvider>
  );
};

export default DashboardLayout;
