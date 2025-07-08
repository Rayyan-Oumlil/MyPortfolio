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
      image: "/api/placeholder/600/400",
      technologies: ["Java", "UML", "SQL", "CLI", "Object-Oriented Design"],
      liveUrl: "https://github.com/rayyanoumlil/maville",
      githubUrl: "https://github.com/rayyanoumlil/maville",
      featured: true
    },
    {
      title: "Inventory Management System",
      description: "Comprehensive desktop application for managing products, customers, suppliers, purchases, and sales. Built with Java Swing for the GUI and JDBC for database communication, featuring full CRUD operations and authentication.",
      image: "/api/placeholder/600/400",
      technologies: ["Java", "MySQL", "Swing", "JDBC", "Authentication"],
      liveUrl: "https://github.com/rayyanoumlil/inventory-system",
      githubUrl: "https://github.com/rayyanoumlil/inventory-system",
      featured: true
    },
    {
      title: "Shop&Ship E-Commerce Website",
      description: "Multilingual online store with complete order processing and payment integration. Built using WordPress and WooCommerce with Mailchimp for marketing automation and newsletter management.",
      image: "/api/placeholder/600/400",
      technologies: ["WordPress", "WooCommerce", "Mailchimp", "SEO", "Responsive Design"],
      liveUrl: "https://shopandship-demo.com",
      githubUrl: "https://github.com/rayyanoumlil/shopandship",
      featured: false
    },
    {
      title: "Secure File-Sharing System",
      description: "Internal file-sharing system developed during internship at 3GCOM. Implemented security features and collaborative tools to enhance software deployment workflows in a corporate environment.",
      image: "/api/placeholder/600/400",
      technologies: ["Security", "File Management", "Collaboration Tools", "Deployment"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

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
          <div className="space-y-16 mb-24">
            {featuredProjects.map((project, index) => (
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
                        variant="ghost" 
                        size="sm"
                        asChild
                        className="hover:bg-primary/10 hover:text-primary"
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm"
                        asChild
                        className="border-primary/20 hover:bg-primary/10 hover:text-primary"
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Project Image */}
                <div className={`card-hover ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <Card className="overflow-hidden border-border bg-card/20 backdrop-blur-sm">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <Eye className="w-16 h-16 text-muted-foreground" />
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div>
            <h3 className="text-3xl font-bold mb-12 text-center gradient-accent-text">
              Other Notable Projects
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              {otherProjects.map((project, index) => (
                <Card 
                  key={index}
                  className="card-hover border-border bg-card overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                    <Eye className="w-12 h-12 text-muted-foreground" />
                  </div>
                  
                  <div className="p-6 space-y-4">
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-foreground">
                        {project.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-muted/50 text-muted-foreground"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs bg-muted/50 text-muted-foreground">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center pt-2">
                      <div className="flex gap-2">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          asChild
                          className="h-8 w-8 p-0 hover:bg-primary/10 hover:text-primary"
                        >
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          asChild
                          className="h-8 w-8 p-0 hover:bg-primary/10 hover:text-primary"
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground mb-6">
              Want to see more of my work?
            </p>
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="border-primary/20 hover:bg-primary/10 hover:text-primary"
            >
              <a href="https://github.com/rayyanoumlil" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 mr-2" />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
