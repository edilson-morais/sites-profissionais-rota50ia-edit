import { HeroSection } from "@/components/ui/hero-section-dark"
import dashboardDark from "@/assets/dashboard-dark.png"
import dashboardLight from "@/assets/dashboard-light.png"

function HeroSectionDemo() {
  return (
    <HeroSection
      title="Welcome to Our Platform"
      subtitle={{
        regular: "Transform your ideas into ",
        gradient: "beautiful digital experiences",
      }}
      description="Transform your ideas into reality with our comprehensive suite of development tools and resources designed for modern creators."
      ctaText="Get Started"
      ctaHref="/signup"
      bottomImage={{
        light: dashboardLight,
        dark: dashboardDark,
      }}
      gridOptions={{
        angle: 65,
        opacity: 0.4,
        cellSize: 50,
        lightLineColor: "#4a4a4a",
        darkLineColor: "#2a2a2a",
      }}
    />
  )
}

export { HeroSectionDemo }