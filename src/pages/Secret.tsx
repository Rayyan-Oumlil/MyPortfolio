import { Heart, ArrowLeft } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const imageSources = [
    "/Souvenir2.jpeg",
    "/Souvenir3.jpeg",
    "/Souvenir4.jpeg",
    "/Souvenir5.jpeg",
    "/Souvenir6.jpeg",
    "/Souvenir7.jpeg",
];

// Canvas background with floating hearts
const AnimatedHeartsBackground = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let width = window.innerWidth;
        let height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };
        window.addEventListener("resize", handleResize);

        // Heart shape points
        function drawHeart(x, y, size, color, alpha) {
            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.beginPath();
            ctx.moveTo(x, y + size / 4);
            ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + size / 4);
            ctx.bezierCurveTo(x - size / 2, y + size / 2, x, y + size / 1.2, x, y + size);
            ctx.bezierCurveTo(x, y + size / 1.2, x + size / 2, y + size / 2, x + size / 2, y + size / 4);
            ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + size / 4);
            ctx.closePath();
            ctx.fillStyle = color;
            ctx.shadowColor = color;
            ctx.shadowBlur = 16;
            ctx.fill();
            ctx.restore();
        }

        // Hearts array
        const hearts = Array.from({ length: 18 }).map(() => ({
            x: Math.random() * width,
            y: Math.random() * height,
            size: 18 + Math.random() * 32,
            speed: 0.3 + Math.random() * 0.7,
            drift: (Math.random() - 0.5) * 0.5,
            color: ["#ff6ac1", "#7f5af0", "#f25f4c", "#2cb67d"][Math.floor(Math.random() * 4)],
            alpha: 0.18 + Math.random() * 0.22,
        }));

        let running = true;
        function animate() {
            if (!running) return;
            ctx.clearRect(0, 0, width, height);
            for (const h of hearts) {
                drawHeart(h.x, h.y, h.size, h.color, h.alpha);
                h.y -= h.speed;
                h.x += h.drift;
                if (h.y + h.size < 0) {
                    h.y = height + h.size;
                    h.x = Math.random() * width;
                }
            }
            requestAnimationFrame(animate);
        }
        animate();
        return () => {
            running = false;
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full z-0 pointer-events-none"
            style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh" }}
        />
    );
};

const Secret = () => {
    const [liked, setLiked] = useState(Array(6).fill(false));
    const navigate = useNavigate();

    const toggleLike = (index: number) =>
        setLiked((l) => l.map((v, i) => (i === index ? !v : v)));

    return (
        <div className="relative min-h-screen py-12 bg-gradient-to-br from-rose-950/80 via-indigo-950/60 to-rose-900/80 text-rose-100 overflow-hidden">
            <AnimatedHeartsBackground />
            {/* Bouton Retour */}
            <button
                onClick={() => navigate("/")}
                className="fixed top-6 left-6 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-rose-100 shadow-xl backdrop-blur-lg hover:bg-rose-800/80 transition-all duration-300 border border-rose-300/30 ring-1 ring-white/20"
                style={{backdropFilter: 'blur(8px)'}}
            >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Retour</span>
            </button>
            <div className="container mx-auto space-y-16 relative z-10">
                <header className="text-center space-y-4 animate-fade-in-up">
                    <h1 className="text-5xl font-bold drop-shadow-2xl animate-fade-in-up bg-clip-text text-transparent bg-gradient-to-r from-rose-400 via-fuchsia-400 to-indigo-400">
                        Pour toi Inas, Mon amour
                    </h1>
                    <p className="text-lg animate-fade-in-up delay-200 text-rose-100/90">
                        Quelques souvenirs juste pour nous deux mv.
                    </p>
                </header>

                <section className="space-y-6 animate-fade-in-up delay-300">
                    <h2 className="text-center text-3xl font-semibold text-rose-100/90">Galerie de souvenirs</h2>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {imageSources.map((src, i) => (
                            <div
                                key={i}
                                className="relative aspect-square overflow-hidden rounded-3xl border border-rose-300/30 bg-white/10 group shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-rose-400/30 animate-fade-in-up backdrop-blur-lg"
                                style={{ animationDelay: `${i * 120}ms`, boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)' }}
                            >
                                <img
                                    src={src}
                                    alt={`Souvenir ${i + 1}`}
                                    className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-110 rounded-3xl shadow-lg"
                                />

                                <button
                                    className={cn(
                                        "absolute top-2 right-2 p-2 rounded-full backdrop-blur bg-rose-900/60 transition-all duration-300 hover:scale-125 active:scale-95 border border-white/20 shadow-md",
                                        liked[i] && "animate-like-bounce"
                                    )}
                                    onClick={() => toggleLike(i)}
                                >
                                    <Heart
                                        className={cn(
                                            "w-6 h-6 transition-all duration-300 drop-shadow-xl",
                                            liked[i] ? "fill-rose-500 text-rose-500" : "text-rose-200"
                                        )}
                                    />
                                </button>

                                {/* Effet de lumière glassmorphism */}
                                <div className="absolute inset-0 pointer-events-none rounded-3xl" style={{background: 'radial-gradient(circle at 70% 20%, rgba(255,255,255,0.12) 0%, transparent 70%)'}} />
                            </div>
                        ))}
                    </div>
                </section>
                <section className="space-y-8 text-center max-w-3xl mx-auto animate-fade-in-up delay-500">
                    <h2 className="text-3xl font-semibold text-rose-100/90">Quelques mots pour toi</h2>
                    <div className="space-y-2">
                        <p className="text-lg text-rose-100 leading-relaxed italic animate-fade-in-up delay-700 bg-white/10 rounded-xl px-4 py-2 shadow-inner backdrop-blur-md">
                            "Je t'aime tellement."
                        </p>
                        <p className="text-lg text-rose-100 leading-relaxed italic animate-fade-in-up delay-900 bg-white/10 rounded-xl px-4 py-2 shadow-inner backdrop-blur-md">
                            "Tu me manques trop."
                        </p>
                        <p className="text-lg text-rose-100 leading-relaxed italic animate-fade-in-up delay-1100 bg-white/10 rounded-xl px-4 py-2 shadow-inner backdrop-blur-md">
                            "J’ai juste besoin de toi."
                        </p>
                    </div>
                </section>

                <section className="space-y-6 animate-fade-in-up delay-700">
                    <h2 className="text-center text-3xl font-semibold text-rose-100/90">Notre vidéo memorable hhh</h2>
                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-rose-300/30 bg-white/10 backdrop-blur-lg">
                        <video
                            controls
                            className="w-full aspect-video rounded-3xl shadow-xl"
                        >
                            <source src="/BEAE701A-D146-4651-B19C-40BCCD1BAED3.mp4" type="video/mp4"/>
                            Votre navigateur ne supporte pas la vidéo.
                        </video>
                        {/* Effet de lumière glassmorphism */}
                        <div className="absolute inset-0 pointer-events-none rounded-3xl" style={{background: 'radial-gradient(circle at 30% 80%, rgba(255,255,255,0.10) 0%, transparent 70%)'}} />
                    </div>
                </section>
                <section className="space-y-6 animate-fade-in-up delay-900">
                    <h2 className="text-center text-3xl font-semibold text-rose-100/90">Un nuage de "Je t'aime" rien que pour toi</h2>
                    <div className="relative flex justify-center items-center" style={{ minHeight: '260px', height: '260px' }}>
                        <TypewriterCloud text="Je t'aime" count={7} />
                    </div>
                </section>
            </div>
            {/* Animations CSS */}
            <style>{`
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(40px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 1s cubic-bezier(.4,0,.2,1) both;
                }
                .delay-200 { animation-delay: 0.2s; }
                .delay-300 { animation-delay: 0.3s; }
                .delay-500 { animation-delay: 0.5s; }
                .delay-700 { animation-delay: 0.7s; }
                .delay-900 { animation-delay: 0.9s; }
                .delay-1100 { animation-delay: 1.1s; }
                @keyframes like-bounce {
                    0% { transform: scale(1); }
                    30% { transform: scale(1.4); }
                    60% { transform: scale(0.9); }
                    100% { transform: scale(1); }
                }
                .animate-like-bounce {
                    animation: like-bounce 0.5s cubic-bezier(.4,0,.2,1);
                }
                .group:hover .group-hover\:scale-110 {
                    transform: scale(1.10);
                }
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0; }
                }
                .typewriter-cursor {
                    display: inline-block;
                    width: 1ch;
                    animation: blink 1s steps(1) infinite;
                }
            `}</style>
        </div>
    );
};

// Artistic cloud typewriter effect
const TypewriterCloud = ({ text, count = 7 }) => {
    // Styles artistiques pour chaque "Je t'aime" en couleurs romantiques
    const configs = [
        { size: 'text-6xl md:text-8xl', opacity: 'opacity-90', blur: '', color: 'from-rose-400 via-fuchsia-400 to-pink-500', x: 0, y: 0, z: 30 },
        { size: 'text-4xl md:text-6xl', opacity: 'opacity-70', blur: 'blur-[1.5px]', color: 'from-pink-500 via-rose-400 to-fuchsia-400', x: 60, y: -40, z: 20 },
        { size: 'text-3xl md:text-5xl', opacity: 'opacity-60', blur: 'blur-[2px]', color: 'from-fuchsia-400 via-pink-400 to-rose-400', x: -70, y: -30, z: 18 },
        { size: 'text-2xl md:text-4xl', opacity: 'opacity-50', blur: 'blur-[2.5px]', color: 'from-rose-500 via-pink-400 to-fuchsia-400', x: 80, y: 50, z: 15 },
        { size: 'text-2xl md:text-4xl', opacity: 'opacity-50', blur: 'blur-[2.5px]', color: 'from-fuchsia-400 via-rose-400 to-pink-500', x: -90, y: 60, z: 15 },
        { size: 'text-xl md:text-3xl', opacity: 'opacity-40', blur: 'blur-[3px]', color: 'from-pink-400 via-fuchsia-400 to-rose-400', x: 0, y: 90, z: 10 },
        { size: 'text-xl md:text-3xl', opacity: 'opacity-40', blur: 'blur-[3px]', color: 'from-rose-400 via-pink-400 to-fuchsia-400', x: 0, y: -90, z: 10 },
    ];
    return (
        <>
            {configs.map((cfg, i) => (
                <TypewriterText
                    key={i}
                    text={text}
                    delay={i * 400}
                    className={`absolute left-1/2 top-1/2 ${cfg.size} ${cfg.opacity} ${cfg.blur} font-extrabold drop-shadow-xl bg-clip-text text-transparent bg-gradient-to-r ${cfg.color}`}
                    style={{
                        transform: `translate(-50%, -50%) translate(${cfg.x}px, ${cfg.y}px) scale(${1 - i * 0.08})`,
                        zIndex: cfg.z,
                        pointerEvents: 'none',
                        whiteSpace: 'nowrap',
                    }}
                />
            ))}
        </>
    );
};

// Typewriter effect component
const TypewriterText = ({ text, className = "", delay = 0, style = {} }) => {
    const [displayed, setDisplayed] = useState("");
    const [index, setIndex] = useState(0);
    useEffect(() => {
        let timeout;
        if (index === 0 && delay > 0) {
            timeout = setTimeout(() => setIndex(1), delay);
            return () => clearTimeout(timeout);
        }
        if (index > 0 && index <= text.length) {
            timeout = setTimeout(() => {
                setDisplayed((prev) => prev + text[index - 1]);
                setIndex(index + 1);
            }, 120);
            return () => clearTimeout(timeout);
        } else if (index > text.length) {
            // Pause, puis recommence
            timeout = setTimeout(() => {
                setDisplayed("");
                setIndex(1);
            }, 1200);
            return () => clearTimeout(timeout);
        }
    }, [index, text, delay]);
    return (
        <span className={className} style={style}>
            {displayed}
            <span className="typewriter-cursor">|</span>
        </span>
    );
};

export default Secret;