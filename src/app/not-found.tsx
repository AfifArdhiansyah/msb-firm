import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <div className="text-8xl font-bold text-blue-600 mb-4">404</div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-slate-600">
            Maaf, halaman yang Anda cari tidak dapat ditemukan. 
            Mungkin halaman telah dipindahkan atau URL salah.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-blue-600 hover:bg-blue-700">
              <Link href="/" className="flex items-center space-x-2">
                <Home className="h-4 w-4" />
                <span>Kembali ke Beranda</span>
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/layanan" className="flex items-center space-x-2">
                <Search className="h-4 w-4" />
                <span>Lihat Layanan</span>
              </Link>
            </Button>
          </div>
          
          <Button asChild variant="ghost">
            <Link href="javascript:history.back()" className="flex items-center space-x-2">
              <ArrowLeft className="h-4 w-4" />
              <span>Kembali ke Halaman Sebelumnya</span>
            </Link>
          </Button>
        </div>

        <div className="mt-8 text-sm text-slate-500">
          <p>Butuh bantuan? <Link href="/kontak" className="text-blue-600 hover:underline">Hubungi kami</Link></p>
        </div>
      </div>
    </div>
  );
}
