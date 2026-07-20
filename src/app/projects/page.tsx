'use client';

import Header from '@/components/Header';
import PortfolioSection from '@/components/projects/PortfolioSection';
import React, { useState } from 'react';

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="url(#instagram-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <defs>
      <linearGradient id="instagram-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f58529" />
        <stop offset="25%" stopColor="#dd2a7b" />
        <stop offset="50%" stopColor="#8134af" />
        <stop offset="100%" stopColor="#515bd4" />
      </linearGradient>
    </defs>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function ProjectsPage() {
  const [isArabic, setIsArabic] = useState(false);

  const ft = {
    en: {
      dir: 'ltr',
      navHome: 'Home',
      navServices: 'Services',
      navProjects: 'Projects',
      navContact: 'Contact',
      footerRights: '© 2026 ETMAM Engineering Services. All rights reserved.',
    },
    ar: {
      dir: 'rtl',
      navHome: 'الرئيسية',
      navServices: 'خدماتنا',
      navProjects: 'مشاريعنا',
      navContact: 'اتصل بنا',
      footerRights: '© 2026 إتمام للخدمات الهندسية. جميع الحقوق محفوظة.',
    },
  };

  const t = isArabic ? ft.ar : ft.en;

  return (
    <>
      <Header />

      <main
        style={{
          minHeight: '100vh',
          backgroundColor: '#f8fafc',
        }}
      >
        <PortfolioSection />
      </main>

      <footer dir={t.dir} style={{ backgroundColor: '#071120', borderTop: '1px solid rgba(255, 255, 255, 0.05)', padding: '40px 6% 30px 6%', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: t.dir === 'rtl' ? 'right' : 'left', gap: '8px' }}>
            <img src="/logo.png" alt="ETMAM Logo" style={{ height: '120px', width: 'auto', objectFit: 'contain', alignSelf: t.dir === 'rtl' ? 'flex-end' : 'flex-start' }} />
            <span style={{ fontSize: '11px', color: '#8A7355', textTransform: 'uppercase', fontWeight: 'bold', marginTop: '4px' }}>Engineering Services</span>
          </div>

          <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: t.dir === 'rtl' ? 'right' : 'left' }}>
              <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#ffffff', marginBottom: '5px' }}>Sitemap</span>
              <a href="/" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '13px' }}>{t.navHome}</a>
              <a href="/Services" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '13px' }}>{t.navServices}</a>
              <a href="/projects" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '13px' }}>{t.navProjects}</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: t.dir === 'rtl' ? 'right' : 'left' }}>
              <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#ffffff', marginBottom: '5px' }}>{t.navContact}</span>
              <a href="https://instagram.com/ETMAM_engineering" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', flexDirection: t.dir === 'rtl' ? 'row-reverse' : 'row' }}>
                <InstagramIcon size={16} /> Instagram
              </a>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: '1200px', margin: '40px auto 0 auto', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', fontSize: '12px', color: '#94a3b8' }}>
          {t.footerRights}
        </div>
      </footer>
    </>
  );
}
