"use client";

import React from "react";
import Link from "next/link";
import JobCard from "./JobCard";

const dummyJobs = [
  {
    title: "React Frontend Developer",
    description:
      "Build a high-performance analytics dashboard using React and Tailwind CSS.",
    location: "San Francisco, USA",
    type: "Remote",
    rate: "$60-$90/hour",
  },
  {
    title: "UI/UX Product Designer",
    description:
      "Design user journeys, wireframes, and design systems for a fintech SaaS platform.",
    location: "London, UK",
    type: "Hybrid",
    rate: "$65-$95/hour",
  },
  {
    title: "DevOps & Infrastructure Lead",
    description:
      "Architect and maintain cloud infrastructure pipelines, ensuring 99.9% platform uptime.",
    location: "Seattle, USA",
    type: "Remote",
    rate: "$85-$125/hour",
  },
  {
    title: "AI Integrations Engineer",
    description:
      "Connect Large Language Models with client backends to automate business workflows.",
    location: "Berlin, Germany",
    type: "Remote",
    rate: "$75-$110/hour",
  },
  {
    title: "Backend API Developer",
    description:
      "Optimize SQL/NoSQL database queries and set up secure serverless backend APIs.",
    location: "Toronto, Canada",
    type: "Hybrid",
    rate: "$70-$100/hour",
  },
  {
    title: "React Native Mobile Developer",
    description:
      "Build cross-platform mobile apps for delivery service agencies.",
    location: "Sydney, Australia",
    type: "Remote",
    rate: "$75-$105/hour",
  },
];

const FeaturedJobs = () => {
  return (
    <div className="relative w-full bg-zinc-950 py-20 border-t border-zinc-900">
      <div className="mx-auto container px-6 flex flex-col items-center gap-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <span className="text-xs font-bold text-indigo-500 tracking-widest uppercase">
            ■ SMART PROJECT DISCOVERY ■
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mt-3 max-w-2xl leading-tight">
            The projects you'd never find by searching
          </h2>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {dummyJobs.map((job, idx) => (
            <JobCard key={idx} job={job} id={idx} />
          ))}
        </div>

        {/* View all open projects button */}
        <Link
          href="/projects"
          className="bg-white hover:bg-zinc-200 text-black font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200 active:scale-95 text-center shadow-lg shadow-white/5 cursor-pointer"
        >
          View all open projects
        </Link>
      </div>
    </div>
  );
};

export default FeaturedJobs;
