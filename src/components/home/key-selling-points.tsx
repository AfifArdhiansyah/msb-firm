"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Clock, 
  Heart, 
  Shield, 
  Users, 
  Zap 
} from 'lucide-react';
import { motion } from 'framer-motion';
import { firmInfo } from '@/lib/dummy-data';
import NumberTicker from '@/components/ui/number-ticker';

const keyPoints = [
  {
    icon: Award,
    title: 'Pengalaman Lebih dari 20 Tahun',
    description: 'Tim ahli dengan track record yang terbukti dalam menangani berbagai kasus hukum kompleks.',
    badge: 'Berpengalaman',
    number: 20,
    suffix: '+'
  },
  {
    icon: Heart,
    title: 'Pendekatan Personalisasi',
    description: 'Setiap klien mendapat perhatian khusus dengan solusi yang disesuaikan dengan kebutuhan spesifik.',
    badge: 'Personal'
  },
  {
    icon: Shield,
    title: 'Keberhasilan Terbukti',
    description: 'Tingkat keberhasilan 95% dalam menyelesaikan kasus dengan hasil yang memuaskan klien.',
    badge: 'Terpercaya',
    number: 95,
    suffix: '%'
  },
  {
    icon: Clock,
    title: 'Respons Cepat',
    description: 'Konsultasi 24/7 dan respons maksimal 2 jam untuk urusan mendesak.',
    badge: 'Responsif'
  },
  {
    icon: Users,
    title: 'Tim Multidisiplin',
    description: 'Kolaborasi ahli dari berbagai bidang hukum untuk solusi komprehensif.',
    badge: 'Komprehensif'
  },
  {
    icon: Zap,
    title: 'Teknologi Modern',
    description: 'Menggunakan teknologi terkini untuk efisiensi dan transparansi proses hukum.',
    badge: 'Inovatif'
  }
];

export default function KeySellingPoints() {
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
            Mengapa Memilih Kami?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Komitmen kami adalah memberikan layanan hukum terbaik dengan standar profesional tertinggi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {keyPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-xl hover:scale-105 transition-all duration-300 border-0 shadow-md group">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <motion.div 
                        className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <point.icon className="h-6 w-6 text-red-600" />
                      </motion.div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-3">
                        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-red-600 transition-colors duration-300">
                          {point.number ? (
                            <>
                              <NumberTicker 
                                value={point.number} 
                                suffix={point.suffix || ''} 
                                delay={index * 0.2}
                                className="font-bold text-red-600"
                              />
                              {' '}
                              {point.title.replace(/\d+\+?%?/, '').trim()}
                            </>
                          ) : (
                            point.title
                          )}
                        </h3>
                        <Badge variant="secondary" className="text-xs group-hover:bg-red-100 transition-colors duration-300">
                          {point.badge}
                        </Badge>
                      </div>
                      <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
