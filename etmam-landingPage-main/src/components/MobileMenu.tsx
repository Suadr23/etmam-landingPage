'use client';

import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

/**
 * Shared, unified mobile navigation menu.
 *
 * - Renders an identical structure on every page (single source of truth).
 * - Uses a luxurious glassmorphism card with dark navy text so it stays
 *   readable on both light and dark header backgrounds.
 * - Closes automatically when the user clicks/taps anywhere outside the box
 *   (backdrop click / outside-click listener).
 */
export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { t, dir } = useLanguage();
  const menuRef = useRef<HTMLDivElement>(null);

  // Internal nav links point to the real routes. The active language is
  // rendered from the persisted language state (cookie), not from the URL.
  const homePath = '/';

  // Close the menu when clicking/tapping anywhere outside the box.
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [open, onClose]);

function goAbout() {
    onClose();
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

  function goHomeTop() {
    onClose();
    if (window.location.pathname === homePath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.href = homePath;
    }
  }

  const linkStyle: React.CSSProperties = {
    color: '#0A192F',
    textDecoration: 'none',
    fontWeight: 600,
    fontSize: '16px',
    padding: '12px 14px',
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    transition: 'all 0.25s ease',
  };

  return (
    <div
      ref={menuRef}
      className="bb-mobile-menu"
      style={{
        display: open ? 'block' : 'none',
        margin: '12px auto 0 auto',
        maxWidth: 1200,
        width: '100%',
        padding: '0 6%',
        boxSizing: 'border-box',
      }}
    >
      <nav
        aria-label="Mobile navigation"
        dir={dir}
        className="bb-mobile-menu-box"
      >
        <a href={homePath} onClick={(e) => { e.preventDefault(); goHomeTop(); }} style={linkStyle}>
          {t.navHome}
        </a>

        <a href="/Services" onClick={onClose} style={linkStyle}>
          {t.navServices}
        </a>

        <a href="/projects" onClick={onClose} style={linkStyle}>
          {t.navProjects}
        </a>

<a
          href="/#about-us"
          onClick={(e) => { e.preventDefault(); goAbout(); }}
          style={linkStyle}
        >
          {t.navAbout}
        </a>
      </nav>
    </div>
  );
}
