"use client";

import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function JobFilters({ 
  searchQuery, 
  setSearchQuery, 
  selectedType, 
  setSelectedType, 
  selectedCategory, 
  setSelectedCategory,
  isRemoteOnly,
  setIsRemoteOnly
}) {
  return (
    <div className="flex flex-col gap-4 bg-card/50 p-6 rounded-2xl border border-border shadow-sm max-w-7xl mx-auto mb-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
        
        {/* 1. Search Text Field - Span 5 columns */}
        <div className="md:col-span-5 relative">
          <label className="text-sm font-medium text-muted-foreground block mb-2">Search Jobs</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              type="text"
              placeholder="Title, company, or keywords..." 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-background h-10"
            />
          </div>
        </div>

        {/* 2. Job Type Select Filter - Span 3 columns */}
        <div className="md:col-span-3">
          <label className="text-sm font-medium text-muted-foreground block mb-2">Job Type</label>
          <div className="relative">
            <select 
              value={selectedType} 
              onChange={(e) => setSelectedType(e.target.value)}
              className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
            >
              <option value="all">All Types</option>
              <option value="full-time">Full-time</option>
              <option value="part-time">Part-time</option>
              <option value="contract">Contract</option>
            </select>
          </div>
        </div>

        {/* 3. Category Select Filter - Span 3 columns */}
        <div className="md:col-span-3">
          <label className="text-sm font-medium text-muted-foreground block mb-2">Category</label>
          <div className="relative">
            <select 
              value={selectedCategory} 
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 appearance-none"
            >
              <option value="all">All Categories</option>
              <option value="engineering">Engineering</option>
              <option value="design">Design</option>
              <option value="product">Product</option>
            </select>
          </div>
        </div>

        {/* 4. Remote Checkbox Filter - Span 1 column */}
        <div className="md:col-span-1 flex items-center justify-start md:justify-center h-10 pb-1">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input 
              type="checkbox"
              checked={isRemoteOnly}
              onChange={(e) => setIsRemoteOnly(e.target.checked)}
              className="accent-primary w-4 h-4 rounded border-input cursor-pointer"
            />
            <span className="text-sm font-medium text-foreground md:hidden lg:inline">Remote</span>
          </label>
        </div>

      </div>
    </div>
  );
}
