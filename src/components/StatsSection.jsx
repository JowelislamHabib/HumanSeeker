"use client";

import React from "react";
import Image from "next/image";
import {
  RiBriefcase2Line,
  RiBuilding4Line,
  RiTeamLine,
  RiAwardLine,
  RiStarFill,
} from "react-icons/ri";
import { motion } from "motion/react";

const stats = [
  {
    icon: RiBriefcase2Line,
    value: "50K+",
    label: "Active Projects",
    color: "from-blue-500 to-indigo-500",
    shadow: "shadow-blue-500/10",
  },
  {
    icon: RiBuilding4Line,
    value: "12K+",
    label: "Agencies Partnered",
    color: "from-purple-500 to-fuchsia-500",
    shadow: "shadow-purple-500/10",
  },
  {
    icon: RiTeamLine,
    value: "2M+",
    label: "Freelancers",
    color: "from-pink-500 to-rose-500",
    shadow: "shadow-pink-500/10",
  },
  {
    icon: RiAwardLine,
    value: "97%",
    label: "Satisfaction Rate",
    color: "from-amber-500 to-orange-500",
    shadow: "shadow-amber-500/10",
  },
];

const StatsSection = () => {
  return (
    <section className="relative w-full bg-zinc-50 dark:bg-zinc-950 py-24 border-t border-zinc-200 dark:border-zinc-900 overflow-hidden transition-colors duration-300">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.12,
            },
          },
        }}
        className="mx-auto container px-6 relative z-10 flex flex-col items-center gap-12"
      >
        {/* Header content (Centered) */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } },
          }}
          className="flex flex-col items-center text-center gap-6 max-w-3xl"
        >
          {/* Styled Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-indigo-500/20 dark:border-indigo-400/25 bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 shadow-xs backdrop-blur-xs select-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase">
              Worklix Core Platform
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight leading-tight transition-colors duration-300">
            Where high-growth teams connect and deliver.
          </h2>

          {/* Sub-description */}
          <p className="text-zinc-655 dark:text-zinc-400 text-base sm:text-lg leading-relaxed font-normal transition-colors duration-300 max-w-2xl">
            WorkLix gives digital agencies, startups, and expert freelancers a streamlined hub to coordinate contracts, pitch scopes, and scale client delivery without friction.
          </p>

          {/* Trust Ratings Stack */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2">
            {/* Avatars Stack */}
            <div className="flex -space-x-3 overflow-hidden select-none shrink-0">
              <Image
                className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-zinc-950 object-cover"
                src="https://i.pravatar.cc/100?img=33"
                alt="Freelancer"
                width={36}
                height={36}
              />
              <Image
                className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-zinc-950 object-cover"
                src="https://i.pravatar.cc/100?img=12"
                alt="Freelancer"
                width={36}
                height={36}
              />
              <Image
                className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-zinc-950 object-cover"
                src="https://i.pravatar.cc/100?img=60"
                alt="Freelancer"
                width={36}
                height={36}
              />
              <Image
                className="inline-block h-9 w-9 rounded-full ring-2 ring-white dark:ring-zinc-950 object-cover"
                src="https://i.pravatar.cc/100?img=47"
                alt="Freelancer"
                width={36}
                height={36}
              />
            </div>

            {/* Rating Text */}
            <div className="flex flex-col text-center sm:text-left text-sm">
              <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-500">
                <RiStarFill className="w-4 h-4" />
                <RiStarFill className="w-4 h-4" />
                <RiStarFill className="w-4 h-4" />
                <RiStarFill className="w-4 h-4" />
                <RiStarFill className="w-4 h-4" />
                <span className="text-zinc-950 dark:text-white font-bold ml-1">4.9/5</span>
              </div>
              <span className="text-zinc-500 dark:text-zinc-550 text-xs mt-0.5">
                Average freelancer rating from 15,000+ contracts
              </span>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards Grid (Centered 4 Columns) */}
        <div className="w-full max-w-6xl">
          <motion.div
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stats.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 15 } },
                  }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  className="group relative flex flex-col justify-between p-8 h-48 rounded-2xl border border-zinc-200 dark:border-zinc-900 bg-white dark:bg-zinc-950/40 backdrop-blur-md transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-800 hover:shadow-lg dark:hover:shadow-indigo-500/5 select-none"
                >
                  {/* Top Section: Styled Icon */}
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-900/60 border border-zinc-200/50 dark:border-zinc-800/30 text-indigo-600 dark:text-indigo-400 shrink-0 transition-all duration-300 group-hover:scale-105">
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                    
                    {/* Accent glow corner */}
                    <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-tr-2xl blur-lg transition-opacity duration-500`} />
                  </div>

                  {/* Bottom Section: Stat details */}
                  <div className="flex flex-col">
                    <span className="text-4xl md:text-5xl font-black text-zinc-950 dark:text-white tracking-tight transition-colors">
                      {item.value}
                    </span>
                    <span className="text-zinc-500 dark:text-zinc-550 text-xs font-bold uppercase tracking-widest mt-2 transition-colors">
                      {item.label}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
