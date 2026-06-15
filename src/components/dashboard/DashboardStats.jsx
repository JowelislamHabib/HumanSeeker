import React from 'react';
import { RiFileTextLine, RiGroupLine, RiFlashlightLine, RiCheckboxCircleLine } from "react-icons/ri";

const stats = [
  {
    title: "Total Projects",
    value: "48",
    icon: RiFileTextLine,
    delay: "delay-[100ms]",
  },
  {
    title: "Total Proposals",
    value: "1,284",
    icon: RiGroupLine,
    delay: "delay-[200ms]",
  },
  {
    title: "Active Projects",
    value: "18",
    icon: RiFlashlightLine,
    delay: "delay-[300ms]",
  },
  {
    title: "Closed Projects",
    value: "32",
    icon: RiCheckboxCircleLine,
    delay: "delay-[400ms]",
  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <div 
          key={i} 
          className={`group p-1.5 rounded-[2rem] bg-accent/30 dark:bg-accent/10 border border-border/40 hover:border-border/60 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[0.98] animate-in fade-in slide-in-from-bottom-8 fill-mode-both duration-1000 ${stat.delay}`}
        >
          <div className="h-full bg-card/90 backdrop-blur-md rounded-[calc(2rem-0.375rem)] shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] border border-border/20 p-6 flex flex-col gap-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-700" />
            <div className="w-10 h-10 rounded-full bg-accent/50 dark:bg-white/5 border border-border/50 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] flex items-center justify-center shrink-0 group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]">
              <stat.icon className="w-4 h-4 text-foreground/70 shrink-0" />
            </div>
            <div className="flex flex-col gap-1 mt-auto">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-muted-foreground">{stat.title}</span>
              <span className="text-4xl font-extrabold text-foreground tracking-tighter">{stat.value}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
