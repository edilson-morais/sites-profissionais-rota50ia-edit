import { HeroSection } from "@/components/ui/hero-section-dark"
import dashboardDark from "@/assets/dashboard-dark.png"
import dashboardLight from "@/assets/dashboard-light.png"

function HeroSectionDemo() {
  return (
    <div className="animate-fade-in">
      <HeroSection
        title="Welcome to Our Platform"
        subtitle={{
          regular: "Transform your ideas into ",
          gradient: "beautiful",
        }}
        description="Transform your ideas into reality with our comprehensive suite of development tools and resources."
        ctaText="Get Started"
        ctaHref="/signup"
        bottomImage={undefined}
        gridOptions={{
          angle: 65,
          opacity: 0.15,
          cellSize: 40,
          lightLineColor: "#2a2a2a",
          darkLineColor: "#1a1a1a",
        }}
      />
    </div>
  )
}

export { HeroSectionDemo }