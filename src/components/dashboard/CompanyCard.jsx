import React from "react";
import Image from "next/image";
import { RiMapPinLine, RiTeamLine, RiGlobalLine } from "react-icons/ri";

const CompanyCard = ({ company }) => {
  const isApproved = company?.status === "APPROVED";
  console.log(company, "from companycard");

  return (
    <div className="group relative rounded-2xl border border-border/50 bg-card p-6 shadow-xs hover:shadow-md transition-all duration-300 hover:-translate-y-1 overflow-hidden">
      {/* Background glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10 flex flex-col h-full gap-5">
        {/* Header: Logo, Title, Badge */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-muted overflow-hidden border border-border/50">
              {company?.logoUrl ? (
                <Image
                  src={company?.logoUrl}
                  alt={company?.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              ) : (
                <span className="text-xl font-bold text-muted-foreground uppercase">
                  {company?.name?.[0]}
                </span>
              )}
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground leading-tight">
                {company?.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-0.5">
                {company?.industry || "Uncategorized"}
              </p>
            </div>
          </div>
          <div
            className={`px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase rounded-md border ${
              isApproved
                ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
                : "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20"
            }`}
          >
            {company?.status || "PENDING"}
          </div>
        </div>

        {/* Description */}
        <div className="flex-grow">
          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
            {company?.description || "No description provided."}
          </p>
        </div>

        {/* Footer info: Location, Employees */}
        <div className="grid grid-cols-2 gap-4 py-4 border-y border-border/40 mt-auto">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <RiMapPinLine className="shrink-0 size-4" />
            <span className="truncate">{company?.location || "N/A"}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <RiTeamLine className="shrink-0 size-4" />
            <span className="truncate">
              {company?.employeeCount || "N/A"} range
            </span>
          </div>
        </div>

        {/* Website link */}
        <div className="flex items-center gap-2 pt-1 text-sm font-medium text-foreground hover:text-primary transition-colors w-fit">
          <RiGlobalLine className="size-4" />
          <a
            href={
              company?.website?.startsWith("http")
                ? company?.website
                : `https://${company?.website}`
            }
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            onClick={(e) => e.stopPropagation()}
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
