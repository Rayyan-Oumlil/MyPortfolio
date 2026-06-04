import { useEffect, useRef } from "react";
import { useLang } from "../context/LanguageContext";

const AWARDS = [
  { num: "01", lbl: "/ trophy",  title: "CS Games 2026",              sub: "22 Universities · 7 Trophies",     placement: "4th Overall" },
  { num: "02", lbl: "/ medal",   title: "Hackathon Santé Numérique",  sub: "2025 · AgentCareAI",               placement: "3rd Place"   },
  { num: "03", lbl: "/ datathon",title: "PolyFinances Datathon",      sub: "2025 · ReguAI",                    placement: "Finalist"    },
  { num: "04", lbl: "/ quantum", title: "Mil'HaQ Fest",               sub: "Mila Quantum ML Hackathon",        placement: "Participant"  },
  { num: "05", lbl: "/ ml",      title: "PolyAI Code ML Hackathon",   sub: "Oil Forecasting · NLP + XGBoost",  placement: "Participant"  },
  { num: "5+", lbl: "/ total",   title: "Hackathons This Year",       sub: "In a single academic year",        placement: "2025–26",     highlight: true },
];

const MARQUEE = [
  { num: "01", lbl: "CS Games 2026",                placement: "4th Overall" },
  { num: "02", lbl: "Hackathon Santé Numérique",    placement: "3rd Place"   },
  { num: "03", lbl: "PolyFinances Datathon 2025",   placement: "Finalist"    },
  { num: "04", lbl: "Mil'HaQ Fest · Mila Quantum ML", placement: "2025"     },
  { num: "05", lbl: "PolyAI Code ML · Oil Forecasting", placement: "2025"   },
];

const Hackathons = () => {
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

  const MarqueeContent = () => (
    <>
      {MARQUEE.map((item) => (
        <span key={item.num}>
          <div className="marquee-tag">
            <span className="num">{item.num}</span>
            <span className="lbl">{item.lbl}</span>
            <span className="placement">{item.placement}</span>
          </div>
          <span className="marquee-dot" />
        </span>
      ))}
    </>
  );

  return (
    <section id="awards" ref={sectionRef}>
      <div className="section-header reveal">
        <span className="idx">05 /</span>
        <span>{t("Awards", "Distinctions")}</span>
        <span className="line" />
        <span>// hackathons</span>
      </div>
      <h2 className="section-title reveal">
        {lang === "fr"
          ? <><em>Récompenses</em>.</>
          : <>Trophy <em>shelf</em>.</>
        }
      </h2>

      <div className="marquee reveal" style={{ marginTop: 60 }}>
        <div className="marquee-track" style={{ "--speed": "50s" } as React.CSSProperties}>
          <MarqueeContent />
          <MarqueeContent />
        </div>
      </div>

      <div className="awards-grid" style={{ marginTop: 40 }}>
        {AWARDS.map((award) => (
          <div
            className="award reveal"
            key={award.num}
            style={award.highlight ? {
              background: "linear-gradient(145deg, var(--accent-soft), transparent)",
              borderColor: "var(--accent)",
            } : undefined}
          >
            <div className="icon">
              <span className="num" style={award.highlight ? { color: "var(--accent)" } : undefined}>
                {award.num}
              </span>
              <span className="lbl">{award.lbl}</span>
            </div>
            <div>
              <div className="title">{award.title}</div>
              <div className="sub">{award.sub}</div>
            </div>
            <div className="placement">{award.placement}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hackathons;
