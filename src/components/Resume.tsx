import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Eye, FileText, Award, Briefcase, GraduationCap } from "lucide-react";

const Resume = () => {
  const handleDownloadResume = () => {
    // In a real implementation, this would link to an actual PDF file
    alert("Resume download will be available soon!");
  };

  const handleViewResume = () => {
    // In a real implementation, this would open the resume in a new tab
    alert("Resume viewer will be available soon!");
  };

  const resumeHighlights = [
    {
      icon: <GraduationCap className="h-6 w-6 text-primary" />,
      title: "Education",
      description: "B.Tech in Information Technology with strong analytical foundation"
    },
    {
      icon: <Briefcase className="h-6 w-6 text-secondary" />,
      title: "Experience",
      description: "Data Analytics internships at IBM SkillBuild & Infotact Solutions"
    },
    {
      icon: <Award className="h-6 w-6 text-accent" />,
      title: "Certifications",
      description: "IBM SkillBuild Analytics certification and ongoing skill development"
    },
    {
      icon: <FileText className="h-6 w-6 text-primary" />,
      title: "Projects",
      description: "Real-world data analysis projects showcasing technical expertise"
    }
  ];

  return (
    <section id="resume" className="section-padding bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6 fade-in">
            Resume
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto fade-in"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto fade-in">
            Download or view my comprehensive resume showcasing my journey as an aspiring data analyst.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Resume Preview Card */}
          <div className="lg:col-span-1">
            <Card className="p-8 text-center slide-up hover:shadow-lg transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="h-10 w-10 text-white" />
              </div>
              
              <h3 className="font-poppins font-bold text-xl text-foreground mb-4">
                My Resume
              </h3>
              
              <p className="text-muted-foreground mb-6">
                A comprehensive overview of my education, experience, skills, and projects in data analytics.
              </p>
              
              <div className="space-y-3">
                <Button 
                  onClick={handleViewResume}
                  className="w-full"
                  variant="default"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View Resume
                </Button>
                
                <Button 
                  onClick={handleDownloadResume}
                  className="w-full"
                  variant="outline"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download PDF
                </Button>
              </div>
            </Card>
          </div>

          {/* Resume Highlights */}
          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-6">
              {resumeHighlights.map((highlight, index) => (
                <Card 
                  key={index} 
                  className="p-6 slide-up hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {highlight.icon}
                    </div>
                    <div>
                      <h4 className="font-poppins font-semibold text-lg text-foreground mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {highlight.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Resume Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { label: "Years of Learning", value: "3+" },
            { label: "Projects Completed", value: "5+" },
            { label: "Technologies Mastered", value: "6+" },
            { label: "Certifications", value: "2+" }
          ].map((stat, index) => (
            <Card key={index} className="p-6 text-center slide-up">
              <div className="text-2xl md:text-3xl font-poppins font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;