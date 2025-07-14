import { useEffect, useState } from "react";

export function useScrollProgress() {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", updateProgress);
        updateProgress(); // init

        return () => window.removeEventListener("scroll", updateProgress);
    }, []);

    return scrollProgress;
}
