'use client';

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { translations, type Lang } from './translations';
import { LANG_COOKIE, getInitialLang } from './lang';

const LANG_STORAGE = 'ETMAM_LANG';

export { getInitialLang };

type LanguageContextValue = {
  lang: Lang;
  isArabic: boolean;
  dir: 'ltr' | 'rtl';
  t: (typeof translations)['en'];
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
  initialLang = 'en',
}: {
  children: React.ReactNode;
  initialLang?: Lang;
}) {
  const [lang, setLangState] = useState<Lang>(initialLang);

  // Restore from localStorage (takes precedence if present) on mount.
  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(LANG_STORAGE);
      if (stored === 'ar' || stored === 'en') {
        setLangState(stored);
      }
    } catch {
      /* ignore private-mode errors */
    }
  }, []);

// Sync <html>/<body> direction attributes and persist to cookie + localStorage
  // whenever lang changes, so the layout/text direction follows the language.
  useEffect(() => {
    const root = document.documentElement;
    const dirValue = lang === 'ar' ? 'rtl' : 'ltr';
    root.lang = lang;
    root.dir = dirValue;
    document.body.dir = dirValue;

    try {
      window.localStorage.setItem(LANG_STORAGE, lang);
    } catch {
      /* ignore private-mode errors */
    }

    const maxAge = 60 * 60 * 24 * 365; // 1 year
    document.cookie = `${LANG_COOKIE}=${lang};path=/;max-age=${maxAge};SameSite=Lax`;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => (prev === 'en' ? 'ar' : 'en'));
  }, []);

  const isArabic = lang === 'ar';
  const dir: 'ltr' | 'rtl' = isArabic ? 'rtl' : 'ltr';
  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, isArabic, dir, t, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a <LanguageProvider>');
  }
  return ctx;
}

