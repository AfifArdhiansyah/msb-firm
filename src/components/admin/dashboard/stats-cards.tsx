'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Briefcase, Star, MessageSquare, TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    type: 'increase' | 'decrease';
  };
  icon: React.ReactNode;
}

function StatCard({ title, value, change, icon }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-slate-600">
          {title}
        </CardTitle>
        <div className="text-slate-400">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-slate-900">{value}</div>
        {change && (
          <div className="flex items-center text-xs text-slate-600 mt-1">
            {change.type === 'increase' ? (
              <TrendingUp className="h-3 w-3 text-green-600 mr-1" />
            ) : (
              <TrendingDown className="h-3 w-3 text-red-600 mr-1" />
            )}
            <span className={change.type === 'increase' ? 'text-green-600' : 'text-red-600'}>
              {change.value}%
            </span>
            <span className="ml-1">dari bulan lalu</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export default function StatsCards() {
  // Mock data - in real app, fetch from API
  const stats = [
    {
      title: 'Total Tim',
      value: 8,
      change: { value: 12.5, type: 'increase' as const },
      icon: <Users className="h-4 w-4" />
    },
    {
      title: 'Layanan Aktif',
      value: 6,
      change: { value: 0, type: 'increase' as const },
      icon: <Briefcase className="h-4 w-4" />
    },
    {
      title: 'Total Testimonial',
      value: 12,
      change: { value: 8.3, type: 'increase' as const },
      icon: <Star className="h-4 w-4" />
    },
    {
      title: 'Pesan Baru',
      value: 5,
      change: { value: 25, type: 'increase' as const },
      icon: <MessageSquare className="h-4 w-4" />
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          icon={stat.icon}
        />
      ))}
    </div>
  );
}
