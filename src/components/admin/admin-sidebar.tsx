'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  Building2, 
  Users, 
  Briefcase, 
  MessageSquare, 
  Star,
  Settings,
  UserCog
} from 'lucide-react';

const navigationGroups = [
  {
    title: 'Overview',
    items: [
      {
        name: 'Dashboard',
        href: '/admin/dashboard',
        icon: LayoutDashboard,
      },
    ]
  },
  {
    title: 'Content Management',
    items: [
      {
        name: 'Info Firma',
        href: '/admin/firm-info',
        icon: Building2,
      },
      {
        name: 'Tim & Pengacara',
        href: '/admin/team',
        icon: Users,
      },
      {
        name: 'Layanan',
        href: '/admin/services',
        icon: Briefcase,
      },
      {
        name: 'Testimonial',
        href: '/admin/testimonials',
        icon: Star,
      },
    ]
  },
  {
    title: 'Communication',
    items: [
      {
        name: 'Pesan Kontak',
        href: '/admin/messages',
        icon: MessageSquare,
        badge: 5,
      },
    ]
  },
  {
    title: 'System',
    items: [
      {
        name: 'Admin Users',
        href: '/admin/users',
        icon: UserCog,
      },
    ]
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col w-64 bg-slate-900 text-white">
      {/* Logo */}
      <div className="flex items-center justify-center h-16 px-4 border-b border-slate-700">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <Building2 className="h-5 w-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold">Admin Panel</h1>
            <p className="text-xs text-slate-400">Hukum Prima</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-6 overflow-y-auto">
        {navigationGroups.map((group) => (
          <div key={group.title}>
            <h3 className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
              {group.title}
            </h3>
            <div className="space-y-1">
              {group.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                      isActive
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white hover:translate-x-1'
                    )}
                  >
                    <div className="flex items-center">
                      <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                      <span className="truncate">{item.name}</span>
                    </div>
                    {item.badge && item.badge > 0 && (
                      <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-700">
        <div className="text-xs text-slate-400 text-center">
          © 2024 Hukum Prima & Associates
        </div>
      </div>
    </div>
  );
}
