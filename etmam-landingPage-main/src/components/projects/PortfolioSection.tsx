
'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';

type Project = {
  id: number;
  titleEn: string;
  titleAr: string;
  image: string;
  gallery: string[];
};

type Category = {
  id: string;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  cover: string;
  projects: Project[];
};

/* =========================================================
   PROJECT DATA
   5 MAIN CATEGORIES
   ========================================================= */

const categories: Category[] = [
  {
    id: 'Residential',
    titleEn: 'Residential',
    titleAr: 'المشاريع السكنية',
    descriptionEn: 'Private villas and residential spaces designed with comfort, elegance and functionality.',
    descriptionAr: 'فلل ومشاريع سكنية صُممت بعناية تجمع بين الراحة والأناقة والوظيفية.',
    cover: '/p4.jpeg',
    projects: [
      {
        id: 2,
        titleEn: 'Private Villa 01',
        titleAr: 'فيلا خاصة 01',
        image: '/p4.jpeg',
        gallery: [
          '/c1.jpeg',
          '/c2.jpeg',
          '/c3.jpeg',
          '/c4.jpeg',
          '/c5.jpeg',
          '/c6.jpeg',
        ],
      },
      {
        id: 3,
        titleEn: 'Private Villa 02',
        titleAr: 'فيلا خاصة 02',
        image: '/p2.jpeg',
        gallery: [
          '/h1.jpeg',
          '/h2.jpeg',
          '/h3.jpeg',
          '/h4.jpeg',
          '/h5.jpeg',
        ],
      },
      {
        id: 4,
        titleEn: 'Private Villa 03',
        titleAr: 'فيلا خاصة 03',
        image: '/p3.jpeg',
        gallery: [
          '/v1.jpeg',
          '/v2.jpeg',
          '/p3.jpeg',
          
        ],
      },
    ],
  },

  {
    id: 'Commercial',
    titleEn: 'Commercial',
    titleAr: 'المشاريع التجارية',
    descriptionEn: 'Commercial environments created to combine architectural identity with practical performance.',
    descriptionAr: 'بيئات تجارية تجمع بين الهوية المعمارية والأداء العملي.',
    cover: '/p1.jpeg',
    projects: [
      {
        id: 1,
        titleEn: 'Commercial Project 01',
        titleAr: 'مشروع تجاري 01',
        image: '/p1.jpeg',
        gallery: [
          '/t1.jpeg',
          '/t2.jpeg',
          '/t3.jpeg',
          '/t4.jpeg',
          '/t5.jpeg',
          '/t6.jpeg',
          '/t7.jpeg',
        ],
      },
      {
        id: 5,
        titleEn: 'Commercial Project 02',
        titleAr: 'مشروع تجاري 02',
        image: '/p12.png',
        gallery: [
          '/f1.png',
          '/f2.png',
          '/f3.png',
        ],
      },
      {
        id: 6,
        titleEn: 'Commercial Project 03',
        titleAr: 'مشروع تجاري 03',
        image: '/p11.png',
        gallery: [
          '/s1.jpeg',
          '/s2.jpeg',
          '/s3.jpeg',
        ],
      },
    ],
  },

  {
    id: 'Interior',
    titleEn: 'Interior',
    titleAr: 'التصميم الداخلي',
    descriptionEn: 'Refined interior concepts where materials, proportions and details create a distinctive atmosphere.',
    descriptionAr: 'تصاميم داخلية راقية تجمع بين الخامات والنسب والتفاصيل لصناعة أجواء مميزة.',
    cover: '/p13.jpeg',
    projects: [
      {
        id: 7,
        titleEn: 'Interior Project 01',
        titleAr: 'مشروع داخلي 01',
        image: '/p13.jpeg',
        gallery: [
          '/in4.jpeg',
          '/in5.jpeg',
        ],
      },
      {
        id: 8,
        titleEn: 'Interior Project 02',
        titleAr: 'مشروع داخلي 02',
        image: '/p14.jpeg',
        gallery: [
          '/in1.jpeg',
          '/in2.jpeg',
          '/in3.jpeg',
          '/in6.jpeg',
        ],
      },
    ],
  },

  {
    id: 'Urban',
    titleEn: 'Urban',
    titleAr: 'المشاريع الحضرية',
    descriptionEn: 'Urban concepts developed with a focus on identity, usability and the surrounding environment.',
    descriptionAr: 'مفاهيم حضرية تركز على الهوية وسهولة الاستخدام والبيئة المحيطة.',
    cover: '/p15.jpeg',
    projects: [
      {
        id: 9,
        titleEn: 'Urban Project 01',
        titleAr: 'مشروع حضري 01',
        image: '/p15.jpeg',
        gallery: [
          '/e1.jpeg',
          '/e2.jpeg',
          '/e3.jpeg',
          '/e4.jpeg',
          '/e5.jpeg',
        ],
      },
      {
        id: 12,
        titleEn: 'Urban Project 02',
        titleAr: 'مشروع حضري 02',
        image: '/p18.jpeg',
        gallery: [
          '/l1.jpeg',
          '/l2.jpeg',
        ],
      },
    ],
  },

  {
    id: 'Landscaping',
    titleEn: 'Landscaping',
    titleAr: 'التصميم البيئي',
    descriptionEn: 'Landscape solutions that connect architecture with nature through thoughtful outdoor spaces.',
    descriptionAr: 'حلول تصميم بيئي تربط العمارة بالطبيعة من خلال المساحات الخارجية المدروسة.',
    cover: '/p16.jpeg',
    projects: [
      {
        id: 10,
        titleEn: 'Landscaping Project 01',
        titleAr: 'مشروع تصميم بيئي 01',
        image: '/p16.jpeg',
        gallery: [
          '/b1.jpeg',
          '/b2.jpeg',
          '/b4.jpeg',
        ],
      },
      {
        id: 11,
        titleEn: 'Landscaping Project 02',
        titleAr: 'مشروع تصميم بيئي 02',
        image: '/p17.jpeg',
        gallery: [
          '/a1.jpeg',
          '/a2.jpeg',
        ],
      },
    ],
  },
];

/* =========================================================
   COMPONENT
   ========================================================= */

export default function PortfolioSection() {
  const { t, lang } = useLanguage();

  const [selectedCategory, setSelectedCategory] =
    useState<Category | null>(null);

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const [currentImage, setCurrentImage] = useState(0);

  const isArabic = lang === 'ar';

  /* =========================================================
     OPEN / CLOSE
     ========================================================= */

  const openCategory = (category: Category) => {
    setSelectedCategory(category);
    setSelectedProject(null);
    setCurrentImage(0);
  };

  const closeCategory = () => {
    setSelectedCategory(null);
    setSelectedProject(null);
    setCurrentImage(0);
  };

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImage(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setCurrentImage(0);
  };

  /* =========================================================
     GALLERY NAVIGATION
     ========================================================= */

  const nextImage = () => {
    if (!selectedProject) return;

    setCurrentImage((prev) =>
      prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const previousImage = () => {
    if (!selectedProject) return;

    setCurrentImage((prev) =>
      prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
    );
  };

  return (
    <section
      className="portfolio-section"
      dir={isArabic ? 'rtl' : 'ltr'}
    >
      {/* =====================================================
          MAIN PORTFOLIO
          ===================================================== */}

      <div className="portfolio-container">

        <h2 className="portfolio-title">
          {t.portfolio.title}
        </h2>

        <p className="portfolio-intro">
          {isArabic
            ? 'استكشف مجموعة من مشاريعنا الهندسية والتصميمية'
            : 'Explore a selection of our engineering and design projects'}
        </p>

        {/* ===================================================
            5 CATEGORY CARDS
            =================================================== */}

        <div className="categories-grid">

          {categories.map((category) => (
            <button
              key={category.id}
              className="category-card"
              onClick={() => openCategory(category)}
              type="button"
            >
              <img
                src={category.cover}
                alt={
                  isArabic
                    ? category.titleAr
                    : category.titleEn
                }
              />

              <div className="category-overlay" />

              <div className="category-content">

                <span className="category-count">
                  {category.projects.length}{' '}
                  {isArabic ? 'مشاريع' : 'Projects'}
                </span>

                <h3>
                  {isArabic
                    ? category.titleAr
                    : category.titleEn}
                </h3>

                <span className="explore-link">
                  {isArabic
                    ? 'استكشف المشاريع'
                    : 'Explore Projects'}

                  <span className="arrow">
                    {isArabic ? '←' : '→'}
                  </span>
                </span>

              </div>
            </button>
          ))}

        </div>
      </div>

      {/* =====================================================
          CATEGORY VIEW
          ===================================================== */}

      {selectedCategory && !selectedProject && (
        <div className="category-modal">

          <div
            className="category-modal-backdrop"
            onClick={closeCategory}
          />

          <div className="category-modal-content">

            <button
              className="close-button"
              onClick={closeCategory}
              type="button"
              aria-label="Close"
            >
              ×
            </button>

            <div className="category-header">

              <span>
                {isArabic
                  ? 'PROJECT COLLECTION'
                  : 'PROJECT COLLECTION'}
              </span>

              <h2>
                {isArabic
                  ? selectedCategory.titleAr
                  : selectedCategory.titleEn}
              </h2>

              <p>
                {isArabic
                  ? selectedCategory.descriptionAr
                  : selectedCategory.descriptionEn}
              </p>

            </div>

            <div className="projects-inside-grid">

              {selectedCategory.projects.map((project) => (
                <button
                  key={project.id}
                  className="inside-project-card"
                  onClick={() => openProject(project)}
                  type="button"
                >

                  <img
                    src={project.image}
                    alt={
                      isArabic
                        ? project.titleAr
                        : project.titleEn
                    }
                  />

                  <div className="inside-project-overlay" />

                  <div className="inside-project-title">

                    <h3>
                      {isArabic
                        ? project.titleAr
                        : project.titleEn}
                    </h3>

                    <span>
                      {isArabic
                        ? 'عرض الصور ←'
                        : 'View Gallery →'}
                    </span>

                  </div>

                </button>
              ))}

            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          PROJECT GALLERY
          ===================================================== */}

      {selectedProject && (
        <div className="gallery-modal">

          <div
            className="gallery-backdrop"
            onClick={closeProject}
          />

          <div className="gallery-content">

            <button
              className="gallery-close"
              onClick={closeProject}
              type="button"
              aria-label="Close gallery"
            >
              ×
            </button>

            <div className="gallery-title">

              <span>
                {isArabic
                  ? 'PROJECT GALLERY'
                  : 'PROJECT GALLERY'}
              </span>

              <h2>
                {isArabic
                  ? selectedProject.titleAr
                  : selectedProject.titleEn}
              </h2>

            </div>

            {/* MAIN IMAGE */}

            <div className="main-gallery-image">

              <img
                src={selectedProject.gallery[currentImage]}
                alt={
                  isArabic
                    ? selectedProject.titleAr
                    : selectedProject.titleEn
                }
              />

              <button
                className="gallery-arrow gallery-arrow-left"
                onClick={isArabic ? nextImage : previousImage}
                type="button"
                aria-label="Previous image"
              >
                {isArabic ? '→' : '←'}
              </button>

              <button
                className="gallery-arrow gallery-arrow-right"
                onClick={isArabic ? previousImage : nextImage}
                type="button"
                aria-label="Next image"
              >
                {isArabic ? '←' : '→'}
              </button>

            </div>

            {/* COUNTER */}

            <div className="gallery-counter">
              {currentImage + 1} / {selectedProject.gallery.length}
            </div>

            {/* THUMBNAILS */}

            <div className="gallery-thumbnails">

              {selectedProject.gallery.map((image, index) => (
                <button
                  key={`${image}-${index}`}
                  className={
                    index === currentImage
                      ? 'gallery-thumbnail active'
                      : 'gallery-thumbnail'
                  }
                  onClick={() => setCurrentImage(index)}
                  type="button"
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                  />
                </button>
              ))}

            </div>

          </div>
        </div>
      )}

      {/* =====================================================
          CSS
          ===================================================== */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        .portfolio-section {
          width: 100%;
          background: #e8ecf0;
          padding: 80px 20px;
          color: #0A192F;
        }

        .portfolio-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .portfolio-title {
          text-align: center;
          font-size: 42px;
          color: #0A192F;
          margin: 0 0 12px;
          font-weight: 700;
        }

        .portfolio-intro {
          text-align: center;
          color: #64748b;
          font-size: 16px;
          margin: 0 auto 50px;
          max-width: 650px;
          line-height: 1.7;
        }

        /* ===================================================
           CATEGORY GRID
           =================================================== */

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .category-card {
          position: relative;
          height: 300px;
          width: 100%;
          padding: 0;
          border: none;
          border-radius: 18px;
          overflow: hidden;
          cursor: pointer;
          background: #0A192F;
          text-align: inherit;
          box-shadow: 0 12px 30px rgba(10, 25, 47, 0.14);
          transition:
            transform .35s ease,
            box-shadow .35s ease;
        }

        .categories-grid {
        display: grid;
       grid-template-columns: repeat(2, 1fr);
       gap: 24px;
        }

        .category-card img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .7s ease;
        }

        .category-card:hover {
          transform: translateY(-7px);
          box-shadow: 0 20px 45px rgba(10, 25, 47, 0.22);
        }

        .category-card:hover img {
          transform: scale(1.06);
        }

        .category-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              to top,
              rgba(4, 15, 30, .92) 0%,
              rgba(4, 15, 30, .45) 48%,
              rgba(4, 15, 30, .05) 100%
            );
        }

        .category-content {
          position: absolute;
          left: 28px;
          right: 28px;
          bottom: 28px;
          color: white;
          z-index: 2;
        }

        .category-count {
          display: block;
          color: #c7a859;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .category-content h3 {
          margin: 0 0 12px;
          font-size: 30px;
          font-weight: 600;
        }

        .explore-link {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #e2e8f0;
          font-weight: 500;
        }

        .arrow {
          font-size: 18px;
          transition: transform .3s ease;
        }

        .category-card:hover .arrow {
          transform: translateX(5px);
        }

        /* ===================================================
           CATEGORY MODAL
           =================================================== */

        .category-modal,
        .gallery-modal {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 25px;
        }

        .category-modal-backdrop,
        .gallery-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(3, 12, 25, .82);
          backdrop-filter: blur(8px);
        }

        .category-modal-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1150px;
          max-height: 90vh;
          overflow-y: auto;
          background: #f8fafc;
          border-radius: 20px;
          padding: 45px;
          box-shadow: 0 30px 80px rgba(0,0,0,.35);
        }

        .close-button,
        .gallery-close {
          position: absolute;
          top: 18px;
          right: 20px;
          width: 42px;
          height: 42px;
          border: none;
          border-radius: 50%;
          background: #0A192F;
          color: white;
          font-size: 27px;
          line-height: 1;
          cursor: pointer;
          z-index: 10;
        }

        .category-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 35px;
        }

        .category-header span,
        .gallery-title span {
          color: #8a7355;
          font-size: 12px;
          letter-spacing: 3px;
          font-weight: 700;
        }

        .category-header h2 {
          margin: 8px 0 12px;
          font-size: 38px;
          color: #0A192F;
        }

        .category-header p {
          margin: 0;
          color: #64748b;
          font-size: 15px;
          line-height: 1.8;
        }

        /* ===================================================
           PROJECTS INSIDE CATEGORY
           =================================================== */

        .projects-inside-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .inside-project-card {
          position: relative;
          height: 280px;
          padding: 0;
          border: none;
          border-radius: 14px;
          overflow: hidden;
          cursor: pointer;
          background: #0A192F;
          text-align: inherit;
        }

        .inside-project-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform .6s ease;
        }

        .inside-project-card:hover img {
          transform: scale(1.06);
        }

        .inside-project-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              to top,
              rgba(4,15,30,.9),
              rgba(4,15,30,.05)
            );
        }

        .inside-project-title {
          position: absolute;
          left: 20px;
          right: 20px;
          bottom: 20px;
          color: white;
        }

        .inside-project-title h3 {
          margin: 0 0 7px;
          font-size: 20px;
        }

        .inside-project-title span {
          color: #c7a859;
          font-size: 13px;
        }

        /* ===================================================
           GALLERY
           =================================================== */

        .gallery-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1100px;
          max-height: 94vh;
          overflow-y: auto;
          background: #f8fafc;
          border-radius: 20px;
          padding: 35px;
          box-shadow: 0 30px 80px rgba(0,0,0,.4);
        }

        .gallery-title {
          text-align: center;
          margin-bottom: 25px;
        }

        .gallery-title h2 {
          margin: 7px 0 0;
          font-size: 30px;
          color: #0A192F;
        }

        .main-gallery-image {
          position: relative;
          width: 100%;
          height: min(62vh, 620px);
          background: #071120;
          border-radius: 14px;
          overflow: hidden;
        }

        .main-gallery-image img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .gallery-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          border: none;
          border-radius: 50%;
          background: rgba(255,255,255,.92);
          color: #0A192F;
          font-size: 25px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 5px 20px rgba(0,0,0,.2);
        }

        .gallery-arrow-left {
          left: 18px;
        }

        .gallery-arrow-right {
          right: 18px;
        }

        .gallery-counter {
          text-align: center;
          color: #64748b;
          font-size: 13px;
          margin: 15px 0;
        }

        .gallery-thumbnails {
          display: flex;
          justify-content: center;
          gap: 10px;
          flex-wrap: wrap;
        }

        .gallery-thumbnail {
          width: 78px;
          height: 58px;
          padding: 0;
          border: 2px solid transparent;
          border-radius: 7px;
          overflow: hidden;
          cursor: pointer;
          background: #ddd;
          opacity: .65;
          transition: .25s ease;
        }

        .gallery-thumbnail:hover {
          opacity: 1;
        }

        .gallery-thumbnail.active {
          border-color: #c7a859;
          opacity: 1;
        }

        .gallery-thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* ===================================================
           TABLET
           =================================================== */

        @media (max-width: 768px) {

          .portfolio-section {
            padding: 60px 15px;
          }

          .portfolio-title {
            font-size: 30px;
          }

          .portfolio-intro {
            font-size: 14px;
            margin-bottom: 35px;
          }

          .categories-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .category-card,
          .category-card:nth-child(1) {
            grid-column: span 1;
            height: 300px;
          }

          .category-content {
            left: 20px;
            right: 20px;
            bottom: 20px;
          }

          .category-content h3 {
            font-size: 25px;
          }

          .category-modal,
          .gallery-modal {
            padding: 12px;
          }

          .category-modal-content,
          .gallery-content {
            padding: 30px 18px;
            max-height: 94vh;
            border-radius: 15px;
          }

          .category-header h2 {
            font-size: 30px;
          }

          .projects-inside-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }

          .inside-project-card {
            height: 230px;
          }

          .main-gallery-image {
            height: 55vh;
          }

        }

        /* ===================================================
           MOBILE
           =================================================== */

        @media (max-width: 480px) {

          .portfolio-section {
            padding: 50px 10px;
          }

          .portfolio-title {
            font-size: 25px;
          }

          .category-card,
          .category-card:nth-child(1) {
            height: 250px;
            border-radius: 14px;
          }

          .category-content h3 {
            font-size: 22px;
          }

          .category-count {
            font-size: 10px;
            letter-spacing: 1.5px;
          }

          .explore-link {
            font-size: 12px;
          }

          .category-modal-content,
          .gallery-content {
            padding: 28px 12px 18px;
          }

          .close-button,
          .gallery-close {
            width: 36px;
            height: 36px;
            top: 12px;
            right: 12px;
            font-size: 23px;
          }

          .category-header {
            margin-bottom: 25px;
          }

          .category-header h2 {
            font-size: 25px;
          }

          .category-header p {
            font-size: 13px;
          }

          .projects-inside-grid {
            grid-template-columns: 1fr;
          }

          .inside-project-card {
            height: 230px;
          }

          .gallery-title h2 {
            font-size: 23px;
          }

          .main-gallery-image {
            height: 52vh;
            border-radius: 10px;
          }

          .gallery-arrow {
            width: 40px;
            height: 40px;
            font-size: 20px;
          }

          .gallery-arrow-left {
            left: 10px;
          }

          .gallery-arrow-right {
            right: 10px;
          }

          .gallery-thumbnail {
            width: 65px;
            height: 48px;
          }

        }

      `}</style>
    </section>
  );
}

