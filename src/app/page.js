import Banner from "@/components/Banner";
import StatsSection from "@/components/StatsSection";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-950">
      <Banner />
      <StatsSection />
    </div>
  );
}
