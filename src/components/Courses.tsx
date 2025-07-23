import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Courses = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

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

    const scroll = (offset: number) => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: offset, behavior: 'smooth' });
        }
    };

    const courses = [
        {
            title: "Calculus 1",
            code: "MAT 1400",
            url: "https://admission.umontreal.ca/cours-et-horaires/cours/mat-1400/"
        },
        {
            title: "Computer Architecture 1",
            code: "IFT 1227",
            url: "https://admission.umontreal.ca/cours-et-horaires/cours/ift-1227/"
        },
        {
            title: "Concepts of Programming Languages",
            code: "IFT 2035",
            url: "https://admission.umontreal.ca/cours-et-horaires/cours/ift-2035/"
        },
        {
            title: "Data Structures",
            code: "IFT 2015",
            url: "https://admission.umontreal.ca/cours-et-horaires/cours/ift-2015/"
        },
        {
            title: "Discrete Structures in Computer Science",
            code: "IFT 1065",
            url: "https://admission.umontreal.ca/cours-et-horaires/cours/ift-1065/"
        },
        {
            title: "Introduction to Computer Systems",
            code: "IFT 1215",
            url: "https://admission.umontreal.ca/cours-et-horaires/cours/ift-1215/"
        },
        {
            title: "Introduction to Theoretical Computer Science",
            code: "IFT 2105",
            url: "https://admission.umontreal.ca/cours-et-horaires/cours/ift-2105/"
        },
        {
            title: "Linear Algebra",
            code: "MAT 1600",
            url: "https://admission.umontreal.ca/cours-et-horaires/cours/mat-1600/"
        },
        {
            title: "Probability and Statistics",
            code: "MAT 1978",
            url: "https://admission.umontreal.ca/cours-et-horaires/cours/mat-1978/"
        },
        {
            title: "Programming 1",
            code: "IFT 1015",
            url: "https://admission.umontreal.ca/cours-et-horaires/cours/ift-1015/"
        },
        {
            title: "Programming 2",
            code: "IFT 1025",
            url: "https://admission.umontreal.ca/cours-et-horaires/cours/ift-1025/"
        },
        {
            title: "Software Engineering",
            code: "IFT 2255",
            url: "https://admission.umontreal.ca/cours-et-horaires/cours/ift-2255/"
        },
        {
            title: "Web Design and Development",
            code: "IFT 1005",
            url: "https://admission.umontreal.ca/cours-et-horaires/cours/ift-1005/"
        }
    ];


    return (
        <section
            id="courses"
            ref={sectionRef}
            className="py-20 relative overflow-hidden"
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

                    {/* Courses Carousel */}
                    <div className="relative">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => scroll(-250)}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </Button>
                        <div
                            ref={carouselRef}
                            className="hide-scrollbar flex gap-6 overflow-x-auto px-12 py-2 scroll-smooth snap-x snap-mandatory"
                        >
                            {courses.map((course, index) => (
                                <a
                                    key={index}
                                    href={course.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flip-card w-36 h-36 shrink-0 snap-center"
                                    style={{animationDelay: `${index * 0.1}s`}}
                                >
                                    <div
                                        className="flip-card-inner cursor-pointer transition-transform hover:scale-105">
                                        <Card
                                            className="flip-card-front card-hover border-border bg-card flex items-center justify-center text-lg font-bold">
                                            {course.code}
                                        </Card>
                                        <Card
                                            className="flip-card-back card-hover border-border bg-card flex items-center justify-center p-2 text-center text-sm font-medium">
                                            {course.title}
                                        </Card>
                                    </div>
                                </a>

                            ))}
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => scroll(250)}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
                        >
                            <ChevronRight className="w-6 h-6"/>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Courses;