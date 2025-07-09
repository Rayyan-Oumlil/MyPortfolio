import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Briefcase, MapPin, Calendar, CheckCircle } from "lucide-react";

const Experience = () => {
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

  const experience = [
    {
      title: "Summer Intern – Software & Systems Support",
      company: "3GCOM",
      location: "Rabat, Morocco",
      period: "August 2023",
      achievements: [
        "Designed and implemented a secure internal file-sharing system to facilitate protected document access across teams.\n",
        "Analyzed internal deployment workflows and proposed collaborative tools (e.g., Git-based versioning, shared drives) to improve efficiency and traceability.\n",
          "Gained hands-on experience in systems administration and IT best practices in a professional environment.\n"
      ]
    }
  ];

  return (
    <section 
      id="experience"
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Experience</h2>
            <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ background: 'var(--gradient-primary)' }} />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional experience and internships
            </p>
          </div>

          {/* Experience Cards */}
          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((exp, index) => (
              <Card 
                key={index}
                className="p-8 card-hover border-border bg-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-2xl font-bold text-foreground">
                        {exp.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-primary font-medium mb-4">
                      {exp.company}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <div key={achIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground leading-relaxed">
                            {achievement}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;