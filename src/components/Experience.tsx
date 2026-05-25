import { useEffect, useRef } from "react";

const EXPERIENCE = [
  {
    date: "2026 — NOW",
    title: "Full Stack Engineer Intern",
    company: "National Bank of Canada",
    sub: "Capital Markets TI",
    stack: ["Java", "Spring Boot", "React", "Microservices"],
    num: "01",
  },
  {
    date: "2026 — NOW",
    title: "Software Developer",
    company: "PolyAI",
    sub: "Polytechnique Montréal",
    stack: ["DevOps", "Backend", "Python"],
    num: "02",
  },
  {
    date: "SEP — DEC 2025",
    title: "Software Engineer Intern",
    company: "ADVEN Consulting",
    sub: "",
    stack: ["Java", "Spring Boot", "WebSocket", "CI/CD", "82%+ Test Coverage"],
    num: "03",
  },
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
        <span>Work</span>
        <span className="line" />
        <span>// experience</span>
      </div>
      <h2 className="section-title reveal">
        Currently <em>shipping</em>.
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
