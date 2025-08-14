import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-primary">WebPro</span>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Início</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Serviços</a>
              <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Portfólio</a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors">Preços</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contato</a>
            </div>
          </nav>

          <div className="hidden md:block">
            <Button>
              Fale Conosco
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <a href="#home" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Início</a>
              <a href="#services" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Serviços</a>
              <a href="#portfolio" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Portfólio</a>
              <a href="#pricing" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Preços</a>
              <a href="#contact" className="block px-3 py-2 text-foreground hover:text-primary transition-colors">Contato</a>
              <div className="pt-4">
                <Button className="w-full">
                  Fale Conosco
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}