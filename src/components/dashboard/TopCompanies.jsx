import React from "react";
import { Frame, FramePanel } from "@/components/reui/frame";

const topCompanies = [
  {
    name: "Google Inc.",
    industry: "Technology",
    location: "Mountain View",
    activeProjects: "24",
    avatar: "https://i.pravatar.cc/150?u=google",
  },
  {
    name: "Meta Platforms",
    industry: "Social Media",
    location: "Menlo Park",
    activeProjects: "18",
    avatar: "https://i.pravatar.cc/150?u=meta",
  },
  {
    name: "Stripe",
    industry: "Fintech",
    location: "San Francisco",
    activeProjects: "12",
    avatar: "https://i.pravatar.cc/150?u=stripe",
  },
  {
    name: "Tesla",
    industry: "Automotive",
    location: "Austin",
    activeProjects: "31",
    avatar: "https://i.pravatar.cc/150?u=tesla",
  },
];

export default function TopCompanies() {
  return (
    <div className="flex w-full flex-col h-full">
      <div className="flex items-center justify-between mb-4 mt-6">
        <h2 className="text-xl font-semibold text-foreground tracking-tight">
          My Top Companies
        </h2>
        <a
          href="#"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          View all
        </a>
      </div>
      <Frame
        spacing="xs"
        className="bg-card shadow-sm rounded-xl border border-border flex-1"
      >
        <FramePanel className="p-5 h-full flex flex-col justify-between border-0">
          <div className="flex flex-col gap-6 pt-1">
            {topCompanies.map((company, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="size-[42px] rounded-xl bg-accent/50 border border-border/50 flex items-center justify-center overflow-hidden shrink-0">
                    <img src={company.avatar} alt={company.name} className="size-full object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[15px] font-bold text-foreground tracking-tight leading-none mb-1">
                      {company.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {company.industry} &bull; {company.location}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-base font-bold text-foreground leading-none mb-1">
                    {company.activeProjects}
                  </span>
                  <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">
                    Active Projects
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-8 py-3 rounded-lg border border-border/80 text-sm font-medium text-muted-foreground hover:bg-accent/50 hover:text-foreground transition-colors bg-transparent">
            View All Companies
          </button>
        </FramePanel>
      </Frame>
    </div>
  );
}
