"use client";;
import * as React from "react";
import { FluidBlobs } from "@/components/ui/FluidBlobs";
import { GlowEffect } from "@/components/ui/glow-effect";
import { cn } from "@/lib/utils";

const DEFAULT_LIGHT = ["#ff0020", "#fc0f60", "#e8227a", "#ff85b3"];
const DEFAULT_DARK = ["#8c0f60", "#e8227a", "#e8227a", "#ff85b3"];
const DEFAULT_GLOW = ["#ff96a9", "#e8b4f0", "#ffb3c6", "#d44d8a", "#ff96a9"];

export function BlobCard({
  header,
  children,
  headerHeight = 224,
  lightColors = DEFAULT_LIGHT,
  darkColors = DEFAULT_DARK,
  glowColors = DEFAULT_GLOW,
  isFeatured = false,
  className
}) {
  return (
    <div className={cn(
      "group relative w-full transition-all duration-500 hover:-translate-y-2",
      className
    )}>
      {/* Outer rotating glow effect */}
      <div className={cn(
        "absolute -inset-[1.5px] rounded-[21.5px] overflow-hidden z-0 transition-opacity duration-500",
        isFeatured ? "opacity-100" : "opacity-0 group-hover:opacity-80"
      )}>
        <GlowEffect colors={glowColors} mode="rotate" blur="strongest" duration={5} scale={1} />
      </div>

      {/* Inner card container */}
      <div className={cn(
        "relative z-10 rounded-[20px] overflow-hidden bg-background border transition-colors duration-500 h-full flex flex-col",
        isFeatured ? "border-transparent" : "border-zinc-900 group-hover:border-zinc-800"
      )}>
        <div
          className="relative overflow-hidden rounded-t-[20px] shrink-0"
          style={{ height: headerHeight }}>
          <FluidBlobs
            lightColors={lightColors}
            darkColors={darkColors}
            origins={[
              { x: 50, y: -55 },
              { x: 50, y: -25 },
              { x: 50, y: -25 },
              { x: 50, y: -25 },
            ]}
            margin={60}
            blur={50} />
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
          {header && <div className="relative z-10 p-8 pb-0">{header}</div>}
        </div>

        {children && <div className="flex-1 flex flex-col">{children}</div>}
      </div>
    </div>
  );
}
