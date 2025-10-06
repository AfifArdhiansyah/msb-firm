import React from "react";
import { Metadata } from "next";
import MainLayout from "@/components/layout/main-layout";
import { firmInfo } from "@/lib/dummy-data";
import Image from "next/image";
import { Camera, Download, FileText, Award, Users, Building2, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `Galeri & Dokumentasi - ${firmInfo.name}`,
  description: "Dokumentasi foto, video, dan galeri kegiatan MSB Law Office. Download brosur, katalog, dan laporan tahunan.",
  keywords: "galeri hukum, dokumentasi firma, foto kantor, download brosur, katalog layanan",
};

const galleryCategories = [
  {
    name: "Semua",
    count: 24,
    icon: Camera,
  },
  {
    name: "Kantor & Fasilitas",
    count: 8,
    icon: Building2,
  },
  {
    name: "Event & Seminar",
    count: 6,
    icon: Calendar,
  },
  {
    name: "Penghargaan",
    count: 5,
    icon: Award,
  },
  {
    name: "Tim & Aktivitas",
    count: 5,
    icon: Users,
  },
];

const galleryItems = [
  {
    id: 1,
    title: "Kantor Utama Jakarta",
    category: "Kantor & Fasilitas",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop",
    date: "2024",
  },
  {
    id: 2,
    title: "Ruang Meeting Modern",
    category: "Kantor & Fasilitas",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&auto=format&fit=crop",
    date: "2024",
  },
  {
    id: 3,
    title: "Law Library",
    category: "Kantor & Fasilitas",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=800&auto=format&fit=crop",
    date: "2024",
  },
  {
    id: 4,
    title: "Seminar Hukum Investasi 2024",
    category: "Event & Seminar",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop",
    date: "Jan 2024",
  },
  {
    id: 5,
    title: "Best Law Firm Award",
    category: "Penghargaan",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=800&auto=format&fit=crop",
    date: "Jan 2024",
  },
  {
    id: 6,
    title: "Team Building Activity",
    category: "Tim & Aktivitas",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&auto=format&fit=crop",
    date: "Des 2023",
  },
  {
    id: 7,
    title: "Client Consultation Room",
    category: "Kantor & Fasilitas",
    image: "https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=800&auto=format&fit=crop",
    date: "2024",
  },
  {
    id: 8,
    title: "Partnership Signing Ceremony",
    category: "Event & Seminar",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=800&auto=format&fit=crop",
    date: "Jan 2024",
  },
  {
    id: 9,
    title: "Corporate Law Summit",
    category: "Event & Seminar",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=800&auto=format&fit=crop",
    date: "Des 2023",
  },
  {
    id: 10,
    title: "Team Photo 2024",
    category: "Tim & Aktivitas",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
    date: "Jan 2024",
  },
  {
    id: 11,
    title: "Excellence Award Ceremony",
    category: "Penghargaan",
    image: "https://images.unsplash.com/photo-1558403194-611308249627?q=80&w=800&auto=format&fit=crop",
    date: "Nov 2023",
  },
  {
    id: 12,
    title: "Office Lobby",
    category: "Kantor & Fasilitas",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    date: "2024",
  },
];

const downloads = [
  {
    title: "Company Profile 2024",
    description: "Profil lengkap MSB Law Office termasuk layanan, tim, dan pencapaian.",
    type: "PDF",
    size: "2.5 MB",
    icon: FileText,
  },
  {
    title: "Brosur Layanan Hukum",
    description: "Informasi detail tentang layanan hukum yang kami tawarkan.",
    type: "PDF",
    size: "1.8 MB",
    icon: FileText,
  },
  {
    title: "Katalog Legal Services",
    description: "Katalog komprehensif layanan legal dengan pricing guide.",
    type: "PDF",
    size: "3.2 MB",
    icon: FileText,
  },
  {
    title: "Annual Report 2023",
    description: "Laporan tahunan MSB Law Office tahun 2023.",
    type: "PDF",
    size: "4.1 MB",
    icon: FileText,
  },
];

export default function GalleryPage() {
  return (
    <MainLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 text-white">
          <div className="absolute inset-0">
            <Image 
              src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1600&auto=format&fit=crop" 
              alt="Gallery" 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-yellow-900/90" />
          </div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400">
                Dokumentasi & Resources
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Galeri & Download Center</h1>
              <p className="text-xl text-slate-200 leading-relaxed">
                Dokumentasi visual kegiatan, fasilitas, dan pencapaian MSB Law Office. Download brosur, katalog, dan materi informasi lainnya.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-white border-b sticky top-0 z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {galleryCategories.map((category, idx) => (
                <Button
                  key={idx}
                  variant={idx === 0 ? "default" : "outline"}
                  className={idx === 0 ? "bg-red-600 hover:bg-red-700" : ""}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Dokumentasi Foto
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Koleksi foto kegiatan, fasilitas kantor, penghargaan, dan momen penting MSB Law Office.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryItems.map((item) => (
                <Card key={item.id} className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer">
                  <div className="relative h-64 overflow-hidden">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <Badge className="mb-2 bg-red-600 text-white text-xs">
                        {item.category}
                      </Badge>
                      <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                      <p className="text-xs text-white/80">{item.date}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                <Camera className="w-4 h-4 mr-2" />
                Lihat Semua Foto
              </Button>
            </div>
          </div>
        </section>

        {/* Download Center */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Download className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Download Center
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Unduh brosur, katalog layanan, dan materi informasi MSB Law Office untuk referensi Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {downloads.map((item, idx) => (
                <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-slate-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-sm text-slate-600 mb-3">
                          {item.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Badge variant="secondary" className="text-xs">
                              {item.type}
                            </Badge>
                            <span className="text-xs text-slate-500">{item.size}</span>
                          </div>
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Video Profile
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Tonton video profile MSB Law Office dan dokumentasi kegiatan kami.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="overflow-hidden border-none shadow-lg">
                <div className="relative h-64 bg-slate-200">
                  <Image 
                    src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&auto=format&fit=crop" 
                    alt="Company Profile Video" 
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-slate-900 mb-2">Company Profile 2024</h3>
                  <p className="text-sm text-slate-600">Kenali lebih dekat MSB Law Office</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-lg">
                <div className="relative h-64 bg-slate-200">
                  <Image 
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop" 
                    alt="Seminar Video" 
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-red-700 transition-colors">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-slate-900 mb-2">Seminar Hukum Investasi</h3>
                  <p className="text-sm text-slate-600">Highlights seminar nasional 2024</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-red-600 to-yellow-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <Camera className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Butuh Informasi Lebih Lanjut?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Hubungi kami untuk mendapatkan informasi lengkap tentang layanan, fasilitas, atau untuk mengatur kunjungan kantor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-slate-100">
                Hubungi Kami
              </Button>
              <Button size="lg" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 transition-all font-semibold">
                Download Company Profile
              </Button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
