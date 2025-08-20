"use client";

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '@/lib/dummy-data';
import { motion } from 'framer-motion';

export default function TestimonialsCarousel() {
  const featuredTestimonials = testimonials.filter(t => t.is_featured);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

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
            Apa Kata Klien Kami?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Kepuasan klien adalah prioritas utama kami. Berikut testimoni dari mereka yang telah mempercayakan urusan hukumnya kepada kami.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {featuredTestimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-4">
                    <Card className="h-full min-h-[320px] border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-8 h-full">
                        <div className="flex flex-col h-full">
                          {/* Quote Icon */}
                          <div className="mb-4">
                            <Quote className="h-8 w-8 text-red-600" />
                          </div>

                          {/* Rating */}
                          <div className="flex items-center space-x-1 mb-4">
                            {renderStars(testimonial.rating || 5)}
                          </div>

                          {/* Testimonial Text */}
                          <blockquote className="text-slate-700 leading-relaxed mb-6 flex-1">
                            "{testimonial.testimonial_text}"
                          </blockquote>

                          {/* Client Info */}
                          <div className="flex items-center space-x-4">
                            <Avatar className="h-12 w-12">
                              <AvatarImage 
                                src={testimonial.image_url} 
                                alt={testimonial.client_name}
                              />
                              <AvatarFallback className="bg-red-100 text-red-600 font-semibold">
                                {testimonial.client_name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-semibold text-slate-900">
                                {testimonial.client_name}
                              </div>
                              <div className="text-sm text-slate-600">
                                {testimonial.client_title}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-slate-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">500+</div>
                <div className="text-slate-600">Klien Terpuaskan</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">95%</div>
                <div className="text-slate-600">Tingkat Kepuasan</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">4.9/5</div>
                <div className="text-slate-600">Rating Rata-rata</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
                <div className="text-slate-600">Dukungan Konsultasi</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
