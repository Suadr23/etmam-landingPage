'use client';

import React, { useEffect, useRef, useState } from 'react';
import PortfolioSection from '@/components/projects/PortfolioSection';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/LanguageContext';
import '../styles/page.css';

export default function Home() {
  const { t, dir } = useLanguage();
  const [currentScreen, setCurrentScreen] = useState('home');
  const [tiltStyle1, setTiltStyle1] = useState<Record<string, string>>({});
  const [tiltStyle2, setTiltStyle2] = useState<Record<string, string>>({});
const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);

  // When arriving on the home page with the #about-us hash (e.g. clicked
  // "About Us" from another page), scroll smoothly to the About section.
  useEffect(() => {
    if (window.location.hash === '#about-us') {
      const el = document.getElementById('about-us');
      if (el) {
        const headerOffset = 80;
        const top = el.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
  }, []);

  const handleTilt = (
    e: React.MouseEvent<HTMLDivElement>,
    setTilt: React.Dispatch<React.SetStateAction<Record<string, string>>>,
    ref: React.RefObject<HTMLDivElement | null>
  ) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;
    setTilt({
      transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`,
      transition: 'transform 0.1s ease-out'
    });
  };

  const resetTilt = (setTilt: React.Dispatch<React.SetStateAction<Record<string, string>>>) => {
    setTilt({
      transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)`,
      transition: 'transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1)'
    });
  };

return (
    <main dir={dir} style={{ backgroundColor: '#f8fafc', margin: 0, padding: 0, position: 'relative' }}>
      {/* Ambient sunburst / light rays background */}
      <div className="sunburst-bg" />

      {currentScreen === 'home' ? (
        <>
          <div
            dir={dir}
            className="hero-section"
            style={{
              position: 'relative',
              minHeight: '120vh',
              width: '100%',
             backgroundImage: `linear-gradient(to bottom, rgba(10, 25, 47, 0.10), rgba(10, 25, 47, 0.55)), url('/ba.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              flexDirection: 'column',
              padding: '0 0 120px 0',
              boxSizing: 'border-box',
              color: 'white'
            }}
          >
{/* Shared header (logo, desktop nav, lang toggle, Contact modal, Email dropdown, hamburger + unified mobile menu) */}
            <Header variant="light" />

            <div
  style={{
    width: '100%',
    maxWidth: '1200px',
    margin: '115px auto auto auto',
    transform: 'translateX(-25px)',
    padding: '0 6%',
    boxSizing: 'border-box',
    textAlign: dir === 'rtl' ? 'right' : 'left',
    display: 'flex',
    flexDirection: 'column',
    alignItems: dir === 'rtl' ? 'flex-end' : 'flex-start',
  }}
>
  <h1
    className="hero-title"
    style={{
      fontSize: '44px',
      fontWeight: 'normal',
      margin: 0,
      lineHeight: '1.25',
      maxWidth: '750px',
    }}
  >
    {t.heroTitle}
  </h1>

  <p
    className="hero-sub"
    style={{
      fontSize: '24px',
      color: '#e2e8f0',
      marginTop: '16px',
      maxWidth: '600px',
      fontWeight: '300',
      lineHeight: '1.5',
    }}
  >
    {t.heroSub}
  </p>
</div>

            <style>{`@media (max-width: 768px) {
              /* Stack hero cards vertically on phones/tablets and center them */
              .hero-cards-row {
                position: static !important;
                transform: none !important;
                left: auto !important;
                bottom: auto !important;
                margin: 0 auto !important;
                padding: 18px 12px !important;
                display: flex !important;
                flex-direction: column !important;
                gap: 18px !important;
                align-items: center !important;
                width: 100% !important;
                max-width: 720px !important;
                box-sizing: border-box !important;
              }

              /* Make each card shrink to fit and center */
              .hero-cards-row > div {
                flex: 0 0 auto !important;
                width: 100% !important;
                max-width: 420px !important;
                min-width: 0 !important;
                margin: 0 auto !important;
              }
            }

            @media (max-width: 420px) {
              .hero-cards-row { padding: 12px 10px !important; gap: 14px !important; }
              .hero-cards-row > div { max-width: 100% !important; border-radius: 10px !important; }
            }
            `}</style>

            <div className="hero-cards-row" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch', gap: '24px', width: '100%', maxWidth: '1200px', margin: '0 auto', position: 'absolute', bottom: '-100px', left: '50%', transform: 'translateX(-50%)', padding: '0 20px', boxSizing: 'border-box', zIndex: 20 }}>
              <div style={{ flex: '1 1 33%', backgroundColor: '#0A192F', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column' }}>
<div style={{ width: '100%', height: '180px' }}>
  <img 
    src="/4.jpeg" 
    alt={t.altInfrastructure} 
    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
  />
</div>                <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', gap: '15px', textAlign: dir === 'rtl' ? 'right' : 'left', alignItems: dir === 'rtl' ? 'flex-end' : 'flex-start', flexGrow: 1 }}>
                  <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: dir === 'rtl' ? 'row-reverse' : 'row' }}><h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', margin: 0 }}>{t.card1Title}</h3><span></span></div>
                  <span style={{ color: '#94a3b8', fontSize: '14px' }}></span>
                  <button style={{ backgroundColor: 'white', color: '#0A192F', border: 'none', padding: '10px 20px', borderRadius: '4px', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer', marginTop: 'auto' }}>{t.cardBtn}</button>
                </div>
              </div>
              <div style={{ flex: '1 1 33%', backgroundColor: '#0A192F', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column' }}>
<div style={{ flex: '1 1 33%', backgroundColor: '#0A192F', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column' }}>
  <div style={{ width: '100%', height: '180px' }}>
    <img 
      src="/2.jpeg" 
      alt={t.altCommercial} 
      style={{ width: '100%', height: '180px', objectFit: 'cover' }} 
    />
  </div>
  {/* ... */}
</div>                <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', gap: '15px', textAlign: dir === 'rtl' ? 'right' : 'left', alignItems: dir === 'rtl' ? 'flex-end' : 'flex-start', flexGrow: 1 }}>
                  <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: dir === 'rtl' ? 'row-reverse' : 'row' }}><h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', margin: 0 }}>{t.card2Title}</h3><span></span></div>
                  <span style={{ color: '#94a3b8', fontSize: '14px' }}></span>
                  <button style={{ backgroundColor: 'white', color: '#0A192F', border: 'none', padding: '10px 20px', borderRadius: '4px', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer', marginTop: 'auto' }}>{t.cardBtn}</button>
                </div>
              </div>
              <div style={{ flex: '1 1 33%', backgroundColor: '#0A192F', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column' }}>
<div style={{ flex: '1 1 33%', backgroundColor: '#0A192F', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column' }}>
  <div style={{ width: '100%', height: '180px' }}>
    <img 
      src="/3.jpeg" 
      alt={t.altUrban} 
      style={{ width: '100%', height: '180px', objectFit: 'cover' }} 
    />
  </div>
  {/* ... */}
</div>                <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', gap: '15px', textAlign: dir === 'rtl' ? 'right' : 'left', alignItems: dir === 'rtl' ? 'flex-end' : 'flex-start', flexGrow: 1 }}>
                  <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: dir === 'rtl' ? 'row-reverse' : 'row' }}><h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', margin: 0 }}>{t.card3Title}</h3><span></span></div>
                  <span style={{ color: '#94a3b8', fontSize: '14px' }}></span>
                  <button style={{ backgroundColor: 'white', color: '#0A192F', border: 'none', padding: '10px 20px', borderRadius: '4px', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer', marginTop: 'auto' }}>{t.cardBtn}</button>
                </div>
              </div>
            </div>
          </div>

<section id="about-us" className="about-section" dir={dir} style={{ padding: '160px 6% 60px 6%', maxWidth: '1200px', margin: '0 auto', boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
              <div style={{ flex: '1 1 500px', textAlign: dir === 'rtl' ? 'right' : 'left' }}>
                <h2 style={{ fontSize: '32px', color: '#0A192F', fontWeight: 'bold', marginBottom: '25px', position: 'relative', paddingBottom: '10px' }}>
                  {t.aboutTitle}
                  <div style={{ position: 'absolute', bottom: 0, [dir === 'rtl' ? 'right' : 'left']: 0, width: '60px', height: '4px', backgroundColor: '#8A7355' }}></div>
                </h2>
                <p style={{ fontSize: '15px', color: '#334155', lineHeight: '1.7', marginBottom: '15px' }}>{t.aboutText1}</p>
                <p style={{ fontSize: '15px', color: '#334155', lineHeight: '1.7', marginBottom: '15px' }}>{t.aboutText2}</p>
                <p style={{ fontSize: '15px', color: '#0A192F', fontWeight: '', lineHeight: '1.7', marginBottom: '0' }}>{t.aboutText3}</p>
              </div>
              <div
  style={{
    flex: '1 1 400px',
    height: '320px',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 25px rgba(0,0,0,0.08)'
  }}
>
  <video
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }}
  >
    <source src="/about-video.mp4" type="video/mp4" />
    {t.videoFallback}
  </video>
</div>
            </div>
          </section>

          <section dir={dir} style={{ padding: '60px 6% 80px 6%', maxWidth: '1200px', margin: '0 auto', boxSizing: 'border-box' }}>
            <h2 style={{ fontSize: '32px', color: '#0A192F', fontWeight: '700', marginBottom: '40px', textAlign: dir === 'rtl' ? 'right' : 'left' }}>
              {t.expTitle}
            </h2>

            <div className="expertise-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(45%, 1fr))', columnGap: '60px', rowGap: '40px', width: '100%', marginBottom: '40px' }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', textAlign: dir === 'rtl' ? 'right' : 'left', flexDirection: dir === 'rtl' ? 'row-reverse' : 'row' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '12px', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0A192F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 22h20" />
                    <path d="M16 22V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v18" />
                    <path d="M10 6h4" />
                    <path d="M10 10h4" />
                    <path d="M10 14h4" />
                    <path d="M10 18h4" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', color: '#0A192F', fontWeight: 'bold', margin: '0 0 6px 0' }}>{t.exp1Title}</h3>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>{t.exp1Desc}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', textAlign: dir === 'rtl' ? 'right' : 'left', flexDirection: dir === 'rtl' ? 'row-reverse' : 'row' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '12px', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0A192F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', color: '#0A192F', fontWeight: 'bold', margin: '0 0 6px 0' }}>{t.exp2Title}</h3>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>{t.exp2Desc}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', textAlign: dir === 'rtl' ? 'right' : 'left', flexDirection: dir === 'rtl' ? 'row-reverse' : 'row' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '12px', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0A192F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 1 9.2a7 7 0 0 1-14 0" />
                    <path d="M19 2c-2.26 4.33-5.27 7.14-8 10" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', color: '#0A192F', fontWeight: 'bold', margin: '0 0 6px 0' }}>{t.exp3Title}</h3>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>{t.exp3Desc}</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', textAlign: dir === 'rtl' ? 'right' : 'left', flexDirection: dir === 'rtl' ? 'row-reverse' : 'row' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '12px', backgroundColor: '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#0A192F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                  </svg>
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', color: '#0A192F', fontWeight: 'bold', margin: '0 0 6px 0' }}>{t.exp4Title}</h3>
                  <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>{t.exp4Desc}</p>
                </div>
              </div>
            </div>

            <div style={{ textAlign: dir === 'rtl' ? 'right' : 'left' }}>
                
                {/* Contact anchor (for dropdown navigation only) */}
                <div id="contact-section" style={{ height: 0, width: 0 }} />
            </div>
          </section>

          <section dir={dir} className="vision-mission-section" style={{ padding: '100px 6%', backgroundColor:'linear-gradient(90deg, #EAF5FB 0%, #5F91BA 25%, #123A63 65%, #071120 100%)', color: 'white', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>

            {/* خلفية زخرفية دائرية ناعمة */}
            <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(197, 160, 89, 0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(197, 160, 89, 0.04) 0%, transparent 70%)', pointerEvents: 'none' }} />

            <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

              <span style={{ fontSize: '13px', color: '#8A7355', textTransform: 'uppercase', letterSpacing: '3px', fontWeight: 'bold', display: 'block', marginBottom: '12px' }}>{t.brandDeclaration}</span>
              <h2 style={{ fontSize: '38px', fontWeight: '300', margin: '0 0 70px 0', color: '#0A192F', letterSpacing: '1px' }}>{t.strategicFoundations}</h2>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' }}>

                {/* Card 1 - Vision */}
                <div
                  ref={card1Ref}
                  className="glass-card vision-mission-card"
                  onMouseMove={(e) => handleTilt(e, setTiltStyle1, card1Ref)}
                  onMouseLeave={() => resetTilt(setTiltStyle1)}
                  style={{
                    flex: '1 1 380px',
                    minWidth: '300px',
                    padding: '40px 35px',
                    textAlign: dir === 'rtl' ? 'right' : 'left',
                    background: '#123A63',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(197, 160, 89, 0.2)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                    ...tiltStyle1,
                    cursor: 'default'
                  }}
                >
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px',
                    justifyContent: 'flex-start', flexDirection: dir === 'rtl' ? 'row-reverse' : 'row'
                  }}>
                    <div style={{
                      width: '48px', height: '48px', borderRadius: '14px',
                      background: 'rgba(197, 160, 89, 0.1)',
                      border: '1px solid rgba(197, 160, 89, 0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                    }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C7A859" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>
                    <h3 style={{ fontSize: '22px', color: '#C7A859', fontWeight: 'bold', margin: 0, letterSpacing: '0.5px' }}>{t.visionTitle}</h3>
                  </div>
                  <p style={{ fontSize: '15px', color: '#e2e8f0', lineHeight: '1.8', margin: 0, fontWeight: '300' }}>{t.visionDesc}</p>
                </div>

                {/* Card 2 - Mission */}
                <div
                  ref={card2Ref}
                  className="glass-card vision-mission-card"
                  onMouseMove={(e) => handleTilt(e, setTiltStyle2, card2Ref)}
                  onMouseLeave={() => resetTilt(setTiltStyle2)}
                  style={{
                    flex: '1 1 380px',
                    minWidth: '300px',
                    padding: '40px 35px',
                    textAlign: dir === 'rtl' ? 'right' : 'left',
                    background: '#123A63',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    border: '1px solid rgba(197, 160, 89, 0.2)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
                    ...tiltStyle2,
                    cursor: 'default'
                  }}
                >
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px',
                    justifyContent: 'flex-start', flexDirection: dir === 'rtl' ? 'row-reverse' : 'row'
                  }}>
                    <div style={{
                      width: '48px', height: '48px', borderRadius: '14px',
                      background: 'rgba(197, 160, 89, 0.1)',
                      border: '1px solid rgba(197, 160, 89, 0.2)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                    }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C7A859" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="6" />
                        <circle cx="12" cy="12" r="2" />
                      </svg>
                    </div>
                    <h3 style={{ fontSize: '22px', color: '#C7A859', fontWeight: 'bold', margin: 0, letterSpacing: '0.5px' }}>{t.missionTitle}</h3>
                  </div>
                  <p style={{ fontSize: '15px', color: '#e2e8f0', lineHeight: '1.8', margin: 0, fontWeight: '300' }}>{t.missionDesc}</p>
                </div>

              </div>
            </div>
          </section>
        </>
      ) : (
        <div dir={dir} style={{ minHeight: '100vh', backgroundColor: '#f8fafc', color: '#1e293b', padding: '0', boxSizing: 'border-box' }}>
          <Header variant="dark" />

          <div style={{ maxWidth: '1200px', margin: '0 auto 50px auto', textAlign: 'center' }}>
            <h1 style={{ fontSize: '42px', fontWeight: 'bold', margin: '0 0 15px 0', color: '#0A192F' }}>{t.projectsTitle}</h1>
            <p style={{ fontSize: '17px', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>{t.projectsSub}</p>
          </div>

          <div>
            <PortfolioSection />
          </div>
        </div>
      )}

      {/* Shared unified footer (high-contrast, readable on mobile) */}
      <Footer />
      
    </main>
  );
}

