"use client";

import React from 'react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Building2, 
  Scale, 
  Home, 
  Heart, 
  Lightbulb, 
  Users,
  ArrowRight 
} from 'lucide-react';
import { services } from '@/lib/dummy-data';
import { motion } from 'framer-motion';

const serviceIcons = {
  'hukum-korporasi': Building2,
  'litigasi-arbitrase': Scale,
  'hukum-properti': Home,
  'hukum-keluarga': Heart,
  'hak-kekayaan-intelektual': Lightbulb,
  'hukum-ketenagakerjaan': Users,
};

export default function ServicesPreview() {
  const featuredServices = services.slice(0, 6);

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
            Layanan Hukum Kami
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Kami menyediakan layanan hukum komprehensif untuk memenuhi berbagai kebutuhan klien, 
            dari individu hingga perusahaan multinasional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service, index) => {
            const IconComponent = serviceIcons[service.slug as keyof typeof serviceIcons] || Building2;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md group cursor-pointer">
                  <Link href={`/layanan/${service.slug}`}>
                    <CardContent className="p-8">
                      <div className="flex flex-col h-full">
                        {/* Icon and Badge */}
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-600 transition-colors duration-300">
                            <IconComponent className="h-6 w-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            Populer
                          </Badge>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-600 leading-relaxed mb-6 flex-1">
                          {service.short_description}
                        </p>

                        {/* Learn More Link */}
                        <div className="flex items-center text-red-600 font-medium group-hover:text-red-700 transition-colors duration-300">
                          <span className="text-sm">Pelajari Lebih Lanjut</span>
                          <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </div>


      </div>
    </section>
  );
}
