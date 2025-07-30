import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const services = [
  {
    title: "WordPress & Web Development",
    description: "Custom WordPress sites, theme development, and plugin integration for optimal performance.",
    icon: "🌐",
    gradient: "bg-gradient-primary"
  },
  {
    title: "SQL Querying",
    description: "Database optimization, complex queries, and data analysis for improved website performance.",
    icon: "🗄️",
    gradient: "bg-gradient-accent"
  },
  {
    title: "Windows IIS & VPS Troubleshooting",
    description: "Server configuration, troubleshooting, and optimization for Windows-based hosting environments.",
    icon: "⚙️",
    gradient: "bg-gradient-primary"
  },
  {
    title: "Enhanced Website Uptime",
    description: "Proactive technical support and monitoring to ensure maximum website availability.",
    icon: "🚀",
    gradient: "bg-gradient-accent"
  },
  {
    title: "DNS Management & SEO Optimization",
    description: "Domain management, DNS configuration, and SEO strategies for better search rankings.",
    icon: "🔍",
    gradient: "bg-gradient-primary"
  }
];

export const Services = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            My Services
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive web solutions and technical support to help your business thrive online
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="p-8 bg-gradient-card border-border/50 hover:shadow-float transition-all duration-300 hover:scale-105 group"
            >
              <div className="space-y-6">
                <div className={`w-16 h-16 ${service.gradient} rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Portfolio Project */}
        <div className="text-center">
          <Card className="p-8 bg-gradient-card border-border/50 hover:shadow-float transition-all duration-300 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="w-20 h-20 bg-gradient-accent rounded-xl flex items-center justify-center text-4xl mx-auto">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-accent">Showcase Portfolio Project</h3>
              <p className="text-muted-foreground">
                Explore my latest work and see the quality of projects I deliver for clients
              </p>
              <Button variant="glow" size="lg" className="group" asChild>
                <a href="https://pro25-rosy.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  View Portfolio
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};