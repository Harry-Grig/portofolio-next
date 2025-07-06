"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${
        isScrolled
          ? "bg-black/90 backdrop-blur-lg py-3 px-6 mx-4 mt-4 rounded-2xl border border-white/10"
          : "bg-black/80 backdrop-blur-md py-6 px-8 w-full"
      }`}
      style={{
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <div
        className={`container mx-auto flex items-center justify-between transition-all duration-700 ${
          isScrolled ? "max-w-4xl" : "max-w-7xl"
        }`}
      >
        {/* Logo/Name */}
        <div className="animate-slide-in-left">
          <h1
            className={`gradient-text font-bold transition-all duration-700 font-poppins ${
              isScrolled ? "text-2xl" : "text-3xl"
            }`}
          >
            Harry
          </h1>
        </div>

        {/* Navigation Links */}
        <div
          className="hidden md:flex items-center space-x-8 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          {["about", "skills", "projects"].map((section, index) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`text-foreground hover:text-primary transition-all duration-500 capitalize font-medium hover:scale-110 transform relative group font-poppins ${
                isScrolled ? "text-sm font-medium" : "text-base font-semibold"
              }`}
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              {section}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Contact Button */}
        <div
          className="animate-slide-in-right"
          style={{ animationDelay: "0.5s" }}
        >
          <Button
            onClick={() => scrollToSection("contact")}
            className={`bg-gradient-to-r from-primary via-secondary to-accent text-black font-bold hover:scale-110 transform transition-all duration-500 hover:shadow-2xl hover:shadow-primary/30 relative overflow-hidden group font-poppins ${
              isScrolled ? "px-5 py-2.5 text-sm" : "px-8 py-3 text-base"
            }`}
          >
            <span className="relative z-10">Contact Me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            className="text-foreground hover:text-primary transition-colors duration-300"
            onClick={() => {
              const sections = ["about", "skills", "projects", "contact"];
              const currentSection =
                sections[Math.floor(Math.random() * sections.length)];
              scrollToSection(currentSection);
            }}
          >
            <div className="space-y-1">
              <div className="w-5 h-0.5 bg-current"></div>
              <div className="w-5 h-0.5 bg-current"></div>
              <div className="w-5 h-0.5 bg-current"></div>
            </div>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
