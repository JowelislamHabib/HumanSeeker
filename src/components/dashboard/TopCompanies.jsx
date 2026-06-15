import React from "react";
import { RiArrowRightUpLine, RiArrowRightLine } from "react-icons/ri";

const topCompanies = [
  {
    name: "Google Inc.",
    industry: "Technology",
    location: "Mountain View",
    activeProjects: "24",
    avatar: "https://i.pravatar.cc/150?u=google",
    delay: "delay-[400ms]",
  },
  {
    name: "Meta Platforms",
    industry: "Social Media",
    location: "Menlo Park",
    activeProjects: "18",
    avatar: "https://i.pravatar.cc/150?u=meta",
    delay: "delay-[450ms]",
  },
  {
    name: "Stripe",
    industry: "Fintech",
    location: "San Francisco",
    activeProjects: "12",
    avatar: "https://i.pravatar.cc/150?u=stripe",
    delay: "delay-[500ms]",
  },
  {
    name: "Tesla",
    industry: "Automotive",
    location: "Austin",
    activeProjects: "31",
    avatar: "https://i.pravatar.cc/150?u=tesla",
    delay: "delay-[550ms]",
  },
];

export default function TopCompanies() {
  return (
    <div className="flex w-full flex-col h-full animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] delay-500 fill-mode-both">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold font-heading text-foreground tracking-tight">
          My Top Companies
        </h2>
        <a
          href="#"
          className="group flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
        >
          View all
          <RiArrowRightUpLine className="size-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>
      
      <div className="p-1.5 rounded-[2rem] bg-accent/30 dark:bg-accent/10 border border-border/40 flex-1 flex flex-col">
        <div className="bg-card/90 backdrop-blur-md rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] border border-border/20 p-8 h-full flex flex-col justify-between overflow-hidden">
          <div className="flex flex-col gap-8 pt-1">
            {topCompanies.map((company, i) => (
              <div 
                key={i} 
                className={`group flex items-center justify-between py-3 px-4 rounded-xl border border-transparent even:bg-muted/10 hover:border-border/40 hover:bg-muted/30 transition-colors animate-in fade-in slide-in-from-bottom-4 fill-mode-both duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] ${company.delay}`}
              >
                <div className="flex items-center gap-5">
                  <div className="size-[48px] rounded-2xl bg-accent/50 dark:bg-white/5 border border-border/50 ring-2 ring-background flex items-center justify-center overflow-hidden shrink-0 group-hover:scale-105 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                    <img src={company.avatar} alt={company.name} className="size-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-bold text-foreground tracking-tight leading-none mb-1.5">
                      {company.name}
                    </span>
                    <span className="text-xs font-medium text-muted-foreground">
                      {company.industry} &bull; {company.location}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-lg font-extrabold text-foreground leading-none mb-1">
                    {company.activeProjects}
                  </span>
                  <span className="text-[9px] uppercase tracking-[0.1em] text-muted-foreground font-bold">
                    Projects
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <button className="group w-full mt-10 h-12 rounded-xl bg-foreground text-background hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2 active:scale-[0.98] font-semibold">
            View All Companies
            <RiArrowRightLine className="size-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
