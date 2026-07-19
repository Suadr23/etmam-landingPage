'use client';

import React, { useState } from 'react';

const content = {
  en: {
    title: 'Our Engineering Portfolio',
    filters: ['All', 'Luxury', 'Sustainable', 'Commercial'],
  },
  ar: {
    title: 'معرض مشاريعنا الهندسية',
    filters: ['الكل', 'فاخر', 'مستدام', 'تجاري'],
  },
};

const allProjectsData = [
  { id: 1, titleEn: 'Project P1', titleAr: 'مشروع P1', cat: 'Luxury', image: '/p1.jpeg' },
  { id: 2, titleEn: 'Project P2', titleAr: 'مشروع P2', cat: 'Luxury', image: '/p4.jpeg' },
  { id: 3, titleEn: 'Project P3', titleAr: 'مشروع P3', cat: 'Sustainable', image: '/p2.jpeg' },
  { id: 4, titleEn: 'Project P4', titleAr: 'مشروع P4', cat: 'Commercial', image: '/p3.jpeg' },
  { id: 5, titleEn: 'Project P5', titleAr: 'مشروع P5', cat: 'Commercial', image: '/p5.jpeg' },
  { id: 6, titleEn: 'Project P6', titleAr: 'مشروع P6', cat: 'Commercial', image: '/p8.jpeg' },
];

const filters = ['All', 'Luxury', 'Sustainable', 'Commercial'];

export default function PortfolioSection() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [activeFilter, setActiveFilter] = useState('All');

  const t = content[lang];

  const filteredProjects =
    activeFilter === 'All'
      ? allProjectsData
      : allProjectsData.filter((p) => p.cat === activeFilter);

  return (
    <section
      style={{
        width: '100%',
        background: '#b9cfdf',
        padding: '60px 20px',
        direction: lang === 'ar' ? 'rtl' : 'ltr',
        boxSizing: 'border-box',
      }}
    >
      {/* زر تغيير اللغة */}
    
      <h2
        style={{
          textAlign: 'center',
          fontSize: '42px',
          color: '#0A192F',
          marginBottom: '40px',
          fontWeight: 700,
        }}
      >
        {t.title}
      </h2>

      {/* الفلاتر */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '15px',
          marginBottom: '50px',
        }}
      >
        {filters.map((filter, index) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            style={{
              padding: '12px 24px',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              fontWeight: 600,
              background: activeFilter === filter ? '#0056D2' : '#fff',
              color: activeFilter === filter ? '#fff' : '#333',
              transition: '.3s',
            }}
          >
            {t.filters[index]}
          </button>
        ))}
      </div>

      {/* المشاريع */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
          gap: '24px',
        }}
      >
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            style={{
              height: '320px',
              borderRadius: '18px',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '20px',
              color: '#fff',
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,.75), rgba(0,0,0,.15)), url(${project.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div>
              <h3
                style={{
                  margin: 0,
                  marginBottom: '8px',
                  fontSize: '24px',
                }}
              >
                {lang === 'en' ? project.titleEn : project.titleAr}
              </h3>

              <p
                style={{
                  margin: 0,
                  opacity: 0.9,
                }}
              >
                {lang === 'en'
                  ? 'Luxury engineering concept'
                  : 'مفهوم هندسي فاخر'}
              </p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        *{
          box-sizing:border-box;
        }

        .project-card{
          transition:.3s ease;
        }

        .project-card:hover{
          transform:translateY(-6px);
        }

        @media (max-width:768px){

          h2{
            font-size:30px !important;
          }

          .project-card{
            height:280px !important;
          }

        }

        @media (max-width:480px){

          h2{
            font-size:24px !important;
          }

          .project-card{
            height:240px !important;
          }

        }
      `}</style>
    </section>
  );
}