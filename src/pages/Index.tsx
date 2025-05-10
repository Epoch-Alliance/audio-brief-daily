
import React from "react";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import EarlyAdopterSection from "@/components/EarlyAdopterSection";
import WaitingListForm from "@/components/WaitingListForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <EarlyAdopterSection />
      <WaitingListForm />
      <Footer />
    </div>
  );
};

export default Index;
