"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MagicCard } from "@/components/ui/magic-card";
import {
  RiMailLine,
  RiLockLine,
  RiArrowRightLine,
  RiTeamFill,
  RiRocketLine,
  RiShieldStarLine,
  RiCheckDoubleLine,
  RiGoogleFill,
  RiEyeLine,
  RiEyeOffLine,
} from "react-icons/ri";
import { authClient } from "@/lib/auth-client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Auth logic placeholder
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({ provider: "google" });
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-950 overflow-hidden transition-colors duration-300">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-[800px] h-[600px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-fuchsia-500/5 dark:bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none -translate-x-1/3 translate-y-1/3" />

      <div className="container w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 px-6 py-12 lg:py-20 relative z-10">
        {/* Left Content Area */}
        <div className="flex flex-col justify-center gap-10">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 text-sm font-semibold w-fit">
              <RiRocketLine className="w-4 h-4" />
              <span>Welcome Back</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-950 dark:text-white tracking-tight leading-tight">
              Log in to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                WorkLix
              </span>
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed">
              Access your dashboard, manage your tasks, and continue
              collaborating seamlessly with your team.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-200 dark:border-zinc-800 text-indigo-500 shrink-0">
                <RiTeamFill className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  Pick up where you left off
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 mt-1">
                  Instantly jump back into your active projects and recent tasks
                  without missing a beat.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-200 dark:border-zinc-800 text-fuchsia-500 shrink-0">
                <RiShieldStarLine className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  Secure & Reliable
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 mt-1">
                  Your workspace and credentials are protected with
                  enterprise-grade encryption.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 shadow-sm border border-zinc-200 dark:border-zinc-800 text-emerald-500 shrink-0">
                <RiCheckDoubleLine className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                  Stay in the loop
                </h3>
                <p className="text-zinc-500 dark:text-zinc-400 mt-1">
                  Check your latest notifications, team updates, and project
                  progress in real-time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Form Area */}
        <div className="flex items-center justify-center lg:justify-end">
          <MagicCard
            mode="orb"
            glowFrom="#6366f1"
            glowTo="#d946ef"
            glowSize={380}
            glowOpacity={0.7}
            className="w-full max-w-lg rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md shadow-xl"
          >
            <div className="p-8 sm:p-10 flex flex-col gap-8">
              {/* Header */}
              <div className="flex flex-col items-center text-center gap-3">
                <Link
                  href="/"
                  className="flex items-center justify-center w-11 h-11 rounded-xl bg-linear-to-tr from-indigo-500 via-purple-500 to-pink-500 p-2 shadow-lg shadow-purple-500/10"
                >
                  <RiTeamFill className="w-6 h-6 text-white" />
                </Link>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight mt-2 transition-colors">
                  Welcome back
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xs leading-relaxed transition-colors">
                  Enter your credentials to access your WorkLix account.
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-4">
                  <button
                    type="button"
                    onClick={handleGoogleLogin}
                    className="w-full py-3 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-950 dark:text-white hover:bg-zinc-50 dark:hover:bg-zinc-800 shadow-sm transition-all duration-200 active:scale-[0.98] cursor-pointer"
                  >
                    <RiGoogleFill className="w-5 h-5 text-red-500" />
                    <span>Sign in with Google</span>
                  </button>

                  <div className="relative flex items-center py-2">
                    <div className="grow border-t border-zinc-200 dark:border-zinc-800"></div>
                    <span className="shrink-0 px-4 text-xs font-medium text-zinc-400 uppercase tracking-wider">
                      Or continue with email
                    </span>
                    <div className="grow border-t border-zinc-200 dark:border-zinc-800"></div>
                  </div>
                </div>
                {/* Email input */}
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-zinc-700 dark:text-zinc-300 text-xs font-bold uppercase tracking-wider transition-colors"
                  >
                    Email Address
                  </label>
                  <div className="relative flex items-center">
                    <RiMailLine className="absolute left-4 w-4.5 h-4.5 text-zinc-400 dark:text-zinc-550 pointer-events-none" />
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 text-sm rounded-xl bg-zinc-50/50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800/80 text-zinc-950 dark:text-white focus:outline-hidden focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition-all font-medium"
                    />
                  </div>
                </div>

                {/* Password input */}
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-zinc-700 dark:text-zinc-300 text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      Password
                    </label>
                    <Link
                      href="/forgot-password"
                      className="text-indigo-600 dark:text-indigo-400 hover:underline text-xs font-semibold"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative flex items-center">
                    <RiLockLine className="absolute left-4 w-4.5 h-4.5 text-zinc-400 dark:text-zinc-550 pointer-events-none" />
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      required
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-11 pr-11 py-3 text-sm rounded-xl bg-zinc-50/50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800/80 text-zinc-950 dark:text-white focus:outline-hidden focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition-all font-medium"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 focus:outline-hidden transition-colors"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                    >
                      {showPassword ? (
                        <RiEyeOffLine className="w-4.5 h-4.5" />
                      ) : (
                        <RiEyeLine className="w-4.5 h-4.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <label className="flex items-start gap-2.5 px-0.5 select-none cursor-pointer group mt-1 w-fit">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 mt-0.5 rounded-sm border-zinc-300 dark:border-zinc-800 text-indigo-600 focus:ring-indigo-500 bg-white dark:bg-zinc-950 shrink-0"
                  />
                  <span className="text-zinc-500 dark:text-zinc-400 text-xs font-semibold leading-normal transition-colors group-hover:text-zinc-850 dark:group-hover:text-zinc-200">
                    Keep me signed in
                  </span>
                </label>

                {/* Sign In Button */}
                <button
                  type="submit"
                  className="w-full mt-2 py-3 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-black shadow-lg shadow-indigo-600/15 dark:shadow-white/5 transition-all duration-200 active:scale-[0.98] cursor-pointer group"
                >
                  <span>Sign In</span>
                  <RiArrowRightLine className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </form>

              {/* Footer Navigation */}
              <div className="flex justify-center text-center text-xs">
                <span className="text-zinc-500 dark:text-zinc-400">
                  Don't have an account?{" "}
                  <Link
                    href="/register"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline font-bold"
                  >
                    Sign up free
                  </Link>
                </span>
              </div>
            </div>
          </MagicCard>
        </div>
      </div>
    </div>
  );
}
