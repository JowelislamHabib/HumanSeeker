"use client";

import { useState, useEffect } from "react";
import CompanyCard from "@/components/dashboard/CompanyCard";
import RegisterCompanyModal from "@/components/dashboard/RegisterCompanyModal";
import { RiAddLine, RiBuilding2Line } from "react-icons/ri";
import { fetchCompaniesAction } from "@/lib/actions/company";

export default function CompanyProfilePage({ agency, companies }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [company, setCompany] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  console.log(companies, "from company profile");

  // const fetchCompanies = async () => {
  //   setIsLoading(true);
  //   try {
  //     const result = await fetchCompaniesAction(agency?.id);
  //     if (result.success) {
  //       setCompanies(result.data);
  //     } else {
  //       console.error("Failed to fetch companies:", result.error);
  //     }
  //   } catch (error) {
  //     console.error("Failed to fetch companies:", error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchCompanies();
  // }, []);

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-foreground tracking-tight">
            My Companies
          </h1>
          <p className="text-muted-foreground mt-1 text-sm md:text-base">
            Manage your registered companies and their verification states.
          </p>
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-foreground text-background hover:bg-foreground/90 rounded-xl font-medium text-sm transition-all shadow-md active:scale-95 shrink-0"
        >
          <RiAddLine className="size-4" />
          <span>Register a company</span>
        </button>
      </div>

      {/* Content Grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-70 rounded-2xl bg-muted/30 animate-pulse border border-border/50"
            />
          ))}
        </div>
      ) : !companies || companies.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 px-4 text-center border border-dashed border-border/60 rounded-2xl bg-card/50">
          <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mb-4">
            <RiBuilding2Line className="size-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">
            No companies found
          </h3>
          <p className="text-muted-foreground text-sm max-w-sm mb-6">
            You haven't registered any companies yet. Get started by registering
            your first company.
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl font-medium text-sm transition-all shadow-md active:scale-95"
          >
            <RiAddLine className="size-4" />
            <span>Register a company</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {companies.map((company) => (
            <CompanyCard key={company._id || company?.name} company={company} />
          ))}
        </div>
      )}

      {/* Modal */}
      <RegisterCompanyModal
        agencyId={agency?.id}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSuccess={companies}
      />
    </div>
  );
}
