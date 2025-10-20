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
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold text-foreground mb-6">
                Computer Science Student & Full-Stack Developer
              </h3>
              
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Currently pursuing a B.Sc. in Computer Science at Université de Montréal, 
                I'm passionate about AI/ML, mobile development, and creating meaningful 
                technology solutions. My multicultural background spans Qatar, Morocco, 
                and Canada, giving me a unique global perspective.
              </p>
            </div>


            {/* Languages & Activities */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Languages */}
              <Card className="p-5 border-border bg-card">
                <h4 className="text-xl font-semibold mb-4 text-foreground text-center">Languages</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">English</span>
                    <span className="text-foreground font-medium">Advanced (IELTS Band 7)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">French</span>
                    <span className="text-foreground font-medium">Proficient (C2)</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Spanish</span>
                    <span className="text-foreground font-medium">Upper Intermediate (SIELE B2)</span>
                  </div>
                </div>
              </Card>

              {/* Interests & Activities */}
              <Card className="p-6 border-border bg-card md:col-span-2">
                <h4 className="text-xl font-semibold mb-4 text-foreground text-center">Interests & Activities</h4>
                <div className="space-y-3 text-left">
                  <div className="flex items-start gap-3 text-left">
                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                    <span className="text-foreground text-left">Football - World Schools Football Cup (Barcelona, 2023)</span>
                  </div>
                  <div className="flex items-start gap-3 text-left">
                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                    <span className="text-foreground text-left">Chess - National Tournament Competitor</span>
                  </div>
                  <div className="flex items-start gap-3 text-left">
                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                    <span className="text-foreground text-left">Community Service - Breast Cancer Awareness</span>
                  </div>
                  <div className="flex items-start gap-3 text-left">
                    <span className="text-primary mt-1 flex-shrink-0">•</span>
                    <span className="text-foreground text-left">Generation Amazing Tournament (Qatar Foundation)</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;