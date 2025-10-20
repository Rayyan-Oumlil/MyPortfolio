import { useEffect, useRef, useState } from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

const Projects = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [expandedProjects, setExpandedProjects] = useState<{ [key: number]: boolean }>({});
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

    const toggleExpanded = (index: number) => {
        setExpandedProjects(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    const projects = [
        {
            title: "FlexiShop – Fullstack E-Commerce App",
            description:
                "Developed a complete e-commerce application with a FastAPI backend and a React + TypeScript frontend. Implemented product browsing, cart, checkout, JWT authentication, and order history. Styled with Tailwind + ShadCN UI; integrated Stripe and planned MinIO for file storage.",
            technologies: ["FastAPI", "React", "PostgreSQL", "Tailwind", "ShadCN UI", "JWT", "Stripe"],
            period: "July 2025",
            github: "https://github.com/Rayyan-Oumlil/FlexiShop",
            fullDetails: "Complete e-commerce solution with modern tech stack. Features include user authentication, product catalog, shopping cart, payment processing with Stripe, order management, and admin dashboard. Built with scalable architecture using FastAPI for backend API, React with TypeScript for frontend, PostgreSQL for data persistence, and Docker for containerization. Implemented JWT-based authentication, role-based access control, and responsive design with Tailwind CSS and ShadCN UI components."
        },
        {
            title: "MaVille – Roadwork Management App",
            description:
                "Developed a Java CLI application to coordinate roadworks between residents, contractors, and the municipality. Designed with object-oriented principles using UML diagrams and a MySQL database, tested on 50+ simulated reports with 30% faster processing time. Collaborated in a team of 4.",
            technologies: ["Java", "UML", "MySQL", "CLI", "Object-Oriented Design"],
            period: "August 2025",
            github: "https://github.com/Rayyan-Oumlil/MaVille-ift2255",
            fullDetails: "Smart city management system for coordinating roadwork projects. The application handles communication between residents, contractors, and municipal authorities. Features include issue reporting, project tracking, scheduling optimization, and automated notifications. Built using Java with object-oriented design principles, UML modeling for system architecture, and MySQL for data management. Achieved 30% improvement in processing time through optimized algorithms and efficient database queries."
        },
        {
            title: "AI-Powered PDF Q&A Assistant",
            description:
                "Built a Q&A assistant on PDF documents using Retrieval-Augmented Generation (RAG). Implemented vector search with FAISS and integrated multiple LLMs. Developed an interactive Streamlit interface with multi-document support.",
            technologies: ["LangChain", "Python", "Streamlit", "FAISS", "LLMs", "RAG"],
            period: "June 2025",
            github: "https://github.com/Rayyan-Oumlil/RagPdfAssitant",
            fullDetails: "Advanced document analysis system using state-of-the-art RAG technology. The application processes PDF documents, creates vector embeddings using FAISS for efficient similarity search, and provides accurate answers using multiple LLM providers. Features include document upload, chunking, embedding generation, semantic search, and interactive chat interface. Supports multiple document formats and provides source citations for transparency."
        },
        {
            title: "Oil Price Forecasting with News Sentiment",
            description:
                "Built an end-to-end machine learning pipeline to forecast oil and gas prices using financial news sentiment. Scraped and processed daily financial headlines related to oil and natural gas markets. Applied FinBERT, a financial NLP model, to extract sentiment scores and engineered features with Scikit-learn. Trained an XGBoost model on 23 years of data to capture the relationship between sentiment and price movement.",
            technologies: ["NLP", "FinBERT", "XGBoost", "Scikit-learn", "Python", "Pandas"],
            period: "October 2025",
            github: "https://github.com/Rayyan-Oumlil/News_Based_Oil_Price_Predictor",
            fullDetails: "Comprehensive financial forecasting system that combines news sentiment analysis with machine learning to predict oil and gas prices. The system scrapes financial news from multiple sources, processes text using FinBERT for sentiment extraction, and engineers features for time series analysis. Uses XGBoost for regression modeling on 23 years of historical data. Achieves high accuracy by incorporating both technical indicators and sentiment factors in the prediction model."
        },
        {
            title: "Emotion Detection System",
            description:
                "Developed a real-time facial emotion detection system using Convolutional Neural Networks (CNNs). Implemented image preprocessing, data augmentation, and model training on the FER2013 dataset with 7 emotions. Built a GUI-based live inference application using OpenCV for webcam-based emotion recognition. Achieved robust classification accuracy through optimized CNN architecture and performance visualization metrics.",
            technologies: ["PyTorch", "OpenCV", "NumPy", "Python", "CNN", "Computer Vision"],
            period: "October 2025",
            github: "https://github.com/Rayyan-Oumlil/EmotionDetectionSystem",
            fullDetails: "Real-time emotion recognition system using deep learning and computer vision. The application processes live video streams to detect and classify 7 different emotions (happy, sad, angry, fearful, surprised, disgusted, neutral). Built with PyTorch for model training, OpenCV for video processing, and custom CNN architecture optimized for facial emotion recognition. Features include real-time inference, confidence scoring, and performance visualization with accuracy metrics."
        },
        {
            title: "Stock Price Predictor",
            description:
                "Developed a Streamlit app to visualize and forecast stock prices using real-time data from Yahoo Finance. Implemented Linear Regression and Random Forest models for multi-day prediction and comparison of several stocks. Planned enhancements include LSTM models, backtesting, and portfolio analytics.",
            technologies: ["Python", "Streamlit", "Scikit-learn", "Plotly", "Pandas", "Yahoo Finance API"],
            period: "July 2025",
            github: "https://github.com/Rayyan-Oumlil/StockPricePredictor",
            fullDetails: "Comprehensive stock analysis and prediction platform with interactive visualizations. The application fetches real-time stock data, performs technical analysis, and provides price forecasts using multiple machine learning models. Features include historical data visualization, trend analysis, model comparison, and interactive charts. Built with Streamlit for the user interface, Scikit-learn for machine learning models, and Plotly for dynamic visualizations."
        },
        {
            title: "Inventory Management App",
            description:
                "Built a desktop application for managing products, customers, suppliers, purchases, and sales. Implemented full CRUD operations, login authentication, and real-time stock updates. GUI designed with Swing and database communication via JDBC.",
            technologies: ["Java", "MySQL", "Swing", "JDBC", "Authentication", "Desktop App"],
            period: "December 2024 – March 2025",
            github: "https://github.com/Rayyan-Oumlil/InventoryManagementApp",
            fullDetails: "Complete inventory management system for small to medium businesses. The application handles product catalog management, customer and supplier information, purchase orders, sales tracking, and inventory control. Features include user authentication, role-based access, real-time stock updates, automated reorder alerts, and comprehensive reporting. Built with Java Swing for the desktop interface, MySQL for data persistence, and JDBC for database connectivity."
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
                    <div className="space-y-8 md:space-y-16">
                        {projects.map((projects, index) => (
                            <div key={index} className="flex justify-center">
                                <Card className="w-full max-w-3xl p-4 md:p-8 bg-card/50 backdrop-blur-sm border border-border shadow-md transition hover:shadow-lg">
                                    <div className="space-y-4">
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
                                        
                                        <div className="space-y-2">
                                            <p className="text-muted-foreground leading-relaxed">
                                                {expandedProjects[index] 
                                                    ? projects.description 
                                                    : projects.description.split(' ').slice(0, 20).join(' ') + '...'
                                                }
                                            </p>
                                            
                                            {!expandedProjects[index] && (
                                                <button
                                                    onClick={() => toggleExpanded(index)}
                                                    className="flex items-center gap-1 text-sm text-black dark:text-white hover:text-black/80 dark:hover:text-white/80 transition-colors"
                                                >
                                                    <ChevronDown className="w-4 h-4" />
                                                    Show More
                                                </button>
                                            )}
                                        </div>
                                        
                                        {expandedProjects[index] && (
                                            <>
                                                <div className="flex flex-wrap gap-2 pt-2">
                                                    {projects.technologies.map((tech, i) => (
                                                        <Badge key={i} variant="outline" className="text-xs border-border bg-background/50">
                                                            {tech}
                                                        </Badge>
                                                    ))}
                                                </div>
                                                
                                                <button
                                                    onClick={() => toggleExpanded(index)}
                                                    className="flex items-center gap-1 text-sm text-black dark:text-white hover:text-black/80 dark:hover:text-white/80 transition-colors mt-2"
                                                >
                                                    <ChevronUp className="w-4 h-4" />
                                                    Show Less
                                                </button>
                                            </>
                                        )}
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
