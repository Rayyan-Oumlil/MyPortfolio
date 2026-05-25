import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Hackathons from "../components/Hackathons";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // Dot-grid parallax on scroll
    const bgGrid = document.getElementById("bgGrid");
    const onScroll = () => {
      if (bgGrid) bgGrid.style.transform = `translate3d(0, ${window.scrollY * 0.15}px, 0)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Smooth scroll for all hash links
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === "A") {
        const href = target.getAttribute("href");
        if (href && href.startsWith("#") && href.length > 1) {
          const el = document.querySelector(href);
          if (el) { e.preventDefault(); el.scrollIntoView({ behavior: "smooth", block: "start" }); }
        }
      }
    };
    document.addEventListener("click", onClick);

    // Global reveal observer
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); revealObserver.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div style={{ background: "var(--bg)", minHeight: "100vh", width: "100%" }}>
      <div className="bg-grid" id="bgGrid" />
      <div className="bg-noise" />
      <div className="vignette" />

      <Navigation />

      <main>
        <Hero />
        <About />
        <Experience />
        <Hackathons />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
