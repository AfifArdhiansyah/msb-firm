import React from 'react';
import { Metadata } from 'next';
import { firmInfo } from '@/lib/dummy-data';

export const metadata: Metadata = {
  title: `Kebijakan Privasi - ${firmInfo.name}`,
  description: 'Kebijakan privasi dan perlindungan data pribadi di Hukum Prima & Associates.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">
          Kebijakan Privasi
        </h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 mb-8">
            Terakhir diperbarui: 20 Juni 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Informasi yang Kami Kumpulkan</h2>
            <p className="text-slate-700 mb-4">
              Kami mengumpulkan informasi yang Anda berikan secara langsung kepada kami, seperti:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Nama lengkap dan informasi kontak</li>
              <li>Informasi yang diperlukan untuk konsultasi hukum</li>
              <li>Komunikasi antara Anda dan firma kami</li>
              <li>Informasi pembayaran (jika ada)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Bagaimana Kami Menggunakan Informasi</h2>
            <p className="text-slate-700 mb-4">
              Kami menggunakan informasi yang dikumpulkan untuk:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Memberikan layanan hukum yang Anda minta</li>
              <li>Berkomunikasi dengan Anda tentang layanan kami</li>
              <li>Memproses pembayaran</li>
              <li>Mematuhi kewajiban hukum</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Kerahasiaan Klien</h2>
            <p className="text-slate-700">
              Sebagai firma hukum, kami terikat oleh kewajiban kerahasiaan profesional.
              Semua informasi yang Anda bagikan dengan kami dalam konteks hubungan pengacara-klien
              akan dijaga kerahasiaannya sesuai dengan standar etika profesi hukum.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Pembagian Informasi</h2>
            <p className="text-slate-700">
              Kami tidak akan membagikan informasi pribadi Anda kepada pihak ketiga,
              kecuali dalam situasi berikut:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mt-4">
              <li>Dengan persetujuan eksplisit dari Anda</li>
              <li>Ketika diwajibkan oleh hukum</li>
              <li>Untuk melindungi hak dan keamanan kami atau orang lain</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Keamanan Data</h2>
            <p className="text-slate-700">
              Kami menerapkan langkah-langkah keamanan yang sesuai untuk melindungi
              informasi pribadi Anda dari akses, penggunaan, atau pengungkapan yang tidak sah.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Hak Anda</h2>
            <p className="text-slate-700">
              Anda memiliki hak untuk mengakses, memperbarui, atau menghapus informasi pribadi
              yang kami miliki tentang Anda. Untuk melakukan hal ini, silakan hubungi kami
              melalui informasi kontak yang tersedia.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Hubungi Kami</h2>
            <p className="text-slate-700">
              Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami di:
            </p>
            <div className="mt-4 p-4 bg-slate-50 rounded-lg">
              <p className="text-slate-700">
                <strong>{firmInfo.name}</strong><br />
                Email: {firmInfo.email}<br />
                Telepon: {firmInfo.phone}<br />
                Alamat: {firmInfo.address}
              </p>
            </div>
          </section>
        </div>
      </div>

    </div>
  );
}
