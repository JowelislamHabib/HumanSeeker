"use client";

import React, { useState } from "react";
import { RiVipCrownLine, RiBarChartLine, RiFlashlightLine, RiArrowRightLine, RiCheckLine } from "react-icons/ri";
import { cn } from "@/lib/utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

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
    color: "from-sky-500 to-indigo-500",
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
    color: "from-fuchsia-500 to-pink-500",
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
    color: "from-purple-500 to-violet-500",
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

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mt-4 items-stretch">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = billing === "monthly" ? plan.priceMonthly : plan.priceYearly;

            return (
              <Card
                key={index}
                className={cn(
                  "group relative flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 border bg-white dark:bg-zinc-900/40 overflow-hidden",
                  plan.isFeatured
                    ? "border-2 border-fuchsia-500 dark:border-fuchsia-400 shadow-xl shadow-fuchsia-500/10 dark:shadow-fuchsia-400/5 lg:scale-105 z-10"
                    : "border-zinc-200 dark:border-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-800 shadow-xs"
                )}
              >
                {/* Accent glow corner */}
                <div className={cn(
                  "absolute top-0 right-0 w-24 h-24 bg-gradient-to-br opacity-0 transition-opacity duration-500 rounded-tr-xl blur-xl pointer-events-none z-0",
                  plan.isFeatured ? "opacity-15" : "group-hover:opacity-15",
                  plan.color
                )} />

                {plan.isFeatured && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-fuchsia-600 text-white shadow-md shadow-fuchsia-600/20">
                      <RiVipCrownLine className="w-3.5 h-3.5 animate-bounce" />
                      Most Popular
                    </span>
                  </div>
                )}

                <CardHeader className="flex flex-row items-center justify-between border-b border-zinc-100 dark:border-zinc-800/50 pb-6 pt-6 px-6">
                  <div className="flex items-center gap-2.5">
                    <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors">
                      <Icon className="w-5 h-5 text-fuchsia-600 dark:text-fuchsia-400" />
                    </span>
                    <CardTitle className="text-lg font-bold text-zinc-950 dark:text-white tracking-tight transition-colors">
                      {plan.name}
                    </CardTitle>
                  </div>
                  <div className="flex items-baseline text-zinc-950 dark:text-white transition-colors">
                    <span className="text-3xl font-extrabold">${price}</span>
                    <span className="text-zinc-500 dark:text-zinc-400 text-xs ml-1">/mo</span>
                  </div>
                </CardHeader>

                <CardContent className="flex-1 flex flex-col gap-6 pt-6 px-6 pb-6">
                  <p className="text-zinc-500 dark:text-zinc-400 text-xs font-semibold uppercase tracking-wider">
                    Start building your insights hub:
                  </p>
                  <ul className="flex flex-col gap-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="flex items-center justify-center w-5 h-5 rounded-md bg-fuchsia-50 dark:bg-fuchsia-950/30 border border-fuchsia-100 dark:border-fuchsia-900/40 text-fuchsia-600 dark:text-fuchsia-400 shrink-0 select-none transition-colors">
                          <RiCheckLine className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-zinc-750 dark:text-zinc-300 text-sm leading-relaxed transition-colors">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-2 pb-6 px-6">
                  <button
                    className={cn(
                      "w-full py-3 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-[0.98] group",
                      plan.isFeatured
                        ? "bg-fuchsia-600 hover:bg-fuchsia-500 text-white shadow-md shadow-fuchsia-500/25"
                        : "bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800"
                    )}
                  >
                    <span>Choose This Plan</span>
                    <RiArrowRightLine className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default PricingSection;

