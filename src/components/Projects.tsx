"use client";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimations";
import Image from "next/image";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();

  const projects = [
    {
      title: "AI-Powered E-Commerce Platform",
      description:
        "Next.js app with intelligent product recommendations and real-time analytics",
      tech: ["Next.js", "AI/ML", "Stripe"],
      gradient: "from-primary to-secondary",
    },
    {
      title: "Modern SaaS Dashboard",
      description:
        "React dashboard with advanced data visualization and user management",
      tech: ["React", "D3.js", "Node.js"],
      gradient: "from-secondary to-accent",
    },
    {
      title: "Creative Portfolio Website",
      description:
        "Stunning portfolio with smooth animations and interactive elements",
      tech: ["Next.js", "Framer Motion", "Tailwind"],
      gradient: "from-accent to-primary",
    },
  ];

  return (
    <section className="py-24 px-4" id="projects">
      <div ref={ref} className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2
            className={`text-5xl md:text-7xl font-black mb-8 font-poppins transition-all duration-1200 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p
            className={`text-2xl text-muted-foreground font-light transition-all duration-1200 font-poppins ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Some of my recent work that showcases my skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-700 hover:scale-105 hover:glow-cyan relative overflow-hidden ${
                isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
              }`}
              style={{
                animationDelay: `${0.3 + index * 0.2}s`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div
                className={`h-56 rounded-xl bg-gradient-to-br ${project.gradient} mb-8 opacity-80 group-hover:opacity-100 transition-all duration-500 relative overflow-hidden`}
              >
                <Image
                  src="/%CE%A3%CF%84%CE%B9%CE%B3%CE%BC%CE%B9%CF%8C%CF%84%CF%85%CF%80%CE%BF%20%CE%BF%CE%B8%CF%8C%CE%BD%CE%B7%CF%82%202025-07-02%20143545.png"
                  alt="Project Image"
                  width={400}
                  height={300}
                  className="absolute inset-0 animate-pulse"
                />
              </div>

              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-500 font-poppins relative z-10">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-6 leading-relaxed font-light font-poppins text-lg relative z-10">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8 relative z-10">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-muted rounded-full text-sm text-primary font-medium font-poppins hover:scale-110 transition-transform duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Button
                variant="outline"
                className="w-full border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover:scale-105 transform font-poppins font-semibold text-lg py-6 relative z-10"
              >
                View Project
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
