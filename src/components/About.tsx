import { useEffect, useRef, useState } from "react";
import { Card } from "./ui/card";

const About = () => {
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


  return (
    <section 
      id="about"
      ref={sectionRef}
      className="py-8 relative overflow-hidden"
    >

      <div className="container mx-auto px-6 relative z-10">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="text-5xl font-bold mb-6 gradient-text">About Me</h2>
            <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ background: 'var(--gradient-primary)' }} />
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Computer Science student at Université de Montréal focused on software engineering and applied AI. 
                Experienced in building full-stack applications and agent-based AI systems, with hands-on work across 
                cloud, backend, and ML tooling. Actively engaged in hackathons and real-world projects, delivering 
                practical, user-focused solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;