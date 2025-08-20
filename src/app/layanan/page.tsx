import React from 'react';
import { Metadata } from 'next';
import ServicesGrid from '@/components/services/services-grid';
import ServicesCTA from '@/components/services/services-cta';
import MainLayout from '@/components/layout/main-layout';
import { firmInfo } from '@/lib/dummy-data';
import Image from 'next/image';


export const metadata: Metadata = {
  title: `Layanan Hukum - ${firmInfo.name}`,
  description: 'Layanan hukum komprehensif meliputi hukum korporasi, litigasi, properti, keluarga, HKI, dan ketenagakerjaan. Konsultasi gratis tersedia.',
  keywords: 'layanan hukum, pengacara, konsultasi hukum, hukum korporasi, litigasi, properti, jakarta',
};

export default function ServicesPage() {
  return (
    <MainLayout>
      <div className="min-h-screen">
        {/* Page Header */}
        <section className="relative py-24 text-white">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1600&auto=format&fit=crop" alt="Layanan Hukum" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Layanan Hukum Kami</h1>
              <p className="text-xl text-slate-200 leading-relaxed">
                Solusi hukum komprehensif untuk memenuhi berbagai kebutuhan klien,
                dari individu hingga perusahaan multinasional.
              </p>
            </div>
          </div>
        </section>

        <ServicesGrid />
        <ServicesCTA />
      </div>
    </MainLayout>
  );
}
