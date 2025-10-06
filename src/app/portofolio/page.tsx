import React from "react";
import { Metadata } from "next";
import MainLayout from "@/components/layout/main-layout";
import { firmInfo } from "@/lib/dummy-data";
import Image from "next/image";
import { Scale, TrendingUp, Building2, FileCheck, Users, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: `Portofolio - ${firmInfo.name}`,
  description: "Rekam jejak keberhasilan MSB Law Office dalam menangani berbagai kasus hukum yang kompleks dan menantang.",
  keywords: "portofolio hukum, kasus sukses, rekam jejak, pengalaman firma hukum",
};

const portfolioCategories = [
  {
    icon: Building2,
    title: "Hukum Korporasi",
    count: "50+",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: Scale,
    title: "Litigasi",
    count: "120+",
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    icon: FileCheck,
    title: "Kontrak & Perjanjian",
    count: "200+",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    icon: Users,
    title: "Hukum Keluarga",
    count: "80+",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
];

const portfolioItems = [
  {
    id: 1,
    category: "Hukum Korporasi",
    title: "Merger & Akuisisi Perusahaan Multinasional",
    description: "Berhasil memfasilitasi proses merger dua perusahaan besar dengan nilai transaksi lebih dari Rp 500 miliar.",
    year: "2024",
    result: "Deal Successfully Closed",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    tags: ["M&A", "Corporate", "Due Diligence"],
  },
  {
    id: 2,
    category: "Litigasi",
    title: "Sengketa Komersial Bernilai Tinggi",
    description: "Memenangkan kasus arbitrase internasional untuk klien dengan klaim senilai USD 50 juta.",
    year: "2024",
    result: "Won Arbitration",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
    tags: ["Arbitration", "Commercial", "International"],
  },
  {
    id: 3,
    category: "Hukum Properti",
    title: "Pengembangan Real Estate Skala Besar",
    description: "Memberikan konsultasi hukum lengkap untuk proyek pengembangan properti mixed-use senilai Rp 1 triliun.",
    year: "2023",
    result: "Project Approved",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    tags: ["Real Estate", "Property", "Development"],
  },
  {
    id: 4,
    category: "Hukum Korporasi",
    title: "IPO Perusahaan Teknologi",
    description: "Mendampingi perusahaan teknologi dalam proses Initial Public Offering di Bursa Efek Indonesia.",
    year: "2023",
    result: "Successfully Listed",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
    tags: ["IPO", "Capital Market", "Tech"],
  },
  {
    id: 5,
    category: "Compliance",
    title: "Restructuring Program Kepatuhan",
    description: "Membantu perusahaan multinasional merombak sistem compliance untuk memenuhi regulasi Indonesia.",
    year: "2023",
    result: "Compliance Achieved",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop",
    tags: ["Compliance", "Corporate", "Regulatory"],
  },
  {
    id: 6,
    category: "Litigasi",
    title: "Gugatan Perdata Kompleks",
    description: "Berhasil membela klien dalam gugatan perdata multi-pihak dengan nilai klaim Rp 200 miliar.",
    year: "2022",
    result: "Case Dismissed",
    image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=1200&auto=format&fit=crop",
    tags: ["Civil Litigation", "Defense", "Multi-party"],
  },
];

export default function PortfolioPage() {
  return (
    <MainLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 text-white">
          <div className="absolute inset-0">
            <Image 
              src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1600&auto=format&fit=crop" 
              alt="Portofolio" 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-yellow-900/90" />
          </div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400">
                Track Record Kami
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Portofolio & Keberhasilan</h1>
              <p className="text-xl text-slate-200 leading-relaxed">
                Rekam jejak keberhasilan MSB Law Office dalam menangani berbagai kasus hukum yang kompleks dan menantang untuk klien-klien terbaik kami.
              </p>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {portfolioCategories.map((category, idx) => (
                <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-1">{category.title}</h3>
                    <p className="text-3xl font-bold text-red-600">{category.count}</p>
                    <p className="text-sm text-slate-600 mt-1">Kasus Berhasil</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Studi Kasus Terpilih
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Berikut adalah beberapa kasus yang berhasil kami tangani dengan hasil yang memuaskan klien.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item) => (
                <Card key={item.id} className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-red-600 text-white">
                      {item.category}
                    </Badge>
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">{item.year}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 mb-4 line-clamp-3">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        <FileCheck className="w-3 h-3 mr-1" />
                        {item.result}
                      </Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-red-600 to-yellow-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <Briefcase className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Jadilah Bagian dari Kisah Sukses Kami
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Percayakan masalah hukum Anda kepada tim profesional yang berpengalaman dan terbukti berhasil.
            </p>
            <a
              href="/kontak"
              className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition-colors shadow-xl"
            >
              Konsultasi Gratis Sekarang
            </a>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
