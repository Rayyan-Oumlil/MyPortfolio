import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);
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

  const projects = [
    {
      title: "MaVille - Smart City Roadwork App",
      description: "A CLI-based application for coordinating roadwork between residents, contractors, and the city. Features real-time issue tracking, robust object-oriented design, and SQL database integration for efficient communication.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
      technologies: ["Java", "UML", "SQL", "CLI", "Object-Oriented Design"],
      featured: true
    },
    {
      title: "Inventory Management System",
      description: "Comprehensive desktop application for managing products, customers, suppliers, purchases, and sales. Built with Java Swing for the GUI and JDBC for database communication, featuring full CRUD operations and authentication.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      technologies: ["Java", "MySQL", "Swing", "JDBC", "Authentication"],
      featured: true
    },
    {
      title: "Shop&Ship E-Commerce Website",
      description: "Multilingual online store with complete order processing and payment integration. Built using WordPress and WooCommerce with Mailchimp for marketing automation and newsletter management.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["WordPress", "WooCommerce", "Mailchimp", "SEO", "Responsive Design"],
      featured: true
    }
  ];


  return (
    <section 
      id="projects"
      ref={sectionRef}
      className="py-24 bg-section-bg relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 gradient-text">Featured Projects</h2>
            <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ background: 'var(--gradient-primary)' }} />
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that showcase my skills and passion for creating exceptional digital experiences
            </p>
          </div>

          {/* Featured Projects */}
          <div className="space-y-16">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Project Info */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="space-y-6">
                    <div>
                      <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                        Featured Project
                      </Badge>
                      <h3 className="text-3xl font-bold mb-4 gradient-accent-text">
                        {project.title}
                      </h3>
                    </div>
                    
                    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </Card>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="outline"
                          className="text-xs border-border bg-background/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="border-primary/20 hover:bg-primary/10 hover:text-primary cursor-default"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Project
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Image */}
                <div className={`card-hover ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <Card className="overflow-hidden border-border bg-card/20 backdrop-blur-sm">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full aspect-video object-cover"
                    />
                  </Card>
                </div>
              </div>
            ))}
          </div>


          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">
              Want to discuss a project?
            </p>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-primary/20 hover:bg-primary/10 hover:text-primary"
            >
              <ExternalLink className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
