import { FaqSection } from "@/components/FaqSection";
import { FooterSection } from "@/components/FooterSection";
import { HeroSection } from "@/components/HeroSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ServicesValuesSection } from "@/components/ServicesValuesSection";

export default function Home() {
  return (
    <main className="relative w-full overflow-x-hidden">
      <HeroSection />
      <ServicesValuesSection />
      <PortfolioSection />
      <FaqSection />
      <FooterSection />
    </main>
  );
}
