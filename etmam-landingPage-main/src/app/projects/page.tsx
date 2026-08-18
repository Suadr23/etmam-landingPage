'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioSection from '@/components/projects/PortfolioSection';
import React from 'react';

export default function ProjectsPage() {
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

      {/* Shared unified footer (high-contrast, readable on mobile) */}
      <Footer />
    </>
  );
}

