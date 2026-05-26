"use client";

import React from "react";
import Link from "next/link";
import { RiUserAddLine, RiPriceTag3Line } from "react-icons/ri";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

const CtaSection = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = !mounted || resolvedTheme === "dark";
  const gridColor = isDark ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 0, 0, 0.02)";

  return (
    <section className="relative w-full bg-zinc-50 dark:bg-zinc-950 py-28 border-t border-zinc-200 dark:border-zinc-900 overflow-hidden transition-colors duration-300">
      {/* Background radial glow */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: isDark
            ? `
              radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 60%),
              radial-gradient(circle at 30% 70%, rgba(236, 72, 153, 0.08) 0%, transparent 50%)
            `
            : `
              radial-gradient(circle at 50% 50%, rgba(99, 102, 241, 0.06) 0%, transparent 60%),
              radial-gradient(circle at 30% 70%, rgba(236, 72, 153, 0.03) 0%, transparent 50%)
            `
        }}
      />

      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 pointer-events-none flex items-center justify-center"
        style={{
          backgroundImage: `
            linear-gradient(${gridColor} 1px, transparent 1px),
            linear-gradient(90deg, ${gridColor} 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px"
        }}
      />

      <div className="mx-auto container px-6 relative z-10 flex flex-col items-center text-center gap-8">
        
        {/* Sub-label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-indigo-500/20 dark:border-indigo-400/25 bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 shadow-xs backdrop-blur-xs select-none">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-450 dark:bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase">
            Join Worklix Today
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-950 dark:text-white tracking-tight max-w-3xl leading-tight transition-colors duration-300">
          Ready to scale your leverage and projects?
        </h2>

        {/* Description */}
        <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed transition-colors duration-300">
          Connect with top-tier developers, designers, and agencies. Find verified projects or build your professional insights hub today.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mt-2">
          {/* Create an account - Highlighted */}
          <Link
            href="/signup"
            className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-black font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 active:scale-95 text-center flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/10 dark:shadow-white/5 cursor-pointer"
          >
            <RiUserAddLine className="w-4 h-4 shrink-0" />
            <span>Create an account</span>
          </Link>

          {/* View pricing - Secondary */}
          <button
            onClick={() => {
              const pricingSec = document.querySelector("section:nth-of-type(4)") || document.getElementById("pricing");
              if (pricingSec) {
                pricingSec.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="w-full sm:w-auto bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-850 text-zinc-900 dark:text-white font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 active:scale-95 text-center flex items-center justify-center gap-2 cursor-pointer"
          >
            <RiPriceTag3Line className="w-4 h-4 shrink-0" />
            <span>View pricing</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default CtaSection;
