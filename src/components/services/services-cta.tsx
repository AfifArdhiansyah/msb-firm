"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, MessageCircle, Mail, Clock, CheckCircle } from 'lucide-react';
import { firmInfo } from '@/lib/dummy-data';
import { motion } from 'framer-motion';

const benefits = [
  'Konsultasi gratis untuk evaluasi awal',
  'Tim ahli berpengalaman 20+ tahun',
  'Respons cepat dalam 2 jam',
  'Transparansi biaya sejak awal',
  'Pendampingan hingga selesai',
  'Garansi kepuasan klien'
];

export default function ServicesCTA() {
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
            Siap Mendapatkan Bantuan Hukum?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Jangan biarkan masalah hukum mengganggu hidup atau bisnis Anda. 
            Hubungi kami sekarang untuk konsultasi gratis dan solusi terbaik.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Hubungi Kami Sekarang
            </h3>
            
            <div className="space-y-4">
              {/* WhatsApp */}
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <a
                    href={`https://wa.me/${firmInfo.whatsapp_number?.replace(/[^0-9]/g, '')}?text=Halo%20saya%20ingin%20bertanya%20mengenai%20layanan%20hukum%20di%20MSB%20and%20Partners`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 group"
                  >
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 group-hover:text-green-600 transition-colors">
                        WhatsApp
                      </div>
                      <div className="text-slate-600 text-sm">{firmInfo.whatsapp_number}</div>
                      <div className="text-green-600 text-xs">Respons dalam 5 menit</div>
                    </div>
                  </a>
                </CardContent>
              </Card>

              {/* Phone */}
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <a
                    href={`tel:${firmInfo.phone}`}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="w-12 h-12 bg-red-700 rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 group-hover:text-red-600 transition-colors">
                        Telepon Langsung
                      </div>
                      <div className="text-slate-600 text-sm">{firmInfo.phone}</div>
                      <div className="text-red-600 text-xs">Tersedia 24/7</div>
                    </div>
                  </a>
                </CardContent>
              </Card>

              {/* Email */}
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <a
                    href={`mailto:${firmInfo.email}`}
                    className="flex items-center space-x-4 group"
                  >
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 group-hover:text-purple-600 transition-colors">
                        Email
                      </div>
                      <div className="text-slate-600 text-sm">{firmInfo.email}</div>
                      <div className="text-purple-600 text-xs">Respons dalam 2 jam</div>
                    </div>
                  </a>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900">Jam Operasional</div>
                      <div className="text-slate-600 text-sm">{firmInfo.operation_hours}</div>
                      <div className="text-orange-600 text-xs">Konsultasi darurat 24/7</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>

          {/* Benefits & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Mengapa Memilih Kami?
                </h3>
                
                <div className="space-y-3 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-600">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <Button 
                    asChild 
                    size="lg"
                    className="w-full bg-red-700 hover:bg-red-800 text-lg py-6"
                  >
                    <Link href="/kontak">
                      Mulai Konsultasi Gratis
                    </Link>
                  </Button>

                  <div className="text-center text-sm text-slate-500">
                    atau hubungi langsung
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Button 
                      asChild 
                      variant="outline" 
                      size="lg"
                      className="border-green-500 text-green-600 hover:bg-green-50"
                    >
                      <a
                        href={`https://wa.me/${firmInfo.whatsapp_number?.replace(/[^0-9]/g, '')}?text=Halo%20saya%20ingin%20bertanya%20mengenai%20layanan%20hukum%20di%20MSB%20and%20Partners`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        WhatsApp
                      </a>
                    </Button>
                    <Button 
                      asChild 
                      variant="outline" 
                      size="lg"
                      className="border-red-500 text-red-600 hover:bg-red-50"
                    >
                      <a href={`tel:${firmInfo.phone}`}>
                        Telepon
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-red-600">20+</div>
                      <div className="text-xs text-slate-500">Tahun</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-600">500+</div>
                      <div className="text-xs text-slate-500">Klien</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-600">95%</div>
                      <div className="text-xs text-slate-500">Sukses</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
