import Banner from "@/components/Banner";
import CtaSection from "@/components/CtaSection";
import FeaturedJobs from "@/components/FeaturedJobs";
import PricingSection from "@/components/PricingSection";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 transition-colors duration-300">
      <Banner />
      <StatsSection />
      <FeaturedJobs />
      <PricingSection />
      <CtaSection />
    </div>
  );
}
