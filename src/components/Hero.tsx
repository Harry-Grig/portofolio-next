"use client";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimations";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 pt-20">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-r from-primary/30 to-accent/30 blur-3xl animate-pulse animate-float"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-r from-secondary/30 to-primary/30 blur-3xl animate-pulse animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-gradient-to-r from-accent/20 to-secondary/20 blur-3xl animate-pulse animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div
        ref={ref}
        className="container mx-auto text-center relative z-10 max-w-5xl"
      >
        <div
          className={`pointer-events-none transition-all duration-1200 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight font-poppins">
            Transforming Ideas into{" "}
            <span className="gradient-text animate-pulse">Stunning Web</span>{" "}
            Experiences
          </h1>
        </div>

        <div
          className={`transition-all duration-1200 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
          style={{ animationDelay: "0.3s" }}
        >
          <p className="pointer-events-none text-xl md:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light font-poppins leading-relaxed">
            Freelance Full-Stack & Frontend Developer | Next.js, React & AI
          </p>
        </div>

        <div
          className={`transition-all duration-1200 ${
            isVisible ? "animate-scale-in" : "opacity-0 scale-75"
          }`}
          style={{ animationDelay: "0.6s" }}
        >
          <div className="gradient-border inline-block rounded-xl">
            <Button
              onClick={() => scrollToSection("contact")}
              size="lg"
              className="bg-background text-foreground hover:bg-muted text-xl px-12 py-8 font-bold transition-all duration-500 hover:glow-cyan hover:scale-110 transform font-poppins relative overflow-hidden group"
            >
              <span className="relative z-10">Let's Work Together</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
