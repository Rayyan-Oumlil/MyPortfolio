import { useEffect, useRef } from "react";
import { useLang } from "../context/LanguageContext";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { lang, t } = useLang();

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal");
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); observer.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
      <div
        className="section-header reveal"
        style={{ justifyContent: "center", maxWidth: 600, margin: "0 auto 40px" }}
      >
        <span className="idx">07 /</span>
        <span>Contact</span>
        <span className="line" />
      </div>

      <h2 className="reveal">
        {lang === "fr"
          ? <><em>Construisons</em><br />ensemble.</>
          : <>Let's <em>build</em><br />something.</>
        }
      </h2>

      <a className="email-btn reveal" href="mailto:rayyanoumlil@gmail.com">
        rayyanoumlil@gmail.com
        <span className="arrow">↗</span>
      </a>

      <div className="contact-links reveal">
        <a href="https://github.com/Rayyan-Oumlil" target="_blank" rel="noopener">GitHub</a>
        <a href="https://www.linkedin.com/in/rayyan-oumlil-871b192b6/" target="_blank" rel="noopener">LinkedIn</a>
        <a href="tel:+14384930288">+1 438 493 0288</a>
      </div>
    </section>
  );
};

export default Contact;
