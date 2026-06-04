import { useEffect, useRef } from "react";
import { useLang } from "../context/LanguageContext";

const About = () => {
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
    <section id="about" ref={sectionRef}>
      <div className="section-header reveal">
        <span className="idx">02 /</span>
        <span>{t("About", "À propos")}</span>
        <span className="line" />
        <span>// who</span>
      </div>

      <div className="about-grid">
        <div className="about-lead reveal">
          {lang === "fr"
            ? <>Étudiant en <em>2e année d'informatique</em> à l'Université de Montréal. Je construis des choses qui sont <em>livrées</em> — des systèmes IA multi-agents aux plateformes full-stack. 5+ hackathons cette année.</>
            : <>2nd year <em>CS student</em> at Université de Montréal. I build things that actually <em>ship</em> — from multi-agent AI systems to full-stack platforms. Competed in 5+ hackathons this year.</>
          }
        </div>

        <div className="about-meta reveal">
          <div>
            <div className="label">Location</div>
            <div className="val">Montréal, QC · Canada</div>
          </div>
          <div>
            <div className="label">Status</div>
            <div className="val">Engaged · BNC Capital Markets</div>
          </div>
          <div>
            <div className="label">Education</div>
            <div className="val">Université de Montréal · CS, '28</div>
          </div>
          <div>
            <div className="label">Languages</div>
            <div className="val">EN · FR · AR</div>
          </div>
          <div>
            <div className="label">Email</div>
            <div className="val">
              <a href="mailto:rayyanoumlil@gmail.com">rayyanoumlil@gmail.com</a>
            </div>
          </div>
          <div>
            <div className="label">Phone</div>
            <div className="val">+1 438 493 0288</div>
          </div>
          <div>
            <div className="label">GitHub</div>
            <div className="val">
              <a href="https://github.com/Rayyan-Oumlil" target="_blank" rel="noopener">Rayyan-Oumlil ↗</a>
            </div>
          </div>
          <div>
            <div className="label">LinkedIn</div>
            <div className="val">
              <a href="https://www.linkedin.com/in/rayyan-oumlil-871b192b6/" target="_blank" rel="noopener">rayyan-oumlil ↗</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
