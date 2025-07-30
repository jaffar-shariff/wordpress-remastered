import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gradient-card border-border/50 hover:shadow-float transition-all duration-300 hover:scale-105">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-primary">Professional Experience</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tech-savvy web professional with over 3 years of experience in managing domains, 
                  DNS setups, and optimizing server performance via Linux hosting. I create technical 
                  content, build WordPress sites, and assist customers through chat and email with 
                  clarity and speed.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-card border-border/50 hover:shadow-float transition-all duration-300 hover:scale-105">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-2xl font-bold text-accent">Expertise & Skills</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a driven web advisor with over three years in website troubleshooting, 
                  technical support, and content creation. Skilled in SQL, Linux, and WordPress 
                  with a passion for solving complex technical challenges.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};