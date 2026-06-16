"use client";

import React, { useState } from "react";
import {
  RiVipCrownLine,
  RiBarChartLine,
  RiFlashlightLine,
  RiArrowRightLine,
  RiCheckLine,
} from "react-icons/ri";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

const plans = [
  {
    name: "Free",
    icon: RiVipCrownLine,
    priceMonthly: 0,
    priceYearly: 0,
    description: "Ideal for casual users looking to explore platform basics.",
    features: [
      "Browse jobs & search listings",
      "Save up to 10 jobs for later",
      "Basic candidate profile details",
      "Daily email notifications",
    ],
    isFeatured: false,
    color: "from-sky-500 to-indigo-500",
  },
  {
    name: "Pro",
    icon: RiBarChartLine,
    priceMonthly: 29,
    priceYearly: 22,
    description: "For active users who want to land roles faster with priority tools.",
    features: [
      "Unlimited job applications",
      "Unlimited bookmarked/saved jobs",
      "Priority candidate list placement",
      "Application tracking & salary insights",
    ],
    isFeatured: true,
    color: "from-indigo-500 to-pink-500",
  },
  {
    name: "Enterprise",
    icon: RiFlashlightLine,
    priceMonthly: 99,
    priceYearly: 74,
    description: "For teams and organizations seeking advanced features.",
    features: [
      "Everything in Pro included",
      "Unlimited employer job postings",
      "Applicant Tracking System (ATS)",
      "Team collaboration & analytics",
      "Dedicated support & branding",
    ],
    isFeatured: false,
    color: "from-purple-500 to-violet-500",
  },
];

const PricingSection = () => {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="relative w-full bg-zinc-50 dark:bg-zinc-950 py-24 border-t border-zinc-200 dark:border-zinc-900 overflow-hidden transition-colors duration-300">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        className="mx-auto container px-6 flex flex-col items-center gap-12 relative z-10"
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-indigo-500/20 dark:border-indigo-400/25 bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 shadow-xs backdrop-blur-xs select-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase">
              Pricing Plans
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-zinc-950 dark:text-white tracking-tight mt-3 max-w-2xl leading-tight transition-colors duration-300">
            Pay for the leverage, not the listings
          </h2>
        </motion.div>

        {/* Toggle */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: {
              opacity: 1,
              scale: 1,
              transition: { type: "spring", stiffness: 100, damping: 15 },
            },
          }}
          className="relative flex items-center bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-1.5 rounded-full transition-colors"
        >
          <button
            onClick={() => setBilling("monthly")}
            className={cn(
              "relative z-10 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer",
              billing === "monthly"
                ? "text-white dark:text-zinc-950 font-bold"
                : "text-zinc-500 hover:text-zinc-900 dark:text-white/70 dark:hover:text-white",
            )}
          >
            {billing === "monthly" && (
              <motion.span
                layoutId="activeBilling"
                className="absolute inset-0 bg-zinc-950 dark:bg-white rounded-full shadow-sm"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">Monthly</span>
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={cn(
              "relative z-10 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5 cursor-pointer",
              billing === "yearly"
                ? "text-white dark:text-zinc-950 font-bold"
                : "text-zinc-500 hover:text-zinc-900 dark:text-white/70 dark:hover:text-white",
            )}
          >
            {billing === "yearly" && (
              <motion.span
                layoutId="activeBilling"
                className="absolute inset-0 bg-zinc-950 dark:bg-white rounded-full shadow-sm"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              <span>Yearly</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-indigo-600 text-white font-bold">
                25%
              </span>
            </span>
          </button>
        </motion.div>

        {/* Grid of Cards */}
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mt-4 items-stretch"
        >
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price =
              billing === "monthly" ? plan.priceMonthly : plan.priceYearly;

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: plan.isFeatured ? 1.04 : 1.0,
                    transition: { type: "spring", stiffness: 80, damping: 14 },
                  },
                }}
                whileHover={{
                  y: -10,
                  scale: plan.isFeatured ? 1.05 : 1.02,
                  transition: { type: "spring", stiffness: 260, damping: 20 },
                }}
                className="flex flex-col h-full w-full"
              >
                <div
                  className={cn(
                    "group relative flex flex-col justify-between p-8 rounded-3xl transition-all duration-300 border bg-white dark:bg-zinc-900/40 h-full w-full overflow-visible",
                    plan.isFeatured
                      ? "border-2 border-indigo-500 dark:border-indigo-400 shadow-xl shadow-indigo-500/10 dark:shadow-indigo-400/5 z-10"
                      : "border-zinc-200 dark:border-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-800 shadow-xs",
                  )}
                >
                  {/* Accent glow corner */}
                  <div
                    className={cn(
                      "absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-0 transition-opacity duration-500 rounded-tr-3xl blur-2xl pointer-events-none z-0",
                      plan.isFeatured ? "opacity-15" : "group-hover:opacity-15",
                      plan.color,
                    )}
                  />

                  {plan.isFeatured && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-600 text-white shadow-md shadow-indigo-600/20">
                        <RiVipCrownLine className="w-3.5 h-3.5" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  {/* Header */}
                  <div className="relative z-10 flex flex-col items-start gap-4 pb-6 border-b border-zinc-100 dark:border-zinc-800/60">
                    <span
                      className={cn(
                        "flex items-center justify-center w-11 h-11 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 shadow-sm",
                        plan.isFeatured &&
                          "text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
                      )}
                    >
                      <Icon className="w-5.5 h-5.5 text-indigo-600 dark:text-indigo-400" />
                    </span>
                    <div className="flex flex-col text-left">
                      <h3 className="text-xl font-bold text-zinc-950 dark:text-white tracking-tight">
                        {plan.name}
                      </h3>
                      <p className="text-zinc-500 dark:text-zinc-400 text-xs mt-1.5 font-normal leading-relaxed">
                        {plan.description}
                      </p>
                    </div>
                    <div className="flex items-baseline text-zinc-950 dark:text-white mt-2">
                      <span className="text-4xl font-extrabold flex items-center relative overflow-hidden h-11">
                        <span className="relative z-10">$</span>
                        <AnimatePresence mode="popLayout" initial={false}>
                          <motion.span
                            key={price}
                            initial={{ y: -24, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 24, opacity: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 350,
                              damping: 25,
                            }}
                            className="relative z-10 inline-block"
                          >
                            {price}
                          </motion.span>
                        </AnimatePresence>
                      </span>
                      <span className="text-zinc-500 dark:text-zinc-400 text-xs ml-1 font-semibold uppercase tracking-wider">
                        /mo
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="relative z-10 flex-1 flex flex-col gap-6 pt-6 pb-8">
                    <p className="text-zinc-550 dark:text-zinc-400 text-[10px] font-bold uppercase tracking-wider text-left">
                      Included with {plan.name}:
                    </p>
                    <ul className="flex flex-col gap-3.5">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-left">
                          <span className="flex items-center justify-center w-5 h-5 rounded-md bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-100 dark:border-indigo-900/40 text-indigo-600 dark:text-indigo-400 shrink-0 select-none">
                            <RiCheckLine className="w-3.5 h-3.5" />
                          </span>
                          <span className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed font-normal">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA button */}
                  <div className="relative z-10 pt-2">
                    <button
                      className={cn(
                        "w-full py-3.5 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all active:scale-[0.98] group cursor-pointer",
                        plan.isFeatured
                          ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/25"
                          : "bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800",
                      )}
                    >
                      Choose This Plan
                      <RiArrowRightLine className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PricingSection;
