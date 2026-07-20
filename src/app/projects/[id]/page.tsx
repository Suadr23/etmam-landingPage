'use client';

import Header from '@/components/Header';
import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';

const projectsData = [
  { id: '1', titleEn: 'Project P1', titleAr: 'مشروع P1', cat: 'Luxury', image: '/p1.jpeg', descEn: 'A premium luxury engineering concept showcasing architectural excellence.', descAr: 'مفهوم هندسي فاخر يعرض التميز المعماري.', year: '2025' },
  { id: '2', titleEn: 'Project P2', titleAr: 'مشروع P2', cat: 'Luxury', image: '/p4.jpeg', descEn: 'High-end residential development with cutting-edge design.', descAr: 'تطوير سكني فاخر بتصميم حديث ومتطور.', year: '2024' },
  { id: '3', titleEn: 'Project P3', titleAr: 'مشروع P3', cat: 'Sustainable', image: '/p2.jpeg', descEn: 'Eco-friendly building with sustainable engineering solutions.', descAr: 'مبنى صديق للبيئة مع حلول هندسية مستدامة.', year: '2024' },
  { id: '4', titleEn: 'Project P4', titleAr: 'مشروع P4', cat: 'Commercial', image: '/p3.jpeg', descEn: 'Commercial complex designed for modern business needs.', descAr: 'مجمع تجاري مصمم لاحتياجات الأعمال الحديثة.', year: '2025' },
  { id: '5', titleEn: 'Project P5', titleAr: 'مشروع P5', cat: 'Commercial', image: '/p5.jpeg', descEn: 'Mixed-use commercial development with premium amenities.', descAr: 'تطوير تجاري متعدد الاستخدامات مع وسائل راحة فاخرة.', year: '2024' },
  { id: '6', titleEn: 'Project P6', titleAr: 'مشروع P6', cat: 'Commercial', image: '/p8.jpeg', descEn: 'Modern retail and office space engineering masterpiece.', descAr: 'تحفة هندسية حديثة للمساحات التجارية والمكاتب.', year: '2025' },
];

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  const project = projectsData.find((p) => p.id === params.id);

  if (!project) {
    return (
      <>
        <Header />
        <main style={{ minHeight: '100vh', backgroundColor: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '20px', fontFamily: 'Arial, sans-serif' }}>
          <h1 style={{ color: '#0A192F' }}>Project Not Found</h1>
          <button onClick={() => router.push('/projects')} style={{ backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer' }}>
            Back to Projects
          </button>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main
        dir={dir}
        style={{
          minHeight: '100vh',
          backgroundColor: '#f8fafc',
          fontFamily: 'Arial, sans-serif',
          padding: '40px 6% 80px 6%',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Back button + Lang toggle */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
            <button
              onClick={() => router.push('/projects')}
              style={{
                backgroundColor: 'transparent',
                color: '#0A192F',
                border: '1px solid #0A192F',
                padding: '8px 18px',
                borderRadius: '4px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              {lang === 'en' ? '← Back to Projects' : '→ العودة للمشاريع'}
            </button>
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              style={{
                backgroundColor: 'transparent',
                color: '#0A192F',
                border: '1px solid #0A192F',
                padding: '8px 18px',
                borderRadius: '4px',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              {lang === 'en' ? 'العربية' : 'English'}
            </button>
          </div>

          {/* Project Hero Image */}
          <div
            style={{
              width: '100%',
              height: '500px',
              borderRadius: '18px',
              overflow: 'hidden',
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,.75), rgba(0,0,0,.15)), url(${project.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '40px',
              marginBottom: '40px',
            }}
          >
            <div>
              <span
                style={{
                  backgroundColor: project.cat === 'Luxury' ? '#8A7355' : project.cat === 'Sustainable' ? '#2563eb' : '#0A192F',
                  color: 'white',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 'bold',
                  marginBottom: '10px',
                  display: 'inline-block',
                }}
              >
                {project.cat}
              </span>
              <h1 style={{ color: 'white', fontSize: '42px', margin: '10px 0 5px 0', fontWeight: 'bold' }}>
                {lang === 'en' ? project.titleEn : project.titleAr}
              </h1>
              <p style={{ color: '#cbd5e1', margin: 0, fontSize: '16px' }}>
                {lang === 'en' ? `Year: ${project.year}` : `السنة: ${project.year}`}
              </p>
            </div>
          </div>

          {/* Project Description */}
          <div
            style={{
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '40px',
              boxShadow: '0 10px 25px rgba(0,0,0,0.06)',
            }}
          >
            <h2 style={{ color: '#0A192F', fontSize: '24px', fontWeight: 'bold', margin: '0 0 15px 0' }}>
              {lang === 'en' ? 'Project Overview' : 'نظرة عامة عن المشروع'}
            </h2>
            <p style={{ color: '#475569', lineHeight: '1.8', fontSize: '16px', margin: 0 }}>
              {lang === 'en' ? project.descEn : project.descAr}
            </p>
            <div
              style={{
                marginTop: '30px',
                paddingTop: '30px',
                borderTop: '1px solid #e2e8f0',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '40px',
              }}
            >
              <div>
                <span style={{ color: '#94a3b8', fontSize: '13px', display: 'block', marginBottom: '4px' }}>
                  {lang === 'en' ? 'Category' : 'الفئة'}
                </span>
                <span style={{ color: '#0A192F', fontWeight: 'bold', fontSize: '16px' }}>{project.cat}</span>
              </div>
              <div>
                <span style={{ color: '#94a3b8', fontSize: '13px', display: 'block', marginBottom: '4px' }}>
                  {lang === 'en' ? 'Year' : 'السنة'}
                </span>
                <span style={{ color: '#0A192F', fontWeight: 'bold', fontSize: '16px' }}>{project.year}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

