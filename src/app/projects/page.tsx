'use client';

import Header from '@/components/Header';
import PortfolioSection from '@/components/projects/PortfolioSection';

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
    </>
  );
}