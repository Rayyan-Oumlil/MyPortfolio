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
    <section className="min-h-screen flex items-center justify-center relative bg-background pt-20">
      {/* Geometric Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 border border-primary/20 rounded-full" />
        <div className="absolute top-1/4 right-10 w-32 h-32 bg-primary/5 rotate-45" />
        <div className="absolute bottom-20 left-1/4 w-24 h-24 border-2 border-accent/30 rounded-full" />
        <div className="absolute top-10 left-1/2 w-16 h-16 bg-secondary/10 rotate-12" />
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 border border-muted-foreground/10 rounded-full" />
      </div>

      {/* Main Content - Centered */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          
          {/* Small greeting - subtle and integrated */}
          <div className="mb-4">
            <p className="text-base text-muted-foreground/60 font-light">
              Hi there
            </p>
          </div>
          
          {/* Cool name with gradient and effects */}
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
              I'm Rayyan Oumlil
            </h1>
            {/* Decorative underline */}
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"></div>
          </div>
          
          {/* Description paragraph */}
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            I'm a computer science student at University of Montreal passionate about how technology can positively impact society. I enjoy working on innovative, meaningful projects that solve real-world problems.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
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
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
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
    </section>
  );
};

export default Hero;