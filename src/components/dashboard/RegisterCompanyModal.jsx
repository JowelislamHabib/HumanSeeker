"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  RiCloseLine,
  RiImageAddLine,
  RiGlobalLine,
  RiMapPinLine,
  RiBuilding4Line,
  RiTeamLine,
  RiUploadLine,
} from "react-icons/ri";
import Image from "next/image";
import { toast } from "sonner";

const RegisterCompanyModal = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    industry: "Technology",
    website: "",
    location: "",
    employeeCount: "1-10",
    logoUrl: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const handleLogoUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check file size (5MB = 5 * 1024 * 1024 bytes)
    if (file.size > 5 * 1024 * 1024) {
      alert("Image must be smaller than 5MB");
      return;
    }

    setIsUploading(true);
    const formDataObj = new FormData();
    formDataObj.append("image", file);

    try {
      const res = await fetch(
        `https://api.imgbb.com/1/upload?key=${process.env.NEXT_PUBLIC_IMGBB_API_KEY}`,
        {
          method: "POST",
          body: formDataObj,
        },
      );
      const data = await res.json();
      if (data.success) {
        setFormData((prev) => ({ ...prev, logoUrl: data.data.url }));
      } else {
        console.error("Imgbb upload failed:", data);
        alert("Failed to upload image. Check API key.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("Error uploading image");
    } finally {
      setIsUploading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const payload = {
        ...formData,
        status: "pending",
      };

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/companies`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (res.ok) {
        toast.success("Company registered successfully!", {
          position: "top-right",
        });
        onSuccess && onSuccess();
        onClose();
        // Reset form
        setFormData({
          name: "",
          industry: "Technology",
          website: "",
          location: "",
          employeeCount: "1-10",
          logoUrl: "",
          description: "",
        });
      }
    } catch (error) {
      console.error("Failed to register company:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-y-auto pt-20 pb-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-2xl bg-card border border-white/20 dark:border-white/10 shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)] rounded-3xl overflow-hidden my-auto flex flex-col"
          >
            {/* Header */}
            <div className="relative px-8 py-6 border-b border-border/40 bg-muted/10">
              <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary/40 via-primary to-primary/40" />
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-foreground tracking-tight">
                    Register Company
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1.5 font-medium">
                    Add your business details to start hiring talent.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2.5 rounded-full hover:bg-muted text-muted-foreground hover:text-foreground transition-all focus:outline-hidden focus:ring-2 focus:ring-primary/20 bg-background/50 border border-border/50 shadow-xs"
                >
                  <RiCloseLine className="size-5" />
                </button>
              </div>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="px-8 py-6 flex-1 overflow-y-auto"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-7">
                {/* Company Name */}
                <div>
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 block ml-1">
                    Company Name
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                      <RiBuilding4Line className="size-5" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Acme Corp"
                      className="w-full pl-12 pr-4 py-3.5 bg-muted/20 border border-border/50 rounded-2xl text-sm focus:outline-hidden focus:ring-2 focus:ring-primary/30 focus:border-primary/50 focus:bg-background transition-all placeholder:text-muted-foreground/60 font-medium"
                    />
                  </div>
                </div>

                {/* Industry / Category */}
                <div>
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 block ml-1">
                    Industry
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                      <RiGlobalLine className="size-5" />
                    </div>
                    <select
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full pl-12 pr-10 py-3.5 bg-muted/20 border border-border/50 rounded-2xl text-sm focus:outline-hidden focus:ring-2 focus:ring-primary/30 focus:border-primary/50 focus:bg-background transition-all appearance-none cursor-pointer font-medium"
                    >
                      <option value="Technology">Technology</option>
                      <option value="Finance">Finance</option>
                      <option value="Healthcare">Healthcare</option>
                      <option value="Education">Education</option>
                      <option value="Retail">Retail</option>
                      <option value="Other">Other</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-muted-foreground">
                      <svg
                        className="size-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Website URL */}
                <div>
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 block ml-1">
                    Website URL
                  </label>
                  <div className="relative flex items-center group">
                    <span className="absolute left-4 text-muted-foreground text-sm font-semibold group-focus-within:text-primary transition-colors">
                      https://
                    </span>
                    <input
                      type="text"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="acme.com"
                      className="w-full pl-16 pr-4 py-3.5 bg-muted/20 border border-border/50 rounded-2xl text-sm focus:outline-hidden focus:ring-2 focus:ring-primary/30 focus:border-primary/50 focus:bg-background transition-all placeholder:text-muted-foreground/60 font-medium"
                    />
                  </div>
                </div>

                {/* Location */}
                <div>
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 block ml-1">
                    Location
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                      <RiMapPinLine className="size-5" />
                    </div>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="City, Country"
                      className="w-full pl-12 pr-4 py-3.5 bg-muted/20 border border-border/50 rounded-2xl text-sm focus:outline-hidden focus:ring-2 focus:ring-primary/30 focus:border-primary/50 focus:bg-background transition-all placeholder:text-muted-foreground/60 font-medium"
                    />
                  </div>
                </div>

                {/* Employee Count */}
                <div>
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 block ml-1">
                    Company Size
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-muted-foreground group-focus-within:text-primary transition-colors">
                      <RiTeamLine className="size-5" />
                    </div>
                    <select
                      name="employeeCount"
                      value={formData.employeeCount}
                      onChange={handleChange}
                      className="w-full pl-12 pr-10 py-3.5 bg-muted/20 border border-border/50 rounded-2xl text-sm focus:outline-hidden focus:ring-2 focus:ring-primary/30 focus:border-primary/50 focus:bg-background transition-all appearance-none cursor-pointer font-medium"
                    >
                      <option value="1-10">1-10 employees</option>
                      <option value="11-50">11-50 employees</option>
                      <option value="51-200">51-200 employees</option>
                      <option value="201-500">201-500 employees</option>
                      <option value="501-1000">501-1000 employees</option>
                      <option value="1000+">1000+ employees</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-muted-foreground">
                      <svg
                        className="size-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Company Logo Upload */}
                <div>
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3 block ml-1">
                    Company Logo
                  </label>
                  <label className="flex items-center gap-4 cursor-pointer group">
                    <div className="relative shrink-0 w-12 h-12 rounded-xl border-2 border-dashed border-border flex items-center justify-center bg-muted/20 group-hover:bg-muted/50 group-hover:border-primary/40 transition-all overflow-hidden shadow-xs">
                      {isUploading ? (
                        <div className="animate-pulse flex items-center justify-center w-full h-full bg-muted">
                          <span className="text-[10px] text-muted-foreground font-medium">
                            Up...
                          </span>
                        </div>
                      ) : formData.logoUrl ? (
                        <Image
                          src={formData.logoUrl}
                          alt="Preview"
                          fill
                          className="object-cover"
                          onError={(e) => {
                            e.target.style.display = "none";
                          }}
                        />
                      ) : (
                        <RiUploadLine className="size-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      )}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                        {formData.logoUrl ? "Change image" : "Upload image"}
                      </span>
                      <span className="text-xs font-medium text-muted-foreground mt-0.5">
                        PNG, JPG up to 5MB
                      </span>
                    </div>
                    <input
                      type="file"
                      accept="image/png, image/jpeg, image/jpg"
                      onChange={handleLogoUpload}
                      disabled={isUploading}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>

              {/* Brief Description */}
              <div className="mt-8">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2 block ml-1">
                  About the Company
                </label>
                <div className="relative group">
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us about your company's mission and culture..."
                    className="w-full px-4 py-3.5 bg-muted/20 border border-border/50 rounded-2xl text-sm focus:outline-hidden focus:ring-2 focus:ring-primary/30 focus:border-primary/50 focus:bg-background transition-all resize-none placeholder:text-muted-foreground/60 font-medium"
                  />
                </div>
              </div>

              {/* Footer Actions */}
              <div className="mt-10 flex items-center justify-end gap-4 pt-6 border-t border-border/40">
                <button
                  type="button"
                  onClick={onClose}
                  disabled={isSubmitting}
                  className="px-6 py-3 rounded-2xl text-sm font-bold text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all focus:outline-hidden focus:ring-2 focus:ring-primary/20"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 rounded-2xl text-sm font-bold bg-foreground text-background hover:bg-foreground/90 transition-all shadow-[0_8px_16px_-6px_rgba(0,0,0,0.3)] active:scale-95 disabled:opacity-70 disabled:active:scale-100 flex items-center gap-2"
                >
                  {isSubmitting ? "Registering..." : "Complete Registration"}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default RegisterCompanyModal;
