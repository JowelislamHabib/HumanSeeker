import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { TooltipProvider } from "@/components/ui/tooltip";
import Image from "next/image";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <TooltipProvider>
      <SidebarProvider defaultOpen={true}>
        <div className="flex min-h-screen bg-[#0a0a0a] w-full">
          <DashboardSidebar />
          <main className="flex-1 overflow-auto bg-[#0a0a0a] text-white flex flex-col">
            <header className="flex h-14 shrink-0 items-center gap-2 border-b border-zinc-800/50 px-4 md:hidden">
              <SidebarTrigger className="-ml-1 text-zinc-400 hover:text-white" />
              <div className="ml-2">
                <Image
                  src="/worklix-white.png"
                  alt="WorkLix"
                  width={120}
                  height={28}
                  className="h-6 w-auto object-contain"
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
    </TooltipProvider>
  );
};

export default DashboardLayout;
