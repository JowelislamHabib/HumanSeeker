"use client";

import Link from "next/link";
import {
  RiTeamFill,
  RiFacebookFill,
  RiPinterestFill,
  RiLinkedinFill,
} from "react-icons/ri";

const footerLinks = [
  {
    title: "Product",
    links: [
      { label: "Project discovery", href: "/projects" },
      { label: "Worker AI", href: "/worker-ai" },
      { label: "Agencies", href: "/agencies" },
      { label: "Budget insights", href: "/pricing" },
    ],
  },
  {
    title: "Navigations",
    links: [
      { label: "Help center", href: "/help" },
      { label: "Career library", href: "/library" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Brand Guideline", href: "/brand" },
      { label: "Newsroom", href: "/news" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="w-full border-t border-zinc-200 dark:border-zinc-900 bg-zinc-100 dark:bg-zinc-950 text-zinc-600 dark:text-zinc-400 transition-colors duration-300">
      <div className="mx-auto container px-6 py-16 flex flex-col gap-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-5 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="relative shrink-0 w-9 h-9 rounded-lg bg-linear-to-tr from-indigo-500 via-purple-500 to-pink-500 p-1.5 flex items-center justify-center shadow-lg shadow-purple-500/10 transition-transform duration-300 group-hover:scale-105">
                <RiTeamFill className="w-30 h-30 text-white" />
              </div>
              <div className="flex flex-col select-none leading-[1.1]">
                <span className="text-2xl font-bold text-zinc-950 dark:text-white tracking-tight transition-colors">
                  WorkLix
                </span>
              </div>
            </Link>
            <p className="max-w-xs text-sm text-zinc-550 dark:text-zinc-500 leading-relaxed transition-colors">
              WorkLix is a full-featured freelance collaboration platform that
              connects skilled freelancers with startups, agencies, and
              businesses worldwide.
            </p>
          </div>

          {/* Links Grid */}
          <div className="col-span-1 md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerLinks.map((column) => (
              <div key={column.title} className="flex flex-col gap-4">
                <h3 className="text-sm font-semibold text-indigo-650 dark:text-indigo-500 tracking-wider uppercase transition-colors">
                  {column.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm hover:text-zinc-950 dark:hover:text-white transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-zinc-200 dark:border-zinc-900 pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 transition-colors">
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-transparent text-zinc-500 dark:text-zinc-400 hover:text-white hover:bg-indigo-600 transition-colors duration-200 shadow-sm"
              aria-label="Facebook"
            >
              <RiFacebookFill className="w-5 h-5" />
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-transparent text-zinc-500 dark:text-zinc-400 hover:text-white hover:bg-indigo-600 transition-colors duration-200 shadow-sm"
              aria-label="Pinterest"
            >
              <RiPinterestFill className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-transparent text-zinc-500 dark:text-zinc-400 hover:text-white hover:bg-indigo-600 transition-colors duration-200 shadow-sm"
              aria-label="LinkedIn"
            >
              <RiLinkedinFill className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright and Policies */}
          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2 text-xs text-zinc-550 dark:text-zinc-500 transition-colors">
            <span>Copyright {new Date().getFullYear()} — WorkLix</span>
            <Link
              href="/terms"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              Terms & Policy
            </Link>
            <Link
              href="/privacy"
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200"
            >
              Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
