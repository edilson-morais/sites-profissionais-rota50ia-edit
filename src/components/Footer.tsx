import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4">
              <span className="text-2xl font-bold text-primary">WebPro</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Criamos sites profissionais que colocam sua empresa na frente no Google. 
              Desenvolvimento web moderno e estratégias de SEO para impulsionar seu negócio online.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Criação de Sites</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">SEO</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">E-commerce</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Marketing Digital</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Portfólio</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>
        
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 WebPro. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}