'use client';

import React from 'react';
import { useAuth } from '@/lib/auth-context';
import StatsCards from '@/components/admin/dashboard/stats-cards';
import RecentActivities from '@/components/admin/dashboard/recent-activities';

export default function AdminDashboardPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">


      {/* Statistics Cards */}
      <StatsCards />

      {/* Status Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* System Status */}
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Status Sistem</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">Website Status</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Online
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">Database</span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                Connected
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">Last Backup</span>
              <span className="text-sm text-slate-900">2 jam yang lalu</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-lg border border-slate-200 p-6">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Ringkasan Bulan Ini</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">Pengunjung Website</span>
              <span className="text-sm font-medium text-slate-900">2,847</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">Konsultasi Baru</span>
              <span className="text-sm font-medium text-slate-900">23</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-600">Rating Rata-rata</span>
              <span className="text-sm font-medium text-slate-900">4.8/5</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <RecentActivities />
    </div>
  );
}
