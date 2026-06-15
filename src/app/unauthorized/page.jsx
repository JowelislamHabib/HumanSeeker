"use client";

import Link from "next/link";
import { RiArrowLeftLine, RiShieldKeyholeLine } from "react-icons/ri";

const UnauthorizedPage = () => {
    return (
        <div className="min-h-[80vh] w-full flex items-center justify-center relative overflow-hidden">
            {/* Background glowing effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-500/10 dark:bg-rose-500/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center text-center px-4 animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
                {/* Icon Container */}
                <div className="mb-8 relative group">
                    <div className="absolute inset-0 bg-rose-500/30 dark:bg-rose-500/20 blur-2xl rounded-full transition-all duration-500 group-hover:scale-110" />
                    <div className="relative w-28 h-28 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 rounded-[2rem] shadow-2xl flex items-center justify-center transition-transform duration-500 hover:scale-105">
                        <RiShieldKeyholeLine className="w-14 h-14 text-rose-500 dark:text-rose-400" />
                    </div>
                </div>

                {/* Typography */}
                <h1 className="text-4xl md:text-6xl font-black text-zinc-900 dark:text-white tracking-tight mb-4">
                    Access Denied
                </h1>
                
                <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-lg mb-10 font-medium">
                    You don't have the required permissions to view this area. Please verify your account role or contact support.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Link 
                        href="/"
                        className="group flex items-center justify-center gap-2 px-8 py-4 bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 text-white dark:text-zinc-950 rounded-2xl font-bold transition-all duration-300 active:scale-95 shadow-xl shadow-zinc-950/10 dark:shadow-white/10"
                    >
                        <RiArrowLeftLine className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
                        Go Back Home
                    </Link>
                    <Link
                        href="/login"
                        className="flex items-center justify-center px-8 py-4 bg-white/50 dark:bg-zinc-900/50 hover:bg-white dark:hover:bg-zinc-800 text-zinc-900 dark:text-white border border-zinc-200 dark:border-zinc-800 backdrop-blur-md rounded-2xl font-bold transition-all duration-300 active:scale-95"
                    >
                        Switch Account
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default UnauthorizedPage;