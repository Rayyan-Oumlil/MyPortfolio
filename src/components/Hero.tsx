import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const roles = ["Computer Science Student"];
  const currentRoleIndex = 0; // fixe, puisqu'on n’a qu’un seul rôle

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let index = 0;

    const typeText = () => {
      if (index < currentRole.length) {
        setText(currentRole.substring(0, index + 1));
        index++;
        setTimeout(typeText, 100);
      } else {
        // Wait before erasing
        setTimeout(() => {
          const eraseText = () => {
            if (index > 0) {
              setText(currentRole.substring(0, index - 1));
              index--;
              setTimeout(eraseText, 50);
            } else {
              // Restart typing again (force rerun)
              typeText();
            }
          };
          eraseText();
        }, 2000);
      }
    };

    typeText();
  }, []); // ⬅️ Ne dépend plus de currentRoleIndex

  // Clignotement du curseur
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-background">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 border border-primary/20 rounded-full" />
        <div className="absolute top-1/4 right-10 w-32 h-32 bg-primary/5 rotate-45" />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border-2 border-accent/30 rounded-full" />
        <div className="absolute top-10 left-1/2 w-16 h-16 bg-secondary/10 rotate-12" />
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 border border-muted-foreground/10 rounded-full" />
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-sm font-medium text-primary">Available for Opportunities</span>
            </div>
            
            {/* Name & Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Rayyan Oumlil
              </h1>
              <div className="text-2xl md:text-3xl text-muted-foreground">
                <span>I'm a </span>
                <span className="text-primary font-semibold">
                  {text}
                  {showCursor && <span className="animate-pulse">|</span>}
                </span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              I'm passionate about how technology can positively impact society. I enjoy working on innovative, meaningful projects that solve real-world problems.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="px-8 py-6 text-lg font-semibold"
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="px-8 py-6 text-lg font-semibold"
              >
                Get In Touch
              </Button>
            </div>
          </div>
          
          {/* Right Side - Profile & Social */}
          <div className="flex flex-col items-center lg:items-end space-y-8">
            {/* Profile Card */}
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl border border-border/50 backdrop-blur-sm flex items-center justify-center">
                <div className="w-60 h-60 bg-card/30 rounded-xl border border-border flex items-center justify-center">
                  <div className="text-6xl font-bold text-primary/40">RO</div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent rounded-full"></div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a 
                href="https://github.com/Rayyan-Oumlil" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-primary/5"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/rayyan-oumlil-871b192b6/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-primary/5"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:rayyanoumlil@gmail.com"
                className="w-12 h-12 rounded-xl bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-primary/5"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;