import HeroSection from '@/components/home/hero-section';
import KeySellingPoints from '@/components/home/key-selling-points';
import ClientsPartners from '@/components/home/clients-partners';
import ServicesPreview from '@/components/home/services-preview';
import NewsCarousel from '@/components/home/news-carousel';
import ScrollReveal from '@/components/ui/scroll-reveal';

import MainLayout from '@/components/layout/main-layout';
import PageWrapper from '@/components/ui/page-wrapper';
import FloatingActionButton from '@/components/ui/floating-action-button';

export default function Home() {
  return (
    <MainLayout>
      <PageWrapper>
        <div className="min-h-screen">
          <HeroSection />
          <ScrollReveal threshold={0.3} duration={1.0}>
            <KeySellingPoints />
          </ScrollReveal>
          <ScrollReveal threshold={0.3} duration={0.8} delay={0.2}>
            <ServicesPreview />
          </ScrollReveal>
          <ScrollReveal threshold={0.3} duration={0.8} delay={0.3}>
            <ClientsPartners />
          </ScrollReveal>
          <ScrollReveal threshold={0.3} duration={0.8} delay={0.4}>
            <NewsCarousel />
          </ScrollReveal>
        </div>
      </PageWrapper>
    </MainLayout>
  );
}
