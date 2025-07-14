import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock } from "lucide-react";

const Certifications = () => {
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

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const certifications = [
        {
            title: "CS50x – Introduction to Computer Science",
            provider: "Harvard / edX",
            status: "In Progress",
        }
    ];

    return (
        <section
            id="certifications"
            ref={sectionRef}
            className="py-24 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className={`fade-in ${isVisible ? "visible" : ""}`}>
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-6 gradient-text">Certifications</h2>
                        <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ background: "var(--gradient-primary)" }} />
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Courses and certifications completed or currently in progress
                        </p>
                    </div>

                    {/* Certification Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {certifications.map((cert, index) => (
                            <Card
                                key={index}
                                className="p-6 card-hover border-border bg-card flex flex-col gap-4"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-foreground mb-1">{cert.title}</h3>
                                    <p className="text-sm text-muted-foreground">{cert.provider}</p>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    {cert.status === "In Progress" ? (
                                        <>
                                            <Clock className="w-4 h-4 text-yellow-500" />
                                            <span>In Progress</span>
                                        </>
                                    ) : (
                                        <>
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span>Completed</span>
                                        </>
                                    )}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;
