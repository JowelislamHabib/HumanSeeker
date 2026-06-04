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
  RiSunLine,
  RiMoonLine,
} from "react-icons/ri";
import { authClient } from "@/lib/auth-client";
import { useTheme } from "next-themes";

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
  const { theme, setTheme } = useTheme();
  // console.log(session);

  return (
    <div>
      <Sidebar
        className="border-r border-border bg-sidebar text-sidebar-foreground z-60"
        collapsible="icon"
      >
        <SidebarHeader className="p-4 group-data-[collapsible=icon]:p-2 border-b-0">
          <div className="flex items-center h-10 px-2 group-data-[collapsible=icon]:justify-center">
            <div className="group-data-[collapsible=icon]:hidden">
              <Image
                src="/worklix-white.png"
                alt="WorkLix"
                width={140}
                height={32}
                className="h-7 w-auto object-contain dark:block hidden"
                priority
              />
              <Image
                src="/worklix-dark.png"
                alt="WorkLix"
                width={140}
                height={32}
                className="h-7 w-auto object-contain dark:hidden block"
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

        <SidebarContent className="px-3 py-4">
          {/* Profile Section */}
          <div className="mb-8 px-2 group-data-[collapsible=icon]:px-0 group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10 border border-border">
                <AvatarImage
                  src={session?.user?.image}
                  alt={session?.user?.name}
                />
                <AvatarFallback>{session?.user?.name?.[0]}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col group-data-[collapsible=icon]:hidden overflow-hidden">
                <span className="text-sm font-semibold text-foreground leading-none mb-1.5 truncate">
                  {session?.user?.name}
                </span>
                <span className="text-xs text-muted-foreground mb-2 truncate">
                  {session?.user?.email}
                </span>
                <div className="text-[9px] font-bold text-muted-foreground border border-border bg-accent/50 px-1.5 py-0.5 rounded uppercase tracking-wider w-fit">
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
                        ? "bg-accent text-accent-foreground rounded-md rounded-r-none border-r-[3px] border-primary font-medium"
                        : "text-muted-foreground hover:bg-accent/50 hover:text-foreground rounded-md font-medium"
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

        <SidebarFooter className="p-4 border-t border-border flex flex-col gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-full flex items-center group-data-[collapsible=icon]:justify-center gap-2 text-muted-foreground hover:text-foreground hover:bg-accent/50 p-2 rounded-md transition-colors"
          >
            <RiSunLine className="size-5 shrink-0 hidden dark:block" />
            <RiMoonLine className="size-5 shrink-0 block dark:hidden" />
            <span className="group-data-[collapsible=icon]:hidden font-medium text-sm">
              Toggle Theme
            </span>
          </button>
          <SidebarTrigger className="w-full justify-center text-muted-foreground hover:text-foreground hover:bg-accent/50" />
        </SidebarFooter>
      </Sidebar>
    </div>
  );
};

export default DashboardSidebar;
