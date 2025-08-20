-- Database Schema untuk Firma Hukum
-- PostgreSQL Schema dengan data dummy

-- Tabel untuk Informasi Firma
CREATE TABLE firm_info (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    tagline TEXT,
    mission TEXT,
    vision TEXT,
    whatsapp_number VARCHAR(50),
    email VARCHAR(255),
    phone VARCHAR(50),
    address TEXT,
    operation_hours VARCHAR(255),
    logo_url VARCHAR(255),
    favicon_url VARCHAR(255),
    seo_title VARCHAR(255),
    seo_description TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabel untuk Anggota Tim/Pengacara
CREATE TABLE team_members (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    position VARCHAR(255),
    specialization TEXT,
    bio TEXT,
    image_url VARCHAR(255),
    linkedin_url VARCHAR(255),
    email VARCHAR(255),
    order_index INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabel untuk Layanan
CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    short_description TEXT,
    full_description TEXT,
    icon_url VARCHAR(255),
    image_url VARCHAR(255),
    order_index INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabel untuk Testimonial
CREATE TABLE testimonials (
    id SERIAL PRIMARY KEY,
    client_name VARCHAR(255) NOT NULL,
    client_title VARCHAR(255),
    testimonial_text TEXT NOT NULL,
    rating INTEGER CHECK (rating >= 1 AND rating <= 5),
    image_url VARCHAR(255),
    is_featured BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabel untuk Pengguna Admin
CREATE TABLE admin_users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    full_name VARCHAR(255),
    is_active BOOLEAN DEFAULT true,
    last_login TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Tabel untuk Kontak/Pesan dari Website
CREATE TABLE contact_messages (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(255),
    message TEXT NOT NULL,
    is_read BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Insert data dummy untuk firm_info
INSERT INTO firm_info (
    name, tagline, mission, vision, whatsapp_number, email, phone, address, operation_hours,
    seo_title, seo_description
) VALUES (
    'Hukum Prima & Associates',
    'Solusi Hukum Terpercaya untuk Kebutuhan Anda',
    'Memberikan layanan hukum berkualitas tinggi dengan pendekatan personal dan profesional untuk melindungi hak dan kepentingan klien.',
    'Menjadi firma hukum terdepan yang dipercaya dalam memberikan solusi hukum inovatif dan komprehensif.',
    '+62812-3456-7890',
    'info@hukumprima.com',
    '+62-21-1234-5678',
    'Jl. Sudirman No. 123, Jakarta Pusat 10220, Indonesia',
    'Senin - Jumat: 09:00 - 18:00 WIB, Sabtu: 09:00 - 14:00 WIB',
    'Hukum Prima & Associates - Firma Hukum Terpercaya Jakarta',
    'Firma hukum terpercaya di Jakarta dengan pengalaman lebih dari 20 tahun. Spesialis hukum korporasi, litigasi, properti, dan hukum keluarga.'
);

-- Insert data dummy untuk team_members
INSERT INTO team_members (name, position, specialization, bio, order_index) VALUES
(
    'Dr. Ahmad Wijaya, S.H., M.H.',
    'Managing Partner',
    'Hukum Korporasi, Merger & Akuisisi',
    'Dengan pengalaman lebih dari 25 tahun di bidang hukum korporasi, Dr. Ahmad telah menangani berbagai transaksi besar dan memberikan konsultasi strategis kepada perusahaan multinasional.',
    1
),
(
    'Sarah Putri, S.H., LL.M.',
    'Senior Partner',
    'Litigasi, Arbitrase Komersial',
    'Spesialis litigasi dengan track record menangani kasus-kasus kompleks di pengadilan tinggi dan arbitrase internasional. Lulusan Harvard Law School.',
    2
),
(
    'Budi Santoso, S.H., M.Kn.',
    'Partner',
    'Hukum Properti, Real Estate',
    'Ahli dalam transaksi properti dan pengembangan real estate. Telah membantu berbagai developer dalam proyek-proyek besar di Indonesia.',
    3
),
(
    'Maya Sari, S.H.',
    'Associate',
    'Hukum Keluarga, Waris',
    'Berpengalaman dalam menangani kasus-kasus hukum keluarga dengan pendekatan yang sensitif dan profesional.',
    4
);

-- Insert data dummy untuk services
INSERT INTO services (title, slug, short_description, full_description, order_index) VALUES
(
    'Hukum Korporasi',
    'hukum-korporasi',
    'Konsultasi dan pendampingan hukum untuk perusahaan dalam berbagai aspek bisnis.',
    'Layanan komprehensif meliputi pendirian perusahaan, merger & akuisisi, corporate governance, compliance, kontrak bisnis, dan restrukturisasi perusahaan. Tim ahli kami membantu perusahaan dari startup hingga multinasional.',
    1
),
(
    'Litigasi & Arbitrase',
    'litigasi-arbitrase',
    'Representasi hukum dalam sengketa perdata, pidana, dan arbitrase komersial.',
    'Penanganan sengketa di berbagai tingkat pengadilan, mediasi, dan arbitrase. Pengalaman dalam kasus-kasus kompleks termasuk sengketa komersial, perbankan, konstruksi, dan intellectual property.',
    2
),
(
    'Hukum Properti',
    'hukum-properti',
    'Layanan hukum untuk transaksi dan sengketa properti serta real estate.',
    'Due diligence properti, penyusunan kontrak jual beli, sewa menyewa, pengembangan real estate, pengurusan sertifikat, dan penyelesaian sengketa tanah.',
    3
),
(
    'Hukum Keluarga',
    'hukum-keluarga',
    'Pendampingan hukum untuk masalah keluarga dengan pendekatan yang sensitif.',
    'Penanganan kasus perceraian, hak asuh anak, pembagian harta gono-gini, adopsi, dan perencanaan waris. Kami mengutamakan solusi damai dan mediasi.',
    4
),
(
    'Hak Kekayaan Intelektual',
    'hak-kekayaan-intelektual',
    'Perlindungan dan pengelolaan aset kekayaan intelektual perusahaan.',
    'Pendaftaran merek, paten, hak cipta, desain industri, serta penanganan pelanggaran HKI. Strategi perlindungan IP untuk startup dan perusahaan teknologi.',
    5
),
(
    'Hukum Ketenagakerjaan',
    'hukum-ketenagakerjaan',
    'Konsultasi hukum ketenagakerjaan untuk perusahaan dan karyawan.',
    'Penyusunan kontrak kerja, peraturan perusahaan, penanganan PHK, sengketa industrial, dan compliance ketenagakerjaan sesuai regulasi terbaru.',
    6
);

-- Insert data dummy untuk testimonials
INSERT INTO testimonials (client_name, client_title, testimonial_text, rating, is_featured) VALUES
(
    'Andi Kurniawan',
    'CEO, PT Teknologi Maju',
    'Hukum Prima & Associates telah membantu perusahaan kami dalam proses merger yang kompleks. Profesionalisme dan keahlian tim mereka sangat luar biasa. Highly recommended!',
    5,
    true
),
(
    'Siti Nurhaliza',
    'Direktur, CV Berkah Jaya',
    'Pelayanan yang sangat memuaskan dalam penanganan sengketa kontrak. Tim yang responsif dan solusi yang tepat sasaran.',
    5,
    true
),
(
    'Robert Tanoto',
    'Owner, Tanoto Property Group',
    'Sudah 5 tahun menggunakan jasa Hukum Prima untuk semua transaksi properti kami. Tidak pernah mengecewakan!',
    5,
    false
),
(
    'Dr. Lisa Wijaya',
    'Praktisi Medis',
    'Terima kasih atas bantuan dalam kasus hukum keluarga saya. Penanganan yang sangat profesional dan empati.',
    5,
    true
),
(
    'Bambang Sutrisno',
    'Direktur, PT Industri Kreatif',
    'Bantuan dalam pendaftaran merek dan paten sangat membantu bisnis kami. Tim yang kompeten dan berpengalaman.',
    4,
    false
);

-- Insert data dummy untuk admin user (password: admin123 - hashed)
INSERT INTO admin_users (username, password_hash, email, full_name) VALUES
(
    'admin',
    '$2b$10$rQZ8vQZ8vQZ8vQZ8vQZ8vOZ8vQZ8vQZ8vQZ8vQZ8vQZ8vQZ8vQZ8vQ',
    'admin@hukumprima.com',
    'Administrator'
);
