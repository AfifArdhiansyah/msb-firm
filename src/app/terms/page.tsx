import React from 'react';
import { Metadata } from 'next';
import { firmInfo } from '@/lib/dummy-data';

export const metadata: Metadata = {
  title: `Syarat & Ketentuan - ${firmInfo.name}`,
  description: 'Syarat dan ketentuan penggunaan layanan hukum di Hukum Prima & Associates.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">
          Syarat & Ketentuan
        </h1>

        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-slate-600 mb-8">
            Terakhir diperbarui: 20 Juni 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Penerimaan Syarat</h2>
            <p className="text-slate-700">
              Dengan menggunakan layanan kami atau mengakses situs web ini, Anda menyetujui
              untuk terikat oleh syarat dan ketentuan ini. Jika Anda tidak setuju dengan
              syarat ini, mohon untuk tidak menggunakan layanan kami.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Layanan Hukum</h2>
            <p className="text-slate-700 mb-4">
              Layanan yang kami berikan meliputi:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Konsultasi hukum</li>
              <li>Representasi hukum</li>
              <li>Penyusunan dokumen hukum</li>
              <li>Layanan hukum lainnya sesuai keahlian kami</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Hubungan Pengacara-Klien</h2>
            <p className="text-slate-700">
              Hubungan pengacara-klien hanya terbentuk setelah adanya perjanjian tertulis
              yang ditandatangani oleh kedua belah pihak. Konsultasi awal atau komunikasi
              informal tidak secara otomatis membentuk hubungan pengacara-klien.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Biaya dan Pembayaran</h2>
            <p className="text-slate-700 mb-4">
              Biaya layanan akan dijelaskan secara transparan sebelum dimulainya layanan.
              Ketentuan pembayaran meliputi:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Konsultasi awal gratis (maksimal 30 menit)</li>
              <li>Biaya layanan sesuai dengan kompleksitas kasus</li>
              <li>Pembayaran dapat dilakukan secara bertahap</li>
              <li>Biaya tambahan akan dikomunikasikan terlebih dahulu</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Kewajiban Klien</h2>
            <p className="text-slate-700 mb-4">
              Sebagai klien, Anda berkewajiban untuk:
            </p>
            <ul className="list-disc pl-6 text-slate-700 space-y-2">
              <li>Memberikan informasi yang akurat dan lengkap</li>
              <li>Melakukan pembayaran sesuai kesepakatan</li>
              <li>Mengikuti nasihat hukum yang diberikan</li>
              <li>Menjaga kerahasiaan strategi hukum</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Batasan Tanggung Jawab</h2>
            <p className="text-slate-700">
              Kami akan memberikan layanan hukum terbaik sesuai dengan standar profesi.
              Namun, hasil dari proses hukum tidak dapat dijamin karena bergantung pada
              berbagai faktor termasuk keputusan pengadilan dan pihak lawan.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Kerahasiaan</h2>
            <p className="text-slate-700">
              Semua informasi yang Anda berikan akan dijaga kerahasiaannya sesuai dengan
              kode etik profesi pengacara dan peraturan perundang-undangan yang berlaku.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Penyelesaian Sengketa</h2>
            <p className="text-slate-700">
              Setiap sengketa yang timbul akan diselesaikan melalui musyawarah.
              Jika tidak tercapai kesepakatan, sengketa akan diselesaikan melalui
              arbitrase atau pengadilan yang berwenang di Jakarta.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Perubahan Syarat</h2>
            <p className="text-slate-700">
              Kami berhak mengubah syarat dan ketentuan ini sewaktu-waktu.
              Perubahan akan diberitahukan melalui situs web kami dan akan berlaku
              setelah dipublikasikan.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Kontak</h2>
            <p className="text-slate-700">
              Untuk pertanyaan mengenai syarat dan ketentuan ini, silakan hubungi:
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
