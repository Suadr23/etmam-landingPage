'use client';

import React, { useEffect, useMemo, useState } from 'react';

type NavItem = {
  label: string;
  href: string;
};

export default function Header() {
  const [isArabic, setIsArabic] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const t = useMemo(() => {
    if (isArabic) {
      return {
        dir: 'rtl' as const,
        navHome: 'الرئيسية',
        navServices: 'خدماتنا',
        navProjects: 'مشاريعنا',
        navAbout: 'مَن نحن؟',
        navContact: 'اتصل بنا',
        toggleLang: 'English',
      };
    }
    return {
      dir: 'ltr' as const,
      navHome: 'Home',
      navServices: 'Services',
      navProjects: 'Projects',
      navAbout: 'About Us',
      navContact: 'Contact',
      toggleLang: 'العربية',
    };
  }, [isArabic]);

  const nav: NavItem[] = useMemo(
    () => [
      { label: t.navHome, href: '/' },
      { label: t.navServices, href: '/Services' },
      { label: t.navProjects, href: '/projects' },
      { label: t.navAbout, href: '/' }, // About is a section on Home (#about-section)
    ],
    [t.navAbout, t.navHome, t.navProjects, t.navServices]
  );

  function goAbout() {
    setMobileOpen(false);
    const el = document.getElementById('about-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.location.href = '/';
  }

  return (
   <header
  dir={t.dir}
  style={{
    width: '100%',
    padding: '30px 6% 0 6%',
    boxSizing: 'border-box',
    fontFamily: 'Arial, sans-serif',
  }}
>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          maxWidth: 1200,
          margin: '0 auto 30px auto',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img
            src="/logo.png"
            alt="ETMAM Logo"
            style={{ height: '120px', width: 'auto', objectFit: 'contain' }}
          />
        </div>

        {/* Desktop nav */}
        <nav
          aria-label="Primary navigation"
          style={{
            display: 'none',
            gap: 25,
            fontWeight: 500,
            alignItems: 'center',
          }}
          className="bb-header-desktop"
        >
          {nav.map((item) => {
            if (item.label === t.navAbout) {
              return (
                <a
                  key={item.label}
                  href="#about-section"
                  onClick={(e) => {
                    e.preventDefault();
                    goAbout();
                  }}
                  style={{ color: '#0A192F', textDecoration: 'none' }}
                >
                  {item.label}
                </a>
              );
            }

            return (
              <a
                key={item.href}
                href={item.href}
                style={{ color: '#0A192F', textDecoration: 'none' }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            );
          })}

          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setMobileOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: 4,
              fontWeight: 'bold',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
            }}
          >
            {t.navContact}
          </a>
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button
            type="button"
            onClick={() => setIsArabic((s) => !s)}
            style={{
              backgroundColor: 'transparent',
              color: '#0A192F',
              border: '1px solid #0A192F',
              padding: '8px 18px',
              borderRadius: 4,
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {isArabic ? 'English' : 'العربية'}
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="bb-header-mobile-btn"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((s) => !s)}
            style={{
              backgroundColor: 'transparent',
              color: '#0A192F',
              border: '1px solid #0A192F',
              padding: '8px 12px',
              borderRadius: 6,
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              lineHeight: 1,
            }}
          >
            <span style={{ display: 'inline-block', width: 18, height: 12, position: 'relative' }}>
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 0,
                  height: 2,
                  background: '#0A192F',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  top: 5,
                  height: 2,
                  background: '#0A192F',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  right: 0,
                  bottom: 0,
                  height: 2,
                  background: '#0A192F',
                }}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className="bb-header-mobile-menu"
        style={{
          display: mobileOpen ? 'block' : 'none',
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 0 20px 0',
        }}
      >
        <nav
          aria-label="Mobile navigation"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
          }}
        >
          <a
            href="/"
            onClick={() => setMobileOpen(false)}
            style={{ color: '#475569', textDecoration: 'none', fontWeight: 600 }}
          >
            {t.navHome}
          </a>

          <a
            href="/Services"
            onClick={() => setMobileOpen(false)}
            style={{ color: '#475569', textDecoration: 'none', fontWeight: 600 }}
          >
            {t.navServices}
          </a>

          <a
            href="/projects"
            onClick={() => setMobileOpen(false)}
            style={{ color: '#475569', textDecoration: 'none', fontWeight: 600 }}
          >
            {t.navProjects}
          </a>

          <a
            href="#about-section"
            onClick={(e) => {
              e.preventDefault();
              goAbout();
            }}
            style={{ color: '#475569', textDecoration: 'none', fontWeight: 600 }}
          >
            {t.navAbout}
          </a>

          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              setMobileOpen(false);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: 8,
              fontWeight: 'bold',
              cursor: 'pointer',
              textDecoration: 'none',
              textAlign: 'center',
              width: 'fit-content',
            }}
          >
            {t.navContact}
          </a>
        </nav>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .bb-header-desktop { display: flex !important; }
          .bb-header-mobile-btn { display: none !important; }
          .bb-header-mobile-menu { display: none !important; }
        }
        @media (max-width: 767px) {
          .bb-header-mobile-btn { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
}

