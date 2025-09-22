"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Mail, Clock } from 'lucide-react';
import { firmInfo } from '@/lib/dummy-data';
import { motion } from 'framer-motion';

export default function FinalCTA() {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 gradient-bg">
        <div className="absolute inset-0 bg-black/10"></div>
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-white mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Siap Mendapatkan Bantuan Hukum Terbaik?
          </h2>
          <p className="text-xl text-red-100 max-w-3xl mx-auto">
            Jangan biarkan masalah hukum mengganggu hidup atau bisnis Anda.
            Hubungi kami sekarang untuk konsultasi gratis dan solusi terbaik.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Hubungi Kami Sekarang
            </h3>
            
            <div className="space-y-4">
              {/* WhatsApp */}
              <a
                href={`https://wa.me/${firmInfo.whatsapp_number?.replace(/[^0-9]/g, '')}?text=Halo%20saya%20ingin%20bertanya%20mengenai%20layanan%20hukum%20di%20MSB%20and%20Partners`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">WhatsApp</div>
                  <div className="text-red-100 text-sm">{firmInfo.whatsapp_number}</div>
                </div>
              </a>

              {/* Phone */}
              <a
                href={`tel:${firmInfo.phone}`}
                className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-red-700 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Telepon</div>
                  <div className="text-red-100 text-sm">{firmInfo.phone}</div>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${firmInfo.email}`}
                className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Email</div>
                  <div className="text-blue-100 text-sm">{firmInfo.email}</div>
                </div>
              </a>

              {/* Office Hours */}
              <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-white">Jam Operasional</div>
                  <div className="text-red-100 text-sm">{firmInfo.operation_hours}</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Form/Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Konsultasi Gratis
            </h3>
            <p className="text-slate-600 mb-6">
              Dapatkan konsultasi gratis untuk memahami opsi hukum terbaik untuk kasus Anda. 
              Tim ahli kami siap membantu 24/7.
            </p>

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
                atau
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
            <div className="mt-6 pt-6 border-t border-slate-200">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
