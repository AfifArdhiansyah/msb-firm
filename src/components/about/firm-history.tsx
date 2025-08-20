"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Award, Users, Building } from 'lucide-react';
import { motion } from 'framer-motion';

const milestones = [
  {
    year: '2004',
    title: 'Pendirian Firma',
    description: 'Hukum Prima & Associates didirikan oleh Dr. Ahmad Wijaya dengan visi menjadi firma hukum terdepan di Indonesia.',
    icon: Building,
    color: 'bg-red-700'
  },
  {
    year: '2008',
    title: 'Ekspansi Tim',
    description: 'Bergabungnya Sarah Putri sebagai Senior Partner, memperkuat divisi litigasi dan arbitrase.',
    icon: Users,
    color: 'bg-green-500'
  },
  {
    year: '2012',
    title: 'Penghargaan Pertama',
    description: 'Meraih penghargaan "Best Corporate Law Firm" dari Indonesian Legal Awards.',
    icon: Award,
    color: 'bg-yellow-500'
  },
  {
    year: '2016',
    title: 'Sertifikasi Internasional',
    description: 'Memperoleh sertifikasi ISO 9001:2015 untuk standar manajemen kualitas layanan hukum.',
    icon: Award,
    color: 'bg-purple-500'
  },
  {
    year: '2020',
    title: 'Era Digital',
    description: 'Transformasi digital dengan platform konsultasi online dan sistem manajemen kasus terintegrasi.',
    icon: Building,
    color: 'bg-indigo-500'
  },
  {
    year: '2024',
    title: 'Milestone 20 Tahun',
    description: 'Merayakan 20 tahun melayani dengan lebih dari 500 klien dan tingkat kepuasan 95%.',
    icon: Calendar,
    color: 'bg-red-500'
  }
];

export default function FirmHistory() {
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
            Perjalanan Kami
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Dari firma kecil hingga menjadi salah satu firma hukum terpercaya di Indonesia. 
            Berikut adalah milestone penting dalam perjalanan kami.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-200 hidden md:block"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-700 rounded-full border-4 border-white shadow-lg z-10 hidden md:block"></div>
                  
                  {/* Content */}
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    <Card className="hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 ${milestone.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <milestone.icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <Badge variant="outline" className="text-red-600 border-red-600">
                                {milestone.year}
                              </Badge>
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900 mb-2">
                              {milestone.title}
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                              {milestone.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center text-slate-900 mb-8">
              Pencapaian Kami Hingga Kini
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">20+</div>
                <div className="text-slate-600">Tahun Pengalaman</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
                <div className="text-slate-600">Klien Dilayani</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">95%</div>
                <div className="text-slate-600">Tingkat Keberhasilan</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">15+</div>
                <div className="text-slate-600">Penghargaan</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
