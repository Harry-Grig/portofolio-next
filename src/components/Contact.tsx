"use client";

import { Button } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimations";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 px-4" id="contact">
      <div ref={ref} className="container mx-auto max-w-5xl text-center">
        <div
          className={`transition-all duration-1200 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8 font-poppins">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h2>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light font-poppins leading-relaxed">
            Have a project or idea? Let's make it happen.
          </p>
        </div>

        <div
          className={`transition-all duration-1200 ${
            isVisible ? "animate-scale-in" : "opacity-0 scale-75"
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          <div className="gradient-border inline-block rounded-xl mb-12">
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-muted text-2xl px-12 py-8 font-bold transition-all duration-500 hover:glow-cyan hover:scale-110 transform font-poppins relative overflow-hidden group"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </Button>
          </div>
        </div>

        <div
          className={`transition-all duration-1200 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex justify-center space-x-8">
            <a
              href="#"
              className="p-6 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:scale-125 hover:glow-cyan group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
              <Github className="w-8 h-8 group-hover:text-primary transition-colors duration-500 relative z-10" />
            </a>
            <a
              href="#"
              className="p-6 rounded-full bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-500 hover:scale-125 hover:glow-cyan group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
              <Linkedin className="w-8 h-8 group-hover:text-primary transition-colors duration-500 relative z-10" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
