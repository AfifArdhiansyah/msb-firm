'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Plus, 
  Users, 
  Briefcase, 
  Star, 
  MessageSquare,
  Building2,
  FileText
} from 'lucide-react';

interface QuickAction {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  color: string;
}

export default function QuickActions() {
  const actions: QuickAction[] = [
    {
      title: 'Tambah Tim Baru',
      description: 'Tambahkan anggota tim atau pengacara baru',
      href: '/admin/team/new',
      icon: <Users className="h-5 w-5" />,
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      title: 'Tambah Layanan',
      description: 'Buat layanan hukum baru',
      href: '/admin/services/new',
      icon: <Briefcase className="h-5 w-5" />,
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      title: 'Kelola Testimonial',
      description: 'Moderasi dan kelola testimonial klien',
      href: '/admin/testimonials',
      icon: <Star className="h-5 w-5" />,
      color: 'bg-yellow-500 hover:bg-yellow-600'
    },
    {
      title: 'Lihat Pesan',
      description: 'Baca pesan kontak dari website',
      href: '/admin/messages',
      icon: <MessageSquare className="h-5 w-5" />,
      color: 'bg-purple-500 hover:bg-purple-600'
    },
    {
      title: 'Edit Info Firma',
      description: 'Perbarui informasi perusahaan',
      href: '/admin/firm-info',
      icon: <Building2 className="h-5 w-5" />,
      color: 'bg-indigo-500 hover:bg-indigo-600'
    },
    {
      title: 'Laporan',
      description: 'Lihat statistik dan laporan',
      href: '/admin/reports',
      icon: <FileText className="h-5 w-5" />,
      color: 'bg-gray-500 hover:bg-gray-600'
    }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Aksi Cepat</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {actions.map((action, index) => (
            <Link key={index} href={action.href} className="block">
              <div className="p-4 border rounded-lg hover:shadow-md transition-shadow duration-200 hover:border-blue-300 cursor-pointer">
                <div className="flex items-start space-x-3">
                  <div className={`p-3 rounded-lg text-white ${action.color} flex-shrink-0`}>
                    {action.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-slate-900 mb-1">
                      {action.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {action.description}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
