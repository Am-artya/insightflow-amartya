import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Data Analytics Intern",
      company: "IBM SkillBuild",
      duration: "Jun–Jul 2025",
      location: "Remote",
      description: [
        "Conducted real-world analytics projects focused on insights generation",
        "Built dashboards and reports to visualize trends and assess business impact",
        "Applied data-driven decision-making for practical problem-solving",
        "Collaborated with cross-functional teams to deliver actionable insights"
      ],
      skills: ["Data Analysis", "Dashboard Creation", "Business Intelligence", "Report Generation"]
    },
    {
      role: "Data Analytics Intern",
      company: "Infotact Solutions",
      duration: "May–Jul 2025",
      location: "Remote",
      description: [
        "Gained hands-on experience with data cleaning, transformation, and visualization",
        "Worked with Excel, Power BI, and Python for comprehensive analytics",
        "Discovered patterns and trends to support business insights",
        "Presented findings to stakeholders through compelling visualizations"
      ],
      skills: ["Excel", "Power BI", "Python", "Data Cleaning", "Data Visualization"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6 fade-in">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto fade-in"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-8 slide-up hover:shadow-xl transition-all duration-300 hover:scale-[1.01]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div className="flex-grow">
                      <h3 className="font-poppins font-bold text-xl text-foreground mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-lg text-primary font-medium">
                        {exp.company}
                      </p>
                    </div>
                    
                    <div className="flex flex-col gap-2 mt-2 md:mt-0 md:items-end">
                      <div className="flex items-center gap-2 text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                        <Calendar className="h-4 w-4" />
                        <span className="font-medium text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-start gap-3">
                        <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="skill-tag"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;