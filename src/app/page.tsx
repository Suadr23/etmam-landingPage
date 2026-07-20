'use client';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import PortfolioSection from '@/components/projects/PortfolioSection'; 



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

export default function Home() {
  const [isArabic, setIsArabic] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('home');

  const content = {
    en: {
      dir: 'ltr',
      navHome: 'Home',
      navServices: 'Services',
      navProjects: 'Projects',
      navAbout: 'About Us',
      navContact: 'Contact',
      heroTitle: 'Advancing Innovative Engineering & Project Management',
      heroSub: 'Building the future with expertise and excellence.',
      heroBtn: 'Learn More',

      card1Title: 'Infrastructure Development',
      card2Title: 'Commercial Buildings',
      card3Title: 'Urban Solutions',
      cardBtn: 'Discover More',

      aboutTitle: 'About Us',
      aboutText1: 'At "ETMAM for Engineering Services", we understand that exceptional projects are not born by chance; they are crafted through master expertise and precision. We are not just an engineering firm—we are the strategic advisor and executive partner that visionary investors and developers seek to ensure their grandest concepts are realized with absolute efficiency, high-end quality, and utmost security.',
      aboutText2: 'We have established an integrated ecosystem that eliminates the complexity of multi-vendor coordination for our clients. We seamlessly blend the artistry of architectural innovation, interior, exterior, and landscape design with the rigor of professional project management, bulletproof engineering contract drafting, and turning around stalled or distressed projects, all while unlocking premier opportunities in real estate development.',
      aboutText3: 'At ETMAM, we are the definitive answer to every engineering challenge, and the ultimate guarantee for a secure investment and uncompromised success.',

      expTitle: 'Our Expertise',
      exp1Title: 'ETMAM - Advanced Engineering',
      exp1Desc: 'Mastering high-end structural, architectural, and premium infrastructural designs.',
      exp2Title: 'ETMAM - Strategic Planning',
      exp2Desc: 'Professional project management and bulletproof legal engineering contracts.',
      exp3Title: 'ETMAM - Sustainable Solutions',
      exp3Desc: 'Eco-friendly and smart building engineering methodologies for long-term sustainability.',
      exp4Title: 'ETMAM - Renewable Solutions',
      exp4Desc: 'Integrating clean energy systems and future-proof sustainable engineering infrastructure.',
     

      brandDeclaration: 'Corporate Pillars',
      visionTitle: 'Our Vision',
      visionDesc: 'To be the premier engineering benchmark and the most trusted partner in steering the future of architectural and project development—where the name ETMAM stands as the ultimate synonym for flawless execution, luxury innovation, and the absolute completion of ambitious milestones.',
      missionTitle: 'Our Mission',
      missionDesc: 'To deliver top-tier engineering solutions and strategic management by combining innovative architectural designs, advanced technology, and sustainable engineering practices, ensuring every project is executed flawlessly from concept to completion.',

      modalTitle: 'Contact Information',
      modalPhone: 'Phone Number:',
      modalPhoneVal: '968+ 72552026',
      modalInsta: 'Instagram',
      modalLocation: 'Location:',
      modalLocationBtn: 'Open on Google Maps',
      modalEmail: 'Email:',
      modalClose: 'Close',
      footerRights: '© 2026 ETMAM Engineering Services. All rights reserved.',

      projectsTitle: '',
      projectsSub: '',
      backHome: 'Back to Home'
    },
    ar: {
      dir: 'rtl',
      navHome: 'الرئيسية',
      navServices: 'خدماتنا',
      navProjects: 'مشاريعنا',
      navAbout: 'مَن نحن؟',
      navContact: 'اتصل بنا',
      heroTitle: 'نقدم خدمات هندسية وإنشائية مبتكرة ومتقدمة',
      heroSub: 'صناعة المستقبل بخبرة وسيادية مطلقة لا مساومة فيها.',
      heroBtn: 'اكتشف المزيد',

      card1Title: 'تطوير البنية التحتية',
      card2Title: 'المباني التجارية',
      card3Title: 'الحلول الحضرية والمدنية',
      cardBtn: 'اكتشف المزيد',

      aboutTitle: 'مَن نحن؟',
      aboutText1: 'في "إتمام للخدمات الهندسية"، ندرك أن المشاريع الاستثنائية لا ولد بالاصدفة، بل تُصنع بالخبرة السيادية والقرارات الدقيقة. نحن لسنا مجرد دار هندسية، بل نحن المستشار الاستراتيجي والشريك التنفيذي الذي يبحث عنه المستثمرون وصناع القرار لضمان تحويل الرؤى الطموحة إلى واقع ملموس بأعلى معايير الكفاءة والأمان الفني والقانوني.',
      aboutText2: 'لقد أسسنا منظومة متكاملة تختزل لعملائنا عناء التعامل مع جهات متعددة؛ حيث ندمج سحر الابتكار المعماري والتصميم الداخلي والخارجي واللاندسكيب، مع صرامة الحوكمة الإدارية والقانونية من خلال إدارة المشاريع الاحترافية، صياغة العقود الهندسية المحكمة، وإيجاد الحلول الجذرية للمشاريع المتعثرة، وصولاً إلى صناعة الفرص الواعدة في التطوير العقاري.',
      aboutText3: 'في "إتمام"، نحن الإجابة الحاسمة لكل تحدٍ هندسي، والضمان الأكيد لاستثمار آمن ونجاح لا مساومة فيه.',

      expTitle: 'خبراتنا الهندسية',
      exp1Title: 'إتمام - الهندسة المتقدمة',
      exp1Desc: 'نخبة من الابتكارات المعمارية والتصميم الداخلي والخارجي واللاندسكيب الاحترافي.',
      exp2Title: 'إتمام - التخطيط الاستراتيجي',
      exp2Desc: 'إدارة المشاريع الاحترافية وصياغة العقود الهندسية المحكمة لحماية الاستثمارات.',
      exp3Title: 'إتمام - الحلول المستدامة',
      exp3Desc: 'إيجاد الحلول الجذرية والذكية للمشاريع المتعثرة وإدارتها بحوكمة صارمة والتركيز على المباني الخضراء.',
      exp4Title: 'إتمام - الحلول المتجددة',
      exp4Desc: 'دمج نظم الطاقة النظيفة وتطوير البنية التحتية الهندسية المستدامة والمقاومة للمستقبل.',
      expBtn: 'تواصل معنا',

      brandDeclaration: 'ركائز الشركة',
      visionTitle: 'رؤيتنا',
      visionDesc: 'أن نكون المرجعية الهندسية الأولى والشريك الأكثر موثوقية في قيادة وصياغة مستقبل التطوير العقاري والهندسي، ليرتبط اسم "إتمام" دائماً بالجودة المطلقة، والابتكار الفاخر، والإتمام المثالي للمشاريع الأكثر طموحاً.',
      missionTitle: 'رسالتنا',
      missionDesc: 'تقديم حلول هندسية وإدارية استراتيجية متكاملة تجمع بين الابتكار المعماري والاستدامة البيئية، مع ضمان تنفيذ كافة المشاريع بحوكمة صارمة من الفكرة وحتى التسليم المثالي.',

      modalTitle: 'بيانات التواصل',
      modalPhone: 'رقم الهاتف:',
      modalPhoneVal: 'سيتم إضافته لاحقاً',
      modalInsta: 'إنستغرام:',
      modalLocation: 'الموقع الجغرافي:',
      modalLocationBtn: 'فتح خرائط جوجل',
      modalEmail: 'البريد الإلكتروني:',
      modalClose: 'إغلاق',
      footerRights: '© 2026 إتمام للخدمات الهندسية. جميع الحقوق محفوظة.',

      projectsTitle: 'سجل مشاريعنا الهندسية',
      projectsSub: 'استكشف نخبة من معالمنا المعمارية والتطويرية الفريدة.',
      backHome: 'العودة للرئيسية'
    }
  };

  const t = isArabic ? content.ar : content.en;
  const projectList = ['P1', 'P2', 'P3', 'P4', 'P5', 'P6', 'P7', 'P8', 'P9', 'P10'];

  return (
    <main style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f8fafc', margin: 0, padding: 0, position: 'relative' }}>

      <style>{`
        .card-3d {
          transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.4s ease;
          transform-style: preserve-3d;
          perspective: 1000px;
          @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
          @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        }
        .card-3d:hover {
          transform: translateY(-10px) rotateX(4deg) rotateY(2deg);
          box-shadow: 0 30px 50px rgba(0, 0, 0, 0.15);
        }
      `}</style>

      {currentScreen === 'home' ? (
        <>
          <div
            dir={t.dir}
            style={{
              position: 'relative',
              minHeight: '120vh',
              width: '100%',
              backgroundImage: `linear-gradient(rgba(10, 25, 47, 0.55), rgba(10, 25, 47, 0.45)), url('/ba.png')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              flexDirection: 'column',
              padding: '30px 6% 120px 6%',
              boxSizing: 'border-box',
              color: 'white'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <img src="/logo.png" alt="ETMAM Logo" style={{ height: '120px', width: 'auto', objectFit: 'contain' }} />
              </div>
            <div style={{ display: 'flex', gap: '25px', fontWeight: '500', flexWrap: 'wrap' }} className="header-nav">
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentScreen('home'); }} style={{ color: 'white', textDecoration: 'none', borderBottom: '2px solid white', paddingBottom: '4px' }}>{t.navHome}</a>
              <a href="/Services" style={{ color: '#cbd5e1', textDecoration: 'none' }}>{t.navServices}</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentScreen('projects'); }} style={{ color: '#cbd5e1', textDecoration: 'none' }}>{t.navProjects}</a>
              <a href="#about-section" onClick={(e) => { e.preventDefault(); document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' }); }} style={{ color: '#cbd5e1', textDecoration: 'none' }}>{t.navAbout}</a>
            </div>

<style>{`
              @media (max-width: 768px) {
                .header-nav { display: none !important; }
              }
              @media (min-width: 769px) {
                .header-nav { display: flex !important; }
              }
            `}</style>


              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <button onClick={() => setIsArabic(!isArabic)} style={{ backgroundColor: 'rgba(255,255,255,0.15)', color: 'white', border: '1px solid white', padding: '6px 12px', borderRadius: '4px', cursor: 'pointer', fontSize: '12px', fontWeight: 'bold' }}>
                  {isArabic ? 'English' : 'العربية'}
                </button>
                <div style={{ position: 'relative' }}>
                  <button
                    onClick={() => setShowContactModal((s) => !s)}
                    style={{ backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}
                    aria-expanded={showContactModal}
                  >
                    <span>{t.navContact}</span>
                    <span style={{ fontSize: '12px', opacity: 0.95, transform: t.dir === 'rtl' ? (showContactModal ? 'rotate(180deg)' : 'rotate(0deg)') : (showContactModal ? 'rotate(180deg)' : 'rotate(0deg)') }}>
                      ▼
                    </span>
                  </button>
{showContactModal && (
  <div style={{
    position: 'absolute', top: 'calc(100% + 15px)', [t.dir === 'rtl' ? 'left' : 'right']: 0,
    width: '280px', backgroundColor: '#0a192f', border: '1px solid #1e293b',
    borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
    padding: '15px', zIndex: 1000, display: 'flex', flexDirection: 'column', color: 'white'
  }}>
    
    {/* روابط التواصل */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '15px' }}>
      <a href="mailto:info@ETMAMes.com" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        Email Us
      </a>
      <a href="https://wa.me/96872552026" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.005 0C5.37 0 .002 5.368.002 12.006c0 2.092.548 4.136 1.593 5.94L.007 23.999l6.236-1.636a11.77 11.77 0 005.76 1.472h.005c6.635 0 12.003-5.368 12.003-12.005 0-3.21-1.249-6.234-3.522-8.506"/></svg>
        WhatsApp
      </a>
      <a href="https://instagram.com/ETMAM_engineering" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
        Instagram
      </a>
      <a href="https://maps.app.goo.gl/amtdfbDKruUuohLU7" target="_blank" rel="noopener noreferrer" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        Google Maps
      </a>
    </div>

    <hr style={{ border: '0', borderTop: '1px solid #1e293b', margin: '0 0 15px 0' }} />

    {/* قسم الرسالة السريعة */}
    <form action="mailto:info@ETMAMes.com" method="post" encType="text/plain" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <h4 style={{ margin: '0 0 5px 0', fontSize: '14px' }}>Quick Message</h4>
      <input type="text" name="Name" placeholder="Your Name" required style={{ padding: '8px', borderRadius: '4px', border: '1px solid #1e293b', background: '#112240', color: 'white' }} />
      <input type="email" name="Email" placeholder="Your Email" required style={{ padding: '8px', borderRadius: '4px', border: '1px solid #1e293b', background: '#112240', color: 'white' }} />
      <textarea name="Message" placeholder="Your Message" required style={{ padding: '8px', borderRadius: '4px', border: '1px solid #1e293b', background: '#112240', color: 'white', height: '60px' }}></textarea>
      <button type="submit" style={{ cursor: 'pointer', background: '#2563eb', color: 'white', border: 'none', padding: '8px', borderRadius: '4px', marginTop: '5px' }}>Send</button>
    </form>
  </div>
)}
                </div>
              </div>
            </div>

            <div style={{ width: '100%', maxWidth: '1200px', margin: '80px auto auto auto', textAlign: t.dir === 'rtl' ? 'right' : 'left', display: 'flex', flexDirection: 'column', alignItems: t.dir === 'rtl' ? 'flex-end' : 'flex-start' }}>
              <h1 style={{ fontSize: '52px', fontWeight: 'normal', margin: 0, lineHeight: '1.25', maxWidth: '800px' }}>{t.heroTitle}</h1>
              <p style={{ fontSize: '19px', color: '#e2e8f0', marginTop: '20px', maxWidth: '600px', fontWeight: '300' }}>{t.heroSub}</p>
              <button style={{ marginTop: '30px', backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '12px 32px', borderRadius: '4px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', marginBottom: '60px' }}>{t.heroBtn}</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch', gap: '24px', width: '100%', maxWidth: '1200px', margin: '0 auto', position: 'absolute', bottom: '-100px', left: '50%', transform: 'translateX(-50%)', padding: '0 20px', boxSizing: 'border-box', zIndex: 20 }}>
              <div style={{ flex: '1 1 33%', backgroundColor: '#0A192F', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column' }}>
<div style={{ width: '100%', height: '180px' }}>
  <img 
    src="/1.jpeg" 
    alt="Infrastructure" 
    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
  />
</div>                <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', gap: '15px', textAlign: t.dir === 'rtl' ? 'right' : 'left', alignItems: t.dir === 'rtl' ? 'flex-end' : 'flex-start', flexGrow: 1 }}>
                  <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: t.dir === 'rtl' ? 'row-reverse' : 'row' }}><h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', margin: 0 }}>{t.card1Title}</h3><span></span></div>
                  <span style={{ color: '#94a3b8', fontSize: '14px' }}>ETMAM</span>
                  <button style={{ backgroundColor: 'white', color: '#0A192F', border: 'none', padding: '10px 20px', borderRadius: '4px', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer', marginTop: 'auto' }}>{t.cardBtn}</button>
                </div>
              </div>
              <div style={{ flex: '1 1 33%', backgroundColor: '#0A192F', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column' }}>
<div style={{ flex: '1 1 33%', backgroundColor: '#0A192F', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column' }}>
  <div style={{ width: '100%', height: '180px' }}>
    <img 
      src="/2.jpeg" 
      alt="Commercial" 
      style={{ width: '100%', height: '180px', objectFit: 'cover' }} 
    />
  </div>
  {/* ... */}
</div>                <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', gap: '15px', textAlign: t.dir === 'rtl' ? 'right' : 'left', alignItems: t.dir === 'rtl' ? 'flex-end' : 'flex-start', flexGrow: 1 }}>
                  <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: t.dir === 'rtl' ? 'row-reverse' : 'row' }}><h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', margin: 0 }}>{t.card2Title}</h3><span></span></div>
                  <span style={{ color: '#94a3b8', fontSize: '14px' }}>ETMAM</span>
                  <button style={{ backgroundColor: 'white', color: '#0A192F', border: 'none', padding: '10px 20px', borderRadius: '4px', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer', marginTop: 'auto' }}>{t.cardBtn}</button>
                </div>
              </div>
              <div style={{ flex: '1 1 33%', backgroundColor: '#0A192F', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column' }}>
<div style={{ flex: '1 1 33%', backgroundColor: '#0A192F', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 15px 35px rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'column' }}>
  <div style={{ width: '100%', height: '180px' }}>
    <img 
      src="/3.jpeg" 
      alt="Urban" 
      style={{ width: '100%', height: '180px', objectFit: 'cover' }} 
    />
  </div>
  {/* ... */}
</div>                <div style={{ padding: '25px', display: 'flex', flexDirection: 'column', gap: '15px', textAlign: t.dir === 'rtl' ? 'right' : 'left', alignItems: t.dir === 'rtl' ? 'flex-end' : 'flex-start', flexGrow: 1 }}>
                  <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', alignItems: 'center', flexDirection: t.dir === 'rtl' ? 'row-reverse' : 'row' }}><h3 style={{ fontSize: '20px', fontWeight: 'bold', color: 'white', margin: 0 }}>{t.card3Title}</h3><span></span></div>
                  <span style={{ color: '#94a3b8', fontSize: '14px' }}>ETMAM</span>
                  <button style={{ backgroundColor: 'white', color: '#0A192F', border: 'none', padding: '10px 20px', borderRadius: '4px', fontSize: '13px', fontWeight: 'bold', cursor: 'pointer', marginTop: 'auto' }}>{t.cardBtn}</button>
                </div>
              </div>
            </div>
          </div>

          <section id="about-section" dir={t.dir} style={{ padding: '160px 6% 60px 6%', maxWidth: '1200px', margin: '0 auto', boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '50px', alignItems: 'center' }}>
              <div style={{ flex: '1 1 500px', textAlign: t.dir === 'rtl' ? 'right' : 'left' }}>
                <h2 style={{ fontSize: '32px', color: '#0A192F', fontWeight: 'bold', marginBottom: '25px', position: 'relative', paddingBottom: '10px' }}>
                  {t.aboutTitle}
                  <div style={{ position: 'absolute', bottom: 0, [t.dir === 'rtl' ? 'right' : 'left']: 0, width: '60px', height: '4px', backgroundColor: '#8A7355' }}></div>
                </h2>
                <p style={{ fontSize: '15px', color: '#334155', lineHeight: '1.7', marginBottom: '15px' }}>{t.aboutText1}</p>
                <p style={{ fontSize: '15px', color: '#334155', lineHeight: '1.7', marginBottom: '15px' }}>{t.aboutText2}</p>
                <p style={{ fontSize: '15px', color: '#0A192F', fontWeight: 'bold', lineHeight: '1.7', marginBottom: '0' }}>{t.aboutText3}</p>
              </div>
              <div style={{ flex: '1 1 400px', height: '320px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 25px rgba(0,0,0,0.08)' }}>
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000" alt="ETMAM Architecture" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            </div>
          </section>

          <section dir={t.dir} style={{ padding: '60px 6% 80px 6%', maxWidth: '1200px', margin: '0 auto', boxSizing: 'border-box' }}>
            <h2 style={{ fontSize: '32px', color: '#0A192F', fontWeight: '700', marginBottom: '40px', textAlign: t.dir === 'rtl' ? 'right' : 'left' }}>
              {t.expTitle}
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(45%, 1fr))', columnGap: '60px', rowGap: '40px', width: '100%', marginBottom: '40px' }}>
              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', textAlign: t.dir === 'rtl' ? 'right' : 'left', flexDirection: t.dir === 'rtl' ? 'row-reverse' : 'row' }}>
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

              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', textAlign: t.dir === 'rtl' ? 'right' : 'left', flexDirection: t.dir === 'rtl' ? 'row-reverse' : 'row' }}>
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

              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', textAlign: t.dir === 'rtl' ? 'right' : 'left', flexDirection: t.dir === 'rtl' ? 'row-reverse' : 'row' }}>
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

              <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', textAlign: t.dir === 'rtl' ? 'right' : 'left', flexDirection: t.dir === 'rtl' ? 'row-reverse' : 'row' }}>
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

            <div style={{ textAlign: t.dir === 'rtl' ? 'right' : 'left' }}>
                
                {/* Contact anchor (for dropdown navigation only) */}
                <div id="contact-section" style={{ height: 0, width: 0 }} />
            </div>
          </section>



          <section dir={t.dir} style={{ padding: '80px 6%', backgroundColor: '#0A192F', color: 'white', textAlign: 'center' }}>

            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

              <span style={{ fontSize: '13px', color: '#8A7355', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold', display: 'block', marginBottom: '10px' }}>{t.brandDeclaration}</span>
              <h2 style={{ fontSize: '36px', fontWeight: '300', margin: '0 0 60px 0', color: '#ffffff' }}>Strategic Foundations</h2>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', justifyContent: 'center' }}>
                <div style={{ flex: '1 1 400px', textAlign: t.dir === 'rtl' ? 'right' : 'left', borderTop: '2px solid rgba(138,115,85,0.3)', paddingTop: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px', justifyContent: 'flex-start', flexDirection: t.dir === 'rtl' ? 'row-reverse' : 'row' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8A7355" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                    <h3 style={{ fontSize: '22px', color: '#8A7355', fontWeight: 'bold', margin: 0 }}>{t.visionTitle}</h3>
                  </div>
                  <p style={{ fontSize: '15px', color: '#cbd5e1', lineHeight: '1.7', margin: 0 }}>{t.visionDesc}</p>
                </div>

                <div style={{ flex: '1 1 400px', textAlign: t.dir === 'rtl' ? 'right' : 'left', borderTop: '2px solid rgba(138,115,85,0.3)', paddingTop: '25px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '15px', justifyContent: 'flex-start', flexDirection: t.dir === 'rtl' ? 'row-reverse' : 'row' }}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8A7355" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                    <h3 style={{ fontSize: '22px', color: '#8A7355', fontWeight: 'bold', margin: 0 }}>{t.missionTitle}</h3>
                  </div>
                  <p style={{ fontSize: '15px', color: '#cbd5e1', lineHeight: '1.7', margin: 0 }}>{t.missionDesc}</p>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div dir={t.dir} style={{ minHeight: '100vh', backgroundColor: '#f8fafc', color: '#1e293b', padding: '40px 6% 80px 6%', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', maxWidth: '1200px', margin: '0 auto 60px auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="/logo.png" alt="ETMAM Logo" style={{ height: '65px', width: 'auto', objectFit: 'contain' }} />
            </div>
            <div style={{ display: 'flex', gap: '25px', fontWeight: '500' }}>
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentScreen('home'); }} style={{ color: '#475569', textDecoration: 'none' }}>{t.navHome}</a>
                <a href="/Services" style={{ color: '#475569', textDecoration: 'none' }}>{t.navServices}</a>
              <a href="#" onClick={(e) => e.preventDefault()} style={{ color: '#0A192F', textDecoration: 'none', borderBottom: '2px solid #0A192F', paddingBottom: '4px' }}>{t.navProjects}</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentScreen('home'); setTimeout(() => document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' }), 100); }} style={{ color: '#475569', textDecoration: 'none' }}>{t.navAbout}</a>
            </div>
            <button onClick={() => setCurrentScreen('home')} style={{ backgroundColor: 'transparent', color: '#0A192F', border: '1px solid #0A192F', padding: '8px 18px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
              {t.backHome}
            </button>
          </div>

          <div style={{ maxWidth: '1200px', margin: '0 auto 50px auto', textAlign: 'center' }}>
            <h1 style={{ fontSize: '42px', fontWeight: 'bold', margin: '0 0 15px 0', color: '#0A192F' }}>{t.projectsTitle}</h1>
            <p style={{ fontSize: '17px', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>{t.projectsSub}</p>
          </div>

          <div>
            <PortfolioSection />
          </div>
        </div>
      )}

      <footer dir={t.dir} style={{ backgroundColor: '#071120', borderTop: '1px solid rgba(255, 255, 255, 0.05)', padding: '40px 6% 30px 6%', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', textAlign: t.dir === 'rtl' ? 'right' : 'left', gap: '8px' }}>
            <img src="/logo.png" alt="ETMAM Logo" style={{ height: '65px', width: 'auto', objectFit: 'contain', alignSelf: t.dir === 'rtl' ? 'flex-end' : 'flex-start' }} />
            <span style={{ fontSize: '11px', color: '#8A7355', textTransform: 'uppercase', fontWeight: 'bold', marginTop: '4px' }}>Engineering Services</span>
          </div>

          <div style={{ display: 'flex', gap: '60px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: t.dir === 'rtl' ? 'right' : 'left' }}>
              <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#ffffff', marginBottom: '5px' }}>Sitemap</span>
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentScreen('home'); }} style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '13px' }}>{t.navHome}</a>
              <a href="#" style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '13px' }}>{t.navServices}</a>
              <a href="#" onClick={(e) => { e.preventDefault(); setCurrentScreen('projects'); }} style={{ color: '#cbd5e1', textDecoration: 'none', fontSize: '13px' }}>{t.navProjects}</a>
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
    </main>
  );
}