import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const technicalSkills = [
    {
      category: "Languages",
      items: ["Java", "Python", "HTML/CSS", "JavaScript", "TypeScript", "SQL", "Bash/Shell", "LaTeX"]
    },
    {
      category: "Tools",
      items: ["Git", "VS Code", "IntelliJ", "Jupyter", "Docker", "SketchUp", "Figma", "RESTful APIs", "Postman", "Vercel", "Nmap"]
    },
    {
      category: "Databases",
      items: ["MySQL", "SQLite", "MongoDB", "FAISS"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["React", "Vite", "Streamlit", "FastAPI", "LangChain", "jQuery", "Swing", "SQLAlchemy", "Numpy"]
    },
    {
      category: "Artificial Intelligence",
      items: ["Private & Public LLMs", "LLM Proxies", "RAG", "Prompt Engineering", "MLOps"]
    },
    {
      category: "Systems & DevOps",
      items: ["Linux", "Windows", "Docker", "Azure", "Nginx", "Arduino", "Raspberry Pi", "3D Printing"]
    }
  ];


  return (
    <section 
      id="skills"
      ref={sectionRef}
      className="py-20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Technical Skills</h2>
            <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ background: 'var(--gradient-primary)' }} />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit built through hands-on experience and continuous learning
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technicalSkills.map((skillGroup, groupIndex) => (
              <Card 
                key={groupIndex}
                className="p-6 card-hover border-border bg-card"
                style={{ animationDelay: `${groupIndex * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-4 gradient-accent-text">
                  {skillGroup.category}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;