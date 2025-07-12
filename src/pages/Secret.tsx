import { Heart } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const imageSources = [
    "/Souvenir1.png",
    "/Souvenir2.jpeg",
    "/Souvenir3.jpeg",
    "/Souvenir4.jpeg",
    "/Souvenir5.jpeg",
    "/Souvenir6.jpeg",
    "/Souvenir7.jpeg",
];

const hearts = Array.from({ length: 7 });

const Secret = () => {
    const [liked, setLiked] = useState(Array(7).fill(false));

    const toggleLike = (index: number) =>
        setLiked((l) => l.map((v, i) => (i === index ? !v : v)));

    return (
        <div className="relative min-h-screen py-12 bg-gradient-to-b from-rose-950/50 to-rose-900/50 text-rose-100 overflow-hidden">
            <HeartsBackground />
            <div className="container mx-auto space-y-16 relative z-10">
                <header className="text-center space-y-4">
                    <h1 className="text-5xl font-bold">Pour toi Inas, Mon amour</h1>
                    <p className="text-lg">Quelques souvenirs juste pour nous deux mv.</p>
                </header>

                <section className="space-y-6">
                    <h2 className="text-center text-3xl font-semibold">Galerie de souvenirs</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {imageSources.map((src, i) => (
                            <div
                                key={i}
                                className="relative aspect-square overflow-hidden rounded-lg border border-rose-300/50 bg-rose-200/10 group"
                            >
                                <img
                                    src={src}
                                    alt={`Souvenir ${i + 1}`}
                                    className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-105 rounded-lg shadow-xl"
                                />

                                <button
                                    className={cn(
                                        "absolute top-2 right-2 p-2 rounded-full backdrop-blur bg-rose-900/60 transition hover:scale-110",
                                        liked[i] && "animate-ping-short"
                                    )}
                                    onClick={() => toggleLike(i)}
                                >
                                    <Heart
                                        className={cn(
                                            "w-6 h-6 transition",
                                            liked[i] ? "fill-rose-500 text-rose-500" : "text-rose-200"
                                        )}
                                    />
                                </button>

                            </div>
                        ))}

                    </div>
                </section>
                <section className="space-y-8 text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-semibold">Quelques mots pour toi</h2>
                    <p className="text-lg text-rose-100 leading-relaxed italic animate-fade-in">
                        "Je t'aime tellement."
                    </p>
                    <p className="text-lg text-rose-100 leading-relaxed italic animate-fade-in delay-500">
                        "Tu me manques trop."
                    </p>
                    <p className="text-lg text-rose-100 leading-relaxed italic animate-fade-in delay-1000">
                        "J’ai juste besoin de toi."
                    </p>
                </section>


                <section className="space-y-6">
                    <h2 className="text-center text-3xl font-semibold">Notre vidéo memorable hhh</h2>
                    <div className="relative">
                        <video
                            controls
                            className="w-full aspect-video rounded-lg border border-rose-300/50 bg-rose-200/10"
                        >
                            <source src="/BEAE701A-D146-4651-B19C-40BCCD1BAED3.mp4" type="video/mp4"/>
                            Votre navigateur ne supporte pas la vidéo.
                        </video>
                    </div>
                </section>
            </div>
        </div>
    );
};

const HeartsBackground = () => (
    <svg
        className="absolute inset-0 w-full h-full pointer-events-none animate-pulse opacity-20 text-rose-300"
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            <symbol id="heart" viewBox="0 0 24 24" fill="currentColor">
                <path
                    d="M12 21C7.25 16.5 4 13.25 4 9.5 4 6.42 6.42 4 9.5 4c1.74 0 3.41.81 4.5 2.09C15.09 4.81 16.76 4 18.5 4 21.58 4 24 6.42 24 9.5c0 3.75-3.25 7-8 11.5l-4 3.5-4-3.5Z"/>
            </symbol>
        </defs>
        <use href="#heart" x="20%" y="10%" width="24" height="24"/>
        <use href="#heart" x="60%" y="30%" width="32" height="32" />
        <use href="#heart" x="80%" y="70%" width="20" height="20" />
        <use href="#heart" x="30%" y="80%" width="28" height="28" />
        <use href="#heart" x="50%" y="50%" width="24" height="24" />
    </svg>
);

export default Secret;