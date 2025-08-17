import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Linkedin, Github } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const Hero = () => {
  const handleViewProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleConnectLinkedIn = () => {
    window.open("https://www.linkedin.com/in/amartyasen48/", "_blank");
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl font-poppins font-bold text-white mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Amartya Sen
            </span>
            👋
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Aspiring Data Analyst | Turning Data into Insights
          </p>
          
          <p className="text-lg text-white/80 mb-12 max-w-3xl mx-auto">
            I transform raw data into meaningful insights that drive smarter decisions. 
            Skilled in Python, SQL, Excel, and Power BI with a passion for uncovering 
            patterns that tell powerful stories.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              onClick={handleViewProjects}
              className="hero-button group"
            >
              View My Projects
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              onClick={handleConnectLinkedIn}
              variant="outline"
              className="hero-button-outline group"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              Connect on LinkedIn
            </Button>
          </div>
          
          <div className="mt-12 flex justify-center gap-6">
            <a
              href="mailto:amartyasen1927@gmail.com"
              className="text-white/70 hover:text-white transition-colors duration-300"
            >
              amartyasen1927@gmail.com
            </a>
            <span className="text-white/50">|</span>
            <a
              href="https://github.com/Am-artya"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-300 flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;