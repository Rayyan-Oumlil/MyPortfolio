import { useEffect, useRef } from "react";
import { useLang } from "../context/LanguageContext";

const EXPERIENCE = [
  {
    date: "2026 — NOW",
    title: "Full Stack Engineer Intern",
    company: "National Bank of Canada",
    sub: "Capital Markets TI",
    desc: [
      "Shipped end-to-end features for National Bank's core Gestion Client platform, automating manual analyst workflows to remove operational bottlenecks.",
      "Re-architected payment-processing data parsing for ISO 20022 address validation ahead of the global SWIFT execution deadline.",
    ],
    stack: ["Java", "Spring Boot", "React", "Microservices"],
    num: "01",
  },
  {
    date: "2026 — NOW",
    title: "Software Developer",
    company: "PolyAI",
    sub: "Polytechnique Montréal",
    desc: [
      "DevOps & Backend developer on the dev team of Polytechnique Montréal's AI student club.",
      "Designed and built the backend for CoFoundAI, a hackathon team-matchmaking platform serving hundreds of students.",
    ],
    stack: ["DevOps", "Backend", "Python"],
    num: "02",
  },
  {
    date: "SEP 2025 — MAR 2026",
    title: "Analyst",
    company: "Club de Trading HEC",
    sub: "",
    desc: [
      "Backtested and refined quantitative trading strategies using Python in a competitive, collaborative trading environment.",
      "Built machine learning models for FX sentiment analysis and signal generation.",
    ],
    stack: ["Python", "Quantitative Research", "Trading", "Machine Learning"],
    num: "03",
  },
  {
    date: "SEP — DEC 2025",
    title: "Software Engineer Intern",
    company: "ADVEN Consulting",
    sub: "",
    desc: [
      "Built core backend services for RoutIA, an agricultural ride-hailing platform — auth, real-time chat, geolocation-based routing.",
      "Grew test coverage and set up automated CI/CD pipelines, enabling same-day deployments to staging and production.",
    ],
    stack: ["Java", "Spring Boot", "WebSocket", "CI/CD"],
    num: "04",
  },
];

const Experience = () => {
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
    <section id="work" ref={sectionRef}>
      <div className="section-header reveal">
        <span className="idx">03 /</span>
        <span>{t("Work", "Expérience")}</span>
        <span className="line" />
        <span>// experience</span>
      </div>
      <h2 className="section-title reveal">
        {lang === "fr"
          ? <>Actuellement <em>en production</em>.</>
          : <>Currently <em>shipping</em>.</>
        }
      </h2>

      <div className="exp-list" style={{ marginTop: 40 }}>
        {EXPERIENCE.map((exp) => (
          <div className="exp-row reveal" key={exp.num}>
            <div className="exp-date">{exp.date}</div>
            <div className="exp-main">
              <h3>{exp.title}</h3>
              <div className="company">
                <em>{exp.company}</em>
                {exp.sub ? ` — ${exp.sub}` : ""}
              </div>
              <ul className="exp-desc">
                {exp.desc.map((line) => <li key={line}>{line}</li>)}
              </ul>
              <div className="exp-stack">
                {exp.stack.map((s) => <span key={s}>{s}</span>)}
              </div>
            </div>
            <div className="exp-num">{exp.num}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
