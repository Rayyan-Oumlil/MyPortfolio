import { useEffect, useRef } from "react";
import { useLang } from "../context/LanguageContext";

const SKILL_GROUPS = [
  { label: "Languages",      count: "06", tags: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "Go"] },
  { label: "Backend",        count: "05", tags: ["Spring Boot", "FastAPI", "Node.js", "WebSocket", "Microservices"] },
  { label: "Frontend",       count: "04", tags: ["React", "Next.js", "Flutter", "Angular"] },
  { label: "AI / ML",        count: "07", tags: ["PyTorch", "LangChain", "LangGraph", "Google ADK", "CrewAI", "FAISS", "LegalBERT"] },
  { label: "Cloud / DevOps", count: "05", tags: ["AWS", "Docker", "GitHub Actions", "CI/CD", "Azure"] },
  { label: "Databases",      count: "05", tags: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase"] },
];

const MARQUEE_ITEMS = [
  "Python", "FastAPI", "React", "Spring Boot", "LangGraph",
  "PyTorch", "Next.js", "Google ADK", "AWS", "TypeScript",
  "CrewAI", "Docker", "PostgreSQL", "Gemini 2.5", "Java", "LangChain",
];

interface Cert {
  logoEl: React.ReactNode;
  name: string;
  issuer: string;
}

const CERTS: Cert[] = [
  {
    logoEl: (
      <div style={{ background: "#232f3e", borderRadius: 8, width: 54, height: 54, display: "grid", placeItems: "center", flexShrink: 0 }}>
        <span style={{ color: "#FF9900", fontFamily: "var(--display)", fontSize: 9, fontWeight: 700 }}>aws</span>
      </div>
    ),
    name: "Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
  },
  {
    logoEl: <div className="cert-logo"><img src="/nvidia.png" alt="NVIDIA" /></div>,
    name: "Generative AI with LLMs",
    issuer: "NVIDIA",
  },
  {
    logoEl: <div className="cert-logo"><img src="/oracle.png" alt="Oracle" /></div>,
    name: "OCI Architect Associate",
    issuer: "Oracle",
  },
  {
    logoEl: <div className="cert-logo"><img src="/oracle.png" alt="Oracle" /></div>,
    name: "GenAI Professional",
    issuer: "Oracle",
  },
  {
    logoEl: <div className="cert-logo"><img src="/oracle.png" alt="Oracle" /></div>,
    name: "AI Foundations",
    issuer: "Oracle",
  },
  {
    logoEl: (
      <div style={{ background: "#0066cc", borderRadius: 8, width: 54, height: 54, display: "grid", placeItems: "center", flexShrink: 0 }}>
        <span style={{ color: "#fff", fontFamily: "var(--display)", fontSize: 16, fontWeight: 700 }}>D</span>
      </div>
    ),
    name: "LLMOps",
    issuer: "DeepLearning.AI",
  },
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { lang, t } = useLang();

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const revealEls = section.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); revealObserver.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => revealObserver.observe(el));

    const groups = section.querySelectorAll(".skill-group");
    groups.forEach((group) => {
      group.querySelectorAll(".skill-tags span").forEach((tag, i) => {
        (tag as HTMLElement).style.setProperty("--i", String(i));
      });
    });

    const certsRow = section.querySelector(".certs-row");
    certsRow?.querySelectorAll(".cert").forEach((cert, i) => {
      (cert as HTMLElement).style.setProperty("--i", String(i));
    });

    const staggerObserver = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); staggerObserver.unobserve(e.target); }
      }),
      { threshold: 0.2 }
    );
    groups.forEach((el) => staggerObserver.observe(el));
    if (certsRow) staggerObserver.observe(certsRow);

    const tiltHandler = (group: Element) => {
      const el = group as HTMLElement;
      const onMove = (e: MouseEvent) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left;
        const y = e.clientY - r.top;
        const cx = r.width / 2;
        const cy = r.height / 2;
        el.style.transform = `perspective(900px) rotateX(${((y - cy) / cy) * -3}deg) rotateY(${((x - cx) / cx) * 3}deg)`;
        el.style.setProperty("--sx", `${(x / r.width) * 100}%`);
        el.style.setProperty("--sy", `${(y / r.height) * 100}%`);
      };
      const onLeave = () => { el.style.transform = "perspective(900px) rotateX(0) rotateY(0)"; };
      el.addEventListener("mousemove", onMove);
      el.addEventListener("mouseleave", onLeave);
      return () => { el.removeEventListener("mousemove", onMove); el.removeEventListener("mouseleave", onLeave); };
    };

    const cleanups = Array.from(groups).map(tiltHandler);

    return () => {
      revealObserver.disconnect();
      staggerObserver.disconnect();
      cleanups.forEach((fn) => fn());
    };
  }, []);

  const MarqueeContent = () => (
    <>
      {MARQUEE_ITEMS.map((item, i) => (
        <span key={i}>
          {i % 3 === 1
            ? <div className="marquee-item"><em>{item}</em></div>
            : <div className="marquee-item">{item}</div>
          }
          <div className="marquee-sep">/</div>
        </span>
      ))}
    </>
  );

  return (
    <section id="skills" ref={sectionRef}>
      <div className="section-header reveal">
        <span className="idx">06 /</span>
        <span>Stack</span>
        <span className="line" />
        <span>// toolkit</span>
      </div>
      <h2 className="section-title reveal">
        {lang === "fr"
          ? <>Outils que j'utilise <em>vraiment</em>.</>
          : <>Tools I <em>actually</em> use.</>
        }
      </h2>

      <div className="marquee reveal" style={{ marginTop: 60 }}>
        <div className="marquee-track" style={{ "--speed": "70s" } as React.CSSProperties}>
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>

      <div className="skills-grid" style={{ marginTop: 40 }}>
        {SKILL_GROUPS.map((group) => (
          <div className="skill-group reveal" key={group.label}>
            <div className="group-label">
              {group.label}
              <span className="count">{group.count}</span>
            </div>
            <div className="skill-tags">
              {group.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        ))}
      </div>

      <div className="section-header reveal" style={{ marginTop: 100 }}>
        <span className="idx">·</span>
        <span>Certifications</span>
        <span className="line" />
      </div>

      <div className="certs-row reveal">
        {CERTS.map((cert, i) => (
          <div className="cert" key={i}>
            {cert.logoEl}
            <div>
              <div className="cert-name">{cert.name}</div>
              <div className="cert-issuer">{cert.issuer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
