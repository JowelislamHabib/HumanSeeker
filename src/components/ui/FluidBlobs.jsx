"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function FluidBlobs({
  lightColors,
  darkColors,
  origins = [
    { x: 50, y: -55 },
    { x: 50, y: -25 },
    { x: 50, y: -25 },
    { x: 50, y: -25 },
  ],
  margin = 60,
  blur = 50,
  className,
}) {
  const colors = darkColors || ["#8c0f60", "#e8227a", "#e8227a", "#ff85b3"];

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none w-full h-full", className)}>
      <svg className="w-full h-full opacity-60" style={{ filter: `blur(${blur}px)` }}>
        <g>
          {origins.map((origin, index) => {
            const color = colors[index % colors.length];
            
            const xMovement = [
              `${origin.x}%`,
              `${origin.x + (index % 2 === 0 ? 15 : -15)}%`,
              `${origin.x + (index % 2 === 0 ? -10 : 10)}%`,
              `${origin.x}%`
            ];
            
            const yMovement = [
              `${origin.y}%`,
              `${origin.y + (index % 3 === 0 ? 12 : -12)}%`,
              `${origin.y + (index % 3 === 0 ? -8 : 8)}%`,
              `${origin.y}%`
            ];

            return (
              <motion.circle
                key={index}
                cx={0}
                cy={0}
                r={`${25 + (index % 3) * 10}%`}
                fill={color}
                animate={{
                  cx: xMovement,
                  cy: yMovement,
                }}
                transition={{
                  duration: 10 + index * 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}
