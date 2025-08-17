import { Heart, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/amartyasen48/",
      label: "LinkedIn"
    },
    {
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/Am-artya",
      label: "GitHub"
    },
    {
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:amartyasen1927@gmail.com",
      label: "Email"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground dark:bg-card text-background dark:text-foreground py-12 border-t dark:border-border">`
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0">
            <button
              onClick={scrollToTop}
              className="font-poppins font-bold text-2xl hover:text-primary transition-colors duration-300"
            >
              Amartya Sen
            </button>
            <p className="text-background/70 dark:text-muted-foreground mt-2">
              Aspiring Data Analyst | Turning Data into Insights
            </p>
          </div>

          <div className="flex items-center gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 dark:text-muted-foreground hover:text-primary transition-colors duration-300 p-2 rounded-full hover:bg-background/10 dark:hover:bg-muted"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-background/20 dark:border-border text-center">
          <p className="text-background/70 dark:text-muted-foreground flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500" /> by Amartya Sen © {currentYear}
          </p>
          <p className="text-background/50 dark:text-muted-foreground/70 text-sm mt-2">
            Ready to transform your data into meaningful insights
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;