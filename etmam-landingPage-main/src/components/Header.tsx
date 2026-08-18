'use client';

import React, { useEffect, useRef, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useLanguage } from '@/lib/LanguageContext';
import MobileMenu from '@/components/MobileMenu';

type NavItem = {
  label: string;
  href: string;
};

type HeaderProps = {
  /** 'light' = white text (for dark/hero backgrounds), 'dark' = navy text (default) */
  variant?: 'light' | 'dark';
  /** Optional extra buttons rendered on the right (e.g. custom content) */
  rightSlot?: React.ReactNode;
};

export default function Header({
  variant = 'dark',
  rightSlot,
}: HeaderProps) {
const { t, dir, toggleLang } = useLanguage();
  const pathname = usePathname();
const searchParams = useSearchParams();
const [mobileOpen, setMobileOpen] = useState(false);

  // Root home path (Arabic content is rendered from the persisted language
  // state, so the URL stays the same for both languages).
  const homePath = '/';
  // The Contact button only renders on the Home page.
  const isHome = pathname === '/';

  // Single state for the unified Contact dropdown
  const [contactOpen, setContactOpen] = useState(false);

  // Ref to the dropdown wrapper so we can detect click-outside
  const contactWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const shouldOpenContact = searchParams.get('openContact') === 'true';
    setContactOpen(shouldOpenContact);
  }, [searchParams]);

  // Close the Contact dropdown when clicking/tapping anywhere outside it
  useEffect(() => {
    if (!contactOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        contactWrapRef.current &&
        !contactWrapRef.current.contains(event.target as Node)
      ) {
        setContactOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [contactOpen]);

  // Internal nav links point to the real routes. The active language is
  // rendered from the persisted language state (cookie), not from the URL.
  const nav: NavItem[] = [
    { label: t.navHome, href: '/' },
    { label: t.navServices, href: '/Services' },
    { label: t.navProjects, href: '/projects' },
    { label: t.navAbout, href: '/' }, // About is a section on Home (#about-section)
  ];

function goAbout() {
    setMobileOpen(false);
const el = document.getElementById('about-us');
    if (el) {
      const headerOffset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top, behavior: 'smooth' });
} else {
      // On a non-home page: go to the home page's About anchor.
      window.location.href = `${homePath}#about-us`;
    }
  }

  const isLight = variant === 'light';
  const textColor = isLight ? '#ffffff' : '#0A192F';
  const borderColor = isLight ? 'rgba(255,255,255,0.6)' : '#0A192F';

  // Dropdown panel background & text colors (readable on both variants)
  const panelBg = isLight ? '#0a192f' : '#ffffff';
  const panelBorder = isLight ? '#1e293b' : '#e2e8f0';
  const panelText = isLight ? '#ffffff' : '#0A192F';
  const panelMuted = isLight ? '#94a3b8' : '#64748b';

  return (
   <header
  dir={dir}
  style={{
    width: '100%',
    padding: '30px 6% 0 6%',
    boxSizing: 'border-box',

    /* إزالة أي خط أو ظل من الهيدر */
    border: 'none',
    borderBottom: 'none',
    boxShadow: 'none',
    outline: 'none',

    position: 'relative',
    zIndex: 1000,
  }}
>
  <div
    className="bb-header-main"
    style={{
      display: 'flex',
      justifyContent: 'space-between',

      /* الشعار والـ Task Bar في نفس المستوى */
      alignItems: 'center',

      width: '100%',
      maxWidth: 1200,

      margin: '0 auto',
      gap: 30,

      border: 'none',
      borderBottom: 'none',
      boxShadow: 'none',
    }}
  
      >
        <div className="bb-header-logo" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a
            href={homePath}
            aria-label="ETMAM Home"
            onClick={() => setMobileOpen(false)}
            style={{ display: 'inline-flex', alignItems: 'center', textDecoration: 'none' }}
          >
            <img
              src="/logo.png"
              alt="ETMAM Logo"
              style={{ height: '160px', width: 'auto', objectFit: 'contain', transform: 'translateY(18px)', }}
            />
          </a>
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
                  href="/#about-us"
                  onClick={(e) => {
                    e.preventDefault();
                    goAbout();
                  }}
                  style={{ color: textColor, textDecoration: 'none' }}
                >
                  {item.label}
                </a>
              );
            }

            return (
              <a
                key={item.href}
                href={item.href}
                style={{ color: textColor, textDecoration: 'none' }}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="bb-header-actions" style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Language toggle */}
          <button
            type="button"
            onClick={toggleLang}
            style={{
              backgroundColor: isLight ? 'rgba(255,255,255,0.15)' : 'transparent',
              color: textColor,
              border: `1px solid ${borderColor}`,
              padding: '8px 18px',
              borderRadius: 4,
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '13px',
              whiteSpace: 'nowrap',
            }}
          >
            {t.toggleLang}
          </button>

{/* Optional right slot (e.g. custom content) — stays in the action bar */}
          {rightSlot && <div className="bb-header-right-slot">{rightSlot}</div>}

          {/* Single unified Contact button with dropdown arrow (Home page only) */}
          {isHome && (
          <div
            ref={contactWrapRef}
            className="bb-header-contact-wrap"
            style={{ position: 'relative' }}
          >
            <button
              type="button"
              className="bb-header-contact-btn"
              onClick={() => setContactOpen((s) => !s)}
              aria-expanded={contactOpen}
              aria-haspopup="true"
              style={{
                backgroundColor: '#2563eb',
                color: 'white',
                border: 'none',
                padding: '10px 22px',
                borderRadius: 4,
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 8,
                fontSize: '14px',
                whiteSpace: 'nowrap',
              }}
            >
              <span>{t.navContact}</span>
              <span
                style={{
                  fontSize: '10px',
                  opacity: 0.9,
                  transition: 'transform 0.2s ease',
                  transform: contactOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  display: 'inline-block',
                }}
              >
                ▼
              </span>
            </button>

            {/* Unified Contact dropdown — links + quick message form */}
            {contactOpen && (
              <div
                className="bb-header-contact-menu"
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 15px)',
                  [dir === 'rtl' ? 'left' : 'right']: 0,
                  width: '320px',
                  maxWidth: 'calc(100vw - 32px)',
                  backgroundColor: panelBg,
                  border: `1px solid ${panelBorder}`,
                  borderRadius: 12,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                  padding: '18px',
                  zIndex: 1000,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                  color: panelText,
                  boxSizing: 'border-box',
                }}
              >
                {/* Contact links */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
                  <a
                    href="mailto:info@ETMAMes.com"
                    style={{
                      color: 'inherit',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '6px 0',
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                    {t.contact.emailUs}
                  </a>
<a
href="https://api.whatsapp.com/send?phone=96872552026"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'inherit',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '6px 0',
                      width: '100%',
                      boxSizing: 'border-box',
                      position: 'relative',
                      zIndex: 10,
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.005 0C5.37 0 .002 5.368.002 12.006c0 2.092.548 4.136 1.593 5.94L.007 23.999l6.236-1.636a11.77 11.77 0 005.76 1.472h.005c6.635 0 12.003-5.368 12.003-12.005 0-3.21-1.249-6.234-3.522-8.506" />
                    </svg>
                    {t.contact.whatsapp}
                  </a>
                  <a
                    href="https://instagram.com/ETMAM_engineering"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'inherit',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '6px 0',
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                    {t.contact.instagram}
                  </a>
                  <a
                    href="https://maps.app.goo.gl/amtdfbDKruUuohLU7"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: 'inherit',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '6px 0',
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    {t.contact.googleMaps}
                  </a>
                </div>

                {/* Divider */}
                <div
                  style={{
                    height: 1,
                    backgroundColor: panelBorder,
                    marginBottom: '14px',
                  }}
                />

                {/* Quick Message form */}
                <p
                  style={{
                    margin: '0 0 10px 0',
                    fontWeight: 'bold',
                    fontSize: '14px',
                    color: panelText,
                  }}
                >
                  {t.contact.quickMessage}
                </p>
                <form
                  style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
                  onSubmit={(e) => e.preventDefault()}
                >
                  <input
                    type="text"
                    placeholder={t.contact.yourName}
                    aria-label={t.contact.yourName}
                    style={{
                      padding: '9px 12px',
                      borderRadius: 6,
                      border: `1px solid ${panelBorder}`,
                      backgroundColor: 'transparent',
                      color: panelText,
                      fontSize: '13px',
                      boxSizing: 'border-box',
                      width: '100%',
                    }}
                  />
                  <input
                    type="email"
                    placeholder={t.contact.yourEmail}
                    aria-label={t.contact.yourEmail}
                    style={{
                      padding: '9px 12px',
                      borderRadius: 6,
                      border: `1px solid ${panelBorder}`,
                      backgroundColor: 'transparent',
                      color: panelText,
                      fontSize: '13px',
                      boxSizing: 'border-box',
                      width: '100%',
                    }}
                  />
                  <textarea
                    placeholder={t.contact.yourMessage}
                    aria-label={t.contact.yourMessage}
                    rows={3}
                    style={{
                      padding: '9px 12px',
                      borderRadius: 6,
                      border: `1px solid ${panelBorder}`,
                      backgroundColor: 'transparent',
                      color: panelText,
                      fontSize: '13px',
                      resize: 'vertical',
                      boxSizing: 'border-box',
                      width: '100%',
                      fontFamily: 'inherit',
                    }}
                  />
                  <button
                    type="submit"
                    style={{
                      backgroundColor: '#2563eb',
                      color: 'white',
                      border: 'none',
                      padding: '10px 16px',
                      borderRadius: 6,
                      fontWeight: 'bold',
                      fontSize: '13px',
                      cursor: 'pointer',
                    }}
                  >
                    {t.contact.send}
                  </button>
</form>
              </div>
            )}
          </div>
          )}

{/* Mobile hamburger — single-element box-shadow icon */}
<button
            type="button"
            className={`bb-header-mobile-btn mobile-menu-toggle ${isLight ? 'menu-light' : 'menu-dark'}`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((s) => !s)}
            style={{
              color: textColor,
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <style>{`

  /* =====================================================
     HEADER — REMOVE WHITE LINE
  ===================================================== */

  .bb-header-main,
  .bb-header-main::before,
  .bb-header-main::after,
  .bb-header-logo,
  .bb-header-desktop,
  .bb-header-actions {
    border: none !important;
    border-bottom: none !important;
    box-shadow: none !important;
    outline: none !important;
  }

  /* منع أي خط يتم إنشاؤه بواسطة CSS خارجي */
  header,
  header::before,
  header::after {
    border-bottom: none !important;
    box-shadow: none !important;
  }

  header::before,
  header::after {
    display: none !important;
    content: none !important;
  }

  /* Task Bar */
  .bb-header-desktop {
    align-items: center !important;
    gap: 25px;
    margin: 0;
    padding: 0;
  }

  .bb-header-desktop a {
    border: none !important;
    text-decoration: none !important;
    box-shadow: none !important;
  }

  /* Header actions */
  .bb-header-actions {
    align-items: center !important;
    margin: 0;
    padding: 0;
  }

  @media (min-width: 768px) {
    .bb-header-desktop {
      display: flex !important;
    }

    .bb-header-mobile-btn {
      display: none !important;
    }

    .bb-mobile-menu {
      display: none !important;
    }
  }

  @media (max-width: 767px) {
    .bb-header-mobile-btn {
      display: inline-flex !important;
    }

    .bb-header-right-slot {
      display: inline-flex !important;
    }

    /* Mobile: force contact dropdown to appear as a centered, fixed panel
       so it does not overlap header text/logo and fits within the viewport. */
    .bb-header-contact-menu {
      position: fixed !important;
      top: 110px !important; /* placed below the header area on mobile */
      left: 50% !important;
      transform: translateX(-50%) !important;
      right: auto !important;
      width: calc(100% - 32px) !important;
      max-width: none !important;
      box-sizing: border-box !important;
      z-index: 1100 !important;
      max-height: calc(100vh - 140px) !important;
      overflow: auto !important;
      padding: 16px !important;
    }
  }

`}</style>
    </header>
  );
}
