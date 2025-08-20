"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { firmInfo } from '@/lib/dummy-data';

const navigation = [
  { name: 'Beranda', href: '/' },
  { name: 'Tentang Kami', href: '/tentang' },
  { name: 'Layanan', href: '/layanan' },
  { name: 'Tim', href: '/tim' },
  { name: 'Kontak', href: '/kontak' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <div className="relative w-8 h-8">
                <Image src={firmInfo.logo_url || '/msb.png'} alt={firmInfo.name} fill className="object-contain rounded" />
              </div>
              <div className="ml-2">
                <div className="font-bold text-lg text-slate-900">
                  MSB Law Office
                </div>
              </div>
            </div>
          </Link>

          <div className="flex items-center space-x-4 ml-auto">
            {/* Desktop Navigation (right-aligned) */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => {
                const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'text-slate-700 hover:text-red-600 font-medium transition-colors duration-200 relative group',
                      isActive && 'text-red-600'
                    )}
                  >
                    {item.name}
                    <span
                      className={cn(
                        'absolute -bottom-1 left-0 h-0.5 bg-red-600 transition-all duration-200',
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      )}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          'text-lg font-medium transition-colors duration-200 py-2',
                          isActive ? 'text-red-600' : 'text-slate-700 hover:text-red-600'
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                  {/* Contact Info in Mobile */}
                  <div className="pt-4 space-y-3 text-sm text-slate-600">
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>{firmInfo.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span>{firmInfo.email}</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
