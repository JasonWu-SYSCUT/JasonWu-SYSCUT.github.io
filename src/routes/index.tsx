import { createFileRoute } from "@tanstack/react-router";
import { AwardsSection } from "@/components/AwardsSection";
import { DirectionSection } from "@/components/DirectionSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { ProductSection } from "@/components/ProductSection";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main>
        <Hero />
        <DirectionSection />
        <ProductSection />
        <AwardsSection />
        <ExperienceSection />
      </main>
      <Footer />
    </div>
  );
}
