'use client';

import React, { useState } from 'react';
import { COURSES } from '@/data/courses';
import { Course, CourseCategory } from '@/types/course';
import { PromoBanner } from '@/components/PromoBanner';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TrustBar } from '@/components/TrustBar';
import { Modalities } from '@/components/Modalities';
import { CourseCatalog } from '@/components/CourseCatalog';
import { CompetenceQuiz } from '@/components/CompetenceQuiz';
import { SalaryRoiCalculator } from '@/components/SalaryRoiCalculator';
import { AccreditationSection } from '@/components/AccreditationSection';
import { PoloSection } from '@/components/PoloSection';
import { Testimonials } from '@/components/Testimonials';
import { LeadForm } from '@/components/LeadForm';
import { FaqSection } from '@/components/FaqSection';
import { Footer } from '@/components/Footer';
import { CourseModal } from '@/components/CourseModal';
import { CheckoutModal } from '@/components/CheckoutModal';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { LiveEnrollmentTicker } from '@/components/LiveEnrollmentTicker';

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState<CourseCategory>('todos');
  const [selectedCourseForDetails, setSelectedCourseForDetails] = useState<Course | null>(null);
  const [selectedCourseForCheckout, setSelectedCourseForCheckout] = useState<Course | null>(null);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isCompetenceQuizOpen, setIsCompetenceQuizOpen] = useState(false);

  const handleExploreCourses = () => {
    const el = document.getElementById('catalogo-cursos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleEnrollNow = (course: Course) => {
    setSelectedCourseForCheckout(course);
    setIsCheckoutOpen(true);
  };

  const handleSelectModality = (cat: string) => {
    setActiveCategory(cat as CourseCategory);
    const el = document.getElementById('catalogo-cursos');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleClaimDiscount = () => {
    const el = document.getElementById('contato');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-blue-600 selection:text-white">
      {/* 1. Urgency Top Discount Banner */}
      <PromoBanner onClaimDiscount={handleClaimDiscount} />

      {/* 2. Main Navigation Header */}
      <Header 
        onOpenLeadModal={handleClaimDiscount}
        onFilterCategory={(cat) => handleSelectModality(cat)}
      />

      {/* 3. Hero Section with dynamic value proposition */}
      <Hero 
        onExploreCourses={handleExploreCourses}
        onOpenCompetenceQuiz={() => setIsCompetenceQuizOpen(true)}
      />

      {/* 4. Trust Bar with 4 pillars and MEC statistics */}
      <TrustBar />

      {/* 5. 5 Modalities Showcase Cards */}
      <Modalities 
        onSelectModality={handleSelectModality}
        onOpenCompetenceQuiz={() => setIsCompetenceQuizOpen(true)}
      />

      {/* 6. Inline Competence Simulator (Diploma in 48h) */}
      <CompetenceQuiz isInline={true} />

      {/* 7. Interactive Course Catalog with Filter & Search */}
      <CourseCatalog 
        courses={COURSES}
        activeCategory={activeCategory}
        onSelectCategory={(cat) => setActiveCategory(cat)}
        onOpenCourseModal={(course) => setSelectedCourseForDetails(course)}
        onEnrollNow={handleEnrollNow}
      />

      {/* 8. Conversion Enhancement: Interactive Salary & ROI Calculator */}
      <SalaryRoiCalculator onExploreCourses={handleExploreCourses} />

      {/* 9. Official Accreditation (SISTEC / MEC School Code 48643) */}
      <AccreditationSection />

      {/* 10. Regional Hub Section */}
      <PoloSection onTalkToAdvisor={handleClaimDiscount} />

      {/* 11. Student Testimonials & Social Proof */}
      <Testimonials />

      {/* 12. Lead Capture Form with Instant WhatsApp Conversion */}
      <LeadForm />

      {/* 13. Expandable FAQ Accordion */}
      <FaqSection />

      {/* 14. Deep Navy Modern Footer */}
      <Footer />

      {/* Interactive Modals */}
      <CourseModal 
        course={selectedCourseForDetails}
        onClose={() => setSelectedCourseForDetails(null)}
        onEnroll={(c) => {
          setSelectedCourseForDetails(null);
          handleEnrollNow(c);
        }}
      />

      <CheckoutModal 
        course={selectedCourseForCheckout}
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />

      {/* Standalone Competence Quiz Modal when triggered from header/hero buttons */}
      <CompetenceQuiz 
        isOpen={isCompetenceQuizOpen}
        onClose={() => setIsCompetenceQuizOpen(false)}
        isInline={false}
      />

      {/* Conversion Enhancement: Live Social Proof Ticker */}
      <LiveEnrollmentTicker />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppFloat />
    </div>
  );
}
