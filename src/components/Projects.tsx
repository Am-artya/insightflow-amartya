import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, BarChart3, Users } from "lucide-react";
import salesDashboard from "@/assets/sales-dashboard.jpg";
import clusteringAnalysis from "@/assets/clustering-analysis.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Sales Data Analysis & Dashboard",
      description: "Designed an interactive dashboard to analyze historical sales data, tracking KPIs like Total Sales, Profit Margin, and Monthly Trends. Identified seasonal buying patterns and suggested actionable improvements.",
      image: salesDashboard,
      tools: ["Excel", "Power BI", "Data Visualization"],
      features: [
        "Interactive KPI tracking dashboard",
        "Seasonal pattern analysis",
        "Profit margin optimization insights",
        "Monthly trend visualization"
      ],
      icon: <BarChart3 className="h-6 w-6" />,
      demoLink: "#",
      githubLink: "#"
    },
    {
      title: "Customer Segmentation Using Clustering",
      description: "Implemented K-Means clustering to segment customers based on purchasing behavior. Helped improve targeted marketing strategies and revealed valuable customer insights for business growth.",
      image: clusteringAnalysis,
      tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn"],
      features: [
        "K-Means clustering implementation",
        "Customer behavior analysis",
        "Marketing strategy optimization",
        "Data visualization with Python"
      ],
      icon: <Users className="h-6 w-6" />,
      demoLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-foreground mb-6 fade-in">
            Projects Showcase
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto fade-in"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto fade-in">
            Explore my data analytics projects that demonstrate real-world problem-solving 
            and technical expertise in transforming data into actionable insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card overflow-hidden bg-card">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 md:h-56 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                    {project.icon}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-poppins font-bold text-xl text-foreground mb-3">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="mb-4">
                  <h4 className="font-medium text-foreground mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, idx) => (
                    <Badge
                      key={idx}
                      variant="secondary"
                      className="skill-tag text-xs"
                    >
                      {tool}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(project.demoLink, "_blank")}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(project.githubLink, "_blank")}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;