"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { 
  RiVipCrownLine, 
  RiBarChartLine, 
  RiFlashlightLine, 
  RiCheckLine, 
  RiCloseLine, 
  RiArrowRightLine, 
  RiAddLine, 
  RiSubtractLine,
  RiStarFill
} from "react-icons/ri";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Free",
    icon: RiVipCrownLine,
    priceMonthly: 0,
    priceYearly: 0,
    description: "Ideal for casual job seekers looking to discover open roles.",
    features: [
      "Browse jobs & search listings",
      "Save up to 10 jobs for later",
      "Basic candidate profile details",
      "Daily email notifications",
    ],
    cta: "Start Free",
    href: "/signup",
    isFeatured: false,
    color: "from-sky-500 to-indigo-500",
  },
  {
    name: "Pro",
    icon: RiBarChartLine,
    priceMonthly: 29,
    priceYearly: 22,
    description: "For active job seekers who want to land roles faster with priority tools.",
    features: [
      "Unlimited job applications",
      "Unlimited bookmarked/saved jobs",
      "Priority candidate list placement",
      "Application tracking & salary insights",
    ],
    cta: "Go Pro",
    href: "/signup",
    isFeatured: true,
    color: "from-fuchsia-500 to-pink-500",
  },
  {
    name: "Enterprise",
    icon: RiFlashlightLine,
    priceMonthly: 99,
    priceYearly: 74,
    description: "For companies and hiring agencies seeking advanced recruiting power.",
    features: [
      "Everything in Pro included",
      "Unlimited employer job postings",
      "Applicant Tracking System (ATS)",
      "Team collaboration & analytics",
      "Dedicated support & branding",
    ],
    cta: "Get Enterprise",
    href: "/signup",
    isFeatured: false,
    color: "from-purple-500 to-violet-500",
  },
];

const comparisonCategories = [
  {
    name: "Job Seeking",
    features: [
      { name: "Browse Jobs & Listings", free: "✓", pro: "✓", enterprise: "✓" },
      { name: "Saved Jobs Limit", free: "Up to 10", pro: "Unlimited", enterprise: "Unlimited" },
      { name: "Job Applications", free: "✗", pro: "Unlimited", enterprise: "Unlimited" },
      { name: "Priority Application Queue", free: "✗", pro: "✓", enterprise: "✓" },
      { name: "Application Status Tracking", free: "✗", pro: "✓", enterprise: "✓" },
    ],
  },
  {
    name: "Employer Tools",
    features: [
      { name: "Job Postings limit", free: "✗", pro: "✗", enterprise: "Unlimited" },
      { name: "Applicant Tracking System (ATS)", free: "✗", pro: "✗", enterprise: "✓" },
      { name: "Team Collaboration Rooms", free: "✗", pro: "✗", enterprise: "✓" },
      { name: "Custom Employer Branding", free: "✗", pro: "✗", enterprise: "✓" },
    ],
  },
  {
    name: "Insights & Support",
    features: [
      { name: "Salary Insights & Analytics", free: "✗", pro: "✓", enterprise: "✓" },
      { name: "Daily Email Alerts", free: "✓", pro: "✓", enterprise: "✓" },
      { name: "Analytics Dashboard", free: "✗", pro: "✗", enterprise: "✓" },
      { name: "Customer Support", free: "Standard", pro: "Priority (24h)", enterprise: "Dedicated Manager" },
    ],
  },
];

const faqs = [
  {
    question: "Can I cancel my subscription?",
    answer: "Yes, you can cancel your subscription at any time directly from your Billing settings page. Your premium access will remain active until the end of your current billing period.",
  },
  {
    question: "What is your refund policy?",
    answer: "We offer a 14-day money-back guarantee for all premium plans. If you are not satisfied with your plan, you can request a refund within 14 days of purchase by contacting our support team.",
  },
  {
    question: "Which payment methods are supported?",
    answer: "We accept all major credit and debit cards (Visa, MasterCard, American Express, Discover) processed securely through Stripe. Bank transfers are also available for Enterprise contracts.",
  },
  {
    question: "Can I switch plans later?",
    answer: "Absolutely. You can upgrade or downgrade your plan at any time. When upgrading, your billing will be prorated automatically so you only pay for the remaining portion of your billing cycle.",
  },
];

export default function PricingPage() {
  const [billing, setBilling] = useState("monthly");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 py-24 border-t border-zinc-200 dark:border-zinc-900 transition-colors duration-300 overflow-hidden relative">
      {/* Premium Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[350px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute top-[30%] right-[10%] w-[250px] h-[250px] bg-fuchsia-500/5 rounded-full blur-3xl pointer-events-none z-0" />

      {/* Hero Section */}
      <div className="mx-auto container px-6 relative z-10 flex flex-col items-center gap-12 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 15 } }
          }}
          className="flex flex-col items-center gap-4 max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-indigo-500/20 dark:border-indigo-400/25 bg-indigo-50/50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 shadow-xs backdrop-blur-xs select-none">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-[10px] sm:text-xs font-bold tracking-widest uppercase">
              Predictable Pricing Plans
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-zinc-950 dark:text-white tracking-tight leading-tight transition-colors duration-300">
            Predictable billing for <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-fuchsia-500">all scales</span>
          </h1>
          <p className="text-zinc-650 dark:text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed mt-2 transition-colors">
            Choose a plan that matches your career velocity. Free during discovery, pro when applying, enterprise when managing company recruiting.
          </p>
        </motion.div>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.1 }}
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
              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-fuchsia-600 text-white font-bold">
                25%
              </span>
            </span>
          </button>
        </motion.div>

        {/* Pricing Cards Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mt-4 items-stretch"
        >
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const price = billing === "monthly" ? plan.priceMonthly : plan.priceYearly;

            return (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: plan.isFeatured ? 1.04 : 1.0,
                    transition: { type: "spring", stiffness: 80, damping: 14 }
                  }
                }}
                whileHover={{
                  y: -10,
                  scale: plan.isFeatured ? 1.05 : 1.02,
                  transition: { type: "spring", stiffness: 260, damping: 20 }
                }}
                className="flex flex-col h-full w-full"
              >
                <div
                  className={cn(
                    "group relative flex flex-col justify-between p-8 rounded-3xl transition-all duration-300 border bg-white dark:bg-zinc-900/40 h-full w-full overflow-visible",
                    plan.isFeatured
                      ? "border-2 border-indigo-500 dark:border-indigo-400 shadow-xl shadow-indigo-500/10 dark:shadow-indigo-400/5 z-10"
                      : "border-zinc-200 dark:border-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-800 shadow-xs"
                  )}
                >
                  {/* Accent glow corner */}
                  <div className={cn(
                    "absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-0 transition-opacity duration-500 rounded-tr-3xl blur-2xl pointer-events-none z-0",
                    plan.isFeatured ? "opacity-15" : "group-hover:opacity-15",
                    plan.color
                  )} />

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
                    <span className={cn(
                      "flex items-center justify-center w-11 h-11 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 shadow-sm",
                      plan.isFeatured && "text-indigo-600 dark:text-indigo-400 border-indigo-500/20"
                    )}>
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
                            transition={{ type: "spring", stiffness: 350, damping: 25 }}
                            className="relative z-10 inline-block"
                          >
                            {price}
                          </motion.span>
                        </AnimatePresence>
                      </span>
                      <span className="text-zinc-500 dark:text-zinc-400 text-xs ml-1 font-semibold uppercase tracking-wider">
                        {billing === "monthly" ? "/mo" : "/mo, billed annually"}
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
                    <Link
                      href={plan.href}
                      className={cn(
                        "w-full py-3.5 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all active:scale-[0.98] group cursor-pointer",
                        plan.isFeatured
                          ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/25"
                          : "bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800"
                      )}
                    >
                      <span>{plan.cta}</span>
                      <RiArrowRightLine className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Feature Comparison Matrix Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="w-full max-w-5xl mt-24 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Compare Plan Features
          </h2>
          <p className="text-zinc-550 dark:text-zinc-400 text-sm mt-2 max-w-xl mx-auto">
            A comprehensive look at our platform parameters to help you identify the ideal subscription tier.
          </p>
        </motion.div>

        {/* Comparison Matrix Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="w-full max-w-5xl overflow-x-auto border border-zinc-250 dark:border-zinc-900 rounded-3xl bg-white dark:bg-zinc-950/20 backdrop-blur-md mt-10 shadow-xs"
        >
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-zinc-900 text-zinc-450 dark:text-zinc-500 text-xs font-bold uppercase tracking-widest bg-zinc-50/50 dark:bg-zinc-950/30">
                <th className="py-6 px-8 w-[40%]">Features</th>
                <th className="py-6 px-6 text-center w-[20%]">Free</th>
                <th className="py-6 px-6 text-center w-[20%] text-indigo-600 dark:text-indigo-400">Pro</th>
                <th className="py-6 px-6 text-center w-[20%]">Enterprise</th>
              </tr>
            </thead>
            <tbody>
              {comparisonCategories.map((category, catIdx) => (
                <React.Fragment key={catIdx}>
                  {/* Category Header Row */}
                  <tr className="bg-zinc-50/20 dark:bg-zinc-900/10">
                    <td
                      colSpan={4}
                      className="py-4 px-8 text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest border-b border-zinc-200/60 dark:border-zinc-900/60"
                    >
                      {category.name}
                    </td>
                  </tr>
                  {category.features.map((feature, featIdx) => (
                    <tr
                      key={featIdx}
                      className="border-b border-zinc-150 dark:border-zinc-900/60 hover:bg-zinc-50/30 dark:hover:bg-zinc-900/10 transition-colors text-sm"
                    >
                      <td className="py-5 px-8 font-medium text-zinc-900 dark:text-zinc-200">
                        {feature.name}
                      </td>
                      <td className="py-5 px-6 text-center text-zinc-500 dark:text-zinc-400 font-medium">
                        {feature.free === "✓" ? (
                          <RiCheckLine className="w-5 h-5 mx-auto text-emerald-500" />
                        ) : feature.free === "✗" ? (
                          <RiCloseLine className="w-5 h-5 mx-auto text-zinc-300 dark:text-zinc-700" />
                        ) : (
                          feature.free
                        )}
                      </td>
                      <td className="py-5 px-6 text-center text-zinc-900 dark:text-zinc-100 font-bold bg-indigo-50/10 dark:bg-indigo-950/5">
                        {feature.pro === "✓" ? (
                          <RiCheckLine className="w-5 h-5 mx-auto text-emerald-500" />
                        ) : feature.pro === "✗" ? (
                          <RiCloseLine className="w-5 h-5 mx-auto text-zinc-300 dark:text-zinc-700" />
                        ) : (
                          feature.pro
                        )}
                      </td>
                      <td className="py-5 px-6 text-center text-zinc-500 dark:text-zinc-400 font-medium">
                        {feature.enterprise === "✓" ? (
                          <RiCheckLine className="w-5 h-5 mx-auto text-emerald-500" />
                        ) : feature.enterprise === "✗" ? (
                          <RiCloseLine className="w-5 h-5 mx-auto text-zinc-300 dark:text-zinc-700" />
                        ) : (
                          feature.enterprise
                        )}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* FAQ Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 80, damping: 15 }}
          className="w-full max-w-4xl mt-28 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-zinc-550 dark:text-zinc-400 text-sm mt-2 max-w-xl mx-auto">
            Find immediate answers regarding billing, subscription cancellation, switching tiers, and our refund terms.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <div className="w-full max-w-4xl flex flex-col gap-4 mt-10">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: idx * 0.05 }}
                className="border border-zinc-200 dark:border-zinc-900 rounded-2xl bg-white dark:bg-zinc-900/40 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-semibold text-zinc-950 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer group"
                >
                  <span>{faq.question}</span>
                  <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-zinc-50 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors group-hover:border-indigo-500/20">
                    {isOpen ? (
                      <RiSubtractLine className="w-4 h-4" />
                    ) : (
                      <RiAddLine className="w-4 h-4" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed border-t border-zinc-100 dark:border-zinc-800/50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 90, damping: 16 }}
          className="w-full max-w-4xl p-10 sm:p-14 border border-zinc-200 dark:border-zinc-900 rounded-3xl bg-zinc-100/50 dark:bg-zinc-900/30 backdrop-blur-md text-center mt-28 flex flex-col items-center gap-6"
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
            Ready to accelerate your job hunt?
          </h3>
          <p className="text-zinc-550 dark:text-zinc-400 text-sm max-w-md leading-relaxed">
            Create an account for free today, apply to vetted jobs, and start scaling your career opportunities.
          </p>
          <Link
            href="/signup"
            className="px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all active:scale-[0.98] shadow-lg shadow-indigo-600/10 cursor-pointer"
          >
            Get Started For Free
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
