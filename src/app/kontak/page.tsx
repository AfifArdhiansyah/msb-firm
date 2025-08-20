import React from 'react';
import { Metadata } from 'next';
import ContactForm from '@/components/contact/contact-form';
import ContactInfo from '@/components/contact/contact-info';
import ContactMap from '@/components/contact/contact-map';
import MainLayout from '@/components/layout/main-layout';
import Image from 'next/image';

import { firmInfo } from '@/lib/dummy-data';

export const metadata: Metadata = {
  title: `Hubungi Kami - ${firmInfo.name}`,
  description: 'Hubungi Hukum Prima & Associates untuk konsultasi hukum gratis. Tersedia WhatsApp, telepon, email, dan kunjungan langsung ke kantor kami di Jakarta.',
  keywords: 'kontak, konsultasi hukum, whatsapp, telepon, email, alamat kantor, jakarta',
};

export default function ContactPage() {
  return (
    <MainLayout>
      <div className="min-h-screen">
        {/* Page Header */}
        <section className="relative py-24 text-white">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop" alt="Hubungi Kami" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Hubungi Kami</h1>
              <p className="text-xl text-slate-200 leading-relaxed">
                Siap membantu Anda dengan solusi hukum terbaik. Konsultasi gratis tersedia 24/7
                melalui berbagai channel komunikasi yang mudah dan nyaman.
              </p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
          {/* Contact Form */}
          <ContactForm />

          {/* Contact Info */}
          <ContactInfo />
        </div>

        {/* Map */}
        <ContactMap />
      </div>
    </MainLayout>
  );
}
