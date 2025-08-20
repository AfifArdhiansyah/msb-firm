"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Shield, 
  Heart, 
  Star, 
  Users, 
  Lightbulb, 
  Scale,
  Clock,
  Globe
} from 'lucide-react';
import { motion } from 'framer-motion';

const values = [
  {
    icon: Shield,
    title: 'Integritas',
    description: 'Kami berkomitmen untuk selalu jujur, transparan, dan bertanggung jawab dalam setiap tindakan dan keputusan yang kami ambil.',
    color: 'bg-red-700'
  },
  {
    icon: Scale,
    title: 'Keadilan',
    description: 'Kami percaya bahwa setiap orang berhak mendapatkan perlakuan yang adil dan representasi hukum yang berkualitas.',
    color: 'bg-green-500'
  },
  {
    icon: Star,
    title: 'Keunggulan',
    description: 'Kami terus berusaha memberikan layanan terbaik dengan standar kualitas tertinggi di industri hukum.',
    color: 'bg-yellow-500'
  },
  {
    icon: Heart,
    title: 'Empati',
    description: 'Kami memahami bahwa setiap klien memiliki situasi unik dan membutuhkan pendekatan yang personal dan sensitif.',
    color: 'bg-red-500'
  },
  {
    icon: Users,
    title: 'Kolaborasi',
    description: 'Kami percaya pada kekuatan kerja tim dan kolaborasi untuk mencapai hasil terbaik bagi klien.',
    color: 'bg-purple-500'
  },
  {
    icon: Lightbulb,
    title: 'Inovasi',
    description: 'Kami mengadopsi teknologi dan metode terbaru untuk memberikan solusi hukum yang efektif dan efisien.',
    color: 'bg-orange-500'
  },
  {
    icon: Clock,
    title: 'Responsivitas',
    description: 'Kami berkomitmen untuk memberikan respons yang cepat dan tepat waktu terhadap kebutuhan klien.',
    color: 'bg-indigo-500'
  },
  {
    icon: Globe,
    title: 'Profesionalisme',
    description: 'Kami menjunjung tinggi standar profesional dalam setiap aspek layanan dan interaksi dengan klien.',
    color: 'bg-teal-500'
  }
];

export default function FirmValues() {
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
            Nilai-Nilai Kami
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Nilai-nilai fundamental yang menjadi landasan dalam setiap layanan dan interaksi kami dengan klien
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <div className={`w-16 h-16 ${value.color} rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Values in Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">
              Nilai-Nilai dalam Tindakan
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-10 w-10 text-red-600" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  Komitmen Etika
                </h4>
                <p className="text-slate-600 text-sm">
                  Kami mematuhi kode etik profesi dan standar tertinggi dalam praktik hukum
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-10 w-10 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  Kepedulian Sosial
                </h4>
                <p className="text-slate-600 text-sm">
                  Kami aktif dalam program pro bono dan kegiatan sosial untuk membantu masyarakat
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-10 w-10 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  Pengembangan Berkelanjutan
                </h4>
                <p className="text-slate-600 text-sm">
                  Kami terus mengembangkan keahlian dan pengetahuan untuk memberikan layanan terbaik
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-light text-slate-700 italic leading-relaxed">
              "Nilai-nilai kami bukan hanya kata-kata di dinding, tetapi prinsip hidup yang kami terapkan 
              dalam setiap interaksi dengan klien dan masyarakat."
            </blockquote>
            <div className="mt-6">
              <div className="font-semibold text-slate-900">Dr. Ahmad Wijaya, S.H., M.H.</div>
              <div className="text-slate-600">Managing Partner</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
