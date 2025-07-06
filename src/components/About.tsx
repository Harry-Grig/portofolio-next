"use client";
import { useScrollAnimation } from "../hooks/useScrollAnimations";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 px-4" id="about">
      <div ref={ref} className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2
            className={`text-5xl md:text-7xl font-black mb-8 font-poppins transition-all duration-1200 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
          >
            About <span className="gradient-text">Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div
            className={`transition-all duration-1200 ${
              isVisible ? "animate-slide-in-left" : "opacity-0 -translate-x-10"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="w-64 h-64 mx-auto md:mx-0 rounded-full bg-gradient-to-r from-primary to-accent p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-muted flex items-center justify-center relative overflow-hidden">
                <div className="w-48 h-48 rounded-full bg-gradient-to-r from-primary/50 to-accent/50 animate-float"></div>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-primary/30 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1200 ${
              isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-10"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 font-light font-poppins">
              I'm a passionate full-stack developer specializing in modern web
              apps, pixel-perfect UIs, and AI-powered experiences. Focused on
              turning complex ideas into elegant solutions.
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light font-poppins">
              With expertise in cutting-edge technologies and a keen eye for
              design, I help businesses and individuals bring their digital
              visions to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
