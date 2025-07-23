import React from "react";

const AnimatedBackground: React.FC = () => (
  <div
    aria-hidden="true"
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 0,
      pointerEvents: "none",
      background: "linear-gradient(120deg, var(--primary), var(--secondary), var(--accent))",
      backgroundSize: "200% 200%",
      animation: "gradientMove 10s ease-in-out infinite",
      transition: "background 1s"
    }}
    className="animated-gradient-bg"
  />
);

export default AnimatedBackground;

// Ajoute l'animation CSS dans index.css :
// @keyframes gradientMove {
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// } 