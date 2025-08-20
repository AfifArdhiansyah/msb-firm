import HeroSection from '@/components/home/hero-section';
import KeySellingPoints from '@/components/home/key-selling-points';
import ClientsPartners from '@/components/home/clients-partners';
import ServicesPreview from '@/components/home/services-preview';
import NewsCarousel from '@/components/home/news-carousel';

import MainLayout from '@/components/layout/main-layout';

export default function Home() {
  return (
    <MainLayout>
      <div className="min-h-screen">
        <HeroSection />
        <KeySellingPoints />
        <ServicesPreview />
        <ClientsPartners />
        <NewsCarousel />
      </div>
    </MainLayout>
  );
}
