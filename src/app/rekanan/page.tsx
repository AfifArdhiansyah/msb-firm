import React from "react";
import { Metadata } from "next";
import MainLayout from "@/components/layout/main-layout";
import { firmInfo } from "@/lib/dummy-data";
import Image from "next/image";
import { Handshake, Building2, Globe2, Award, Users, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: `Rekanan & Partnership - ${firmInfo.name}`,
  description: "Partner strategis dan rekanan MSB Law Office dalam memberikan solusi hukum terbaik untuk klien.",
  keywords: "partner hukum, rekanan, kerjasama, strategic partnership",
};

const partnerCategories = [
  {
    icon: Building2,
    title: "Corporate Partners",
    count: "30+",
    description: "Perusahaan korporasi yang mempercayai layanan kami",
  },
  {
    icon: Globe2,
    title: "International Firms",
    count: "15+",
    description: "Firma hukum internasional sebagai mitra strategis",
  },
  {
    icon: Users,
    title: "Government Agencies",
    count: "10+",
    description: "Instansi pemerintah yang bekerjasama dengan kami",
  },
  {
    icon: Award,
    title: "Industry Associations",
    count: "20+",
    description: "Asosiasi industri dan organisasi profesional",
  },
];

const corporatePartners = [
  {
    name: "PT Bank Mandiri Tbk",
    category: "Perbankan",
    logo: "https://static.cdnlogo.com/logos/b/26/bank-mandiri.svg",
    description: "Partner strategis dalam layanan hukum perbankan dan keuangan",
  },
  {
    name: "PT Telkom Indonesia",
    category: "Telekomunikasi",
    logo: "https://static.cdnlogo.com/logos/t/44/telkom-indonesia.svg",
    description: "Konsultan hukum untuk proyek digital transformation",
  },
  {
    name: "PT Unilever Indonesia",
    category: "Consumer Goods",
    logo: "https://static.cdnlogo.com/logos/u/33/unilever.svg",
    description: "Legal advisor untuk compliance dan corporate matters",
  },
  {
    name: "Grab Indonesia",
    category: "Technology",
    logo: "https://static.cdnlogo.com/logos/g/63/grab.svg",
    description: "Partner hukum untuk regulasi dan ekspansi bisnis",
  },
  {
    name: "Shopee Indonesia",
    category: "E-Commerce",
    logo: "https://static.cdnlogo.com/logos/s/95/shopee.svg",
    description: "Konsultan hukum e-commerce dan perlindungan konsumen",
  },
  {
    name: "Tokopedia",
    category: "E-Commerce",
    logo: "https://static.cdnlogo.com/logos/t/57/tokopedia.svg",
    description: "Legal support untuk platform dan transaksi digital",
  },
];

const internationalPartners = [
  {
    name: "Baker McKenzie",
    location: "Singapore",
    specialization: "Global Corporate Law",
    flag: "🇸🇬",
  },
  {
    name: "Allen & Overy",
    location: "London, UK",
    specialization: "International Finance",
    flag: "🇬🇧",
  },
  {
    name: "Linklaters",
    location: "Hong Kong",
    specialization: "Capital Markets",
    flag: "🇭🇰",
  },
  {
    name: "Clifford Chance",
    location: "Tokyo, Japan",
    specialization: "Corporate M&A",
    flag: "🇯🇵",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Akses Pasar Global",
    description: "Network internasional untuk mendukung ekspansi bisnis klien ke pasar global.",
  },
  {
    icon: Users,
    title: "Expertise Terkini",
    description: "Kolaborasi dengan para ahli terbaik di berbagai bidang hukum.",
  },
  {
    icon: Award,
    title: "Best Practice",
    description: "Implementasi standar internasional dalam setiap layanan hukum.",
  },
  {
    icon: Handshake,
    title: "Trusted Network",
    description: "Jaringan terpercaya yang telah teruji dalam berbagai proyek.",
  },
];

export default function PartnersPage() {
  return (
    <MainLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 text-white">
          <div className="absolute inset-0">
            <Image 
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1600&auto=format&fit=crop" 
              alt="Partners" 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-yellow-900/90" />
          </div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400">
                Strategic Partnership
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Rekanan & Partnership</h1>
              <p className="text-xl text-slate-200 leading-relaxed">
                Bermitra dengan perusahaan terkemuka dan firma hukum internasional untuk memberikan solusi hukum terbaik dan komprehensif.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partnerCategories.map((category, idx) => (
                <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <category.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{category.title}</h3>
                    <p className="text-3xl font-bold text-red-600 mb-2">{category.count}</p>
                    <p className="text-sm text-slate-600">{category.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Corporate Partners */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Partner Korporasi Kami
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Dipercaya oleh perusahaan-perusahaan terkemuka di Indonesia untuk berbagai kebutuhan hukum mereka.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {corporatePartners.map((partner, idx) => (
                <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="h-20 flex items-center justify-center mb-4 bg-slate-50 rounded-lg p-4">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="max-h-16 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                    <Badge className="mb-3 bg-red-100 text-red-600 hover:bg-red-100">
                      {partner.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {partner.name}
                    </h3>
                    <p className="text-slate-600 text-sm">
                      {partner.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* International Partners */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Firma Hukum Internasional
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Network global dengan firma hukum terkemuka untuk mendukung transaksi lintas negara.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {internationalPartners.map((partner, idx) => (
                <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{partner.flag}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-slate-600 mb-2">{partner.location}</p>
                    <Badge variant="secondary" className="text-xs">
                      {partner.specialization}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Keuntungan Partnership
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Nilai tambah yang kami berikan melalui jaringan partnership yang kuat.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-yellow-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-red-600 to-yellow-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <Handshake className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tertarik Bermitra Dengan Kami?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Mari bergabung dengan network profesional kami dan ciptakan kerjasama yang saling menguntungkan.
            </p>
            <a
              href="/kontak"
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-colors shadow-xl"
            >
              Hubungi Kami
            </a>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
