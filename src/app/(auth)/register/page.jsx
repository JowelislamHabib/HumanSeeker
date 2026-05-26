"use client";

import React, { useState } from "react";
import Link from "next/link";
import { MagicCard } from "@/components/ui/magic-card";
import {
  RiMailLine,
  RiLockLine,
  RiUserLine,
  RiArrowRightLine,
  RiTeamFill,
  RiImageLine,
  RiEyeLine,
  RiEyeOffLine,
} from "react-icons/ri";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [avatar, setAvatar] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);

    if (avatar && !/\.(jpeg|jpg|gif|png|webp)$/i.test(avatar)) {
      alert(
        "Avatar URL must end with a valid image extension (e.g., .jpg, .png)",
      );
      return;
    }

    const { data, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image: avatar,
      callbackURL: "http://localhost:3000",
    });
    if (data?.user) {
      router.push("/dashboard");
    }
    if (error) {
      console.log(error, "error");
    }
  };

  return (
    <div className="relative w-full min-h-[80vh] flex items-center justify-center py-20 px-6 bg-zinc-50 dark:bg-zinc-950 overflow-hidden transition-colors duration-300">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-fuchsia-500/5 dark:bg-fuchsia-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main card */}
      <MagicCard
        mode="orb"
        glowFrom="#6366f1"
        glowTo="#d946ef"
        glowSize={380}
        glowOpacity={0.7}
        className="w-full max-w-md rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-md shadow-xl"
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
            <h1 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white tracking-tight mt-2 transition-colors">
              Create an account
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-xs leading-relaxed transition-colors">
              Join WorkLix to start managing your projects today.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Full Name input */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="name"
                className="text-zinc-700 dark:text-zinc-300 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Full Name
              </label>
              <div className="relative flex items-center">
                <RiUserLine className="absolute left-4 w-4.5 h-4.5 text-zinc-400 dark:text-zinc-550 pointer-events-none" />
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 text-sm rounded-xl bg-zinc-50/50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800/80 text-zinc-950 dark:text-white focus:outline-hidden focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition-all font-medium"
                />
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
            {/* Avatar input */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="avatar"
                className="text-zinc-700 dark:text-zinc-300 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Avatar URL
              </label>
              <div className="relative flex items-center">
                <RiImageLine className="absolute left-4 w-4.5 h-4.5 text-zinc-400 dark:text-zinc-550 pointer-events-none" />
                <input
                  id="avatar"
                  required
                  type="url"
                  placeholder="https://example.com/avatar.png"
                  value={avatar}
                  onChange={(e) => setAvatar(e.target.value)}
                  pattern=".*\.(jpeg|jpg|gif|png|webp)$"
                  title="Must end with a valid image extension (e.g., .jpg, .png)"
                  className="w-full pl-11 pr-4 py-3 text-sm rounded-xl bg-zinc-50/50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800/80 text-zinc-950 dark:text-white focus:outline-hidden focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition-all font-medium"
                />
              </div>
            </div>
            {/* Password input */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="password"
                className="text-zinc-700 dark:text-zinc-300 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Password
              </label>
              <div className="relative flex items-center">
                <RiLockLine className="absolute left-4 w-4.5 h-4.5 text-zinc-400 dark:text-zinc-550 pointer-events-none" />
                <input
                  id="password"
                  type="password"
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 text-sm rounded-xl bg-zinc-50/50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800/80 text-zinc-950 dark:text-white focus:outline-hidden focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition-all font-medium"
                  className="w-full pl-11 pr-11 py-3 text-sm rounded-xl bg-zinc-50/50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800/80 text-zinc-950 dark:text-white focus:outline-hidden focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition-all font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 focus:outline-hidden transition-colors"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <RiEyeOffLine className="w-4.5 h-4.5" />
                  ) : (
                    <RiEyeLine className="w-4.5 h-4.5" />
                  )}
                </button>
              </div>
            </div>
            {/* Confirm Password input */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="confirmPassword"
                className="text-zinc-700 dark:text-zinc-300 text-xs font-bold uppercase tracking-wider transition-colors"
              >
                Confirm Password
              </label>
              <div className="relative flex items-center">
                <RiLockLine className="absolute left-4 w-4.5 h-4.5 text-zinc-400 dark:text-zinc-550 pointer-events-none" />
                <input
                  id="confirmPassword"
                  type="password"
                  type={showConfirmPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 text-sm rounded-xl bg-zinc-50/50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800/80 text-zinc-950 dark:text-white focus:outline-hidden focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition-all font-medium"
                  className="w-full pl-11 pr-11 py-3 text-sm rounded-xl bg-zinc-50/50 dark:bg-zinc-950/40 border border-zinc-200 dark:border-zinc-800/80 text-zinc-950 dark:text-white focus:outline-hidden focus:border-indigo-500 dark:focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 transition-all font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 focus:outline-hidden transition-colors"
                  aria-label={
                    showConfirmPassword ? "Hide password" : "Show password"
                  }
                >
                  {showConfirmPassword ? (
                    <RiEyeOffLine className="w-4.5 h-4.5" />
                  ) : (
                    <RiEyeLine className="w-4.5 h-4.5" />
                  )}
                </button>
              </div>
            </div>
            {/* Terms and Conditions */}
            <label className="flex items-start gap-2.5 px-0.5 select-none cursor-pointer group mt-1">
              <input
                type="checkbox"
                required
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="w-4 h-4 mt-0.5 rounded-sm border-zinc-300 dark:border-zinc-800 text-indigo-600 focus:ring-indigo-500 bg-white dark:bg-zinc-950 shrink-0"
              />
              <span className="text-zinc-500 dark:text-zinc-400 text-xs font-semibold leading-normal transition-colors group-hover:text-zinc-850 dark:group-hover:text-zinc-200">
                I agree to the{" "}
                <Link
                  href="/terms"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link
                  href="/privacy"
                  className="text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  Privacy Policy
                </Link>
              </span>
            </label>
            {/* Sign Up Button */}
            <button
              type="submit"
              className="w-full mt-2 py-3 px-4 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white dark:bg-white dark:hover:bg-zinc-200 dark:text-black shadow-lg shadow-indigo-600/15 dark:shadow-white/5 transition-all duration-200 active:scale-[0.98] cursor-pointer group"
            >
              <span>Get Started</span>
              <RiArrowRightLine className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </form>

          {/* Footer Navigation */}
          <div className="flex justify-center text-center text-xs">
            <span className="text-zinc-500 dark:text-zinc-400">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-indigo-600 dark:text-indigo-400 hover:underline font-bold"
              >
                Sign in instead
              </Link>
            </span>
          </div>
        </div>
      </MagicCard>
    </div>
  );
}
