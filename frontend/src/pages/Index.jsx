import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import CoursesSection from '@/components/CoursesSection';
import FeaturesSection from '@/components/FeaturesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <PageTransition>
        <main>
          <HeroSection />
          <AboutSection />
          <CoursesSection />
          <FeaturesSection />
          <TestimonialsSection />
          <ContactSection />
        </main>
        <Footer />
      </PageTransition>
    </div>
  );
};

export default Index;
