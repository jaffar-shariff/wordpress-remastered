import { Button } from "@/components/ui/button";
import { Download, Mail, ArrowDown } from "lucide-react";
import jaffarProfile from "@/assets/jaffar-profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section 
      className="min-h-screen relative flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-xl opacity-70 scale-110 animate-pulse" />
              <img
                src={jaffarProfile}
                alt="Jaffar Shariff"
                className="relative w-80 h-80 rounded-full object-cover border-4 border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105 hover:shadow-[0_0_60px_rgba(255,255,255,0.5)] transition-all duration-500"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.8)] transition-all duration-300">
                Hi, I'm
              </h1>
              <h2 className="text-6xl lg:text-8xl font-black text-primary hover:drop-shadow-[0_0_30px_rgba(168,85,247,0.8)] transition-all duration-300">
                Jaffar Shariff
              </h2>
              <h3 className="text-3xl lg:text-4xl font-semibold text-secondary hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.8)] transition-all duration-300">
                Web Advisor.
              </h3>
            </div>
            
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
              Web Advisor at <span className="text-primary font-semibold">Newfold.com</span>. 
              Digital brands like iPage, FatCow, and <span className="text-accent font-semibold">Domain.com</span>. 
              I help clients solve website, email, and hosting issues.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                variant="hero"
                size="lg"
                className="group px-8 py-6 text-lg"
                asChild
              >
                <a href="https://pro25-rosy.vercel.app/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Download My CV
                </a>
              </Button>
              
              <Button
                variant="glow"
                size="lg"
                className="group px-8 py-6 text-lg"
                asChild
              >
                <a href="mailto:Jaffarshariff0017@gmail.com">
                  <Mail className="w-5 h-5 group-hover:animate-pulse" />
                  Hire Me
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};