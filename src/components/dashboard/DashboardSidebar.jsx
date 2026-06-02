"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuAction,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  RiDashboardLine,
  RiBuilding4Line,
  RiBriefcaseLine,
  RiFileListLine,
  RiSettings3Line,
  RiArrowRightSLine,
  RiExpandUpDownLine,
  RiMoreFill,
  RiPieChartLine,
  RiMapPinLine,
  RiStackLine,
  RiHashtag,
  RiFolderLine
} from "react-icons/ri";
import { authClient } from "@/lib/auth-client";

const mainNavItems = [
  { title: "Dashboard", url: "/dashboard", icon: RiDashboardLine, isActive: true, items: [{ title: "Overview", url: "/dashboard" }] },
  { title: "My Company", url: "/dashboard/agency", icon: RiBuilding4Line, items: [{ title: "Profile", url: "/dashboard/agency" }] },
  { title: "Manage Jobs", url: "/dashboard/manage-jobs", icon: RiBriefcaseLine },
  { title: "Applications", url: "/dashboard/applications", icon: RiFileListLine },
  { title: "Settings", url: "/dashboard/settings", icon: RiSettings3Line },
];

const projectItems = [
  { title: "Design Engineering", url: "#", icon: RiHashtag },
  { title: "Sales & Marketing", url: "#", icon: RiPieChartLine },
  { title: "Travel", url: "#", icon: RiMapPinLine },
];

const DashboardSidebar = () => {
  const pathname = usePathname();
  const { data: session } = authClient.useSession();
  
  const user = session?.user || {
    name: "Loading...",
    email: "",
    image: "https://github.com/shadcn.png"
  };

  return (
    <Sidebar className="border-r border-zinc-800 bg-[#0a0a0a] text-zinc-300 dark z-[60]" collapsible="icon">
      <SidebarHeader className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton size="lg" className="w-full data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground hover:bg-zinc-800/50 hover:text-white">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                    <RiStackLine className="size-5" />
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold text-white">WorkLix</span>
                    <span className="truncate text-xs text-zinc-400">Enterprise</span>
                  </div>
                  <RiExpandUpDownLine className="ml-auto size-4 text-zinc-400" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg dark" align="start" side="bottom" sideOffset={4}>
                <DropdownMenuLabel className="text-xs text-zinc-500">Workspaces</DropdownMenuLabel>
                <DropdownMenuItem className="gap-2 p-2">
                  <div className="flex size-6 items-center justify-center rounded-sm border">
                    <RiStackLine className="size-4 shrink-0" />
                  </div>
                  WorkLix
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupLabel className="text-zinc-400 group-data-[collapsible=icon]:hidden">Platform</SidebarGroupLabel>
          <SidebarMenu>
            {mainNavItems.map((item) => (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title} className="hover:bg-zinc-800/50 hover:text-white text-zinc-400">
                      <item.icon className="size-4" />
                      <span>{item.title}</span>
                      {item.items && (
                        <RiArrowRightSLine className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      )}
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items && (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.items.map((subItem) => (
                          <SidebarMenuSubItem key={subItem.title}>
                            <SidebarMenuSubButton asChild className="hover:bg-zinc-800/50 hover:text-white text-zinc-400">
                              <Link href={subItem.url}>
                                <span>{subItem.title}</span>
                              </Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  )}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className="text-zinc-400 group-data-[collapsible=icon]:hidden">Projects</SidebarGroupLabel>
          <SidebarMenu>
            {projectItems.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild className="text-zinc-400 hover:bg-zinc-800/50 hover:text-white">
                  <a href={item.url}>
                    <item.icon className="size-4 mr-2" />
                    <span>{item.title}</span>
                  </a>
                </SidebarMenuButton>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <SidebarMenuAction showOnHover className="text-zinc-400 hover:text-white">
                      <RiMoreFill />
                      <span className="sr-only">More</span>
                    </SidebarMenuAction>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-48 rounded-lg dark" side="bottom" align="end">
                    <DropdownMenuItem>
                      <RiFolderLine className="mr-2 size-4 text-zinc-400" />
                      <span>View Project</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </SidebarMenuItem>
            ))}
            <SidebarMenuItem>
              <SidebarMenuButton className="text-zinc-400 hover:bg-zinc-800/50 hover:text-white">
                <RiMoreFill className="size-4 mr-2" />
                <span>More</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="w-full data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground hover:bg-zinc-800/50 hover:text-white"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={user.image || "https://github.com/shadcn.png"} alt={user.name} />
                    <AvatarFallback className="rounded-lg">{user.name ? user.name[0].toUpperCase() : "U"}</AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold text-white">{user.name}</span>
                    <span className="truncate text-xs text-zinc-400">{user.email}</span>
                  </div>
                  <RiExpandUpDownLine className="ml-auto size-4 text-zinc-400" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg dark" side="bottom" align="end" sideOffset={4}>
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage src={user.image || "https://github.com/shadcn.png"} alt={user.name} />
                      <AvatarFallback className="rounded-lg">{user.name ? user.name[0].toUpperCase() : "U"}</AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold text-white">{user.name}</span>
                      <span className="truncate text-xs text-zinc-400">{user.email}</span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-zinc-300">
                  <RiSettings3Line className="mr-2 size-4" />
                  Account
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-zinc-300">Log out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;
