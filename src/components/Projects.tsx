
import React, { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A fully responsive e-commerce platform with product filtering, cart functionality, and checkout process.",
      tags: ["React", "Next.js", "Tailwind CSS", "Stripe"],
      image: "https://placehold.co/600x400/e9ecef/495057?text=E-commerce+Platform&font=source-sans-pro",
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: 2,
      title: "Dashboard UI",
      description: "An interactive dashboard with data visualization, user management, and real-time updates.",
      tags: ["React", "TypeScript", "Recharts", "Tailwind CSS"],
      image: "https://placehold.co/600x400/e9ecef/495057?text=Dashboard+UI&font=source-sans-pro",
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: 3,
      title: "Recipe App",
      description: "A recipe application with search functionality, filtering, and user accounts for saving favorite recipes.",
      tags: ["Vue.js", "Vuex", "SCSS", "Firebase"],
      image: "https://placehold.co/600x400/e9ecef/495057?text=Recipe+App&font=source-sans-pro",
      demoUrl: "#",
      repoUrl: "#",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A portfolio website with smooth animations, responsive design, and contact form functionality.",
      tags: ["React", "Framer Motion", "Tailwind CSS", "Netlify"],
      image: "https://placehold.co/600x400/e9ecef/495057?text=Portfolio+Website&font=source-sans-pro",
      demoUrl: "#",
      repoUrl: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
          <h2 className="heading-lg mb-4">Featured Projects</h2>
          <p className="body-lg text-muted-foreground">
            Here are some of my recent projects. Each project showcases different
            skills and technologies I've worked with.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 animate-slide-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group rounded-2xl overflow-hidden bg-background border border-border/40 shadow-sm hover:shadow-md transition-all duration-300"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="heading-sm mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-secondary text-secondary-foreground rounded-md text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.demoUrl}
                    className="flex items-center gap-1 text-sm font-medium hover-lift"
                    aria-label={`View ${project.title} demo`}
                  >
                    Live Demo <ArrowUpRight size={16} />
                  </a>
                  <a
                    href={project.repoUrl}
                    className="flex items-center gap-1 text-sm font-medium hover-lift"
                    aria-label={`View ${project.title} source code`}
                  >
                    Source <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
