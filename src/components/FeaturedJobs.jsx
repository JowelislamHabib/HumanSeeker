"use client";

import { motion } from "motion/react";
import Link from "next/link";
import JobCard from "@/components/jobs/JobCard";
import { useEffect, useState } from "react";
import { getJobs } from "@/lib/api/job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await getJobs();
        const allJobs = res?.data || res || [];
        setJobs(allJobs.slice(0, 6));
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="relative w-full bg-zinc-50 dark:bg-zinc-950 py-20  dark:border-zinc-900 transition-colors duration-300">
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
        className="mx-auto container px-6 flex flex-col items-center gap-12"
      >
        {/* Header */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 80, damping: 15 },
            },
          }}
          className="flex flex-col items-center text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-emerald-500/20 dark:border-emerald-400/25 bg-emerald-50/50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 shadow-xs backdrop-blur-xs select-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase">
              Smart Job Discovery
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight mt-3 max-w-2xl leading-tight transition-colors duration-300">
            The jobs you'd never find by searching
          </h2>
        </motion.div>

        {/* Grid of Cards */}
        {!loading && jobs.length > 0 && (
          <motion.div
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
          >
            {jobs.map((job) => {
              const jobId = job._id?.$oid || job._id || job.id;
              return <JobCard key={jobId} job={job} />;
            })}
          </motion.div>
        )}

        {/* View all open jobs button */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: "spring", stiffness: 80, damping: 15 },
            },
          }}
        >
          <Link
            href="/jobs"
            className="bg-zinc-950 hover:bg-zinc-800 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-black font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200 active:scale-95 text-center shadow-md shadow-zinc-900/5 dark:shadow-white/5 border border-zinc-900 dark:border-transparent cursor-pointer"
          >
            View all open jobs
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default FeaturedJobs;
