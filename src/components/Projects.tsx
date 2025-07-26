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
            title: "Stock Price Predictor",
            description:
                "Developed a Streamlit app to visualize and forecast stock prices using real-time data from Yahoo Finance. Implemented Linear Regression and Random Forest models for multi-day prediction and comparison of several stocks. Planned enhancements include LSTM models, backtesting, and portfolio analytics.",
            technologies: ["Python", "Streamlit", "Scikit-learn", "Plotly"],
            period: "August 2023",
        },
        {
            title: "FlexiShop – Fullstack E-Commerce App",
            description:
                "Built a complete eCommerce app with FastAPI backend and React + TypeScript frontend. Implemented features like product browsing, cart, checkout, JWT auth, and order history. Styled with Tailwind + ShadCN UI; Docker setup, PostgreSQL, Stripe payment and planned MinIO integration.",
            technologies: ["FastAPI", "React", "PostgreSQL", "Tailwind", "ShadCN UI", "Docker", "JWT", "Stripe"],
            period: "July 2025 – Present",
        },
        {
            title: "MaVille – Smart City Roadwork App",
            description:
                "Developed a CLI-based app for roadwork coordination between residents, contractors, and the city. Modeled use cases and implemented a robust object-oriented design. Integrated SQL database for real-time issue tracking.",
            technologies: ["Java", "UML", "MySQL", "CLI", "Object-Oriented Design"],
            period: "May 2025 – Present",
        },
        {
            title: "RAG-based PDF Assistant",
            description:
                "Developed a question-answering system over PDF documents using Retrieval-Augmented Generation. Implemented vector search with FAISS and document upload with multi-LLM support. Built interactive frontend in Streamlit with multi-doc support and citation features.",
            technologies: ["Python", "Streamlit", "FAISS", "LLMs", "RAG"],
            period: "March 2025 – June 2025",
        },
        {
            title: "Inventory Management System",
            description:
                "Built a desktop application for managing products, customers, suppliers, purchases, and sales. Implemented full CRUD operations, login authentication, and real-time stock updates. GUI designed with Swing and database communication via JDBC.",
            technologies: ["Java", "MySQL", "Swing", "JDBC", "Authentication"],
            period: "December 2024 – March 2025",
        },
    ];

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="py-24 min-h-[50vh] bg-section-bg relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className={`fade-in ${isVisible ? "visible" : ""}`}>
                    {/* Section Header */}
                    <div className="text-center mb-16">
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
                    <div className="space-y-16">
                        {projects.map((projects, index) => (
                            <div key={index} className="flex justify-center">
                                <Card className="w-full max-w-3xl p-8 bg-card/50 backdrop-blur-sm border border-border shadow-md transition hover:shadow-lg">
                                    <div className="space-y-4">
                                        <h3 className="text-2xl font-bold gradient-accent-text">{projects.title}</h3>
                                        <p className="text-sm text-muted-foreground italic">{projects.period}</p>
                                        <p className="text-muted-foreground leading-relaxed">{projects.description}</p>
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {projects.technologies.map((tech, i) => (
                                                <Badge key={i} variant="outline" className="text-xs border-border bg-background/50">
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                </Card>
                            </div>
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
