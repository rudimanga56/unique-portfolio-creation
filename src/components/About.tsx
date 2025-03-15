
import React from "react";
import { Code, Layout, LineChart, Palette } from "lucide-react";

export function About() {
  const skills = [
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React", "Next.js", "Vue.js"],
    },
    {
      category: "Design",
      items: ["Responsive Design", "UI/UX", "Figma", "Adobe XD", "Tailwind CSS", "Styled Components"],
    },
    {
      category: "Other",
      items: ["Git", "GitHub", "npm", "Webpack", "Jest", "Cypress", "RESTful APIs"],
    },
  ];

  const services = [
    {
      title: "Web Development",
      description: "Building responsive, performant websites and web applications using modern frameworks and technologies.",
      icon: <Code className="w-6 h-6" />,
    },
    {
      title: "UI/UX Design",
      description: "Creating beautiful, intuitive user interfaces and experiences that delight users and achieve business goals.",
      icon: <Palette className="w-6 h-6" />,
    },
    {
      title: "Frontend Architecture",
      description: "Designing scalable frontend architectures and implementing best practices for maintainable codebases.",
      icon: <Layout className="w-6 h-6" />,
    },
    {
      title: "Performance Optimization",
      description: "Analyzing and improving website performance to ensure fast load times and smooth user experiences.",
      icon: <LineChart className="w-6 h-6" />,
    },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
          <h2 className="heading-lg mb-4">About Me</h2>
          <p className="body-lg text-muted-foreground">
            I'm a passionate frontend developer with a keen eye for design and a 
            commitment to creating exceptional user experiences. With a focus on 
            clean code and modern technologies, I bring ideas to life through 
            responsive, accessible, and performant web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 animate-slide-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          {/* Skills */}
          <div>
            <h3 className="heading-sm mb-6">Skills & Expertise</h3>
            <div className="space-y-8">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h4 className="text-lg font-semibold mb-3">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-secondary text-secondary-foreground rounded-lg text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="heading-sm mb-6">Services</h3>
            <div className="space-y-6">
              {services.map((service) => (
                <div key={service.title} className="flex gap-4 items-start p-4 rounded-lg hover:bg-secondary/50 transition-colors">
                  <div className="p-2 bg-accent rounded-lg">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-1">{service.title}</h4>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
