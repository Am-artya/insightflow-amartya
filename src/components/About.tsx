import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { BarChart3, TrendingUp, Database, Brain } from "lucide-react";
import Amartya from "@/assets/Amartya.jpg";

const About = () => {
  const highlights = [
    {
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      title: "Data Visualization",
      description: "Creating impactful visual stories with dashboards and reports"
    },
    {
      icon: <Database className="h-8 w-8 text-secondary" />,
      title: "Statistical Analysis",
      description: "Strong foundation in statistics and data analysis techniques"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-accent" />,
      title: "Business Intelligence",
      description: "Turning insights into actionable business recommendations"
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "Problem Solving",
      description: "Analytical mindset for tackling complex data challenges"
    }
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6 fade-in">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto fade-in"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Profile Photo Section */}
          <div className="lg:col-span-1 flex justify-center slide-up">
            <div className="relative">
              <Avatar className="w-48 h-48 sm:w-56 md:w-64 border-4 border-primary/20 shadow-2xl">
                <AvatarImage src={Amartya} alt="Amartya Sen - Data Analyst" className="object-cover" />
                <AvatarFallback className="text-2xl font-poppins font-bold bg-gradient-primary text-white">
                  AS
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-4 -right-4 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg">
                <BarChart3 className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>

          {/* About Text Section */}
          <div className="lg:col-span-2 slide-up">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm an aspiring <strong className="text-primary">Data Analyst</strong> with a strong foundation in 
                statistics, data visualization, and databases. Skilled in{" "}
                <strong className="text-secondary">Excel, SQL, Python, and Power BI</strong>, I enjoy 
                transforming raw data into meaningful insights that drive smarter decisions.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I believe in continuous learning, solving real-world problems through data, and creating 
                impactful visual stories with dashboards and reports. My approach combines technical 
                expertise with business acumen to deliver actionable insights.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                When I'm not working with data, I'm either playing cricket or traveling to explore new places. 
                These experiences have taught me the importance of teamwork, adaptability, and seeing 
                problems from different perspectives.
              </p>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-poppins font-bold text-center text-foreground mb-8">
            What I Bring to the Table
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 slide-up">
            {highlights.map((highlight, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 h-full flex flex-col justify-between"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div>
                  <div className="flex justify-center mb-4">
                    {highlight.icon}
                  </div>
                  <h4 className="font-poppins font-semibold text-lg mb-3">
                    {highlight.title}
                  </h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;