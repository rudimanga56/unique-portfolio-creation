
import React from "react";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,120,120,0.05)_0%,rgba(120,120,120,0)_50%)]"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="max-w-4xl space-y-4 animate-slide-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          <div className="inline-block bg-accent px-4 py-1.5 rounded-full">
            <p className="text-sm font-medium">Frontend Developer</p>
          </div>
          <h1 className="heading-xl text-balance">
            Creating beautiful digital experiences
          </h1>
          <p className="body-lg text-muted-foreground max-w-2xl">
            I design and build modern websites with a focus on responsive design, 
            accessibility, and performance. Let's turn your vision into reality.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#about" aria-label="Scroll to About section">
          <ChevronDown size={32} />
        </a>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-muted/30 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
