"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  RiDashboardLine,
  RiBuilding4Line,
  RiBriefcaseLine,
  RiFileListLine,
  RiSettings3Line,
  RiSunLine,
  RiMoonLine,
  RiBuilding2Line,
  RiVipCrownLine,
} from "react-icons/ri";
import { authClient } from "@/lib/auth-client";
import { useTheme } from "next-themes";

const navItems = [
  { title: "Dashboard", url: "/dashboard/recruiter", icon: RiDashboardLine },
  {
    title: "Company Profile",
    url: "/dashboard/recruiter/company",
    icon: RiBuilding2Line,
  },
  { title: "Jobs", url: "/dashboard/recruiter/jobs", icon: RiBuilding4Line },
  {
    title: "Create Job",
    url: "/dashboard/recruiter/jobs/new",
    icon: RiBriefcaseLine,
  },
  {
    title: "Applications",
    url: "/dashboard/recruiter/applications",
    icon: RiFileListLine,
  },
  { title: "Settings", url: "/dashboard/settings", icon: RiSettings3Line },
];

const DashboardSidebar = () => {
  const pathname = usePathname();
  const { data: session, isPending } = authClient.useSession();
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative group/sidebar transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
      <Sidebar
        className="border-r border-border/50 bg-background text-sidebar-foreground z-60 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
        collapsible="icon"
      >
        <SidebarHeader className="p-6 group-data-[collapsible=icon]:p-4 border-b border-border/30">
          <div className="flex items-center h-10 px-2 group-data-[collapsible=icon]:justify-center">
            <div className="group-data-[collapsible=icon]:hidden">
              <Image
                src="/worklix-white.png"
                alt="WorkLix"
                width={140}
                height={32}
                className="h-6 w-auto object-contain dark:block hidden"
                priority
              />
              <Image
                src="/worklix-dark.png"
                alt="WorkLix"
                width={140}
                height={32}
                className="h-6 w-auto object-contain dark:hidden block"
                priority
              />
            </div>
            <Image
              src="/Favicon.png"
              alt="WL"
              width={32}
              height={32}
              className="h-8 w-auto object-contain hidden group-data-[collapsible=icon]:block"
            />
          </div>
        </SidebarHeader>

        <SidebarContent className="px-4 py-6">
          {/* Premium Plan Card */}
          <div className="mb-8 px-2 group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center">
            <div className="p-4 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 group-data-[collapsible=icon]:p-0 group-data-[collapsible=icon]:bg-transparent group-data-[collapsible=icon]:border-transparent transition-all duration-500 relative overflow-hidden flex items-center gap-4">
              <div className="absolute top-0 right-0 -mr-4 -mt-4 w-16 h-16 bg-primary/20 rounded-full blur-xl group-data-[collapsible=icon]:hidden" />
              
              <div className="flex items-center justify-center size-10 shrink-0 rounded-2xl bg-primary/20 text-primary border border-primary/30 group-data-[collapsible=icon]:size-8 group-data-[collapsible=icon]:rounded-xl">
                <RiVipCrownLine className="size-5 group-data-[collapsible=icon]:size-4" />
              </div>
              
              <div className="flex flex-col group-data-[collapsible=icon]:hidden">
                <span className="text-[10px] uppercase tracking-widest font-bold text-primary mb-0.5">Current Plan</span>
                <span className="text-sm font-black text-foreground tracking-tight leading-none">Premium</span>
              </div>
            </div>
          </div>

          <SidebarMenu className="gap-3">
            {navItems.map((item) => {
              const isActive = pathname === item.url;
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    className={`transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-data-[collapsible=icon]:justify-center h-12 relative overflow-hidden group/item ${
                      isActive
                        ? "bg-foreground text-background rounded-2xl font-bold shadow-md hover:bg-foreground hover:text-background"
                        : "text-muted-foreground hover:bg-accent/50 hover:text-foreground rounded-2xl font-medium"
                    }`}
                  >
                    <Link href={item.url} className="px-4">
                      {isActive && (
                        <div className="absolute inset-0 bg-white/10 dark:bg-black/10 mix-blend-overlay pointer-events-none" />
                      )}
                      <item.icon className={`size-[1.125rem] shrink-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isActive ? 'scale-110' : 'group-hover/item:scale-110'}`} />
                      <span className="group-data-[collapsible=icon]:hidden ml-3 tracking-wide">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </div>
  );
};

export default DashboardSidebar;
