import { useEffect, useRef, useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink } from "lucide-react";

const Projects = () => {
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

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const projects = [
        {
            title: "CustoFlow — Multi-Agent Customer Support System",
            description:
                "Multi-agent customer support automation platform leveraging Google ADK to coordinate five specialized agents that handle different aspects of customer queries: intelligent routing, FAQ responses, order management, sentiment analysis, and escalation handling. Features include agent-to-agent communication, long-term memory with FAISS-based semantic search, and automated ticketing workflows using Long-Running Operations (LRO). Built with FastAPI backend, Next.js frontend, and Supabase for data management. Achieved 80%+ automation rate and reduced response time from hours to seconds.",
            technologies: ["FastAPI", "Next.js", "Google ADK", "Gemini", "Supabase", "FAISS", "Multi-Agent Systems"],
            period: "2025",
            github: "https://github.com/Rayyan-Oumlil/CustoFlow",
            image: "/photos/custoflow/custoflow-logo.png",
            diagram: "/photos/custoflow/system-overview-diagram.png"
        },
        {
            title: "MaVille — Roadwork Management Platform",
            description:
                "Comprehensive smart city platform for managing municipal infrastructure and roadwork projects. The application enables citizens to report issues, track project progress, and receive real-time updates via WebSocket notifications. Features include secure user authentication, file upload capabilities, interactive comment threads, and comprehensive admin dashboards for project management. Built with Spring Boot for robust backend services, Next.js for modern frontend experience, and PostgreSQL for reliable data persistence.",
            technologies: ["Spring Boot", "Next.js", "PostgreSQL", "WebSocket", "Full-Stack Development"],
            period: "2025",
            github: "https://github.com/Rayyan-Oumlil/MaVille-ift2255"
        },
        {
            title: "ReguAI — Regulatory Intelligence Assistant",
            description:
                "Advanced regulatory intelligence platform that analyzes the impact of global regulations on S&P 500 portfolios. The system processes regulatory documents from 7+ jurisdictions and generates actionable trading recommendations for 500+ firms. Built for PolyFinances Datathon 2025 where it reached the finals. Features include sophisticated document extraction using AWS Bedrock and Textract, intelligent retrieval pipeline with LangChain, legal document analysis with LegalBERT, and comprehensive sentiment analysis using AWS Comprehend. Includes an interactive Streamlit dashboard for visualizing regulatory impacts and trading insights.",
            technologies: ["Python", "Bedrock", "LangChain", "LegalBERT", "Comprehend", "Streamlit", "GenAI"],
            period: "2025",
            github: "https://github.com/Rayyan-Oumlil/ReguAI",
            image: "/photos/reguai/Logo.png"
        },
        {
            title: "Emotion Detection System",
            description:
                "Real-time emotion recognition system using deep learning and computer vision. The application processes live video streams to detect and classify 7 different emotions (happy, sad, angry, fearful, surprised, disgusted, neutral). Built with PyTorch for model training on the FER2013 dataset, OpenCV for video processing, and custom CNN architecture optimized for facial emotion recognition.",
            technologies: ["PyTorch", "OpenCV", "NumPy", "Pandas", "CNN", "Computer Vision"],
            period: "2025",
            github: "https://github.com/Rayyan-Oumlil/EmotionDetectionSystem"
        },
        {
            title: "BuyBuddy — AI Shopping Assistant",
            description:
                "Intelligent shopping assistant powered by AI agents that help users find the best products and prices. The system uses LangGraph to coordinate multiple specialized agents: one for understanding user queries, another for product research, and a third for price comparison across different retailers. Features include multi-LLM provider support for flexibility, SerperDev integration for web search capabilities, and a FastAPI backend with React frontend for seamless user experience. The LangGraph workflow ensures efficient agent coordination and task completion.",
            technologies: ["FastAPI", "React", "LangGraph", "SerperDev", "Multi-Agent Systems"],
            period: "2025",
            github: "https://github.com/Rayyan-Oumlil/BuyBuddy",
            image: "/photos/buybuddy/logo5.png"
        },
        {
            title: "AgentCareAI — Multi-Agent Mental Health System",
            description:
                "Comprehensive multi-agent AI system designed to support mental health first-line workers in early detection, assessment, and referral of students in psychological distress. The system features 6 specialized agents: Red Flag Agent (determines need for higher authority referral), Coaching Agent (provides treatment guidance), Clinical Interview Agent (suggests questions for assessment), De-escalation Agent (manages crises), Stat Agent (provides regional statistics), and Global Impact Agent (tracks interaction patterns for policy insights). Built with CrewAI for agent collaboration, Groq API for fast inference, Chroma for vector storage, and React + Tailwind CSS for the frontend. Won 3rd Place in Hackathon en Santé Numérique 2025, demonstrating real-world impact in healthcare technology.",
            technologies: ["CrewAI", "Groq API", "Chroma", "React", "Tailwind CSS", "Multi-Agent Systems", "Python"],
            period: "Nov 2025",
            github: "https://github.com/Rayyan-Oumlil/AgentCareAI"
        },
        {
            title: "FlexiShop — Full-Stack E-Commerce Platform",
            description:
                "Complete e-commerce solution built with modern technologies and best practices. The platform includes a robust FastAPI backend with SQLAlchemy ORM, JWT-based authentication, and RESTful API design. The frontend is built with React, TypeScript, Vite, Tailwind CSS, and ShadCN UI components for a beautiful, responsive user experience. Features include user registration and login, product catalog with browsing and search, shopping cart with add/remove/clear functionality, secure checkout process, order creation and management, order history tracking, and admin user capabilities.",
            technologies: ["FastAPI", "React", "TypeScript", "PostgreSQL", "JWT", "Tailwind CSS", "ShadCN UI"],
            period: "2025",
            github: "https://github.com/Rayyan-Oumlil/FlexiShop"
        },
    ];

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="py-8 relative overflow-hidden z-10 bg-background"
            style={{ scrollMarginTop: '80px', minHeight: '100vh' }}
            data-testid="projects-section"
        >

            <div className="container mx-auto px-6 relative z-20">
                <div className={`fade-in ${isVisible ? "visible" : "visible"}`}>
                    {/* Section Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-5xl font-bold mb-6 gradient-text">Projects</h2>
                        <div
                            className="w-24 h-1 mx-auto mb-8 rounded-full"
                            style={{ background: "var(--gradient-primary)" }}
                        />
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            A selection of projects that showcase my skills and passion for creating exceptional digital experiences.
                        </p>
                    </div>

                    {/* Project Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                        {projects.map((projects, index) => (
                            <Card key={index} className="p-4 md:p-8 bg-card/50 backdrop-blur-sm border border-border shadow-md transition hover:shadow-lg">
                                    <div className="space-y-4">
                                        {/* Project Image */}
                                        {projects.image && (
                                            <div className="flex justify-center mb-4">
                                                <img 
                                                    src={projects.image} 
                                                    alt={projects.title}
                                                    className="max-w-full h-auto max-h-32 object-contain rounded-lg"
                                                />
                                            </div>
                                        )}
                                        
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-xl md:text-2xl font-bold gradient-accent-text text-center flex-1">{projects.title}</h3>
                                            {projects.github && (
                                                <a
                                                    href={projects.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors"
                                                >
                                                    <ExternalLink className="w-4 h-4" />
                                                    GitHub
                                                </a>
                                            )}
                                        </div>
                                        <p className="text-sm text-muted-foreground italic">{projects.period}</p>
                                        
                                        {/* System Diagram for CustoFlow */}
                                        {projects.diagram && (
                                            <div className="my-4">
                                                <img 
                                                    src={projects.diagram} 
                                                    alt={`${projects.title} system diagram`}
                                                    className="w-full h-auto rounded-lg border border-border"
                                                />
                                            </div>
                                        )}
                                        
                                        <p className="text-muted-foreground leading-relaxed">
                                            {projects.description}
                                        </p>
                                        
                                        <div className="flex flex-wrap gap-2 pt-4">
                                            {projects.technologies.map((tech, i) => (
                                                <Badge key={i} variant="outline" className="text-xs border-border bg-background/50">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </Card>
                        ))}
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-16">
                        <p className="text-lg text-muted-foreground mb-6">Want to discuss a project?</p>
                        <Button
                            variant="outline"
                            size="lg"
                            onClick={() =>
                                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                            }
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
