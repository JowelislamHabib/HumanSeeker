import Banner from "@/components/Banner";
import StatsSection from "@/components/StatsSection";
import FeaturedJobs from "@/components/FeaturedJobs";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-950">
      <Banner />
      <StatsSection />
      <FeaturedJobs />
      <PricingSection />
    </div>
  );
}
