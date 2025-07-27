import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Calendar } from "lucide-react";

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
            url: "https://admission.umontreal.ca/cours-et-horaires/cours/mat-1400/",
            current: false,
            provider: "Université de Montréal",
            period: "Automne 2023",
            description: "Introduction to calculus, limits, derivatives, and integrals."
        },
        {
            title: "Computer Architecture 1",
            code: "IFT 1227",
            url: "https://admission.umontreal.ca/cours-et-horaires/cours/ift-1227/",
            current: true,
            provider: "Université de Montréal",
            period: "Hiver 2024",
            description: "Basic concepts of computer architecture, including CPU, memory, and I/O."
        },
        {
            title: "Concepts of Programming Languages",
            code: "IFT 2035",
            url: "https://admission.umontreal.ca/cours-et-horaires/cours/ift-2035/",
            current: false,
            provider: "Université de Montréal",
            period: "Automne 2023",
            description: "Introduction to programming languages, syntax, and basic programming concepts."
        },
        {
            title: "Data Structures",
            code: "IFT 2015",
            url: "https://admission.umontreal.ca/cours-et-horaires/cours/ift-2015/",
            current: false,
            provider: "Université de Montréal",
            period: "Automne 2023",
            description: "Data structures and algorithms, including arrays, linked lists, stacks, and queues."
        },
        {
            title: "Discrete Structures in Computer Science",
            code: "IFT 1065",
            url: "https://admission.umontreal.ca/cours-et-horaires/cours/ift-1065/",
            current: false,
            provider: "Université de Montréal",
            period: "Automne 2023",
            description: "Introduction to discrete mathematics and its applications in computer science."
        },
        {
            title: "Introduction to Computer Systems",
            code: "IFT 1215",
            url: "https://admission.umontreal.ca/cours-et-horaires/cours/ift-1215/",
            current: false,
            provider: "Université de Montréal",
            period: "Automne 2023",
            description: "Introduction to computer organization, assembly language, and basic programming."
        },
        {
            title: "Introduction to Theoretical Computer Science",
            code: "IFT 2105",
            url: "https://admission.umontreal.ca/cours-et-horaires/cours/ift-2105/",
            current: false,
            provider: "Université de Montréal",
            period: "Automne 2023",
            description: "Basic concepts of theoretical computer science, including algorithms and complexity."
        },
        {
            title: "Linear Algebra",
            code: "MAT 1600",
            url: "https://admission.umontreal.ca/cours-et-horaires/cours/mat-1600/",
            current: false,
            provider: "Université de Montréal",
            period: "Automne 2023",
            description: "Introduction to linear algebra, matrices, determinants, and systems of equations."
        },
        {
            title: "Probability and Statistics",
            code: "MAT 1978",
            url: "https://admission.umontreal.ca/cours-et-horaires/cours/mat-1978/",
            current: false,
            provider: "Université de Montréal",
            period: "Automne 2023",
            description: "Introduction to probability theory and statistical methods."
        },
        {
            title: "Programming 1",
            code: "IFT 1015",
            url: "https://admission.umontreal.ca/cours-et-horaires/cours/ift-1015/",
            current: false,
            provider: "Université de Montréal",
            period: "Automne 2023",
            description: "Basic programming concepts and introduction to programming languages."
        },
        {
            title: "Programming 2",
            code: "IFT 1025",
            url: "https://admission.umontreal.ca/cours-et-horaires/cours/ift-1025/",
            current: false,
            provider: "Université de Montréal",
            period: "Automne 2023",
            description: "Advanced programming concepts and introduction to object-oriented programming."
        },
        {
            title: "Software Engineering",
            code: "IFT 2255",
            url: "https://admission.umontreal.ca/cours-et-horaires/cours/ift-2255/",
            current: false,
            provider: "Université de Montréal",
            period: "Automne 2023",
            description: "Introduction to software engineering principles, methodologies, and tools."
        },
        {
            title: "Web Design and Development",
            code: "IFT 1005",
            url: "https://admission.umontreal.ca/cours-et-horaires/cours/ift-1005/",
            current: false,
            provider: "Université de Montréal",
            period: "Automne 2023",
            description: "Introduction to web design and development, including HTML, CSS, and basic JavaScript."
        }
    ];


    return (
        <section
            id="courses"
            ref={sectionRef}
            className="py-20 relative overflow-hidden"
        >
            {/* Background Elements - Supprimés pour uniformité */}
            {/* <div className="absolute inset-0">
                <div className="absolute top-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
            </div> */}

            <div className="container mx-auto px-6 relative z-10">
                <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-6 gradient-text">Courses</h2>
                        <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ background: 'var(--gradient-primary)' }} />
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
                            className="hide-scrollbar flex gap-4 md:gap-6 overflow-x-auto px-6 md:px-12 py-2 scroll-smooth snap-x snap-mandatory"
                        >
                            {courses.map((course, index) => (
                                <a
                                    key={index}
                                    href={course.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flip-card w-28 h-28 md:w-36 md:h-36 shrink-0 snap-center"
                                    style={{animationDelay: `${index * 0.1}s`}}
                                >
                                    <div
                                        className="flip-card-inner cursor-pointer">
                                        <Card
                                            className="flip-card-front border-border bg-card flex items-center justify-center text-lg font-bold">
                                            {course.code}
                                        </Card>
                                        <Card
                                            className="flip-card-back border-border bg-card flex items-center justify-center p-2 text-center text-sm font-medium">
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