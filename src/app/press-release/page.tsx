import React from "react";
import { Metadata } from "next";
import MainLayout from "@/components/layout/main-layout";
import { firmInfo } from "@/lib/dummy-data";
import Image from "next/image";
import { Newspaper, Calendar, Download, Award, Briefcase, TrendingUp, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: `Press Release - ${firmInfo.name}`,
  description: "Siaran pers, pengumuman media, dan update terkini dari MSB Law Office.",
  keywords: "press release, siaran pers, berita hukum, pengumuman media, legal news",
};

const pressReleases = [
  {
    id: 1,
    title: "MSB Law Office Raih Penghargaan 'Best Law Firm of The Year 2024'",
    category: "Penghargaan",
    date: "15 Januari 2024",
    excerpt: "MSB Law Office dengan bangga mengumumkan pencapaian penghargaan bergengsi 'Best Law Firm of The Year 2024' dari Indonesian Legal Awards, mengukuhkan posisi sebagai salah satu firma hukum terbaik di Indonesia.",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=1200&auto=format&fit=crop",
    content: "Jakarta, 15 Januari 2024 - MSB Law Office dengan bangga mengumumkan pencapaian penghargaan bergengsi 'Best Law Firm of The Year 2024' dari Indonesian Legal Awards. Penghargaan ini diberikan berdasarkan penilaian komprehensif terhadap kualitas layanan, track record keberhasilan kasus, dan kontribusi terhadap perkembangan hukum di Indonesia.",
    downloadUrl: "#",
    tags: ["Award", "Achievement", "Recognition"],
  },
  {
    id: 2,
    title: "Peluncuran Divisi Cyber Law & Data Protection",
    category: "Pengumuman",
    date: "10 Januari 2024",
    excerpt: "Merespons kebutuhan pasar yang terus berkembang, MSB Law Office meluncurkan divisi baru yang fokus pada hukum siber, perlindungan data pribadi, dan keamanan informasi.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1200&auto=format&fit=crop",
    content: "Jakarta, 10 Januari 2024 - Sejalan dengan transformasi digital yang pesat, MSB Law Office dengan bangga mengumumkan peluncuran Divisi Cyber Law & Data Protection. Divisi ini akan fokus pada layanan hukum terkait keamanan siber, perlindungan data pribadi, compliance GDPR dan UU PDP, serta penanganan kasus kejahatan siber.",
    downloadUrl: "#",
    tags: ["New Division", "Cyber Law", "Innovation"],
  },
  {
    id: 3,
    title: "Partnership Strategis dengan Baker McKenzie Singapore",
    category: "Partnership",
    date: "5 Januari 2024",
    excerpt: "MSB Law Office menjalin kemitraan strategis dengan Baker McKenzie Singapore untuk memperkuat kapabilitas dalam menangani transaksi lintas negara dan kasus-kasus internasional.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop",
    content: "Jakarta, 5 Januari 2024 - MSB Law Office mengumumkan kemitraan strategis dengan Baker McKenzie Singapore, salah satu firma hukum internasional terkemuka. Kolaborasi ini akan memungkinkan klien MSB untuk mendapatkan akses ke network global dan expertise internasional dalam berbagai bidang hukum.",
    downloadUrl: "#",
    tags: ["Partnership", "International", "Expansion"],
  },
  {
    id: 4,
    title: "Keberhasilan Menangani Kasus Arbitrase Internasional Senilai USD 50 Juta",
    category: "Kasus",
    date: "28 Desember 2023",
    excerpt: "Tim litigasi MSB Law Office berhasil memenangkan kasus arbitrase internasional dengan nilai klaim mencapai USD 50 juta, menunjukkan expertise dalam penanganan sengketa kompleks.",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop",
    content: "Jakarta, 28 Desember 2023 - MSB Law Office dengan sukses mewakili klien dalam kasus arbitrase internasional yang kompleks dengan nilai klaim mencapai USD 50 juta. Putusan arbitrase yang menguntungkan klien ini menegaskan kemampuan tim kami dalam menangani sengketa komersial tingkat tinggi.",
    downloadUrl: "#",
    tags: ["Case Victory", "Arbitration", "International"],
  },
  {
    id: 5,
    title: "Publikasi: Panduan Lengkap UU Perlindungan Data Pribadi 2023",
    category: "Publikasi",
    date: "20 Desember 2023",
    excerpt: "MSB Law Office menerbitkan panduan komprehensif tentang implementasi UU Perlindungan Data Pribadi untuk membantu perusahaan memahami kewajiban compliance mereka.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1200&auto=format&fit=crop",
    content: "Jakarta, 20 Desember 2023 - Untuk membantu perusahaan memahami dan mematuhi UU Perlindungan Data Pribadi, MSB Law Office menerbitkan panduan komprehensif yang mencakup analisis mendalam, best practices, dan langkah-langkah implementasi yang praktis.",
    downloadUrl: "#",
    tags: ["Publication", "Data Protection", "Compliance"],
  },
  {
    id: 6,
    title: "Seminar Nasional: Hukum Investasi di Era Digital",
    category: "Event",
    date: "15 Desember 2023",
    excerpt: "MSB Law Office menyelenggarakan seminar nasional dengan tema 'Hukum Investasi di Era Digital' yang dihadiri oleh lebih dari 200 praktisi hukum dan pelaku bisnis.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop",
    content: "Jakarta, 15 Desember 2023 - Seminar nasional yang diselenggarakan MSB Law Office membahas berbagai aspek hukum investasi di era digital, termasuk regulasi fintech, cryptocurrency, dan e-commerce. Acara ini dihadiri oleh lebih dari 200 peserta dari berbagai sektor industri.",
    downloadUrl: "#",
    tags: ["Seminar", "Investment Law", "Digital Economy"],
  },
];

const categories = [
  { name: "Semua", count: pressReleases.length },
  { name: "Penghargaan", count: 1 },
  { name: "Pengumuman", count: 1 },
  { name: "Partnership", count: 1 },
  { name: "Kasus", count: 1 },
  { name: "Publikasi", count: 1 },
  { name: "Event", count: 1 },
];

export default function PressReleasePage() {
  return (
    <MainLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 text-white">
          <div className="absolute inset-0">
            <Image 
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1600&auto=format&fit=crop" 
              alt="Press Release" 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-yellow-900/90" />
          </div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400">
                Media & Publikasi
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Press Release</h1>
              <p className="text-xl text-slate-200 leading-relaxed">
                Siaran pers, pengumuman media, dan update terkini dari MSB Law Office tentang pencapaian, layanan baru, dan kontribusi kami di dunia hukum.
              </p>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 bg-white border-b sticky top-0 z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, idx) => (
                <Button
                  key={idx}
                  variant={idx === 0 ? "default" : "outline"}
                  className={idx === 0 ? "bg-red-600 hover:bg-red-700" : ""}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Press Release */}
        <section className="py-16 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-4">
            <Badge className="mb-6 bg-red-600 text-white">
              <TrendingUp className="w-3 h-3 mr-1" />
              Featured
            </Badge>
            <Card className="overflow-hidden border-none shadow-2xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-80 md:h-auto">
                  <Image 
                    src={pressReleases[0].image} 
                    alt={pressReleases[0].title} 
                    fill 
                    className="object-cover" 
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4 bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
                    {pressReleases[0].category}
                  </Badge>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    {pressReleases[0].title}
                  </h2>
                  <div className="flex items-center gap-2 text-slate-600 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{pressReleases[0].date}</span>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {pressReleases[0].content}
                  </p>
                  <div className="flex gap-3">
                    <Button className="bg-red-600 hover:bg-red-700">
                      <FileText className="w-4 h-4 mr-2" />
                      Baca Selengkapnya
                    </Button>
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* Press Releases List */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Siaran Pers Terbaru
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Informasi terkini tentang pencapaian, layanan, dan kontribusi MSB Law Office.
              </p>
            </div>

            <div className="space-y-6">
              {pressReleases.slice(1).map((press) => (
                <Card key={press.id} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="grid md:grid-cols-4 gap-0">
                      <div className="relative h-48 md:h-auto">
                        <Image 
                          src={press.image} 
                          alt={press.title} 
                          fill 
                          className="object-cover" 
                        />
                      </div>
                      <div className="md:col-span-3 p-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge variant="secondary">
                            {press.category}
                          </Badge>
                          <div className="flex items-center gap-2 text-slate-600">
                            <Calendar className="w-4 h-4" />
                            <span className="text-sm">{press.date}</span>
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-3 hover:text-red-600 transition-colors cursor-pointer">
                          {press.title}
                        </h3>
                        <p className="text-slate-600 mb-4 line-clamp-2">
                          {press.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {press.tags.map((tag, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          <Button variant="outline" size="sm">
                            <FileText className="w-4 h-4 mr-2" />
                            Baca Selengkapnya
                          </Button>
                          <Button variant="ghost" size="sm">
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

        {/* Media Contact Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="border-none shadow-xl">
              <CardContent className="p-8 text-center">
                <Newspaper className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  Media Inquiries
                </h2>
                <p className="text-slate-600 mb-6">
                  Untuk pertanyaan media, wawancara, atau permintaan keterangan pers, silakan hubungi tim Public Relations kami.
                </p>
                <div className="space-y-2 mb-6">
                  <p className="text-slate-900 font-medium">Media Relations Team</p>
                  <p className="text-slate-600">Email: media@msblawoffice.com</p>
                  <p className="text-slate-600">Phone: +62 21 1234 5678 ext. 101</p>
                </div>
                <Button className="bg-red-600 hover:bg-red-700">
                  Hubungi Media Relations
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-red-600 to-yellow-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ikuti Update Terbaru Kami
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Subscribe newsletter kami untuk mendapatkan update terbaru tentang perkembangan hukum dan pencapaian firma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Email address" 
                className="flex-1 px-4 py-3 rounded-lg text-slate-900 bg-white border-2 border-white focus:outline-none focus:ring-2 focus:ring-white focus:border-yellow-400"
              />
              <Button className="bg-white text-red-600 hover:bg-slate-100">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
