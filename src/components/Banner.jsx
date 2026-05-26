"use client";

import React from "react";
import { RiSearchLine, RiMapPinLine, RiBriefcaseFill } from "react-icons/ri";

const popularCategories = [
  { label: "UI/UX Design", href: "/projects?category=design" },
  { label: "AI Development", href: "/projects?category=ai" },
  { label: "DevOps & Cloud", href: "/projects?category=devops" },
];

const Banner = () => {
  return (
    <div className="relative w-full overflow-hidden bg-zinc-950 py-24 md:py-36">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[350px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-12 left-1/4 w-[150px] h-[150px] bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="mx-auto container px-6 relative z-10 flex flex-col items-center text-center gap-8">
        {/* Project count badge */}
        <div className="inline-flex items-start gap-2.5 rounded-full border border-zinc-800 bg-zinc-900/60 px-4.5 py-1.5 text-xs text-zinc-300 shadow-md">
          <RiBriefcaseFill className="text-amber-500 w-4 h-4 shrink-0" />
          <span className="font-bold text-white">50,000+</span>
          <span className="uppercase tracking-wider text-[10px] text-zinc-500 font-bold">
            Active Projects Live
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight max-w-4xl leading-tight">
          Find Your Next{" "}
          <span className="bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Dream Project
          </span>{" "}
          Today
        </h1>

        {/* Description */}
        <p className="max-w-2xl text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
          WorkLix connects top-tier freelancers with leading startups, agencies,
          and global businesses. Pitch proposals, manage contracts, and scale
          your business — faster.
        </p>

        {/* Search Bar Container */}
        <div className="w-full max-w-4xl mt-4">
          <form className="w-full flex flex-col md:flex-row items-center gap-2 p-2 rounded-2xl md:rounded-full border border-zinc-800 bg-zinc-900/40 backdrop-blur-md transition-all duration-300 focus-within:border-indigo-500/55 focus-within:bg-zinc-900/60 focus-within:ring-4 focus-within:ring-indigo-500/10">
            {/* Project Title Input */}
            <div className="w-full flex items-center gap-3 px-4 py-2.5 group">
              <RiSearchLine className="text-zinc-500 w-5 h-5 shrink-0 group-focus-within:text-indigo-400 transition-colors duration-200" />
              <input
                type="text"
                placeholder="Project title, category, or skill..."
                className="w-full bg-transparent text-sm text-white placeholder-zinc-500 outline-none"
              />
            </div>

            {/* Vertical Divider (Desktop Only) */}
            <div className="hidden md:block h-6 w-px bg-zinc-800 shrink-0" />

            {/* Location Input */}
            <div className="w-full flex items-center gap-3 px-4 py-2.5 group">
              <RiMapPinLine className="text-zinc-500 w-5 h-5 shrink-0 group-focus-within:text-indigo-400 transition-colors duration-200" />
              <input
                type="text"
                placeholder="Location, client, or Remote..."
                className="w-full bg-transparent text-sm text-white placeholder-zinc-500 outline-none"
              />
            </div>

            {/* Search Button */}
            <button
              type="submit"
              className="w-full md:w-auto shrink-0 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl md:rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-300 shadow-md shadow-indigo-600/20 active:scale-95 cursor-pointer hover:shadow-indigo-600/30"
              aria-label="Search"
            >
              <RiSearchLine className="w-5 h-5" />
              <span className="md:hidden">Search Projects</span>
            </button>
          </form>
        </div>

        {/* Trending Positions */}
        <div className="flex flex-col sm:flex-row items-center gap-3 mt-4 text-sm">
          <span className="text-zinc-500 font-semibold uppercase tracking-wider text-[11px]">
            Popular Categories
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {popularCategories.map((cat) => (
              <a
                key={cat.label}
                href={cat.href}
                className="rounded-full border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 hover:border-zinc-700 px-4 py-1.5 text-xs text-zinc-300 transition-all duration-200 font-semibold cursor-pointer active:scale-95"
              >
                {cat.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
