'use client';

import React from 'react';
import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
} from 'react-icons/fa';
import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { t, dir } = useLanguage();

  const isArabic = dir === 'rtl';

  return (
    <footer className="bb-footer" dir={dir}>

      {/* =========================
          LOGO
      ========================== */}
      <div className="bb-footer-logo-section">

        <img
          src="/logo.png"
          alt="ETMAM Logo"
          className="bb-footer-logo"
        />

        <div className="bb-footer-logo-line">
          <span></span>

          <span className="bb-footer-diamond">
            ◆
          </span>

          <span></span>
        </div>

      </div>


      {/* =========================
          NAVIGATION
      ========================== */}
      <nav className="bb-footer-nav">

        <a
          href="/"
          className="bb-footer-nav-link"
        >
          {t.navHome}
        </a>

        <span className="bb-footer-nav-line"></span>

        <a
          href="/Services"
          className="bb-footer-nav-link"
        >
          {t.navServices}
        </a>

        <span className="bb-footer-nav-line"></span>

        <a
          href="/projects"
          className="bb-footer-nav-link"
        >
          {t.navProjects}
        </a>

        <span className="bb-footer-nav-line"></span>

       <a
    href="/#about-us"
    className="bb-footer-nav-link"
  >
    {t.navAbout || (isArabic ? 'من نحن؟' : 'About Us')}
  </a>

  <span className="bb-footer-nav-line"></span>

  <a
    href="/?openContact=true"
    className="bb-footer-nav-link"
  >
    {t.navContact || (isArabic ? 'اتصل بنا' : 'Contact Us')}
  </a>

</nav>


      {/* =========================
          SOCIAL MEDIA
      ========================== */}
      <div className="bb-footer-social">

        {/* Instagram */}
        <a
          href="https://instagram.com/ETMAM_engineering"
          target="_blank"
          rel="noopener noreferrer"
          className="bb-footer-social-item"
          aria-label="Instagram"
        >
          <span className="bb-footer-social-circle">
            <FaInstagram />
          </span>

          <span className="bb-footer-social-label">
            Instagram
          </span>
        </a>


        {/* WhatsApp */}
        <a
          href="https://api.whatsapp.com/send?phone=96872552026"
          target="_blank"
          rel="noopener noreferrer"
          className="bb-footer-social-item"
          aria-label="WhatsApp"
        >
          <span className="bb-footer-social-circle">
            <FaWhatsapp />
          </span>

          <span className="bb-footer-social-label">
            WhatsApp
          </span>
        </a>


        {/* Email */}
        <a
          href="mailto:info@etmames.com"
          className="bb-footer-social-item"
          aria-label="Email"
        >
          <span className="bb-footer-social-circle">
            <FaEnvelope />
          </span>

          <span className="bb-footer-social-label">
            Email
          </span>
        </a>

      </div>


      {/* =========================
          BOTTOM LINE
      ========================== */}
      <div className="bb-footer-bottom-decoration">

        <span></span>

        <span className="bb-footer-bottom-diamond">
          ◆
        </span>

        <span></span>

      </div>


      {/* =========================
          COPYRIGHT
      ========================== */}
      <div className="bb-footer-bottom">
        {t.footerRights}
      </div>

    </footer>
  );
}