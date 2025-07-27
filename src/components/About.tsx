import { useEffect, useRef, useState } from "react";
import { Card } from "./ui/card";
import { Code, Palette, Zap, Coffee } from "lucide-react";

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

  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable code that stands the test of time"
    },
    {
      icon: Palette,
      title: "Design Focus",
      description: "Creating intuitive interfaces that users love to interact with"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Building lightning-fast applications optimized for all devices"
    },
    {
      icon: Coffee,
      title: "Collaboration",
      description: "Working closely with teams to bring ideas to life"
    }
  ];

  return (
    <section 
      id="about"
      ref={sectionRef}
      className="py-16 relative overflow-hidden"
    >

      <div className="container mx-auto px-6 relative z-10">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">About Me</h2>
            <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ background: 'var(--gradient-primary)' }} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-6 text-left">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                Student & Aspiring Developer
              </h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently pursuing a B.Sc. in Computer Science at Université de Montréal, 
                I bring a strong foundation in mathematics, physics, and programming from my 
                French Baccalaureate background.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My multicultural experience spans Qatar, Morocco, and Canada, giving me a 
                unique global perspective. I'm passionate about leveraging technology to create 
                meaningful impact in society.
              </p>

              {/* Languages */}
              <div className="pt-6">
                <h4 className="text-lg font-semibold mb-4 text-foreground text-left">Languages</h4>
                <div className="space-y-2 text-left">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">English</span>
                    <span className="text-foreground">Advanced (IELTS Band 7)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">French</span>
                    <span className="text-foreground">Proficient (C2)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Spanish</span>
                    <span className="text-foreground">Upper Intermediate (SIELE B2)</span>
                  </div>
                </div>
              </div>

              {/* Interests & Activities */}
              <div className="pt-8">
                <h4 className="text-lg font-semibold mb-4 text-foreground text-left">Interests & Activities</h4>
                <div className="space-y-2 text-left">
                  <div className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span className="text-foreground">Football - Participated in World Schools Football Cup (Barcelona, 2023)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span className="text-foreground">Chess - Competitor in National Chess Tournament</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span className="text-foreground">Community Service - Volunteer for Breast Cancer Awareness Campaign</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span className="text-foreground">Generation Amazing Tournament (Qatar Foundation, 2022)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 gap-6 text-left">
              {highlights.map((highlight, index) => (
                <Card 
                  key={index}
                  className="p-6 card-hover border-border bg-card text-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground text-left">
                    {highlight.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-left">
                    {highlight.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;