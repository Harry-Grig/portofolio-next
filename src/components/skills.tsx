"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimations";

const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  const skills = [
    { name: "Next.js", icon: "⚡" },
    { name: "React", icon: "⚛️" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "TypeScript", icon: "📘" },
    { name: "Node.js", icon: "🟢" },
    { name: "AI/ML", icon: "🤖" },
    { name: "Framer Motion", icon: "🎭" },
    { name: "ShadCN UI", icon: "🛠️" },
  ];

  return (
    <section className="py-24 px-4" id="skills">
      <div ref={ref} className="container mx-auto max-w-7xl">
        <div className="pointer-events-none text-center mb-20">
          <h2
            className={`text-5xl md:text-7xl font-black mb-8 font-poppins transition-all duration-1200 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
          >
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p
            className={`text-2xl text-muted-foreground font-light transition-all duration-1200 font-poppins ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Technologies I use to build amazing experiences
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`group p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-700 hover:scale-110 hover:glow-cyan cursor-pointer relative overflow-hidden ${
                isVisible ? "animate-bounce-in" : "opacity-0 scale-75"
              }`}
              style={{
                animationDelay: `${0.3 + index * 0.1}s`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="text-center relative z-10">
                <div
                  className="text-5xl mb-6 group-hover:scale-125 transition-transform duration-500 animate-float"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {skill.icon}
                </div>
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors duration-500 font-poppins">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
