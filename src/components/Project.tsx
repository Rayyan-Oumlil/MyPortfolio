import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Project = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const projects = [
        {
            title: "Instagram Story Generator",
            description: "AI-powered tool that generates Insta stories from trending content using OpenAI + Unsplash API.",
            tags: ["React", "OpenAI", "Instagram", "Tailwind"]
        },
        {
            title: "Scheduled Poster Bot",
            description: "Automates Instagram posts using Puppeteer and scheduling with CRON.",
            tags: ["Node.js", "Puppeteer", "Automation"]
        }
    ];

    return (
        <section id="project" ref={sectionRef} className="py-24 min-h-[50vh] bg-section-bg relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className={`fade-in ${isVisible ? "visible" : ""}`}>
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-6 gradient-text">Project</h2>
                        <div className="w-24 h-1 mx-auto mb-8 rounded-full bg-primary" />
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Personal tools and AI-based experiments I’ve built along the way.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {projects.map((p, idx) => (
                            <Card key={idx} className="p-6 border-border bg-card">
                                <h3 className="text-2xl font-semibold mb-2">{p.title}</h3>
                                <p className="text-muted-foreground mb-4">{p.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {p.tags.map((tag, i) => (
                                        <Badge key={i} variant="outline">{tag}</Badge>
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Project;
