import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // Ajouter les événements pour les éléments interactifs
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => setIsHovering(true));
      el.addEventListener('mouseleave', () => setIsHovering(false));
    });

    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', () => setIsHovering(true));
        el.removeEventListener('mouseleave', () => setIsHovering(false));
      });
    };
  }, []);

  return (
    <>
      {/* Curseur principal avec effet de particules */}
      <div
        className="fixed pointer-events-none z-[9999] transition-transform duration-150 ease-out"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : isHovering ? 1.3 : 1})`,
        }}
      >
        <div className="relative">
          {/* Cercle principal avec gradient animé */}
          <div
            className={`w-6 h-6 rounded-full transition-all duration-300 ${
              isHovering 
                ? 'bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 shadow-lg shadow-purple-500/50' 
                : 'bg-gradient-to-r from-gray-800 to-gray-600'
            }`}
            style={{
              animation: isHovering ? 'rotate 2s linear infinite' : 'none',
            }}
          />
          
          {/* Anneau externe avec particules */}
          <div
            className={`absolute inset-0 rounded-full transition-all duration-500 ${
              isHovering 
                ? 'border-2 border-purple-400/60 scale-150' 
                : 'border border-gray-400/40 scale-125'
            }`}
            style={{
              animation: 'pulse-ring 2s infinite',
            }}
          />
          
          {/* Particules flottantes */}
          <div className="absolute inset-0">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 rounded-full transition-all duration-700 ${
                  isHovering ? 'bg-purple-400 opacity-100' : 'bg-gray-400 opacity-60'
                }`}
                style={{
                  left: `${50 + Math.sin(Date.now() * 0.001 + i * 60) * 25}%`,
                  top: `${50 + Math.cos(Date.now() * 0.001 + i * 60) * 25}%`,
                  animation: `orbit ${3 + i * 0.5}s infinite linear`,
                }}
              />
            ))}
          </div>

          {/* Effet de clic */}
          {isClicking && (
            <div
              className="absolute inset-0 rounded-full bg-white/30 scale-150 animate-ping"
              style={{ animationDuration: '0.3s' }}
            />
          )}
        </div>
      </div>

      {/* Traînée avec effet de particules */}
      <div
        className="fixed pointer-events-none z-[9998] transition-transform duration-300 ease-out"
        style={{
          left: mousePosition.x,
          top: mousePosition.y,
          transform: `translate(-50%, -50%) scale(${isHovering ? 0.6 : 0.4})`,
        }}
      >
        <div className="relative">
          {/* Cercle de traînée principal */}
          <div className={`w-12 h-12 rounded-full transition-all duration-500 ${
            isHovering 
              ? 'bg-gradient-to-r from-purple-400/20 to-pink-400/20 backdrop-blur-sm' 
              : 'bg-gray-400/10'
          }`} />
          
          {/* Particules de traînée */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 rounded-full transition-all duration-1000 ${
                isHovering ? 'bg-purple-300/40' : 'bg-gray-300/20'
              }`}
              style={{
                left: `${50 + Math.sin(Date.now() * 0.002 + i * 90) * 30}%`,
                top: `${50 + Math.cos(Date.now() * 0.002 + i * 90) * 30}%`,
                animation: `trail-float ${2 + i * 0.3}s infinite ease-in-out`,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CustomCursor; 