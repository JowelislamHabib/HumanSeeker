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

const customGlobeConfig = {
  width: 1000,
  height: 1000,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 1,
  diffuse: 1.2,
  mapSamples: 16000,
  mapBrightness: 6,
  baseColor: [0.15, 0.15, 0.25],
  markerColor: [99 / 255, 102 / 255, 241 / 255],
  glowColor: [0.3, 0.3, 0.5],
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

const StatsSection = () => {
  return (
    <div className="relative w-full bg-black py-20 -mt-40 flex flex-col items-center">
      {/* Globe & Text Container */}
      <div className="relative w-full flex flex-col items-center">
        <div className="relative w-full flex items-center justify-center overflow-hidden aspect-4/1.5 bg-black">
          {/* Interactive Globe component */}
          <Globe
            className="absolute top-0 w-full max-w-none aspect-square opacity-75"
            config={customGlobeConfig}
          />
          
          {/* Bottom fade-to-black gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-36 bg-linear-to-t from-black via-black/40 to-transparent pointer-events-none" />

          {/* Overlay Text positioned at the top of the container (above the globe curve) */}
          <div className="absolute top-2 sm:top-6 md:top-12 inset-x-0 flex justify-center p-4 z-10 pointer-events-none">
            <h2 className="text-xs sm:text-base md:text-3xl lg:text-4xl font-extrabold text-white text-center max-w-2xl leading-relaxed tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.95)]">
              Assisting over{" "}
              <span className="text-indigo-400 font-black">15,000</span>{" "}
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
                className="flex flex-col justify-between p-8 h-48 rounded-2xl border border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md transition-all duration-300 hover:border-zinc-700/80 hover:scale-[1.02] shadow-xl"
              >
                <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-zinc-900 text-indigo-400 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-extrabold text-white tracking-tight">
                    {item.value}
                  </span>
                  <span className="text-zinc-500 text-xs font-semibold uppercase tracking-wider mt-1.5">
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
