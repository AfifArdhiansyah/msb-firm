import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Linkedin, Instagram, Facebook } from 'lucide-react';
import { firmInfo, services } from '@/lib/dummy-data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-red-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <div>
                <div className="font-bold text-lg">
                  {firmInfo.name.split(' ')[0]} {firmInfo.name.split(' ')[1]}
                </div>
                <div className="text-sm text-slate-400 -mt-1">
                  & Associates
                </div>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              {firmInfo.tagline}
            </p>
            <div className="flex space-x-4">
              <Link 
                href="#" 
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link 
                href="#" 
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link 
                href="#" 
                className="text-slate-400 hover:text-white transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Navigasi</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/" 
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link 
                  href="/tentang" 
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link 
                  href="/layanan" 
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Layanan
                </Link>
              </li>
              <li>
                <Link 
                  href="/tim" 
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Tim Kami
                </Link>
              </li>
              <li>
                <Link 
                  href="/kontak" 
                  className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                >
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Layanan Kami</h3>
            <ul className="space-y-2">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/layanan/${service.slug}`}
                    className="text-slate-300 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Kontak Kami</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                <p className="text-slate-300 text-sm leading-relaxed">
                  {firmInfo.address}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-400 flex-shrink-0" />
                <p className="text-slate-300 text-sm">
                  {firmInfo.phone}
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-400 flex-shrink-0" />
                <p className="text-slate-300 text-sm">
                  {firmInfo.email}
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                <p className="text-slate-300 text-sm leading-relaxed">
                  {firmInfo.operation_hours}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-slate-400 text-sm">
              © {currentYear} {firmInfo.name}. Semua hak dilindungi.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link 
                href="/privacy" 
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                Kebijakan Privasi
              </Link>
              <Link 
                href="/terms" 
                className="text-slate-400 hover:text-white transition-colors duration-200"
              >
                Syarat & Ketentuan
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
