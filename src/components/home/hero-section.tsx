"use client";

import React from 'react';
import Link from 'next/link';
import NextImage from 'next/image';

import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { firmInfo, testimonials } from '@/lib/dummy-data';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function HeroSection() {
  const featuredTestimonials = testimonials.filter((t) => t.is_featured);
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-white/30'}`}
      />
    ));

  React.useEffect(() => {
    if (!api || featuredTestimonials.length <= 1) return;
    const id = setInterval(() => api.scrollNext(), 5000);
    return () => clearInterval(id);
  }, [api, featuredTestimonials.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <NextImage
          src="https://images.unsplash.com/photo-1555374018-13a8994ab246?q=80&w=1920&auto=format&fit=crop"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="text-white">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {firmInfo.tagline}
              </h1>
              <p className="text-lg md:text-xl text-red-100 leading-relaxed">
                Dengan pengalaman lebih dari 20 tahun, kami memberikan solusi hukum yang komprehensif
                dan terpercaya untuk individu dan perusahaan.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-red-600 hover:bg-red-50 text-lg px-8 py-6 h-auto"
              >
                <Link href="/kontak" className="flex items-center space-x-2">
                  <span>Konsultasi Gratis</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-red-600 text-lg px-8 py-6 h-auto font-medium backdrop-blur-sm"
              >
                <Link href="/layanan" className="flex items-center space-x-2">
                  <span>Lihat Layanan Kami</span>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mt-12"
            >
              <div className="text-left rounded-xl bg-white/10 border border-white/10 backdrop-blur p-4 md:p-5">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">20+</div>
                <div className="text-white/80 text-sm">Tahun Pengalaman</div>
              </div>
              <div className="text-left rounded-xl bg-white/10 border border-white/10 backdrop-blur p-4 md:p-5">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-white/80 text-sm">Klien Terpuaskan</div>
              </div>
              <div className="text-left rounded-xl bg-white/10 border border-white/10 backdrop-blur p-4 md:p-5">
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">95%</div>
                <div className="text-white/80 text-sm">Tingkat Keberhasilan</div>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Social Proof Slider */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="lg:pl-8"
          >
            <div className="bg-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur">
              <div className="flex items-center gap-2 text-white/90 mb-6">
                <Quote className="h-5 w-5 text-red-300" />
                <span className="text-base font-medium">Dipercaya oleh klien kami</span>
              </div>

              <Carousel
                opts={{ align: 'start', loop: true }}
                className="w-full"
                setApi={setApi}
              >
                <CarouselContent>
                  {featuredTestimonials.map((t) => (
                    <CarouselItem key={t.id}>
                      <div className="p-1">
                        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-white">
                          <div className="mb-4 flex items-center gap-1">
                            {renderStars(t.rating || 5)}
                          </div>
                          <blockquote className="mb-6 text-white/90 leading-relaxed text-sm md:text-base">
                            “{t.testimonial_text}”
                          </blockquote>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={t.image_url} alt={t.client_name} />
                              <AvatarFallback className="bg-red-100 text-red-600 font-semibold">
                                {t.client_name.split(' ').map((n) => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-semibold text-white">{t.client_name}</div>
                              <div className="text-sm text-white/70">{t.client_title}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex border-white/30 text-white hover:bg-white/20 -left-4" />
                <CarouselNext className="hidden md:flex border-white/30 text-white hover:bg-white/20 -right-4" />
              </Carousel>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  );
}
