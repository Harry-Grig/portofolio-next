"use client";
import React from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimations";

const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    // Removed negative margin-top (mt-[-48px]) to allow clean stacking.
    // Explicitly set bg-background to ensure consistent base color.
    <section
      className="py-24 px-4 relative bg-background overflow-hidden" // Removed mt-[-48px], added bg-background
      id="about"
    >
      <div ref={ref} className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2
            className={`cursor-events-none text-5xl md:text-7xl font-black mb-8 font-poppins transition-all duration-1200 ${
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
                {/* Subtle background animation within the circle */}
                <div className="w-48 h-48 rounded-full bg-gradient-to-r from-primary/50 to-accent/50 animate-float"></div>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-secondary/30 to-primary/30 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>
              </div>
            </div>
          </div>
          <div
            className={`pointer-events-none transition-all duration-1200 ${
              isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-10"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8 font-light font-poppins">
              I'm a results-driven full-stack developer crafting{" "}
              <span className="font-semibold text-primary">
                modern web apps
              </span>
              ,
              <span className="font-semibold text-primary">
                {" "}
                seamless user experiences
              </span>
              , and
              <span className="font-semibold text-primary">
                {" "}
                AI-powered solutions
              </span>
              . I thrive on transforming complex concepts into{" "}
              <span className="font-semibold text-primary">
                clean, high-performance digital products
              </span>
              .
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light font-poppins">
              Blending{" "}
              <span className="font-semibold text-primary">
                advanced technology
              </span>{" "}
              with{" "}
              <span className="font-semibold text-primary">
                thoughtful design
              </span>
              , I help businesses and founders turn{" "}
              <span className="font-semibold text-primary">
                bold ideas into reality
              </span>{" "}
              — delivering products that don't just work, but{" "}
              <span className="font-semibold text-primary">delight</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
