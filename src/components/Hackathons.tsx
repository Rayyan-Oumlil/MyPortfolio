import { useEffect, useRef, useState } from "react";
import { Card } from "./ui/card";
import { Trophy, Award, Calendar } from "lucide-react";

const Hackathons = () => {
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

  const hackathons = [
    {
      name: "PolyFinances Datathon",
      achievement: "Finalist",
      period: "2025",
      description: "Financial AI with AWS",
      details: "Developed ReguAI, a GenAI-powered regulatory intelligence assistant analyzing the impact of global regulations on S&P 500 portfolios. Built using AWS Bedrock, LangChain, LegalBERT, and Comprehend to process 500 firms and 7+ regulations, generating actionable trading recommendations. Reached the finals by implementing sophisticated document extraction and retrieval pipelines.",
      icon: Trophy,
      color: "text-yellow-500"
    },
    {
      name: "Hackathon en Santé Numérique",
      achievement: "3rd Place",
      period: "Nov 2025",
      description: "AI for Healthcare",
      details: "Built AgentCareAI, a multi-agent AI system for mental health first-line workers. Developed 6 specialized agents (Red Flag, Coaching, Clinical Interview, De-escalation, Stat) using CrewAI framework to support school nurses and social workers in early detection and assessment of students in psychological distress. Won 3rd place demonstrating real-world impact in healthcare technology.",
      icon: Award,
      color: "text-orange-500",
      certificate: "/photos/mila ai helathgcare hatchank/Hackathon 3rd Place certificate.jpg"
    },
    {
      name: "Mil'HaQ Hackathon",
      achievement: "Participant",
      period: "Nov 2025",
      description: "Quantum AI Hackathon (Mila)",
      details: "Participated in the Quantum AI Hackathon organized by Mila, exploring the intersection of quantum computing and artificial intelligence. Worked on innovative solutions combining quantum algorithms with machine learning techniques.",
      icon: Trophy,
      color: "text-primary"
    }
  ];

  return (
    <section
      id="hackathons"
      ref={sectionRef}
      className="py-8 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Hackathons & Competitions</h2>
            <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ background: 'var(--gradient-primary)' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {hackathons.map((hackathon, index) => (
              <Card
                key={index}
                className="p-6 card-hover border-border bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0`}>
                    <hackathon.icon className={`w-6 h-6 ${hackathon.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-1">{hackathon.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>{hackathon.period}</span>
                    </div>
                    <p className="text-lg font-semibold text-primary mb-2">{hackathon.achievement}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed text-left mb-4">{hackathon.details}</p>
                {hackathon.certificate && (
                  <div className="mt-4">
                    <img 
                      src={hackathon.certificate} 
                      alt={`${hackathon.name} certificate`}
                      className="w-full h-auto rounded-lg border border-border"
                    />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hackathons;

