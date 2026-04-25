import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ProductsSection from "@/components/ProductsSection";
import MarketSection from "@/components/MarketSection";
import RevenueSection from "@/components/RevenueSection";
import MoatSection from "@/components/MoatSection";
import ImpactSection from "@/components/ImpactSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ProductsSection />
        <MarketSection />
        <RevenueSection />
        <MoatSection />
        <ImpactSection />
        <FAQSection />
        <FooterSection />
      </main>
    </div>
  );
};

export default Index;
