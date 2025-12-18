import { useEffect, useRef, useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

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
      items: ["Java", "Python", "C++", "JavaScript", "TypeScript", "SQL"]
    },
    {
      category: "Web & Full-Stack Development",
      items: ["React", "Next.js", "Flutter", "Node.js", "FastAPI", "Spring Boot"]
    },
    {
      category: "AI & Machine Learning",
      items: ["LLMs", "RAG pipelines", "LangChain", "LangGraph", "CrewAI", "Google ADK", "HuggingFace", "NLP", "Scikit-learn", "PyTorch", "TensorFlow", "Pandas", "NumPy", "Matplotlib", "OpenCV"]
    },
    {
      category: "Databases",
      items: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase", "FAISS"]
    },
    {
      category: "DevOps & Cloud Systems",
      items: ["Docker", "Git", "GitHub Actions", "Azure", "Google Cloud", "AWS", "CI/CD pipelines"]
    }
  ];


  return (
    <section 
      id="skills"
      ref={sectionRef}
      className="py-8 relative overflow-hidden"
    >
      {/* Background Elements - Supprimés pour éviter le bleu */}
      {/* <div className="absolute inset-0">
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      </div> */}

      <div className="container mx-auto px-6 relative z-10">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Technical Experience</h2>
            <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ background: 'var(--gradient-primary)' }} />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit built through hands-on experience and continuous learning
            </p>
          </div>

          {/* Skills Grid - Custom Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Row 1: Languages and Web & Full-Stack */}
            <Card className="p-4 md:p-6 card-hover border-border bg-card" style={{ animationDelay: '0s' }}>
              <h3 className="text-xl font-bold mb-4 gradient-accent-text">Languages</h3>
              <div className="flex gap-2 justify-start overflow-x-auto">
                {technicalSkills[0].items.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="text-xs bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors whitespace-nowrap min-w-[80px] text-center"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-4 md:p-6 card-hover border-border bg-card" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-xl font-bold mb-4 gradient-accent-text">Web & Full-Stack Development</h3>
              <div className="flex gap-2 justify-start overflow-x-auto">
                {technicalSkills[1].items.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="text-xs bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors whitespace-nowrap min-w-[80px] text-center"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Row 2: AI & ML - Full Width */}
            <Card className="p-4 md:p-6 card-hover border-border bg-card md:col-span-2 lg:col-span-4" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-bold mb-4 gradient-accent-text">AI & Machine Learning</h3>
              <div className="flex gap-2 justify-start overflow-x-auto">
                {technicalSkills[2].items.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="text-xs bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors whitespace-nowrap min-w-[80px] text-center"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            {/* Row 3: Databases and DevOps */}
            <Card className="p-4 md:p-6 card-hover border-border bg-card" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-xl font-bold mb-4 gradient-accent-text">Databases</h3>
              <div className="flex gap-2 justify-start overflow-x-auto">
                {technicalSkills[3].items.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="text-xs bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors whitespace-nowrap min-w-[80px] text-center"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-4 md:p-6 card-hover border-border bg-card" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-xl font-bold mb-4 gradient-accent-text">DevOps & Cloud Systems</h3>
              <div className="flex gap-2 justify-start overflow-x-auto">
                {technicalSkills[4].items.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="text-xs bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors whitespace-nowrap min-w-[80px] text-center"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;