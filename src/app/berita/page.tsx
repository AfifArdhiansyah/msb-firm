import React from 'react';
import { Metadata } from 'next';
import MainLayout from '@/components/layout/main-layout';
import { firmNews } from '@/lib/dummy-data';
import Link from 'next/link';
import Image from 'next/image';
import { firmInfo } from '@/lib/dummy-data';

export const metadata: Metadata = {
  title: `Berita - ${firmInfo.name}`,
  description: 'Kumpulan berita, publikasi, dan update terbaru dari firma kami.',
  keywords: 'berita, publikasi, kegiatan, update firma',
};

export default function NewsListPage() {
  const news = firmNews.filter(n => n.is_active);

  return (
    <MainLayout>
      <div className="min-h-screen">
        {/* Header */}
        <section className="relative py-24 text-white">
          <div className="absolute inset-0">
            <Image src="https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=1600&auto=format&fit=crop" alt="Berita Terbaru" fill className="object-cover" />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Berita Terbaru</h1>
              <p className="text-xl text-slate-200">Liputan, publikasi, dan kegiatan terbaru kami</p>
            </div>
          </div>
        </section>

        {/* Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {news.map(item => (
                <Link href={`/berita/${item.slug}`} key={item.id} className="group rounded-xl overflow-hidden hover:shadow-lg transition-shadow border-0">
                  <div className="relative h-52 w-full bg-slate-100">
                    <Image src={item.image_url || '/vercel.svg'} alt={item.title} fill className="object-cover" />
                  </div>
                  <div className="p-5">
                    <div className="text-sm text-slate-500 mb-1">
                      {new Date(item.published_at).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}
                    </div>
                    <h3 className="font-semibold text-slate-900 group-hover:text-red-600 transition-colors line-clamp-2 min-h-[3.5rem]">{item.title}</h3>
                    {item.summary && (
                      <p className="text-slate-600 text-sm mt-2 line-clamp-2">{item.summary}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
