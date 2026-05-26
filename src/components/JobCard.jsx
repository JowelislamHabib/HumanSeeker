"use client";

import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { RiMapPinLine, RiBriefcaseLine, RiMoneyDollarCircleLine } from "react-icons/ri";

const JobCard = ({ job, id }) => {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-zinc-950 border border-zinc-900 shadow-xl transition-all duration-300 hover:border-zinc-700 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/5">
      {/* Background glow gradients from card-14 */}
      <div
        className="absolute inset-0 rounded-lg pointer-events-none opacity-30 group-hover:opacity-90 transition-opacity duration-500"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 20% 30%, rgba(56, 189, 248, 0.2) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 70%, rgba(139, 92, 246, 0.18) 0%, transparent 70%),
            radial-gradient(ellipse at 60% 20%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 40% 80%, rgba(59, 189, 248, 0.15) 0%, transparent 65%)
          `,
        }}
      />
      
      <Card className="z-10 isolate bg-transparent border-0 ring-0 shadow-none flex flex-col justify-between h-full py-0">
        <CardHeader className="flex flex-col gap-2 pt-6 px-6">
          <CardTitle className="text-xl font-bold text-white tracking-tight group-hover:text-indigo-300 transition-colors duration-300">
            {job.title}
          </CardTitle>
          <CardDescription className="text-zinc-400 text-sm leading-relaxed min-h-12">
            {job.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex flex-wrap gap-2 px-6">
          {/* Location */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-zinc-300 bg-zinc-900/60 border border-zinc-800/50 group-hover:border-zinc-700/50 transition-colors duration-300">
            <RiMapPinLine className="text-indigo-400 w-3.5 h-3.5 shrink-0" />
            <span>{job.location}</span>
          </div>
          {/* Project Type */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-zinc-300 bg-zinc-900/60 border border-zinc-800/50 group-hover:border-zinc-700/50 transition-colors duration-300">
            <RiBriefcaseLine className="text-indigo-400 w-3.5 h-3.5 shrink-0" />
            <span>{job.type}</span>
          </div>
          {/* Budget / Rate */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-zinc-300 bg-zinc-900/60 border border-zinc-800/50 group-hover:border-zinc-700/50 transition-colors duration-300">
            <RiMoneyDollarCircleLine className="text-indigo-400 w-3.5 h-3.5 shrink-0" />
            <span>{job.rate}</span>
          </div>
        </CardContent>

        <CardFooter className="pt-4 pb-6 px-6">
          <Link
            href={`/projects/${id}`}
            className="text-white group-hover:text-indigo-400 transition-colors text-sm font-semibold flex items-center gap-1 cursor-pointer"
          >
            Apply Now <span className="transform translate-x-0 group-hover:translate-x-1.5 transition-transform duration-300">→</span>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default JobCard;
