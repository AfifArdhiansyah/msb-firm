"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { firmInfo } from '@/lib/dummy-data';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  NavbarButton,
} from '@/components/ui/resizable-navbar';

const navigation = [
  { name: 'Beranda', link: '/' },
  { name: 'Tentang Kami', link: '/tentang' },
  { name: 'Layanan', link: '/layanan' },
  { name: 'Tim', link: '/tim' },
  { name: 'Kontak', link: '/kontak' },
];

const MSBLogo = ({ className }: { className?: string }) => {
  return (
    <Link href="/" className={cn("relative z-20 mr-8 flex items-center space-x-3 px-2 py-1", className)}>
      <div className="relative w-8 h-8 flex-shrink-0">
        <Image 
          src={firmInfo.logo_url || '/msb.png'} 
          alt={firmInfo.name} 
          fill 
          className="object-contain rounded" 
        />
      </div>
      <div className="ml-2 whitespace-nowrap">
        <div className="font-bold text-lg text-slate-900 dark:text-white">
          MSB Law Office
        </div>
      </div>
    </Link>
  );
};

export default function ResizableHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const handleItemClick = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative w-full">
      <Navbar className="fixed top-0 inset-x-0 z-50">
        {/* Desktop Navigation */}
        <NavBody>
          <div className="flex items-center">
            <MSBLogo />
          </div>
          <NavItems items={navigation} onItemClick={handleItemClick} />
          <div className="flex items-center space-x-2">
            <NavbarButton 
              href="/kontak" 
              variant="primary"
              className="bg-red-600 hover:bg-red-700 text-white shadow-lg"
            >
              Konsultasi Gratis
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <MSBLogo />
            <MobileNavToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
          </MobileNavHeader>
          
          <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <div className="flex flex-col space-y-4 w-full">
              {navigation.map((item) => {
                const isActive = pathname === item.link || (item.link !== '/' && pathname?.startsWith(item.link));
                return (
                  <Link
                    key={item.name}
                    href={item.link}
                    className={cn(
                      'text-lg font-medium transition-colors duration-200 py-2 px-4 rounded-md',
                      isActive ? 'text-red-600 bg-red-50' : 'text-slate-700 hover:text-red-600 hover:bg-gray-50'
                    )}
                    onClick={handleItemClick}
                  >
                    {item.name}
                  </Link>
                );
              })}
              
              {/* Contact Info in Mobile */}
              <div className="pt-4 space-y-3 text-sm text-slate-600 border-t">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-red-600" />
                  <span>{firmInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-red-600" />
                  <span>{firmInfo.email}</span>
                </div>
              </div>
              
              <NavbarButton 
                href="/kontak" 
                variant="primary"
                className="bg-red-600 hover:bg-red-700 text-white shadow-lg w-full mt-4"
                onClick={handleItemClick}
              >
                Konsultasi Gratis
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
