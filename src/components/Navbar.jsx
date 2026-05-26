"use client";

import { useState } from "react";
import Link from "next/link";
import { RiTeamFill } from "react-icons/ri";

const navLinks = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Company", href: "/companies" },
  { label: "Pricing", href: "/pricing" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-zinc-900/80 bg-zinc-950/80 backdrop-blur-md">
      <div className="mx-auto container px-6 h-20 flex items-center justify-between">
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative shrink-0 w-9 h-9 rounded-lg bg-linear-to-tr from-indigo-500 via-purple-500 to-pink-500 p-1.5 flex items-center justify-center shadow-lg shadow-purple-500/10 transition-transform duration-300 group-hover:scale-105">
            <RiTeamFill />
          </div>
          <div className="flex flex-col select-none leading-[1.1]">
            <span className="text-2xl font-bold text-white tracking-tight">
              WorkLix
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {/* Main Links Capsule */}
          <div className="flex items-center gap-6 bg-zinc-900 border border-zinc-800/80 px-6 py-2 rounded-xl">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-zinc-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Vertical Divider */}
          <div className="h-4 w-px bg-zinc-800" />

          {/* Sign In */}
          <Link
            href="/login"
            className="text-indigo-500 hover:text-indigo-400 transition-colors duration-200 text-sm font-semibold px-2"
          >
            Sign In
          </Link>

          {/* Get Started */}
          <Link
            href="/register"
            className="bg-white hover:bg-zinc-200 text-black font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 active:scale-95 shadow-md shadow-white/5"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors focus:outline-none"
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
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-zinc-900 bg-zinc-950/95 backdrop-blur-lg ${
          isMenuOpen
            ? "max-h-[300px] border-t py-4 opacity-100"
            : "max-h-0 opacity-0 border-t-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-4 px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-zinc-300 hover:text-white py-2 text-base font-medium transition-colors border-b border-zinc-900"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center justify-between pt-2">
            <Link
              href="/login"
              onClick={() => setIsMenuOpen(false)}
              className="text-indigo-500 hover:text-indigo-400 text-base font-semibold py-2 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              onClick={() => setIsMenuOpen(false)}
              className="bg-white hover:bg-zinc-200 text-black font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 active:scale-95 text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
