# Hukum Prima & Associates - Website Firma Hukum

Website profil perusahaan modern untuk firma hukum yang dibangun dengan Next.js 14, Shadcn UI, dan Tailwind CSS.

## 🚀 Fitur Utama

### Halaman Utama
- **Beranda**: Hero section dengan animasi, key selling points, testimonials carousel, dan CTA
- **Tentang Kami**: Sejarah firma, misi & visi, profil tim, dan nilai-nilai perusahaan
- **Layanan**: Grid layanan dengan detail lengkap dan dynamic routing
- **Tim**: Profil lengkap tim ahli dengan statistik dan informasi karir
- **Kontak**: Form kontak, informasi lengkap, dan integrasi Google Maps

### Fitur Teknis
- ✅ Responsive design untuk semua perangkat
- ✅ Animasi halus dengan Framer Motion
- ✅ SEO optimized dengan meta tags lengkap
- ✅ Sitemap dan robots.txt otomatis
- ✅ PWA ready dengan manifest
- ✅ TypeScript untuk type safety
- ✅ Komponen UI yang reusable
- ✅ Loading states dan error handling
- ✅ Scroll to top functionality

### Integrasi
- 📱 WhatsApp click-to-chat
- 📞 Click-to-call functionality
- ✉️ Email integration
- 🗺️ Google Maps embed
- 🔗 Social media links

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: Shadcn UI
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm atau yarn

### Installation

1. Clone repository
```bash
git clone <repository-url>
cd lawfirmweb
```

2. Install dependencies
```bash
npm install
```

3. Run development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📊 Database Schema

Database PostgreSQL dengan tabel:
- `firm_info` - Informasi firma
- `team_members` - Data tim/pengacara
- `services` - Layanan yang ditawarkan
- `testimonials` - Testimoni klien
- `admin_users` - User admin
- `contact_messages` - Pesan dari website

Schema lengkap tersedia di `src/lib/database.sql`

## 🎨 Customization

### Mengubah Data Firma
Edit file `src/lib/dummy-data.ts` untuk mengubah:
- Informasi firma (nama, alamat, kontak)
- Data tim dan pengacara
- Layanan yang ditawarkan
- Testimoni klien

### Mengubah Tema Warna
Edit file `src/app/globals.css` untuk mengubah:
- Primary colors (biru profesional)
- Secondary colors
- Custom animations

## 📱 Responsive Design

Website fully responsive dengan breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 📈 SEO Features

- Meta tags dinamis per halaman
- Open Graph tags
- Structured data ready
- Sitemap otomatis
- Robots.txt
- Semantic HTML

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Other Platforms
```bash
npm run build
npm start
```

## 📞 Support

Untuk pertanyaan atau dukungan teknis, hubungi:
- Email: info@hukumprima.com
- WhatsApp: +62812-3456-7890

## 📄 License

© 2024 Hukum Prima & Associates. All rights reserved.

---

**Dibuat dengan ❤️ menggunakan Next.js dan Shadcn UI**
