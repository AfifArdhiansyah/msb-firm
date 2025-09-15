"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  TrendingUp, 
  Heart, 
  Award,
  ArrowRight,
  Mail,
  CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Pengembangan Karir',
    description: 'Program mentoring dan jalur karir yang jelas untuk pertumbuhan profesional',
    color: 'bg-red-700'
  },
  {
    icon: Award,
    title: 'Kompensasi Kompetitif',
    description: 'Paket gaji dan benefit yang menarik sesuai dengan standar industri',
    color: 'bg-green-500'
  },
  {
    icon: Users,
    title: 'Tim Kolaboratif',
    description: 'Lingkungan kerja yang mendukung kolaborasi dan pembelajaran bersama',
    color: 'bg-purple-500'
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description: 'Fleksibilitas kerja dan perhatian terhadap kesejahteraan karyawan',
    color: 'bg-orange-500'
  }
];

const openPositions = [
  {
    title: 'Senior Associate - Corporate Law',
    type: 'Full-time',
    experience: '5-8 tahun',
    location: 'Jakarta',
    urgent: true
  },
  {
    title: 'Junior Associate - Litigation',
    type: 'Full-time',
    experience: '2-4 tahun',
    location: 'Jakarta',
    urgent: false
  },
  {
    title: 'Legal Intern',
    type: 'Internship',
    experience: 'Fresh Graduate',
    location: 'Jakarta',
    urgent: false
  },
  {
    title: 'Paralegal',
    type: 'Full-time',
    experience: '1-3 tahun',
    location: 'Jakarta',
    urgent: false
  }
];

const requirements = [
  'Sarjana Hukum (S.H.) dari universitas terkemuka',
  'Pengalaman praktik hukum sesuai posisi',
  'Kemampuan komunikasi yang excellent',
  'Bahasa Inggris aktif (lisan dan tulisan)',
  'Integritas tinggi dan etika profesional',
  'Kemampuan bekerja dalam tim'
];

export default function JoinTeam() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Bergabung dengan Tim Kami
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Kami selalu mencari talenta terbaik untuk bergabung dengan tim kami. 
            Jika Anda passionate tentang hukum dan ingin berkembang bersama firma terkemuka.
          </p>
        </motion.div>

        {/* Why Join Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className={`w-12 h-12 ${benefit.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Open Positions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Posisi Terbuka
                </h3>
                <div className="space-y-4">
                  {openPositions.map((position, index) => (
                    <div key={index} className="border border-slate-200 rounded-lg p-4 hover:border-red-300 transition-colors duration-200">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-slate-900">{position.title}</h4>
                        {position.urgent && (
                          <Badge variant="destructive" className="text-xs">
                            Urgent
                          </Badge>
                        )}
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm text-slate-600 mb-3">
                        <div>
                          <span className="font-medium">Tipe:</span> {position.type}
                        </div>
                        <div>
                          <span className="font-medium">Lokasi:</span> {position.location}
                        </div>
                        <div className="col-span-2">
                          <span className="font-medium">Pengalaman:</span> {position.experience}
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="w-full hover:bg-red-50 hover:border-red-300"
                      >
                        Lihat Detail & Apply
                      </Button>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-slate-200">
                  <p className="text-sm text-slate-600 mb-4">
                    Tidak menemukan posisi yang sesuai? Kirim CV Anda untuk posisi yang akan datang.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-red-500 text-red-600 hover:bg-red-50"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Kirim CV Spontan
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Requirements & Process */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Requirements */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Persyaratan Umum
                </h3>
                <div className="space-y-3">
                  {requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600 text-sm">{requirement}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Application Process */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Proses Rekrutmen
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Aplikasi Online</h4>
                      <p className="text-slate-600 text-sm">Submit CV dan cover letter</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Screening Awal</h4>
                      <p className="text-slate-600 text-sm">Review dokumen dan phone interview</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Interview</h4>
                      <p className="text-slate-600 text-sm">Interview dengan tim dan partners</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-red-700 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-semibold text-sm">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Offer & Onboarding</h4>
                      <p className="text-slate-600 text-sm">Job offer dan proses orientasi</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-red-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Siap Memulai Karir Bersama Kami?
            </h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
              Bergabunglah dengan tim profesional yang passionate tentang hukum dan 
              berkomitmen untuk memberikan layanan terbaik kepada klien.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-red-600 hover:bg-red-50"
              >
                <ArrowRight className="h-4 w-4 mr-2" />
                Lihat Semua Posisi
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-red-600 bg-red-700"
              >
                <Mail className="h-4 w-4 mr-2" />
                Hubungi HR
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
