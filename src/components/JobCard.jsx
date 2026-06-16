"use client";

import React from "react";
import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  MapPin,
  Briefcase,
  CircleDollarSign,
  ArrowRight,
  Bookmark,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

const JobCard = ({ job, id }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 15 } },
      }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className="w-full max-w-110 relative overflow-hidden group h-full flex flex-col">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-40 h-40 rounded-full bg-primary/10 blur-[40px] group-hover:bg-primary/20 transition-colors duration-700 pointer-events-none" />

        <CardHeader className="flex flex-col gap-4 pb-2 z-10 relative">
          <div className="flex justify-between items-start w-full">
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-zinc-900 shadow-sm border border-border/50 flex items-center justify-center p-2.5 overflow-hidden shrink-0 group-hover:shadow-md transition-shadow duration-300">
                <Briefcase className="w-6 h-6 text-muted-foreground/50" />
              </div>
              <div className="flex flex-col gap-0.5">
                <span className="text-sm font-semibold text-muted-foreground flex items-center gap-1.5">
                  Project
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/30"></span>
                  <span className="text-xs font-normal flex items-center gap-1 text-muted-foreground/80">
                    <Clock className="w-3 h-3" />
                    Recently
                  </span>
                </span>
                <CardTitle className="text-xl font-bold tracking-tight text-foreground leading-tight line-clamp-2 group-hover:text-primary transition-colors duration-300 mt-0.5">
                  {job.title}
                </CardTitle>
              </div>
            </div>
            <button className="text-muted-foreground hover:text-primary transition-all duration-200 p-1.5 rounded-full hover:bg-primary/10 active:scale-95">
              <Bookmark className="w-5 h-5" />
            </button>
          </div>

          {job.description && (
            <CardDescription className="text-[13.5px] line-clamp-2 leading-relaxed text-muted-foreground/85 mt-2">
              {job.description}
            </CardDescription>
          )}
        </CardHeader>

        <CardContent className="flex flex-col gap-4 py-3 z-10 relative flex-1">
          <div className="flex flex-wrap gap-2.5 mt-1">
            {job.location && (
              <div className="flex items-center gap-1.5 bg-blue-500/10 dark:bg-blue-500/20 px-3 py-1.5 rounded-lg text-blue-700 dark:text-blue-300 border border-blue-500/10">
                <MapPin className="w-3.5 h-3.5" />
                <span className="text-xs font-semibold tracking-wide">
                  {job.location}
                </span>
              </div>
            )}

            {job.type && (
              <div className="flex items-center gap-1.5 bg-emerald-500/10 dark:bg-emerald-500/20 px-3 py-1.5 rounded-lg text-emerald-700 dark:text-emerald-300 border border-emerald-500/10">
                <Briefcase className="w-3.5 h-3.5" />
                <span className="text-xs font-semibold tracking-wide capitalize">
                  {job.type.replace("-", " ")}
                </span>
              </div>
            )}

            {job.rate && (
              <div className="flex items-center gap-1.5 bg-purple-500/10 dark:bg-purple-500/20 px-3 py-1.5 rounded-lg text-purple-700 dark:text-purple-300 border border-purple-500/10 w-fit">
                <CircleDollarSign className="w-3.5 h-3.5" />
                <span className="text-xs font-semibold tracking-wide">
                  {job.rate}
                </span>
              </div>
            )}
          </div>
        </CardContent>

        <CardFooter className="pt-5 pb-6 z-10 relative mt-auto">
          <Button
            asChild
            className="w-full bg-foreground text-background hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-primary/25 transition-all duration-300 group/btn h-12 rounded-xl font-semibold text-sm"
          >
            <Link
              href={`/projects/${id}`}
              className="flex justify-center items-center gap-2"
            >
              Apply Now
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default JobCard;
