'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { formatDistanceToNow } from 'date-fns';
import { id } from 'date-fns/locale';

interface Activity {
  id: string;
  type: 'message' | 'testimonial' | 'team' | 'service';
  title: string;
  description: string;
  timestamp: Date;
  user?: string;
}

export default function RecentActivities() {
  // Mock data - in real app, fetch from API
  const activities: Activity[] = [
    {
      id: '1',
      type: 'message',
      title: 'Pesan Kontak Baru',
      description: 'Andi Kurniawan mengirim pesan konsultasi hukum korporasi',
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      user: 'Andi Kurniawan'
    },
    {
      id: '2',
      type: 'testimonial',
      title: 'Testimonial Baru',
      description: 'Sarah Wijaya memberikan testimonial 5 bintang',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      user: 'Sarah Wijaya'
    },
    {
      id: '3',
      type: 'team',
      title: 'Profil Tim Diperbarui',
      description: 'Dr. Maria Sari memperbarui profil dan spesialisasi',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
    },
    {
      id: '4',
      type: 'service',
      title: 'Layanan Baru',
      description: 'Layanan Hukum Ketenagakerjaan telah ditambahkan',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
    },
    {
      id: '5',
      type: 'message',
      title: 'Pesan Kontak Baru',
      description: 'PT Teknologi Maju mengirim permintaan konsultasi',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2), // 2 days ago
      user: 'PT Teknologi Maju'
    }
  ];

  const getActivityBadge = (type: Activity['type']) => {
    const badges = {
      message: { label: 'Pesan', variant: 'default' as const },
      testimonial: { label: 'Testimonial', variant: 'secondary' as const },
      team: { label: 'Tim', variant: 'outline' as const },
      service: { label: 'Layanan', variant: 'destructive' as const }
    };
    return badges[type];
  };

  const getUserInitials = (name?: string) => {
    if (!name) return '?';
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Aktivitas Terbaru</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const badge = getActivityBadge(activity.type);
            return (
              <div key={activity.id} className="flex items-start space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="text-xs">
                    {getUserInitials(activity.user)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <p className="text-sm font-medium text-slate-900">
                      {activity.title}
                    </p>
                    <Badge variant={badge.variant} className="text-xs">
                      {badge.label}
                    </Badge>
                  </div>
                  <p className="text-sm text-slate-600 mb-1">
                    {activity.description}
                  </p>
                  <p className="text-xs text-slate-400">
                    {formatDistanceToNow(activity.timestamp, { 
                      addSuffix: true, 
                      locale: id 
                    })}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
