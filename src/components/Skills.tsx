import { Card } from "@/components/ui/card";

const primarySkills = [
  { name: "WordPress", icon: "🔥", level: 95 },
  { name: "cPanel", icon: "⚙️", level: 90 },
  { name: "Photoshop", icon: "🎨", level: 85 },
  { name: "PHP", icon: "💻", level: 80 },
  { name: "SQL", icon: "🗄️", level: 85 },
  { name: "Linux", icon: "🐧", level: 80 },
  { name: "CSS", icon: "🎯", level: 85 },
  { name: "HTML", icon: "📝", level: 90 },
  { name: "Office", icon: "📊", level: 95 },
  { name: "Outlook", icon: "📧", level: 90 }
];

const secondarySkills = [
  { name: "VPS", icon: "☁️", level: 75 },
  { name: "MindMeister", icon: "🧠", level: 70 },
  { name: "Sketch", icon: "✏️", level: 75 },
  { name: "Figma", icon: "🎨", level: 80 },
  { name: "Analytics", icon: "📈", level: 85 },
  { name: "SEO", icon: "🔍", level: 80 },
  { name: "DNS", icon: "🌐", level: 90 },
  { name: "Git", icon: "🔀", level: 75 },
  { name: "Docker", icon: "🐳", level: 70 },
  { name: "APIs", icon: "🔌", level: 75 }
];

const SkillCard = ({ skill, isPrimary }: { skill: any, isPrimary: boolean }) => (
  <Card className="p-6 bg-gradient-card border-border/50 hover:shadow-float transition-all duration-300 hover:scale-105 group">
    <div className="text-center space-y-4">
      <div className={`text-4xl group-hover:scale-110 transition-transform duration-300`}>
        {skill.icon}
      </div>
      <h3 className={`font-semibold ${isPrimary ? 'text-primary' : 'text-accent'}`}>
        {skill.name}
      </h3>
      <div className="space-y-2">
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className={`h-2 rounded-full transition-all duration-1000 ${
              isPrimary ? 'bg-gradient-primary' : 'bg-gradient-accent'
            }`}
            style={{ width: `${skill.level}%` }}
          />
        </div>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
    </div>
  </Card>
);

export const Skills = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            About My Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Primary Skills */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">Primary Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {primarySkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} isPrimary={true} />
            ))}
          </div>
        </div>

        {/* Secondary Skills */}
        <div>
          <h3 className="text-3xl font-bold text-accent mb-8 text-center">Secondary Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {secondarySkills.map((skill, index) => (
              <SkillCard key={index} skill={skill} isPrimary={false} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};