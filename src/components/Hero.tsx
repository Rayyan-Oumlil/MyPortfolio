import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  
  const roles = [
    "Full Stack Developer",
    "UI/UX Designer", 
    "Frontend Specialist",
    "Problem Solver"
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
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
              // Move to next role
              setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            }
          };
          eraseText();
        }, 2000);
      }
    };
    
    typeText();
  }, [currentRoleIndex]);
  
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    
    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ background: 'var(--gradient-hero)' }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 text-center relative z-10 fade-in visible">
        <div className="max-w-4xl mx-auto">
          {/* Greeting */}
          <p className="text-xl mb-4 text-muted-foreground animate-fade-in">
            Hi there! 👋 I'm
          </p>
          
          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            Alex Johnson
          </h1>
          
          {/* Dynamic Role */}
          <div className="text-2xl md:text-4xl mb-8 h-16 flex items-center justify-center">
            <span className="text-foreground">I'm a </span>
            <span className="ml-2 gradient-accent-text font-semibold">
              {text}
              {showCursor && <span className="text-primary">|</span>}
            </span>
          </div>
          
          {/* Description */}
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            I craft beautiful, functional web experiences that make a difference. 
            Passionate about clean code, innovative design, and solving complex problems.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="text-lg px-8 py-6"
            >
              View My Work
            </Button>
            <Button 
              variant="glass" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="text-lg px-8 py-6"
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/20 backdrop-blur-md border border-border hover:bg-card/30 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/20 backdrop-blur-md border border-border hover:bg-card/30 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:alex@example.com"
              className="p-3 rounded-full bg-card/20 backdrop-blur-md border border-border hover:bg-card/30 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground hover:text-foreground transition-colors" />
        </div>
      </div>
    </section>
  );
};

export default Hero;