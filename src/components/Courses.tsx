import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";

const Courses = () => {
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

    const courses = [
        { title: "Calculus 1", code: "MAT 1400" },
        { title: "Computer Architecture 1", code: "IFT 1227" },
        { title: "Concepts of Programming Languages", code: "IFT 2035" },
        { title: "Data Structures", code: "IFT 2015" },
        { title: "Discrete Structures in Computer Science", code: "IFT 1065" },
        { title: "Introduction to Computer Systems", code: "IFT 1215" },
        { title: "Introduction to Theoretical Computer Science", code: "IFT 2105" },
        { title: "Linear Algebra", code: "MAT 1600" },
        { title: "Probability and Statistics", code: "MAT 1978" },
        { title: "Programming 1", code: "IFT 1015" },
        { title: "Programming 2", code: "IFT 1025" },
        { title: "Software Engineering", code: "IFT 2255" },
        { title: "Web Design and Development", code: "IFT 1005" }
    ];

    return (
        <section
            id="courses"
            ref={sectionRef}
            className="py-24 relative overflow-hidden bg-section-bg"
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
                        <h2 className="text-5xl font-bold mb-6 gradient-text">Courses</h2>
                        <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ background: 'var(--gradient-primary)' }} />
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            University courses completed at Université de Montréal
                        </p>
                    </div>

                    {/* Courses Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.map((course, index) => (
                            <Card
                                key={index}
                                className="p-6 card-hover border-border bg-card text-center"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <h3 className="text-xl font-bold text-foreground mb-2">
                                    {course.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">{course.code}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Courses;