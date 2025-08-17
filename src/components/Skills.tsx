import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Database, 
  BarChart3, 
  Award, 
  Users, 
  MessageSquare,
  Target,
  Lightbulb
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Tools",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "SQL", "C", "Excel", "Power BI"],
      color: "text-primary"
    },
    {
      title: "Technical Skills",
      icon: <Database className="h-6 w-6" />,
      skills: ["Data Cleaning", "Data Visualization", "Statistical Analysis", "Dashboard Creation", "ETL Processes"],
      color: "text-secondary"
    },
    {
      title: "Analytics & BI",
      icon: <BarChart3 className="h-6 w-6" />,
      skills: ["Business Intelligence", "KPI Tracking", "Trend Analysis", "Predictive Modeling", "Report Generation"],
      color: "text-accent"
    },
    {
      title: "Soft Skills",
      icon: <Users className="h-6 w-6" />,
      skills: ["Problem-solving", "Communication", "Team Collaboration", "Critical Thinking", "Project Management"],
      color: "text-primary"
    }
  ];

  const certifications = [
    {
      title: "Decoding Data: Insights & Impact through Analytics",
      issuer: "IBM SkillBuild",
      icon: <Award className="h-5 w-5" />
    }
  ];

  const additionalSkills = [
    {
      category: "Leadership",
      icon: <Target className="h-5 w-5" />,
      description: "Organized departmental sports and indoor games, served as Hostel Representative"
    },
    {
      category: "Communication",
      icon: <MessageSquare className="h-5 w-5" />,
      description: "Effective presentation skills and stakeholder communication"
    },
    {
      category: "Innovation",
      icon: <Lightbulb className="h-5 w-5" />,
      description: "Creative problem-solving approach to data challenges"
    }
  ];

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6 fade-in">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto fade-in"></div>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 text-center slide-up hover:shadow-lg transition-all duration-300">
              <div className={`flex justify-center mb-4 ${category.color}`}>
                {category.icon}
              </div>
              <h3 className="font-poppins font-semibold text-lg mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="skill-tag text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="mb-12">
          <h3 className="text-2xl font-poppins font-bold text-foreground mb-6 text-center slide-up">
            Certifications
          </h3>
          <div className="flex justify-center">
            {certifications.map((cert, index) => (
              <Card key={index} className="p-6 slide-up hover:shadow-lg transition-all duration-300 max-w-md">
                <div className="flex items-center gap-4">
                  <div className="text-accent">
                    {cert.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div>
          <h3 className="text-2xl font-poppins font-bold text-foreground mb-6 text-center slide-up">
            Leadership & Responsibilities
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {additionalSkills.map((skill, index) => (
              <Card key={index} className="p-6 text-center slide-up hover:shadow-lg transition-all duration-300">
                <div className="flex justify-center mb-3 text-primary">
                  {skill.icon}
                </div>
                <h4 className="font-medium text-foreground mb-2">
                  {skill.category}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {skill.description}
                </p>
              </Card>
            ))}
          </div>
          
          <div className="mt-8 text-center slide-up">
            <Card className="p-6 max-w-2xl mx-auto">
              <h4 className="font-poppins font-semibold text-lg mb-3">
                Additional Achievements
              </h4>
              <ul className="text-muted-foreground space-y-2">
                <li>• Contributed to event photography and coordination</li>
                <li>• Represented IT Department in the Cricket Team</li>
                <li>• Active member of Mess Committee</li>
                <li>• Passionate about continuous learning and skill development</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;