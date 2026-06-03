"use client";

import React from "react";
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
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  RiDashboardLine,
  RiBuilding4Line,
  RiBriefcaseLine,
  RiFileListLine,
  RiSettings3Line,
} from "react-icons/ri";
import { authClient } from "@/lib/auth-client";

const navItems = [
  { title: "Dashboard", url: "/dashboard", icon: RiDashboardLine },
  { title: "My Agency", url: "/dashboard/company", icon: RiBuilding4Line },
  {
    title: "Manage Projects",
    url: "/dashboard/manage-projects",
    icon: RiBriefcaseLine,
  },
  {
    title: "Proposals",
    url: "/dashboard/proposals",
    icon: RiFileListLine,
  },
  { title: "Settings", url: "/dashboard/settings", icon: RiSettings3Line },
];

const DashboardSidebar = () => {
  const pathname = usePathname();
  const { data: session, isPending } = authClient.useSession();
  console.log(session);

  return (
    <div>
      <Sidebar
        className="border-r border-zinc-800 bg-[#121212] text-zinc-300 dark z-60"
        collapsible="icon"
      >
        <SidebarHeader className="p-4 group-data-[collapsible=icon]:p-2 border-b-0">
          <div className="flex items-center h-10 px-2 group-data-[collapsible=icon]:justify-center">
            <Image 
              src="/worklix-white.png" 
              alt="WorkLix" 
              width={140} 
              height={32} 
              className="h-7 w-auto object-contain group-data-[collapsible=icon]:hidden" 
              priority
            />
            <Image 
              src="/Favicon.png" 
              alt="WL" 
              width={32} 
              height={32} 
              className="h-8 w-auto object-contain hidden group-data-[collapsible=icon]:block"
            />
          </div>
        </SidebarHeader>

        <SidebarContent className="px-3 py-4">
          {/* Profile Section */}
          <div className="mb-8 px-2 group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border border-zinc-700">
                <AvatarImage src={session?.user?.image} alt={session?.user?.name} />
                <AvatarFallback>{session?.user?.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col group-data-[collapsible=icon]:hidden overflow-hidden">
                <span className="text-sm font-semibold text-white leading-none mb-1.5 truncate">
                  {session?.user?.name}
                </span>
                <span className="text-xs text-zinc-400 mb-2 truncate">
                  {session?.user?.email}
                </span>
                <div className="text-[9px] font-bold text-zinc-300 border border-zinc-600 bg-zinc-800/50 px-1.5 py-0.5 rounded uppercase tracking-wider w-fit">
                  PREMIUM ACCOUNT
                </div>
              </div>
            </div>
          </div>

          <SidebarMenu className="gap-2">
            {navItems.map((item) => {
              const isActive =
                pathname === item.url || pathname?.startsWith(item.url + "/");
              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    className={`transition-all group-data-[collapsible=icon]:justify-center h-10 ${
                      isActive
                        ? "bg-[#252525] text-white rounded-md rounded-r-none border-r-[3px] border-white font-medium"
                        : "text-zinc-400 hover:bg-zinc-800/50 hover:text-white rounded-md font-medium"
                    }`}
                  >
                    <Link href={item.url}>
                      <item.icon className="size-5 shrink-0" />
                      <span className="group-data-[collapsible=icon]:hidden ml-1">
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter className="p-4 border-t border-zinc-800/50">
          <SidebarTrigger className="w-full justify-center text-zinc-400 hover:text-white hover:bg-zinc-800/50" />
        </SidebarFooter>
      </Sidebar>
    </div>
  );
};

export default DashboardSidebar;
