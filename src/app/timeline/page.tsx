import React from "react";
import { Metadata } from "next";
import MainLayout from "@/components/layout/main-layout";
import { firmInfo } from "@/lib/dummy-data";
import Image from "next/image";
import { Award, Building, Users, TrendingUp, Globe, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: `Timeline - ${firmInfo.name}`,
  description: "Perjalanan dan pencapaian MSB Law Office dari tahun ke tahun dalam memberikan layanan hukum terbaik.",
  keywords: "sejarah firma hukum, milestone, pencapaian, perjalanan perusahaan",
};

const timelineData = [
  {
    year: "2024",
    title: "Ekspansi Internasional",
    description: "Membuka kantor perwakilan di Singapura untuk melayani klien-klien regional dan memperkuat posisi di pasar ASEAN.",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    achievements: [
      "Kantor cabang Singapura dibuka",
      "Partnership dengan 5 firma hukum internasional",
      "50+ klien multinasional baru",
    ],
  },
  {
    year: "2023",
    title: "Penghargaan Bergengsi",
    description: "Meraih penghargaan 'Best Law Firm of the Year' dari Indonesian Legal Awards dan masuk dalam top 10 firma hukum terbaik di Indonesia.",
    icon: Award,
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=800&auto=format&fit=crop",
    achievements: [
      "Best Law Firm of the Year 2023",
      "Top 10 Law Firms in Indonesia",
      "Excellence in Corporate Law Award",
    ],
  },
  {
    year: "2022",
    title: "Divisi Baru & Teknologi",
    description: "Meluncurkan divisi Cyber Law dan implementasi sistem manajemen kasus berbasis AI untuk meningkatkan efisiensi layanan.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=800&auto=format&fit=crop",
    achievements: [
      "Divisi Cyber Law & Data Protection",
      "AI-powered case management system",
      "Digital transformation program",
    ],
  },
  {
    year: "2021",
    title: "Pertumbuhan Tim",
    description: "Perekrutan 20 associate baru dan 5 senior partner untuk memperkuat kapasitas dalam menangani kasus-kasus kompleks.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop",
    achievements: [
      "Tim berkembang menjadi 50+ profesional",
      "5 senior partner bergabung",
      "Training & development program",
    ],
  },
  {
    year: "2020",
    title: "Pandemi & Adaptasi Digital",
    description: "Successfully navigated pandemic challenges dengan implementasi remote consultation dan digital documentation system.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=800&auto=format&fit=crop",
    achievements: [
      "Virtual consultation platform",
      "100% business continuity",
      "Paperless office initiative",
    ],
  },
  {
    year: "2018",
    title: "Kantor Baru Jakarta",
    description: "Pindah ke kantor baru yang lebih luas di Jakarta Pusat untuk mengakomodasi pertumbuhan tim dan meningkatkan kenyamanan klien.",
    icon: Building,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop",
    achievements: [
      "Kantor 1000m² di Sudirman",
      "Modern meeting facilities",
      "Client lounge & library",
    ],
  },
  {
    year: "2015",
    title: "Rebranding & Repositioning",
    description: "Melakukan rebranding menjadi MSB Law Office dengan fokus pada layanan korporasi dan litigasi komersial.",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=800&auto=format&fit=crop",
    achievements: [
      "New corporate identity",
      "Specialized practice areas",
      "Enhanced service standards",
    ],
  },
  {
    year: "2010",
    title: "Pendirian Firma",
    description: "MSB Law Office didirikan oleh tiga partner pendiri dengan visi menjadi firma hukum terkemuka di Indonesia.",
    icon: Building,
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=800&auto=format&fit=crop",
    achievements: [
      "Firma resmi didirikan",
      "3 founding partners",
      "Kantor pertama dibuka",
    ],
  },
];

export default function TimelinePage() {
  return (
    <MainLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 text-white">
          <div className="absolute inset-0">
            <Image 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1600&auto=format&fit=crop" 
              alt="Timeline" 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-yellow-900/90" />
          </div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400">
                Perjalanan Kami
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Timeline & Milestone</h1>
              <p className="text-xl text-slate-200 leading-relaxed">
                Menelusuri perjalanan MSB Law Office dari awal berdiri hingga menjadi salah satu firma hukum terkemuka di Indonesia.
              </p>
            </div>
          </div>
        </section>

        {/* Timeline Content */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-600 via-yellow-600 to-red-600 transform md:-translate-x-1/2" />

              {/* Timeline Items */}
              <div className="space-y-12">
                {timelineData.map((item, idx) => (
                  <div
                    key={idx}
                    className={`relative flex flex-col md:flex-row gap-8 ${
                      idx % 2 === 0 ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Year Badge */}
                    <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-yellow-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`md:w-1/2 ${idx % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                      <div className="ml-24 md:ml-0 bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all duration-300 border-l-4 border-red-600">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge className="bg-red-600 text-white text-lg px-4 py-1">
                            {item.year}
                          </Badge>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 mb-4 leading-relaxed">
                          {item.description}
                        </p>
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-slate-900">Pencapaian:</p>
                          <ul className="space-y-1">
                            {item.achievements.map((achievement, i) => (
                              <li key={i} className="text-sm text-slate-600 flex items-start">
                                <span className="text-yellow-600 mr-2">✓</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Image */}
                    <div className={`md:w-1/2 ${idx % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                      <div className="ml-24 md:ml-0 relative h-64 rounded-xl overflow-hidden shadow-lg">
                        <Image 
                          src={item.image} 
                          alt={item.title} 
                          fill 
                          className="object-cover hover:scale-110 transition-transform duration-500" 
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Pencapaian Kami Dalam Angka
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-5xl font-bold text-red-600 mb-2">14+</div>
                <p className="text-slate-600">Tahun Pengalaman</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-red-600 mb-2">500+</div>
                <p className="text-slate-600">Kasus Berhasil</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-red-600 mb-2">50+</div>
                <p className="text-slate-600">Tim Profesional</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-red-600 mb-2">15+</div>
                <p className="text-slate-600">Penghargaan</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-red-600 to-yellow-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bergabunglah Dalam Perjalanan Kami
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Mari bersama-sama menciptakan solusi hukum terbaik untuk masa depan yang lebih baik.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/kontak"
                className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-colors shadow-xl"
              >
                Hubungi Kami
              </a>
              <a
                href="/tentang"
                className="inline-block bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Tentang Kami
              </a>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
