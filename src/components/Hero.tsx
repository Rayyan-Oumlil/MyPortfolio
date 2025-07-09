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
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseBeforeDelete = 2000;
    const pauseBeforeType = 500;

    let isDeleting = false;
    let charIndex = 0;

    const typeLoop = () => {
      if (!isDeleting && charIndex <= currentRole.length) {
        setText(currentRole.slice(0, charIndex));
        charIndex++;
        setTimeout(typeLoop, typingSpeed);
      } else if (isDeleting && charIndex >= 0) {
        setText(currentRole.slice(0, charIndex));
        charIndex--;
        setTimeout(typeLoop, deletingSpeed);
      } else {
        isDeleting = !isDeleting;
        setTimeout(typeLoop, isDeleting ? pauseBeforeDelete : pauseBeforeType);
      }
    };

    typeLoop();
  }, []);



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
            Hi there! I'm
          </p>
          
          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
            Rayyan Oumlil
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
            I'm passionate about how technology can positively impact society. I enjoy working on innovative, meaningful projects that solve real-world problems, and I'm always eager to keep learning and building solutions that make a difference.
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
              href="https://github.com/Rayyan-Oumlil" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/20 backdrop-blur-md border border-border hover:bg-card/30 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/rayyan-oumlil-871b192b6/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card/20 backdrop-blur-md border border-border hover:bg-card/30 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:rayyanoumlil@gmail.com"
              className="p-3 rounded-full bg-card/20 backdrop-blur-md border border-border hover:bg-card/30 transition-all duration-300 hover:scale-110"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        

      </div>
    </section>
  );
};

export default Hero;