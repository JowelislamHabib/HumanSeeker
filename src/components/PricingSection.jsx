"use client";

import React, { useState } from "react";
import {
  RiVipCrownLine,
  RiBarChartLine,
  RiFlashlightLine,
  RiArrowRightLine,
  RiCheckLine,
  RiStarFill,
} from "react-icons/ri";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

const jobSeekerPlans = [
  {
    id: "seeker_free",
    name: "Free",
    icon: RiVipCrownLine,
    price: 0,
    priceSuffix: "/forever",
    description: "Ideal for casual job seekers looking to discover open roles.",
    features: [
      "Browse & save up to 10 jobs",
      "Apply to up to 3 jobs per month",
      "Basic profile",
      "Email alerts",
    ],
    cta: "Start Free",
    href: "/signup",
    isFeatured: false,
    color: "from-sky-500 to-indigo-500",
  },
  {
    id: "seeker_pro",
    name: "Pro",
    icon: RiBarChartLine,
    price: 19,
    priceSuffix: "/month",
    description:
      "For active job seekers who want to land roles faster with priority tools.",
    features: [
      "Apply to up to 30 jobs per month",
      "Unlimited saved jobs",
      "Application tracking",
      "Salary insights",
    ],
    cta: "Go Pro",
    href: "/signup",
    isFeatured: true,
    color: "from-indigo-500 to-pink-500",
  },
  {
    id: "seeker_premium",
    name: "Premium",
    icon: RiStarFill,
    price: 39,
    priceSuffix: "/month",
    description:
      "For job seekers who want maximum visibility and early access.",
    features: [
      "Everything in Pro + unlimited applications",
      "Profile boost to recruiters",
      "Early access to new jobs",
      "Priority support",
    ],
    cta: "Get Premium",
    href: "/signup",
    isFeatured: false,
    color: "from-purple-500 to-violet-500",
  },
];

const recruiterPlans = [
  {
    id: "recruiter_free",
    name: "Free",
    icon: RiVipCrownLine,
    price: 0,
    priceSuffix: "/forever",
    description: "Great for a company's first year of hiring.",
    features: [
      "Up to 3 active job posts",
      "Basic applicant management",
      "Standard listing visibility",
    ],
    cta: "Start Free",
    href: "/signup",
    isFeatured: false,
    color: "from-sky-500 to-indigo-500",
  },
  {
    id: "recruiter_growth",
    name: "Growth",
    icon: RiBarChartLine,
    price: 49,
    priceSuffix: "/month",
    description:
      "For growing teams that need applicant tracking and analytics.",
    features: [
      "Up to 10 active job posts",
      "Applicant tracking",
      "Basic analytics",
      "Email support",
    ],
    cta: "Get Growth",
    href: "/signup",
    isFeatured: true,
    color: "from-indigo-500 to-pink-500",
  },
  {
    id: "recruiter_enterprise",
    name: "Enterprise",
    icon: RiFlashlightLine,
    price: 149,
    priceSuffix: "/month",
    description: "For established companies seeking advanced recruiting power.",
    features: [
      "Up to 50 active job posts",
      "Advanced analytics dashboard",
      "Featured job listings",
      "Team collaboration & custom branding",
      "Priority support",
    ],
    cta: "Get Enterprise",
    href: "/signup",
    isFeatured: false,
    color: "from-purple-500 to-violet-500",
  },
];

const PricingSection = () => {
  const [userType, setUserType] = useState("seekers");
  const currentPlans = userType === "seekers" ? jobSeekerPlans : recruiterPlans;

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
            onClick={() => setUserType("seekers")}
            className={cn(
              "relative z-10 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors cursor-pointer",
              userType === "seekers"
                ? "text-white dark:text-zinc-950 font-bold"
                : "text-zinc-500 hover:text-zinc-900 dark:text-white/70 dark:hover:text-white",
            )}
          >
            {userType === "seekers" && (
              <motion.span
                layoutId="pricingSectionTab"
                className="absolute inset-0 bg-zinc-950 dark:bg-white rounded-full shadow-sm"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">For Job Seekers</span>
          </button>
          <button
            onClick={() => setUserType("recruiters")}
            className={cn(
              "relative z-10 px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5 cursor-pointer",
              userType === "recruiters"
                ? "text-white dark:text-zinc-950 font-bold"
                : "text-zinc-500 hover:text-zinc-900 dark:text-white/70 dark:hover:text-white",
            )}
          >
            {userType === "recruiters" && (
              <motion.span
                layoutId="pricingSectionTab"
                className="absolute inset-0 bg-zinc-950 dark:bg-white rounded-full shadow-sm"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">For Recruiters</span>
          </button>
        </motion.div>

        {/* Grid of Cards */}
        <motion.div
          key={userType}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
          {currentPlans.map((plan, index) => {
            const Icon = plan.icon;

            return (
              <motion.div
                key={userType + index}
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
                            key={plan.price}
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
                            {plan.price}
                          </motion.span>
                        </AnimatePresence>
                      </span>
                      <span className="text-zinc-500 dark:text-zinc-400 text-xs ml-1 font-semibold uppercase tracking-wider">
                        {plan.priceSuffix}
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
                    <form action="/api/checkout_sessions" method="POST">
                      <input type="hidden" name="planId" value={plan.id} />
                      <section>
                        <button
                          type="submit"
                          role="link"
                          className={cn(
                            "w-full py-3.5 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all active:scale-[0.98] group cursor-pointer",
                            plan.isFeatured
                              ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/25"
                              : "bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800",
                          )}
                        >
                          Checkout
                          <RiArrowRightLine className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </button>
                      </section>
                    </form>
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
