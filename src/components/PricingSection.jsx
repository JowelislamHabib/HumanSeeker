"use client";

import React, { useState } from "react";
import { BlobCard } from "./unlumen-ui/blob-card";
import { RiVipCrownLine, RiBarChartLine, RiFlashlightLine, RiArrowRightLine } from "react-icons/ri";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter",
    icon: RiVipCrownLine,
    priceMonthly: 0,
    priceYearly: 0,
    features: [
      "Daily AI project match brief (top 5)",
      "Verified client budget bands",
      "Agency insight dashboards",
      "1-click apply, unlimited",
    ],
    isFeatured: false,
    themeColors: {
      light: ["#0ea5e9", "#38bdf8", "#7dd3fc", "#e0f2fe"],
      dark: ["#075985", "#0369a1", "#0284c7", "#0ea5e9"],
      glow: ["#38bdf8", "#0ea5e9", "#7dd3fc", "#38bdf8", "#0ea5e9"],
    },
    buttonStyle: "bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-850 hover:border-zinc-700",
  },
  {
    name: "Growth",
    icon: RiBarChartLine,
    priceMonthly: 17,
    priceYearly: 12,
    features: [
      "Daily AI project match brief (top 15)",
      "Verified client budget bands",
      "Agency insight dashboards",
      "1-click apply, unlimited priority",
    ],
    isFeatured: true,
    themeColors: {
      light: ["#ff0020", "#fc0f60", "#e8227a", "#ff85b3"],
      dark: ["#8c0f60", "#e8227a", "#e8227a", "#ff85b3"],
      glow: ["#ff96a9", "#e8b4f0", "#ffb3c6", "#d44d8a", "#ff96a9"],
    },
    buttonStyle: "bg-white text-black hover:bg-zinc-200",
  },
  {
    name: "Premium",
    icon: RiFlashlightLine,
    priceMonthly: 99,
    priceYearly: 74,
    features: [
      "Everything in Growth",
      "Multi-profile career portfolios",
      "Shared team collaboration rooms",
      "Agency search views (read-only)",
    ],
    isFeatured: false,
    themeColors: {
      light: ["#a855f7", "#c084fc", "#d8b4fe", "#f3e8ff"],
      dark: ["#6b21a8", "#581c87", "#7e22ce", "#a855f7"],
      glow: ["#c084fc", "#a855f7", "#d8b4fe", "#c084fc", "#a855f7"],
    },
    buttonStyle: "bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-850 hover:border-zinc-700",
  },
];

const PricingSection = () => {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="relative w-full bg-zinc-50 dark:bg-zinc-950 py-24 border-t border-zinc-200 dark:border-zinc-900 overflow-hidden transition-colors duration-300">
      <div className="mx-auto container px-6 flex flex-col items-center gap-12 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-fuchsia-500/20 dark:border-fuchsia-400/25 bg-fuchsia-50/50 dark:bg-fuchsia-950/30 text-fuchsia-600 dark:text-fuchsia-400 shadow-xs backdrop-blur-xs select-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase">
              Pricing Plans
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight mt-3 max-w-2xl leading-tight transition-colors duration-300">
            Pay for the leverage, not the listings
          </h2>
        </div>

        {/* Toggle */}
        <div className="flex items-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-1.5 rounded-full transition-colors">
          <button
            onClick={() => setBilling("monthly")}
            className={cn(
              "px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer",
              billing === "monthly" ? "bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white shadow-md shadow-zinc-200/50 dark:shadow-zinc-950/50 font-bold" : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={cn(
              "px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 cursor-pointer",
              billing === "yearly" ? "bg-white dark:bg-zinc-950 text-zinc-950 dark:text-white shadow-md shadow-zinc-200/50 dark:shadow-zinc-950/50 font-bold" : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white"
            )}
          >
            <span>Yearly</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-fuchsia-600 text-white font-bold">
              25%
            </span>
          </button>
        </div>

        {/* Grid of BlobCards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mt-4">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = billing === "monthly" ? plan.priceMonthly : plan.priceYearly;

            return (
              <BlobCard
                key={index}
                headerHeight={140}
                lightColors={plan.themeColors.light}
                darkColors={plan.themeColors.dark}
                glowColors={plan.themeColors.glow}
                isFeatured={plan.isFeatured}
                className="h-full"
              >
                {/* Header Overlay content */}
                <div className="absolute top-0 left-0 right-0 p-8 flex items-center justify-between pointer-events-none select-none z-20">
                  <div className="flex items-center gap-2.5">
                    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors">
                      <Icon className="w-4.5 h-4.5 text-fuchsia-600 dark:text-fuchsia-400" />
                    </span>
                    <span className="text-lg font-bold text-zinc-950 dark:text-white tracking-tight transition-colors">{plan.name}</span>
                  </div>
                  <div className="flex items-baseline text-zinc-950 dark:text-white transition-colors">
                    <span className="text-3xl font-extrabold">${price}</span>
                    <span className="text-zinc-500 dark:text-zinc-400 text-xs ml-1">/month</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-8 pt-2 flex flex-col gap-6 bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900/50 transition-colors h-full justify-between">
                  <div className="flex flex-col gap-4">
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium">Start building your insights hub:</p>
                    <ul className="flex flex-col gap-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="flex items-center justify-center w-5 h-5 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-400 text-xs shrink-0 font-bold select-none transition-colors">
                            +
                          </span>
                          <span className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed transition-colors">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className={cn(
                      "w-full py-3 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-[0.98]",
                      plan.isFeatured 
                        ? "bg-indigo-600 hover:bg-indigo-500 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-black" 
                        : "bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-200 dark:hover:bg-zinc-850 hover:border-zinc-300 dark:hover:border-zinc-700"
                    )}
                  >
                    <span>Choose This Plan</span>
                    <RiArrowRightLine className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>
              </BlobCard>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;
