import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import MainLayout from '@/components/layout/main-layout';
import { firmNews } from '@/lib/dummy-data';
import Image from 'next/image';
import Link from 'next/link';
import ShareButtons from '@/components/news/share-buttons';

interface NewsPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return firmNews.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const news = firmNews.find(n => n.slug === params.slug);
  if (!news) return { title: 'Berita Tidak Ditemukan' };
  return {
    title: `${news.title} - Berita`,
    description: news.summary || 'Berita dari firma kami',
  };
}

export default function NewsDetailPage({ params }: NewsPageProps) {
  const news = firmNews.find(n => n.slug === params.slug);
  if (!news) notFound();

  return (
    <MainLayout>
      <div className="min-h-screen">
        {/* Breadcrumb */}
        <section className="py-8 bg-slate-50">
          <div className="container mx-auto px-4">
            <nav className="text-sm text-slate-600">
              <Link href="/" className="hover:text-red-600">Beranda</Link>
              <span className="mx-2">/</span>
              <Link href="/berita" className="hover:text-red-600">Berita</Link>
              <span className="mx-2">/</span>
              <span className="text-slate-900">{news.title}</span>
            </nav>
          </div>
        </section>

        {/* Header */}
        <section className="py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-sm text-slate-500 mb-2">
                {new Date(news.published_at).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">{news.title}</h1>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="bg-white">
          <div className="container mx-auto px-4">
            <div className="relative w-full h-80 md:h-[480px] rounded-2xl overflow-hidden shadow-lg">
              <Image src={news.image_url || '/vercel.svg'} alt={news.title} fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              {news.summary && (
                <p className="text-lg text-slate-700 mb-6">{news.summary}</p>
              )}
              <div className="prose prose-slate max-w-none">
                {(news.content || '').split('\n').map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* Share */}
              <div className="mt-10">
                <ShareButtons title={news.title} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
