"use client";

import React from "react";
import { Globe } from "./ui/globe";
import {
  RiBriefcase2Line,
  RiBuilding4Line,
  RiTeamLine,
  RiAwardLine,
} from "react-icons/ri";

const stats = [
  {
    icon: RiBriefcase2Line,
    value: "50K",
    label: "Active Projects",
  },
  {
    icon: RiBuilding4Line,
    value: "12K",
    label: "Agencies",
  },
  {
    icon: RiTeamLine,
    value: "2M",
    label: "Freelancers",
  },
  {
    icon: RiAwardLine,
    value: "97%",
    label: "Satisfaction Rate",
  },
];

import { useTheme } from "next-themes";

const StatsSection = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = !mounted || resolvedTheme === "dark";

  const customGlobeConfig = {
    width: 1000,
    height: 1000,
    onRender: () => {},
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: isDark ? 1 : 0,
    diffuse: 1.2,
    mapSamples: 16000,
    mapBrightness: isDark ? 6 : 1.2,
    baseColor: isDark ? [0.15, 0.15, 0.25] : [0.93, 0.93, 0.98],
    markerColor: [99 / 255, 102 / 255, 241 / 255],
    glowColor: isDark ? [0.3, 0.3, 0.5] : [0.85, 0.85, 0.95],
    markers: [
      { location: [14.5995, 120.9842], size: 0.03 },
      { location: [19.076, 72.8777], size: 0.1 },
      { location: [23.8103, 90.4125], size: 0.05 },
      { location: [30.0444, 31.2357], size: 0.07 },
      { location: [39.9042, 116.4074], size: 0.08 },
      { location: [-23.5505, -46.6333], size: 0.1 },
      { location: [19.4326, -99.1332], size: 0.1 },
      { location: [40.7128, -74.006], size: 0.1 },
      { location: [34.6937, 135.5022], size: 0.05 },
      { location: [41.0082, 28.9784], size: 0.06 },
    ],
  };

  return (
    <div className="relative w-full bg-zinc-50 dark:bg-black py-20 flex flex-col items-center transition-colors duration-300">
      {/* Globe & Text Container */}
      <div className="relative w-full flex flex-col items-center">
        <div className="relative w-full flex items-center justify-center overflow-hidden aspect-4/1.5 bg-zinc-50 dark:bg-black transition-colors duration-300">
          {/* Interactive Globe component */}
          <Globe
            className="absolute top-0 w-full max-w-none aspect-square opacity-75"
            config={customGlobeConfig}
          />

          {/* Bottom fade gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-36 bg-linear-to-t from-zinc-50 via-zinc-50/40 to-transparent dark:from-black dark:via-black/40 dark:to-transparent pointer-events-none transition-colors duration-300" />

          {/* Overlay Text positioned at the top of the container (above the globe curve) */}
          <div className="absolute top-2 sm:top-6 md:top-12 inset-x-0 flex justify-center p-4 z-10 pointer-events-none">
            <h2 className="text-xs sm:text-base md:text-3xl lg:text-4xl font-extrabold text-zinc-950 dark:text-white text-center max-w-2xl leading-relaxed tracking-tight drop-shadow-[0_4px_6px_rgba(255,255,255,0.05)] dark:drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)] transition-colors duration-300">
              Assisting over{" "}
              <span className="text-indigo-600 dark:text-indigo-400 font-black">15,000</span>{" "}
              freelancers find their dream projects.
            </h2>
          </div>
        </div>
      </div>

      {/* Overlapping Stats Grid */}
      <div className="relative z-10 w-full container px-6 -mt-4 md:-mt-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col justify-between p-8 h-48 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md transition-all duration-300 hover:border-zinc-300 dark:hover:border-zinc-700/80 hover:scale-[1.02] shadow-sm dark:shadow-xl"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-900 text-indigo-600 dark:text-indigo-400 shrink-0 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight transition-colors">
                    {item.value}
                  </span>
                  <span className="text-zinc-400 dark:text-zinc-500 text-xs font-semibold uppercase tracking-wider mt-1.5 transition-colors">
                    {item.label}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
