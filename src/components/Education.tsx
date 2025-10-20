import { useEffect, useRef, useState } from "react";
import { Card } from "./ui/card";
import { GraduationCap, MapPin, Calendar, ChevronDown, ChevronRight } from "lucide-react";

const Education = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCards, setExpandedCards] = useState<{ [key: number]: boolean }>({});
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

  const toggleExpanded = (index: number) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const education = [
    {
      institution: "Université de Montréal",
      degree: "B.Sc. in Computer Science",
      location: "Montreal, Canada",
      period: "2024 – Present",
      current: true,
      activities: [
        "UdeM AI — Artificial Intelligence Student Club",
        "Calculum — Mathematics & Problem-Solving Student Club",
        "CodeML Hackathon — PolyAI ML & AI Challenge (Oct. 2025)",
        "Mil'HaQ Hackathon — Quantum AI Hackathon organized by Mila (Nov. 2025, Planned)",
        "CodeJam Hackathon — 15th Edition | McGill University (Nov. 2025, planned)"
      ]
    },
    {
      institution: "Lycée Franco-Qatarien Voltaire",
      degree: "French Baccalaureate: Mathematics, Physics-Chemistry, Digital Sciences",
      location: "Doha, Qatar",
      period: "2021 – 2024",
      current: false
    }
  ];

  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-8 relative overflow-hidden"
    >

      <div className="container mx-auto px-6 relative z-10">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Education</h2>
            <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ background: 'var(--gradient-primary)' }} />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              My academic journey and educational background
            </p>
          </div>

          {/* Education Timeline */}
          <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
            {education.map((edu, index) => (
              <Card
                key={index}
                className={`p-4 md:p-8 card-hover border-border bg-card ${
                  edu.current ? 'border-primary/20 bg-primary/5' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    edu.current
                      ? 'bg-primary/20 text-primary'
                      : 'bg-muted/50 text-muted-foreground'
                  }`}>
                    <GraduationCap className="w-6 h-6" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-2xl font-bold text-foreground text-left dark:text-white text-gray-900">
                        {edu.institution}
                      </h3>
                      {edu.current && (
                        <div className="flex items-center gap-2 text-primary font-medium">
                          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                          Current
                        </div>
                      )}
                    </div>

                    <p className="text-lg text-muted-foreground mb-4 font-medium text-left">
                      {edu.degree}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground mb-6 text-left">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {edu.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {edu.period}
                      </div>
                    </div>

                    {edu.activities && (
                      <div className="space-y-2">
                        <button
                          onClick={() => toggleExpanded(index)}
                          className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors cursor-pointer"
                        >
                          {expandedCards[index] ? (
                            <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronRight className="w-4 h-4" />
                          )}
                          Activities & Involvement
                        </button>
                        
                        {expandedCards[index] && (
                          <div className="ml-6 space-y-2 border-l-2 border-primary/20 pl-4">
                            {edu.activities.map((activity, actIndex) => (
                              <div key={actIndex} className="flex items-start gap-2">
                                <span className="text-primary mt-1 flex-shrink-0">•</span>
                                <span className="text-sm text-muted-foreground leading-relaxed">
                                  {activity}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
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

export default Education;