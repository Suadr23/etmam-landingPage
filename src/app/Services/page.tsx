'use client';
import Header from '@/components/Header';
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
const content = {
  en: {
    dir: 'ltr',
    navHome: 'Home',
    navServices: 'Services',
    navProjects: 'Projects',
    navAbout: 'About Us',
    navContact: 'Contact',
    backHome: 'Back to Home',
    pill: 'Corporate Services',
    title: 'Our Services',
    card1Title: 'Infrastructure Development',
    card2Title: 'Commercial Buildings',
    card3Title: 'Urban Solutions',
    card1Text:
      'Integrated engineering for infrastructure development with top quality and safety standards.',
    card2Text:
      'Construction and design management to ensure premium and well-engineered delivery.',
    card3Text:
      'Sustainable urban and civil solutions to elevate project value with safety.',
    footerRights: '© 2026 ETMAM Engineering Services. All rights reserved.',
  },
  ar: {
    dir: 'rtl',
    navHome: 'الرئيسية',
    navServices: 'خدماتنا',
    navProjects: 'مشاريعنا',
    navAbout: 'مَن نحن؟',
    navContact: 'اتصل بنا',
    backHome: 'العودة للرئيسية',
    pill: 'خدمات متكاملة',
    title: 'خدماتنا',
    card1Title: 'تطوير البنية التحتية',
    card2Title: 'المباني التجارية',
    card3Title: 'الحلول الحضرية والمدنية',
    card1Text:
      'هندسة تنفيذية متكاملة لتطوير البنية التحتية وفق أعلى معايير الجودة والسلامة.',
    card2Text: 'إدارة مشاريع البناء والتصميم بكفاءة عالية لضمان تسليم فاخر ومُحكم.',
    card3Text:
      'حلول حضرية ومدنية مستدامة تساعد على رفع قيمة المشاريع وتنفيذها بأمان.',
    footerRights: '© 2026 إتمام للخدمات الهندسية. جميع الحقوق محفوظة.',
  },
} as const;

export default function ServicesPage() {
  const [isArabic, setIsArabic] = useState(false);
  const t = isArabic ? content.ar : content.en;
  const dir = t.dir;
  const footerBg = '#071120';

  return (
    <main
      dir={dir}
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#f8fafc',
        color: '#0A192F',
        boxSizing: 'border-box',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* Container to take up available space */}
      <div style={{ flex: '1 0 auto' }}>
        {/* Header */}
           <div style={{ padding: '30px 6% 0 6%' }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: 1200, margin: '0 auto 30px auto' }}> 
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                 <img src="/logo.png" alt="ETMAM Logo" style={{ height: '100px', width: 'auto', objectFit: 'contain' }} /> 
                 </div>
                  <div style={{ display: 'flex', gap: 25, fontWeight: 500 }}> 
                    <a href="/" style={{ color: '#475569', textDecoration: 'none' }}>{t.navHome}
                    </a> 
                    <a href="/Services" style={{ color: '#0A192F', textDecoration: 'none', borderBottom: '2px solid #0A192F', paddingBottom: 4 }}
                    >{t.navServices}</a> <a href="/projects" style={{ color: '#475569', textDecoration: 'none' }}>{t.navProjects}</a> 
                    <a href="/" onClick={(e) => { e.preventDefault(); const el = document.getElementById('about-section'); el?.scrollIntoView({ behavior: 'smooth' }); }} 
                    style={{ color: '#475569', textDecoration: 'none' }}>{t.navAbout}</a> </div> 
                    <button onClick={() => setIsArabic((s) => !s)} style={{ backgroundColor: 'transparent', color: '#0A192F', border: '1px solid #0A192F', padding: '8px 18px', borderRadius: 4, fontWeight: 'bold', cursor: 'pointer' }}> 
                      {isArabic ? 'English' : 'العربية'} 
                      </button> 
                      </div> 
                      </div>
        {/* Content */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 6%' }}>
          <div style={{ padding: '20px 0 10px 0' }}>
            <div style={{ marginBottom: 18 }}>
              <style>{`@media (max-width: 480px) { 
                body { overflow-x: hidden; }
                main { padding-left: 4px !important; padding-right: 4px !important; }
                h1 { font-size: 28px !important; }
              }
              `}</style>
              <span style={{ fontSize: 13, color: '#8A7355', textTransform: 'uppercase', letterSpacing: 2, fontWeight: 700, display: 'block', marginBottom: 10 }}>{t.pill}</span>
              <h1 style={{ fontSize: 42, fontWeight: 'bold', margin: '0 0 15px 0', color: '#0A192F' }}>{t.title}</h1>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center', paddingBottom: 20 }}>
            <ServiceCard title={t.card1Title} text={t.card1Text} variant="infrastructure" />
            <ServiceCard title={t.card2Title} text={t.card2Text} variant="commercial" />
            <ServiceCard title={t.card3Title} text={t.card3Text} variant="urban" />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer dir={dir} style={{ backgroundColor: '#071120', borderTop: '1px solid rgba(255, 255, 255, 0.05)', padding: '40px 6% 30px 6%', color: 'white' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: dir === 'rtl' ? 'right' : 'left', gap: 8 }}>
            <img src="/logo.png" alt="ETMAM Logo" style={{ height: '65px', width: 'auto', objectFit: 'contain', alignSelf: dir === 'rtl' ? 'flex-end' : 'flex-start' }} />
            <span style={{ fontSize: 11, color: '#8A7355', textTransform: 'uppercase', fontWeight: 'bold', marginTop: 4 }}>Engineering Services</span>
          </div>
          <div style={{ display: 'flex', gap: 60, flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, textAlign: dir === 'rtl' ? 'right' : 'left' }}>
              <span style={{ fontSize: 14, fontWeight: 'bold', color: '#ffffff', marginBottom: 5 }}>Sitemap</span>
              <a href="/" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: 13 }}>{t.navHome}</a>
              <a href="/Services" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: 13 }}>{t.navServices}</a>
              <a href="/projects" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: 13 }}>{t.navProjects}</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, textAlign: dir === 'rtl' ? 'right' : 'left' }}>
              <span style={{ fontSize: 14, fontWeight: 'bold', color: '#ffffff', marginBottom: 5 }}>{t.navContact}</span>
              <a href="https://instagram.com/ETMAM_engineering" target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', flexDirection: t.dir === 'rtl' ? 'row-reverse' : 'row' }}>
                              <InstagramIcon size={16} /> Instagram

              </a>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: 1200, margin: '40px auto 0 auto', paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', fontSize: 12, color: '#94a3b8' }}>
          {t.footerRights}
        </div>
      </footer>
    </main>
  );
}

function ServiceCard({ title, text, variant }: { title: string; text: string; variant: 'infrastructure' | 'commercial' | 'urban' }) {
  const cfg = variant === 'infrastructure' ? { stroke: '#2563eb', bg: 'rgba(37,99,235,0.10)' } : variant === 'commercial' ? { stroke: '#8A7355', bg: 'rgba(138,115,85,0.12)' } : { stroke: '#0A192F', bg: 'rgba(10,25,47,0.08)' };
  return (
    <section style={{ flex: '1 1 320px', minWidth: 260, backgroundColor: '#ffffff', borderRadius: 16, padding: '26px 18px', boxShadow: '0 10px 25px rgba(0,0,0,0.06)' }}>
      <div style={{ width: 56, height: 56, borderRadius: 14, backgroundColor: cfg.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
        {variant === 'infrastructure' ? (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={cfg.stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11l9-8 9 8" /><path d="M9 22V12h6v10" /></svg>) : variant === 'commercial' ? (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={cfg.stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><path d="M8 12h8" /><path d="M8 16h8" /><path d="M8 8h8" /></svg>) : (<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={cfg.stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3 7h7l-5.5 4 2 8-6.5-4.5L5.5 22l2-8L2 9h7z" /></svg>)}
      </div>
      <h3 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 10px 0' }}>{title}</h3>
      <p style={{ margin: 0, color: '#475569', lineHeight: 1.8, fontSize: 14 }}>{text}</p>
    </section>
  );
}