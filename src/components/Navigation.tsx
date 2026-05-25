import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { label: "About",    href: "about" },
  { label: "Work",     href: "work" },
  { label: "Awards",   href: "awards" },
  { label: "Stack",    href: "skills" },
  { label: "Contact",  href: "contact" },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("index");
  const [clock, setClock] = useState("");
  const [lang, setLang] = useState<"en" | "fr">("en");

  useEffect(() => {
    const tick = () => {
      const opts: Intl.DateTimeFormatOptions = {
        timeZone: "America/Montreal",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setClock(new Intl.DateTimeFormat("en-CA", opts).format(new Date()) + " EST");
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("main section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="top">
      <div className="brand">
        <span className="dot" />
        <span>Rayyan Oumlil</span>
        <span style={{ color: "var(--fg-dimmer)", marginLeft: 4 }}>/ CS '28</span>
      </div>

      <div className="nav-links">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.href}
            href={`#${item.href}`}
            className={activeSection === item.href ? "active" : ""}
            onClick={(e) => { e.preventDefault(); scrollTo(item.href); }}
          >
            {item.label}
          </a>
        ))}
      </div>

      <div className="nav-right">
        <div className="lang-toggle">
          <button
            className={lang === "en" ? "active" : ""}
            onClick={() => setLang("en")}
          >
            EN
          </button>
          <button
            className={lang === "fr" ? "active" : ""}
            onClick={() => setLang("fr")}
          >
            FR
          </button>
        </div>
        <div className="clock">{clock}</div>
      </div>
    </nav>
  );
};

export default Navigation;
