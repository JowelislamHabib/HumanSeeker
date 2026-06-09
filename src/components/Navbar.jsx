"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  RiTeamFill,
  RiSunLine,
  RiMoonLine,
  RiUserLine,
  RiArrowDownSLine,
  RiLogoutBoxRLine,
} from "react-icons/ri";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { authClient } from "@/lib/auth-client";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

const navLinks = [
  { label: "Browse Projects", href: "/projects" },
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Agencies", href: "/agencies" },
  { label: "Pricing", href: "/pricing" },
];

const userLinks = [{ label: "My Profile", href: "/profile", Icon: RiUserLine }];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const { data: session, isPending } = authClient.useSession();
  // console.log(session);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isProfileDropdownOpen) return;
    const handleClose = () => setIsProfileDropdownOpen(false);
    document.addEventListener("click", handleClose);
    return () => document.removeEventListener("click", handleClose);
  }, [isProfileDropdownOpen]);

  const handleSignOut = async () => {
    setIsMenuOpen(false);
    setIsProfileDropdownOpen(false);
    await authClient.signOut();
    router.push("/login");
  };

  if (pathname?.startsWith("/dashboard")) return null;

  const renderAvatar = (isMobile) => {
    if (!session?.user) return null;
    const size = isMobile ? 40 : 32;
    const sizeClass = isMobile ? "w-10 h-10" : "w-8 h-8";

    if (session.user.image) {
      return (
        <Image
          src={session.user.image}
          alt={session.user.name || "User Avatar"}
          referrerPolicy="no-referrer"
          width={size}
          height={size}
          unoptimized
          className={cn("rounded-lg object-cover", sizeClass)}
        />
      );
    }

    return (
      <div
        className={cn(
          "rounded-lg bg-indigo-500 text-white flex items-center justify-center font-bold",
          sizeClass,
          isMobile ? "text-base" : "text-sm",
        )}
      >
        {session.user.name ? session.user.name[0].toUpperCase() : "U"}
      </div>
    );
  };

  const renderUserInfo = (isMobile) => {
    if (!session?.user) return null;
    return (
      <div
        className={cn(
          "flex flex-col",
          isMobile
            ? "flex-1 min-w-0 pr-2"
            : "px-3 py-2 border-b border-zinc-150 dark:border-zinc-900 mb-1.5 gap-0.5 min-w-0",
        )}
      >
        <span className="text-sm font-bold text-zinc-900 dark:text-white truncate">
          {session.user.name}
        </span>
        <span className="text-xs text-zinc-500 dark:text-zinc-450 truncate">
          {session.user.email}
        </span>
      </div>
    );
  };

  const renderThemeToggle = () => {
    if (!mounted) {
      return <div className="w-9 h-9 shrink-0" />;
    }

    return (
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="w-9 h-9 flex items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-all cursor-pointer active:scale-95 shrink-0"
        aria-label="Toggle Theme"
      >
        {theme === "dark" ? (
          <RiSunLine className="w-4.5 h-4.5" />
        ) : (
          <RiMoonLine className="w-4.5 h-4.5" />
        )}
      </button>
    );
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-200 dark:border-zinc-900/80 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto container px-6 h-20 flex items-center justify-between">
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center group outline-none">
          <Image
            src="/worklix-dark.png"
            alt="WorkLix Logo"
            width={120}
            height={36}
            priority
            className="h-8 w-auto object-contain dark:hidden transition-transform duration-300 group-hover:scale-105"
          />
          <Image
            src="/worklix-white.png"
            alt="WorkLix Logo"
            width={120}
            height={36}
            priority
            className="h-8 w-auto object-contain hidden dark:block transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {/* Main Links Capsule */}
          <div className="flex items-center gap-6 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 px-6 py-2 rounded-xl transition-colors">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Vertical Divider */}
          <div className="h-4 w-px bg-zinc-200 dark:bg-zinc-800 transition-colors" />

          {/* Sign In & Get Started / Profile Dropdown */}
          {!isPending &&
            (session ? (
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsProfileDropdownOpen(!isProfileDropdownOpen);
                  }}
                  className="flex items-center gap-2 p-1.5 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 border border-transparent hover:border-zinc-200 dark:hover:border-zinc-800 transition-all cursor-pointer select-none"
                >
                  {renderAvatar(false)}
                  <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 hidden xl:inline-block max-w-[120px] truncate">
                    {session.user.name}
                  </span>
                  <RiArrowDownSLine
                    className={cn(
                      "w-4 h-4 text-zinc-400 dark:text-zinc-550 transition-transform duration-200",
                      isProfileDropdownOpen && "rotate-180",
                    )}
                  />
                </button>

                {isProfileDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-56 rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 p-1.5 shadow-xl shadow-zinc-950/5 dark:shadow-zinc-950/20 backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-200 flex flex-col gap-0.5">
                    {renderUserInfo(false)}

                    {userLinks.map(({ label, href, Icon }) => (
                      <Link
                        key={href}
                        href={href}
                        className="flex items-center gap-2.5 px-3 py-2 text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 rounded-lg transition-colors"
                      >
                        <Icon className="w-4.5 h-4.5 text-zinc-400" />
                        <span>{label}</span>
                      </Link>
                    ))}

                    <div className="h-px bg-zinc-150 dark:bg-zinc-900 my-1" />

                    <button
                      onClick={handleSignOut}
                      className="flex w-full items-center gap-2.5 px-3 py-2 text-sm font-medium text-rose-600 dark:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors cursor-pointer text-left"
                    >
                      <RiLogoutBoxRLine className="w-4.5 h-4.5 text-rose-500" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                {/* Sign In */}
                <Link
                  href="/login"
                  className="text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-200 text-sm font-semibold px-2"
                >
                  Sign In
                </Link>

                {/* Get Started */}
                <Link
                  href="/register"
                  className="bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-black font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 active:scale-95 shadow-md shadow-zinc-900/5 dark:shadow-white/5"
                >
                  Get Started
                </Link>
              </>
            ))}

          {/* Theme Toggle */}
          {renderThemeToggle()}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out border-zinc-200 dark:border-zinc-900 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg shadow-lg",
          isMenuOpen
            ? "max-h-[600px] border-t opacity-100"
            : "max-h-0 opacity-0 border-t-0 pointer-events-none",
        )}
      >
        <div className="flex flex-col px-6 py-5 gap-6">
          {/* Main Links */}
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white py-3 text-lg font-medium transition-colors border-b border-zinc-100 dark:border-zinc-800/60 last:border-0"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {!isPending &&
            (session ? (
              <div className="flex flex-col gap-4 bg-zinc-50 dark:bg-zinc-900/50 -mx-3 px-3 py-4 rounded-2xl border border-zinc-100 dark:border-zinc-800/80">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    {renderAvatar(true)}
                    {renderUserInfo(true)}
                  </div>
                  {renderThemeToggle()}
                </div>

                <div className="h-px bg-zinc-200 dark:bg-zinc-800/80 w-full" />

                <div className="flex flex-col gap-1">
                  {userLinks.map(({ label, href, Icon }) => (
                    <Link
                      key={href}
                      href={href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300 py-2.5 px-3 -mx-3 hover:bg-zinc-100 dark:hover:bg-zinc-800/50 rounded-xl transition-colors font-medium"
                    >
                      <Icon className="w-5 h-5 text-zinc-400 dark:text-zinc-500" />
                      <span>{label}</span>
                    </Link>
                  ))}
                </div>

                <button
                  onClick={handleSignOut}
                  className="flex items-center justify-center w-full gap-2.5 text-rose-600 dark:text-rose-400 py-3 mt-1 bg-rose-50 dark:bg-rose-500/10 hover:bg-rose-100 dark:hover:bg-rose-500/20 rounded-xl font-semibold transition-colors cursor-pointer"
                >
                  <RiLogoutBoxRLine className="w-5 h-5" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-4 pt-2">
                <div className="flex items-center justify-between w-full mb-1">
                  <span className="text-zinc-600 dark:text-zinc-400 font-medium text-sm">
                    Theme Appearance
                  </span>
                  {renderThemeToggle()}
                </div>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <Link
                    href="/login"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center py-3.5 px-5 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white rounded-xl font-semibold transition-colors flex-1"
                  >
                    Sign In
                  </Link>
                  <Link
                    href="/register"
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-center py-3.5 px-5 bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 rounded-xl font-bold transition-all active:scale-95 shadow-lg shadow-zinc-900/10 dark:shadow-white/10 flex-1"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
