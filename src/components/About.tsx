import { Card } from "@/components/ui/card";
import { BarChart3, TrendingUp, Database, Brain } from "lucide-react";

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

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="slide-up">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 slide-up">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <div className="flex justify-center mb-4">
                  {highlight.icon}
                </div>
                <h3 className="font-poppins font-semibold text-lg mb-3">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground">
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