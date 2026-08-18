'use client';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/lib/LanguageContext';

export default function ServicesPage() {
  const { t, dir } = useLanguage();

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
      }}
    >
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .service-card {
          opacity: 0;
          animation: slideDown 0.8s ease forwards;
        }

        .service-card:nth-child(1) { animation-delay: 0.1s; }
        .service-card:nth-child(2) { animation-delay: 0.3s; }
        .service-card:nth-child(3) { animation-delay: 0.5s; }
        .service-card:nth-child(4) { animation-delay: 0.7s; }
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 40px rgba(0,0,0,0.12);
        }

        .service-card:hover .service-icon {
          transform: scale(1.12) rotate(6deg);
        }

        .service-card:hover .service-title {
          color: #8A7355;
        }

        .service-card:hover p {
          opacity: 0.85;
        }

        /* Mobile responsive tweaks: allow cards to shrink and stack so they fit mobile width */
        @media (max-width: 480px) {
          body { overflow-x: hidden; }
          .services-list { flex-direction: column !important; align-items: center !important; gap: 16px !important; padding-left: 6px !important; padding-right: 6px !important; }
          .service-card {
            flex: 1 1 calc(100% - 32px) !important;
            min-width: 0 !important;
            max-width: 420px !important;
            margin: 0 auto !important;
            padding: 20px 14px !important;
          }
          .service-card .service-icon { margin-left: auto !important; margin-right: auto !important; }
        }
      `}</style>

      {/* Container to take up available space */}
      <div style={{ flex: '1 0 auto' }}>
        {/* Shared header (logo, desktop nav, lang toggle, hamburger + unified mobile menu) */}
        <Header variant="dark" />

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
              <span style={{ fontSize: 13, color: '#8A7355', textTransform: 'uppercase', letterSpacing: 2, fontWeight: 700, display: 'block', marginBottom: 10 }}>{t.services.pill}</span>
              <h1 style={{ fontSize: 42, fontWeight: 'bold', margin: '0 0 15px 0', color: '#0A192F' }}>{t.services.title}</h1>
            </div>
          </div>

          <div className="services-list" style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center', paddingBottom: 20 }}>
            <ServiceCard title={t.services.items[0].title} text={Array.from(t.services.items[0].text)} variant="infrastructure" />
            <ServiceCard title={t.services.items[1].title} text={Array.from(t.services.items[1].text)} variant="commercial" />
            <ServiceCard title={t.services.items[2].title} text={Array.from(t.services.items[2].text)} variant="urban" />
            <ServiceCard title={t.services.items[3].title} text={Array.from(t.services.items[3].text)} variant="residential" />
          </div>
        </div>
      </div>

      {/* Shared unified footer (high-contrast, readable on mobile) */}
      <Footer />
    </main>
  );
}

function ServiceCard({
  title,
  text,
  variant,
}: {
  title: string;
  text: string[];
  variant: 'infrastructure' | 'commercial' | 'urban' | 'residential';
}) {
  const cfg =
    variant === 'infrastructure'
      ? { stroke: '#2563eb', bg: 'rgba(37,99,235,0.10)' }
      : variant === 'commercial'
      ? { stroke: '#8A7355', bg: 'rgba(138,115,85,0.12)' }
      : variant === 'residential'
      ? { stroke: '#16a34a', bg: 'rgba(22,163,74,0.12)' }
      : { stroke: '#0A192F', bg: 'rgba(10,25,47,0.08)' };

  return (
    <section
      className="service-card"
      style={{
        flex: '0 0 320px',
        minWidth: 260,
        backgroundColor: '#ffffff',
        borderRadius: 16,
        padding: '26px 18px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
        transition: 'all 0.35s ease',
        cursor: 'pointer',
      }}
    >
      <div
        className="service-icon"
        style={{
          width: 56,
          height: 56,
          borderRadius: 14,
          backgroundColor: cfg.bg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 16px',
          transition: 'transform .35s ease',
        }}
      >
        {variant === 'infrastructure' ? (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={cfg.stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 11l9-8 9 8" />
            <path d="M9 22V12h6v10" />
          </svg>
        ) : variant === 'commercial' ? (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={cfg.stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <path d="M8 12h8" />
            <path d="M8 16h8" />
            <path d="M8 8h8" />
          </svg>
        ) : variant === 'residential' ? (
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke={cfg.stroke}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h0A1.65 1.65 0 0 0 10 3.09V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h0a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v0A1.65 1.65 0 0 0 20.91 10H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        ) : (
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={cfg.stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l3 7h7l-5.5 4 2 8-6.5-4.5L5.5 22l2-8L2 9h7z" />
          </svg>
        )}
      </div>

      <h3
        className="service-title"
        style={{
          fontSize: 20,
          fontWeight: 700,
          margin: '0 0 10px 0',
          transition: 'color .3s ease',
        }}
      >
        {title}
      </h3>

      <ul
        style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
        }}
      >
        {text.map((item, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '8px',
              marginBottom: '10px',
              color: '#475569',
              fontSize: '14px',
              lineHeight: 1.8,
            }}
          >
            <span style={{ color: '#8A7355', fontWeight: 'bold' }}>✓</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
