"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation } from 'lucide-react';
import { firmInfo } from '@/lib/dummy-data';
import { motion } from 'framer-motion';



export default function ContactMap() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Lokasi Kantor Kami
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Kantor kami berlokasi strategis di pusat bisnis Jakarta dengan akses mudah 
            dari berbagai arah dan transportasi umum.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardContent className="p-0">
                <div className="relative h-96 lg:h-[500px]">
                  {/* Google Maps Embed */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613!3d-6.1944491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sJl.%20Jend.%20Sudirman%2C%20Jakarta%20Pusat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sen!2sid!4v1640995200000!5m2!1sen!2sid"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Kantor Hukum Prima & Associates"
                  ></iframe>
                  
                  {/* Map Overlay */}
                  <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-red-700 rounded-lg flex items-center justify-center">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 text-sm">
                          {firmInfo.name}
                        </h3>
                        <p className="text-slate-600 text-xs">
                          Jl. Sudirman No. 123
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Directions Button */}
                  <div className="absolute bottom-4 right-4">
                    <Button 
                      asChild
                      className="bg-red-700 hover:bg-red-800 shadow-lg"
                    >
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(firmInfo.address || '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2"
                      >
                        <Navigation className="h-4 w-4" />
                        <span>Petunjuk Arah</span>
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Transportation & Address Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >




            {/* Landmark Info */}
            <Card className="border-0 shadow-lg bg-slate-50">
              <CardContent className="p-6">
                <h3 className="font-semibold text-slate-900 mb-3">Landmark Terdekat</h3>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between">
                    <span>Plaza Indonesia</span>
                    <span>2 menit</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Grand Indonesia</span>
                    <span>3 menit</span>
                  </div>
                  <div className="flex justify-between">
                    <span>MRT Bundaran HI</span>
                    <span>5 menit</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Hotel Indonesia</span>
                    <span>7 menit</span>
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
