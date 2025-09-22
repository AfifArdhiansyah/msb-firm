"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Scale, 
  Home, 
  Heart, 
  Lightbulb, 
  Users,
  CheckCircle,
  ArrowLeft,
  Phone,
  MessageCircle,
  Clock,
  Award
} from 'lucide-react';
import { Service } from '@/lib/types';
import { firmInfo } from '@/lib/dummy-data';
import { motion } from 'framer-motion';

const serviceIcons = {
  'hukum-korporasi': Building2,
  'litigasi-arbitrase': Scale,
  'hukum-properti': Home,
  'hukum-keluarga': Heart,
  'hak-kekayaan-intelektual': Lightbulb,
  'hukum-ketenagakerjaan': Users,
};

const serviceDetails = {
  'hukum-korporasi': {
    features: [
      'Pendirian PT, CV, dan badan usaha lainnya',
      'Merger, akuisisi, dan restrukturisasi',
      'Corporate governance dan compliance',
      'Kontrak bisnis dan kemitraan',
      'Due diligence perusahaan',
      'Perubahan anggaran dasar'
    ],
    process: [
      'Konsultasi awal dan analisis kebutuhan',
      'Penyusunan dokumen legal',
      'Proses perizinan dan registrasi',
      'Monitoring dan follow-up'
    ],
    benefits: [
      'Struktur perusahaan yang optimal',
      'Compliance dengan regulasi',
      'Perlindungan hukum maksimal',
      'Efisiensi operasional'
    ]
  },
  'litigasi-arbitrase': {
    features: [
      'Litigasi perdata dan pidana',
      'Arbitrase komersial domestik dan internasional',
      'Mediasi dan negosiasi sengketa',
      'Eksekusi putusan pengadilan',
      'Banding dan kasasi',
      'Penegakan hak kontraktual'
    ],
    process: [
      'Evaluasi kasus dan strategi hukum',
      'Persiapan dokumen dan bukti',
      'Representasi di pengadilan/arbitrase',
      'Eksekusi dan follow-up'
    ],
    benefits: [
      'Tingkat keberhasilan tinggi',
      'Strategi litigasi yang efektif',
      'Penyelesaian sengketa optimal',
      'Perlindungan kepentingan klien'
    ]
  },
  'hukum-properti': {
    features: [
      'Due diligence properti dan tanah',
      'Kontrak jual beli dan sewa menyewa',
      'Pengurusan sertifikat dan IMB',
      'Sengketa tanah dan properti',
      'Real estate development',
      'Strata title dan apartemen'
    ],
    process: [
      'Verifikasi legal properti',
      'Penyusunan kontrak dan dokumen',
      'Proses registrasi dan sertifikasi',
      'Penyelesaian transaksi'
    ],
    benefits: [
      'Transaksi properti aman',
      'Dokumen legal lengkap',
      'Risiko hukum minimal',
      'Investasi terlindungi'
    ]
  },
  'hukum-keluarga': {
    features: [
      'Perceraian dan pembatalan pernikahan',
      'Hak asuh dan nafkah anak',
      'Pembagian harta gono-gini',
      'Adopsi dan perwalian',
      'Perencanaan waris',
      'Mediasi keluarga'
    ],
    process: [
      'Konsultasi sensitif dan rahasia',
      'Mediasi dan negosiasi',
      'Proses hukum yang diperlukan',
      'Dukungan pasca penyelesaian'
    ],
    benefits: [
      'Penyelesaian damai',
      'Perlindungan hak anak',
      'Proses yang sensitif',
      'Solusi win-win'
    ]
  },
  'hak-kekayaan-intelektual': {
    features: [
      'Pendaftaran merek dan logo',
      'Perlindungan paten dan desain',
      'Hak cipta dan karya kreatif',
      'Lisensi dan franchise',
      'Penegakan hak IP',
      'IP audit dan strategi'
    ],
    process: [
      'IP audit dan penelusuran',
      'Aplikasi dan registrasi',
      'Monitoring dan perlindungan',
      'Penegakan dan litigasi'
    ],
    benefits: [
      'Aset IP terlindungi',
      'Keunggulan kompetitif',
      'Revenue stream baru',
      'Brand protection'
    ]
  },
  'hukum-ketenagakerjaan': {
    features: [
      'Kontrak kerja dan PKB',
      'PHK dan pesangon',
      'Sengketa industrial',
      'Compliance ketenagakerjaan',
      'Outsourcing dan alih daya',
      'Hubungan industrial'
    ],
    process: [
      'Review kebijakan HR',
      'Penyusunan dokumen ketenagakerjaan',
      'Training dan sosialisasi',
      'Monitoring compliance'
    ],
    benefits: [
      'Hubungan kerja harmonis',
      'Compliance penuh',
      'Risiko sengketa minimal',
      'Produktivitas optimal'
    ]
  }
};

interface ServiceDetailProps {
  service: Service;
}

export default function ServiceDetail({ service }: ServiceDetailProps) {
  const IconComponent = serviceIcons[service.slug as keyof typeof serviceIcons] || Building2;
  const details = serviceDetails[service.slug as keyof typeof serviceDetails];

  return (
    <div className="min-h-screen">
      {/* Breadcrumb & Back Button */}
      <section className="py-8 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-4">
            <Button variant="ghost" asChild>
              <Link href="/layanan" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Kembali ke Layanan</span>
              </Link>
            </Button>
          </div>
          <nav className="text-sm text-slate-600">
            <Link href="/" className="hover:text-red-600">Beranda</Link>
            <span className="mx-2">/</span>
            <Link href="/layanan" className="hover:text-red-600">Layanan</Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">{service.title}</span>
          </nav>
        </div>
      </section>

      {/* Service Header */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-red-100 rounded-2xl flex items-center justify-center">
                <IconComponent className="h-10 w-10 text-red-600" />
              </div>
            </div>
            <Badge variant="secondary" className="mb-4">
              Layanan Unggulan
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              {service.full_description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Features */}
      {details && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Cakupan Layanan
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  Layanan komprehensif yang kami tawarkan untuk memenuhi kebutuhan hukum Anda
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {details.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-3">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Process & Benefits */}
      {details && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Process */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                          <Clock className="h-6 w-6 text-red-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">Proses Kerja</h3>
                      </div>
                      <div className="space-y-4">
                        {details.process.map((step, index) => (
                          <div key={index} className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center flex-shrink-0">
                              <span className="text-white font-semibold text-sm">{index + 1}</span>
                            </div>
                            <span className="text-slate-700 pt-1">{step}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Benefits */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full border-0 shadow-lg">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-3 mb-6">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                          <Award className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900">Manfaat</h3>
                      </div>
                      <div className="space-y-4">
                        {details.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-slate-700">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-red-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <h2 className="text-3xl font-bold mb-4">
              Butuh Bantuan untuk {service.title}?
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Tim ahli kami siap membantu Anda. Konsultasi gratis tersedia untuk evaluasi awal kebutuhan Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                variant="secondary"
                className="bg-white text-red-600 hover:bg-red-50"
              >
                <Link href="/kontak">
                  Konsultasi Gratis
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-red-600"
              >
                <a
                  href={`https://wa.me/${firmInfo.whatsapp_number?.replace(/[^0-9]/g, '')}?text=Halo%20saya%20ingin%20bertanya%20mengenai%20layanan%20hukum%20di%20MSB%20and%20Partners`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
