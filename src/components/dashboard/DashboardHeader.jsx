"use client";

import { useState, useEffect, useRef } from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import { RiNotification3Line, RiSearchLine, RiLogoutBoxRLine, RiUserLine, RiSunLine, RiMoonLine } from "react-icons/ri";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function DashboardHeader() {
  const { data: session } = authClient.useSession();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  return (
    <header className="flex h-16 shrink-0 items-center justify-between border-b border-border/50 px-6 bg-background/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="-ml-1 text-muted-foreground hover:text-foreground transition-transform duration-300 active:scale-95" />
        <div className="md:hidden">
          <Image src="/worklix-white.png" alt="WorkLix" width={100} height={24} className="h-5 w-auto object-contain dark:block hidden" priority />
          <Image src="/worklix-dark.png" alt="WorkLix" width={100} height={24} className="h-5 w-auto object-contain dark:hidden block" priority />
        </div>
        <div className="hidden md:flex items-center text-sm font-medium text-muted-foreground">
          <span className="hover:text-foreground cursor-pointer transition-colors">Dashboard</span>
          <span className="mx-2">/</span>
          <span className="text-foreground font-semibold">Overview</span>
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        <div className="hidden md:flex relative group">
          <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground size-4 group-focus-within:text-foreground transition-colors" />
          <input type="text" placeholder="Search..." className="h-9 w-64 bg-accent/20 border border-border/50 rounded-full pl-9 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-foreground focus:bg-background transition-all" />
        </div>

        {mounted && (
          <button 
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")} 
            className="relative size-9 flex items-center justify-center rounded-full hover:bg-accent/50 text-muted-foreground hover:text-foreground transition-colors"
          >
            {theme === "dark" ? <RiSunLine className="size-5" /> : <RiMoonLine className="size-5" />}
          </button>
        )}

        <button className="relative size-9 flex items-center justify-center rounded-full hover:bg-accent/50 text-muted-foreground hover:text-foreground transition-colors">
          <RiNotification3Line className="size-5" />
          <span className="absolute top-2 right-2 size-1.5 bg-primary rounded-full ring-2 ring-background"></span>
        </button>

        {session?.user && (
          <div className="relative" ref={dropdownRef}>
            <div onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
              <Avatar className="size-8 cursor-pointer ring-1 ring-border/50 hover:ring-foreground transition-colors">
                <AvatarImage src={session.user.image} />
                <AvatarFallback>{session.user.name?.[0]?.toUpperCase()}</AvatarFallback>
              </Avatar>
            </div>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-xl border border-border bg-card p-1.5 shadow-xl animate-in fade-in slide-in-from-top-2 duration-200 flex flex-col gap-0.5">
                <div className="px-3 py-2 border-b border-border/50 mb-1.5 flex flex-col min-w-0">
                  <span className="text-sm font-bold text-foreground truncate">{session.user.name}</span>
                  <span className="text-xs text-muted-foreground truncate">{session.user.email}</span>
                </div>
                
                <Link href="/profile" onClick={() => setIsDropdownOpen(false)} className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-lg transition-colors">
                  <RiUserLine className="size-4" />
                  <span>My Profile</span>
                </Link>

                <div className="h-px bg-border/50 my-1" />

                <button onClick={handleSignOut} className="flex w-full items-center gap-2.5 px-3 py-2 text-sm font-medium text-destructive hover:bg-destructive/10 rounded-lg transition-colors cursor-pointer text-left">
                  <RiLogoutBoxRLine className="size-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
