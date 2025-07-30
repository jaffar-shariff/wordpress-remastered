import { Button } from "@/components/ui/button";
import { Mail, ExternalLink, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Jaffar Shariff
            </h3>
            <p className="text-muted-foreground">
              Professional Web Advisor specializing in WordPress, hosting solutions, 
              and technical support with 3+ years of experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Me
              </a>
              <a href="#skills" className="block text-muted-foreground hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#services" className="block text-muted-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#testimonials" className="block text-muted-foreground hover:text-primary transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Get In Touch</h4>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="mailto:Jaffarshariff0017@gmail.com">
                  <Mail className="w-4 h-4" />
                  Jaffarshariff0017@gmail.com
                </a>
              </Button>
              <Button variant="outline" className="w-full justify-start" asChild>
                <a href="https://pro25-rosy.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Portfolio
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-center md:text-left">
            © 2025 Jaffar Shariff. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>using modern web technologies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};