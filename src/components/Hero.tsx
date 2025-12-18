import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail, Download } from "lucide-react";

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
      <section className="min-h-[80vh] flex items-center justify-center relative bg-background pt-28 pb-16">
        {/* Geometric Background Pattern - Supprimé pour éviter le bleu */}
        {/* <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-20 -left-20 w-80 h-80 border border-primary/20 rounded-full" />
          <div className="absolute top-1/4 right-10 w-32 h-32 bg-primary/5 rotate-45" />
          <div className="absolute bottom-20 left-1/4 w-24 h-24 border-2 border-accent/30 rounded-full" />
          <div className="absolute top-10 left-1/2 w-16 h-16 bg-secondary/10 rotate-12" />
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 border border-muted-foreground/10 rounded-full" />
        </div> */}

        {/* Main Content - Centered */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">

            {/* Greeting */}
            <p className="text-xl text-muted-foreground tracking-wide font-light">
              👋 Hey! I'm glad you're here.
            </p>

            {/* Big name with gradient */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight">
              Rayyan Oumlil
            </h1>

            {/* Decorative underline */}
            <div className="h-1 w-32 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full" />

            {/* About Description */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto pt-4">
              Computer Science student at Université de Montréal focused on software engineering and applied AI. 
              Experienced in building full-stack applications and agent-based AI systems, with hands-on work across 
              cloud, backend, and ML tooling. Actively engaged in hackathons and real-world projects, delivering 
              practical, user-focused solutions.
            </p>



            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 flex-wrap">

              {/* Button 1 – View My Work */}
              <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-6 text-lg font-semibold border-border text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                View My Work
              </Button>

              {/* Button 2 – Get In Touch */}
              <Button
                  variant="outline"
                  size="lg"
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-6 text-lg font-semibold border-border text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-colors"
              >
                Get In Touch
              </Button>

              {/* Button 3 – Download CV */}
              <a href="/RayyanCV.pdf" download>
                <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-6 text-lg font-semibold flex items-center gap-2 border-border text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-colors"
                >
                  <Download className="w-5 h-5"/>
                  Download CV
                </Button>
              </a>
            </div>


            {/* Social Links */}
            <div className="flex justify-center space-x-6 pt-8 mb-8">
              <a
                  href="https://github.com/Rayyan-Oumlil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-primary/5"
              >
                <Github className="w-5 h-5"/>
              </a>
              <a
                  href="https://www.linkedin.com/in/rayyan-oumlil-871b192b6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-primary/5"
              >
                <Linkedin className="w-5 h-5"/>
              </a>
              <a
                  href="mailto:rayyanoumlil@gmail.com"
                  className="w-12 h-12 rounded-xl bg-card border border-border hover:border-primary/50 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:bg-primary/5"
              >
                <Mail className="w-5 h-5"/>
              </a>
            </div>

          </div>
        </div>
      </section>
  );
};

export default Hero;