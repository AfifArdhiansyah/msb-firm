"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Users, 
  Award, 
  GraduationCap, 
  Globe, 
  Clock, 
  TrendingUp,
  BookOpen,
  Shield
} from 'lucide-react';
import { motion } from 'framer-motion';

const teamStats = [
  {
    icon: Users,
    value: '15+',
    label: 'Profesional Hukum',
    description: 'Tim ahli dengan berbagai spesialisasi',
    color: 'bg-red-700'
  },
  {
    icon: Clock,
    value: '75+',
    label: 'Tahun Pengalaman Gabungan',
    description: 'Pengalaman mendalam di berbagai bidang',
    color: 'bg-green-500'
  },
  {
    icon: Award,
    value: '25+',
    label: 'Penghargaan & Sertifikasi',
    description: 'Pengakuan atas keunggulan profesional',
    color: 'bg-yellow-500'
  },
  {
    icon: GraduationCap,
    value: '8',
    label: 'Lulusan Universitas Top',
    description: 'Pendidikan dari institusi terkemuka',
    color: 'bg-purple-500'
  },
  {
    icon: Globe,
    value: '3',
    label: 'Sertifikasi Internasional',
    description: 'Standar global dalam praktik hukum',
    color: 'bg-indigo-500'
  },
  {
    icon: BookOpen,
    value: '50+',
    label: 'Publikasi & Artikel',
    description: 'Kontribusi dalam literatur hukum',
    color: 'bg-orange-500'
  }
];

const specializations = [
  {
    area: 'Hukum Korporasi',
    experts: 4,
    cases: '200+',
    icon: Shield
  },
  {
    area: 'Litigasi & Arbitrase',
    experts: 3,
    cases: '150+',
    icon: Award
  },
  {
    area: 'Hukum Properti',
    experts: 2,
    cases: '300+',
    icon: Users
  },
  {
    area: 'Hukum Keluarga',
    experts: 2,
    cases: '100+',
    icon: Users
  },
  {
    area: 'Hak Kekayaan Intelektual',
    experts: 2,
    cases: '80+',
    icon: TrendingUp
  },
  {
    area: 'Hukum Ketenagakerjaan',
    experts: 2,
    cases: '120+',
    icon: Users
  }
];

export default function TeamStats() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Keunggulan Tim Kami
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Angka-angka yang menunjukkan komitmen dan pencapaian tim kami dalam memberikan 
            layanan hukum berkualitas tinggi.
          </p>
        </motion.div>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {teamStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-slate-900 mb-2">
                    {stat.value}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {stat.label}
                  </h3>
                  <p className="text-slate-600 text-sm">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Specialization Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                Distribusi Keahlian Tim
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {specializations.map((spec, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <spec.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <h4 className="font-semibold text-slate-900 mb-2">{spec.area}</h4>
                    <div className="text-sm text-slate-600 space-y-1">
                      <div>{spec.experts} Ahli</div>
                      <div>{spec.cases} Kasus Ditangani</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Team Development */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Pengembangan Berkelanjutan
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-slate-600">Pelatihan rutin setiap bulan</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-slate-600">Sertifikasi internasional berkelanjutan</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-slate-600">Partisipasi dalam konferensi hukum</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                    <span className="text-slate-600">Penelitian dan publikasi akademik</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Kolaborasi & Mentoring
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-slate-600">Program mentoring junior-senior</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-slate-600">Tim multidisiplin untuk kasus kompleks</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-slate-600">Knowledge sharing session mingguan</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-slate-600">Kemitraan dengan firma internasional</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
