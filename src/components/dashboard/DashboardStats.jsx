import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { RiFileTextLine, RiGroupLine, RiFlashlightLine, RiCheckboxCircleLine } from "react-icons/ri";

const stats = [
  {
    title: "Total Projects",
    value: "48",
    icon: RiFileTextLine,
  },
  {
    title: "Total Proposals",
    value: "1,284",
    icon: RiGroupLine,
  },
  {
    title: "Active Projects",
    value: "18",
    icon: RiFlashlightLine,
  },
  {
    title: "Closed Projects",
    value: "32",
    icon: RiCheckboxCircleLine,
  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <Card key={i} className="bg-zinc-950 border-zinc-800/60 shadow-sm hover:bg-zinc-900 hover:-translate-y-1 hover:border-zinc-700/80 transition-all duration-300">
          <CardContent className="p-4 sm:p-5 flex flex-col gap-4">
            <div className="w-9 h-9 rounded-md bg-zinc-800/40 border border-zinc-700/50 flex items-center justify-center">
              <stat.icon className="w-4 h-4 text-zinc-300 shrink-0" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-xs font-medium text-zinc-400/90">{stat.title}</span>
              <span className="text-2xl font-bold text-white tracking-tight">{stat.value}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
