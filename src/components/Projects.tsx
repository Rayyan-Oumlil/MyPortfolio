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
            technologies: ["Python", "Streamlit", "Scikit-learn", "Plotly", "Yahoo Finance"],
            period: "July 2025 – Present",
        },
        {
            title: "Product Catalog – Fullstack E-Commerce App",
            description:
                "Built a complete eCommerce app with a FastAPI backend and React + TypeScript frontend. Features include product browsing, cart, checkout, JWT authentication, and order history. Styled with Tailwind and ShadCN UI; includes Docker setup and SQLite DB with planned Stripe/MinIO integration.",
            technologies: ["FastAPI", "React", "SQLite", "Tailwind", "ShadCN UI", "Docker", "JWT"],
            period: "June 2025 – Present",
        },
        {
            title: "MaVille – Smart City Roadwork App",
            description:
                "Developed a CLI-based app for coordinating roadwork between residents, contractors, and city officials. Designed use cases in UML and implemented a robust object-oriented structure with SQL integration for real-time issue tracking.",
            technologies: ["Java", "UML", "SQL", "CLI", "Object-Oriented Design"],
            period: "May 2025 – Present",
        },
        {
            title: "RAG-based PDF Assistant",
            description:
                "Developed a question answering system over PDF documents using Retrieval-Augmented Generation (RAG). Implemented vector search with FAISS and multi-LLM support, and built a Streamlit UI with multi-doc upload and citation features.",
            technologies: ["Python", "Streamlit", "FAISS", "LLMs", "RAG"],
            period: "March 2025 – June 2025",
        },
        {
            title: "Inventory Management System",
            description:
                "Built a desktop application for managing inventory, customers, suppliers, and orders. Included full CRUD operations, login authentication, and live stock tracking. GUI designed in Swing, with backend communication via JDBC.",
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
