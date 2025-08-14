import { HeroSection } from "@/components/ui/hero-section-dark"
import dashboardDark from "@/assets/dashboard-dark.png"
import dashboardLight from "@/assets/dashboard-light.png"

function HeroSectionDemo() {
  return (
    <div className="animate-fade-in">
      <HeroSection
        title="Construa produtos para todos"
        subtitle={{
          regular: "Transforme suas ideias em ",
          gradient: "experiências digitais incríveis",
        }}
        description="Transforme suas ideias em realidade com nossa suíte abrangente de ferramentas de desenvolvimento e recursos projetados para criadores modernos."
        ctaText="Começar Agora"
        ctaHref="/signup"
        bottomImage={{
          light: dashboardLight,
          dark: dashboardDark,
        }}
        gridOptions={{
          angle: 65,
          opacity: 0.3,
          cellSize: 45,
          lightLineColor: "#3a3a3a",
          darkLineColor: "#1a1a1a",
        }}
      />
    </div>
  )
}

export { HeroSectionDemo }