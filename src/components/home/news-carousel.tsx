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
import Image from 'next/image';
import Link from 'next/link';
import { firmNews } from '@/lib/dummy-data';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function NewsCarousel() {
  const featuredNews = firmNews.slice(0, 6);

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
            Berita Terbaru
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Update kegiatan, publikasi, dan liputan terbaru dari {""}
            <span className="font-semibold">{` ${process.env.NEXT_PUBLIC_FIRM_NAME || 'firma kami'}`}</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {featuredNews.map((news) => (
                <CarouselItem key={news.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">
                    <Card className="h-full min-h-[360px] border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-0 h-full">
                        <div className="flex flex-col h-full">
                          {/* Image */}
                          <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
                            <Image
                              src={news.image_url || '/vercel.svg'}
                              alt={news.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                          </div>

                          {/* Content */}
                          <div className="p-6 flex-1 flex flex-col">
                            <div className="text-sm text-slate-500 mb-2">
                              {new Date(news.published_at).toLocaleDateString('id-ID', {
                                day: '2-digit', month: 'long', year: 'numeric'
                              })}
                            </div>
                            <h3 className="text-lg font-semibold text-slate-900 mb-3 line-clamp-2">
                              {news.title}
                            </h3>
                            {news.summary && (
                              <p className="text-slate-600 text-sm line-clamp-3 mb-4">
                                {news.summary}
                              </p>
                            )}
                            <div className="mt-auto">
                              <Link
                                href={`/berita/${news.slug}`}
                                className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
                                aria-label={`Baca selengkapnya: ${news.title}`}
                              >
                                Baca selengkapnya
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-2">
                                  <path fillRule="evenodd" d="M12.97 4.97a.75.75 0 011.06 0l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 11-1.06-1.06l4.72-4.72H4.5a.75.75 0 010-1.5h13.19l-4.72-4.72a.75.75 0 010-1.06z" clipRule="evenodd" />
                                </svg>
                              </Link>
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
          <div className="mt-10 text-center">
            <Button asChild className="bg-red-700 hover:bg-red-800">
              <Link href="/berita">Lihat Semua Berita</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

