import { createContext, useContext, useState } from "react";

type Lang = "en" | "fr";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (en: string, fr: string) => string;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  setLang: () => {},
  t: (en) => en,
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  const t = (en: string, fr: string) => (lang === "fr" ? fr : en);
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => useContext(LanguageContext);
