import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Calendar } from "lucide-react";

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
            title: "IBM Full Stack Software Developer Professional Certificate",
            provider: "IBM",
            status: "Completed",
            logo: "/ibm.png",
            url: "https://www.coursera.org/professional-certificates/ibm-full-stack-cloud-developer",
            skills: ["Full Stack Development", "Software Engineering"]
        },
        {
            title: "NVIDIA Certified — Generative AI LLMs",
            provider: "NVIDIA",
            status: "Completed",
            logo: "/nvidia.png",
            url: "https://www.coursera.org/account/accomplishments/specialization/certificate/E78WREH80WBT",
            skills: ["Generative AI", "LLMs", "Machine Learning"]
        },
        {
            title: "Oracle Cloud Infrastructure Architect Associate",
            provider: "Oracle",
            status: "Completed",
            logo: "/oracle.png",
            url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=348CBC5F3147F8A0DE830CEB2B033A3934E1AA3C2405F280F8F4BE2D28ADDD20",
            skills: ["Cloud Architecture", "Oracle Cloud", "Infrastructure"]
        },
        {
            title: "Oracle Generative AI Professional",
            provider: "Oracle",
            status: "Completed",
            logo: "/oracle.png",
            url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=348CBC5F3147F8A0DE830CEB2B033A3934E1AA3C2405F280F8F4BE2D28ADDD20",
            skills: ["Generative AI", "Oracle Cloud", "AI"]
        },
        {
            title: "Oracle AI Foundations Associate",
            provider: "Oracle",
            status: "Completed",
            logo: "/oracle.png",
            url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=348CBC5F3147F8A0DE830CEB2B033A3934E1AA3C2405F280F8F4BE2D28ADDD20",
            skills: ["AI Foundations", "Oracle Cloud", "Machine Learning"]
        }
    ];


    return (
        <section
            id="certifications"
            ref={sectionRef}
            className="py-16 relative overflow-hidden z-10 bg-background"
            style={{ scrollMarginTop: '80px' }}
        >
            {/* Background Elements - Supprimés pour uniformité */}
            {/* <div className="absolute inset-0">
                <div className="absolute top-1/4 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            </div> */}

            <div className="container mx-auto px-6 relative z-10">
                <div className={`fade-in ${isVisible ? "visible" : ""}`}>
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-6 gradient-text">Certifications</h2>
                        <div className="w-24 h-1 mx-auto mb-8 rounded-full" style={{ background: 'var(--gradient-primary)' }} />
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Professional certifications and achievements
                        </p>
                    </div>

                    {/* Certification Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
                        {certifications.map((cert, index) => (
                                                          <Card key={index} className="p-4 md:p-6 border-border bg-card flex gap-4 items-start">
                                {cert.logo && (
                                    <img src={cert.logo} alt={cert.provider} className="w-10 h-10 object-contain" />
                                )}

                                <div className="flex-1 space-y-1">
                                    {cert.url ? (
                                        <a
                                            href={cert.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-lg font-semibold text-primary hover:underline"
                                        >
                                            {cert.title}
                                        </a>
                                    ) : (
                                        <h3 className="text-lg font-semibold text-foreground">{cert.title}</h3>
                                    )}

                                    <p className="text-sm text-muted-foreground">{cert.provider}</p>

                                    {cert.status && (
                                        <p className="text-xs text-muted-foreground">{cert.status}</p>
                                    )}

                                    {cert.skills && (
                                        <div className="flex flex-wrap gap-2 pt-2">
                                            {cert.skills.map((skill, i) => (
                                                <Badge key={i} variant="outline" className="text-xs">
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
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
