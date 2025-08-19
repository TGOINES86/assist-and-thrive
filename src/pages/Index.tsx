import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { DonationFlow } from "@/components/DonationFlow";
import { ClientIntake } from "@/components/ClientIntake";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <DonationFlow />
      <ClientIntake />
    </div>
  );
};

export default Index;
