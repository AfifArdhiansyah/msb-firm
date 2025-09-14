"use client";

import React, { useState, useEffect } from 'react';
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
import TypingAnimation from '@/components/ui/typing-animation';
import GridPattern from '@/components/ui/grid-pattern';
import Particles from '@/components/ui/particles';
import MagneticButton from '@/components/ui/magnetic-button';

export default function HeroSection() {
  const featuredTestimonials = testimonials.filter((t) => t.is_featured);
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  
  // Animated text rotation
  const rotatingWords = ['Bisnis', 'Perusahaan', 'Korporasi', 'Startup', 'UMKM', 'Institusi'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-white/30'}`}
      />
    ));

  // Text rotation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
        setIsVisible(true);
      }, 300);
    }, 2500);

    return () => clearInterval(interval);
  }, [rotatingWords.length]);

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
      <GridPattern className="absolute inset-0 opacity-10" />
      <Particles count={30} className="opacity-20" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white">
              <TypingAnimation 
                text="Mitra Hukum Profesional untuk"
                duration={1500}
                className="inline"
              />{' '}
              <motion.span
                key={currentWordIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
                transition={{ duration: 0.3 }}
                className="text-red-400 font-bold"
              >
                {rotatingWords[currentWordIndex]}
              </motion.span>{' '}
              Anda
            </h1>
            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
              Solusi hukum terpercaya dengan pengalaman lebih dari 20 tahun
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-3 mt-8 justify-center"
          >
            <MagneticButton>
              <Button
                asChild
                size="default"
                className="bg-white text-red-600 hover:bg-red-50 hover:scale-105 transition-all duration-300 px-6 py-3 shadow-lg hover:shadow-xl"
              >
                <Link href="/kontak" className="flex items-center space-x-2">
                  <span>Konsultasi Gratis</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button
                asChild
                variant="outline"
                size="default"
                className="border border-white/50 bg-transparent text-white hover:bg-white hover:text-red-600 hover:scale-105 transition-all duration-300 px-6 py-3"
              >
                <Link href="/layanan">
                  <span>Layanan Kami</span>
                </Link>
              </Button>
            </MagneticButton>
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
