"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { partnerLogos } from '@/lib/dummy-data';

export default function ClientsPartners() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Pelanggan & Rekan Kami
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Dipercaya oleh berbagai perusahaan, organisasi, dan profesional. Berikut sebagian dari mereka yang telah bekerja sama dengan kami.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* First row - Left to Right */}
          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-16 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-16 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />

            <div className="marquee-viewport overflow-hidden">
              <div className="marquee-track marquee-left-to-right">
                {[...partnerLogos, ...partnerLogos].map((logo, idx) => (
                  <div key={`row1-${logo.alt}-${idx}`} className="mx-6 flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={112}
                      height={32}
                      className="opacity-70 hover:opacity-100 transition grayscale hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Second row - Right to Left */}
          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-16 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-16 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />

            <div className="marquee-viewport overflow-hidden">
              <div className="marquee-track marquee-right-to-left">
                {[...partnerLogos, ...partnerLogos].map((logo, idx) => (
                  <div key={`row2-${logo.alt}-${idx}`} className="mx-6 flex items-center justify-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={112}
                      height={32}
                      className="opacity-70 hover:opacity-100 transition grayscale hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <style jsx>{`
            .marquee-viewport {
              position: relative;
              width: 100%;
            }
            .marquee-track {
              display: flex;
              align-items: center;
              gap: 3rem;
              width: max-content;
            }
            .marquee-left-to-right {
              animation: marquee-ltr 25s linear infinite;
            }
            .marquee-right-to-left {
              animation: marquee-rtl 25s linear infinite;
            }
            .marquee-track:hover { 
              animation-play-state: paused; 
            }
            @keyframes marquee-ltr {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            @keyframes marquee-rtl {
              0% { transform: translateX(-50%); }
              100% { transform: translateX(0); }
            }
          `}</style>
        </motion.div>
      </div>
    </section>
  );
}

