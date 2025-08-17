import { Card } from "@/components/ui/card";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech, Information Technology",
      institution: "College of Engineering and Management, Kolaghat",
      grade: "CGPA 7.2 (Till 6th Sem)",
      year: "2026",
      description: "Focused on programming, database management, and analytics with hands-on projects in data science."
    },
    {
      degree: "XII, WBCHSE",
      institution: "Satmile High School",
      grade: "86.2%",
      year: "2022",
      description: "Specialized in Science stream with Mathematics, Physics, and Chemistry."
    },
    {
      degree: "X, WBBSE",
      institution: "Murisahi Vidyasagar High School",
      grade: "74.71%",
      year: "2020",
      description: "Strong foundation in mathematics and analytical thinking."
    }
  ];

  return (
    <section id="education" className="section-padding bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6 fade-in">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto fade-in"></div>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <Card 
              key={index} 
              className="p-8 slide-up hover:shadow-xl transition-all duration-300 hover:scale-[1.01]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="font-poppins font-bold text-xl text-foreground mb-2 md:mb-0">
                      {edu.degree}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium">{edu.year}</span>
                    </div>
                  </div>
                  
                  <p className="text-lg text-primary font-medium mb-3">
                    {edu.institution}
                  </p>
                  
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="h-4 w-4 text-accent" />
                    <span className="font-medium text-accent bg-accent/10 px-2 py-1 rounded-md text-sm">
                      {edu.grade}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;