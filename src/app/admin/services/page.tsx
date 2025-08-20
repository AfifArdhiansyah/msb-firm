'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Loader2, 
  Plus, 
  Briefcase, 
  Edit, 
  Trash2, 
  Eye,
  EyeOff,
  ExternalLink
} from 'lucide-react';
import { Service, ApiResponse } from '@/lib/types';

export default function ServicesManagementPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('admin_token='))
        ?.split('=')[1];

      const response = await fetch('/api/admin/services', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const result: ApiResponse<Service[]> = await response.json();

      if (result.success && result.data) {
        setServices(result.data);
      } else {
        setMessage({ type: 'error', text: result.error || 'Gagal memuat data layanan' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Terjadi kesalahan jaringan' });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-600 rounded-lg">
            <Briefcase className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Manajemen Layanan</h1>
            <p className="text-slate-600">Kelola layanan hukum yang ditawarkan</p>
          </div>
        </div>
        
        <Link href="/admin/services/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Tambah Layanan
          </Button>
        </Link>
      </div>

      {/* Alert Messages */}
      {message && (
        <Alert variant={message.type === 'error' ? 'destructive' : 'default'}>
          <AlertDescription>{message.text}</AlertDescription>
        </Alert>
      )}

      {/* Statistics */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Briefcase className="h-5 w-5 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-600">Total Layanan</p>
                <p className="text-2xl font-bold text-slate-900">{services.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <Eye className="h-5 w-5 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-600">Aktif</p>
                <p className="text-2xl font-bold text-slate-900">
                  {services.filter(s => s.is_active).length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-gray-100 rounded-lg">
                <EyeOff className="h-5 w-5 text-gray-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-600">Tidak Aktif</p>
                <p className="text-2xl font-bold text-slate-900">
                  {services.filter(s => !s.is_active).length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Services List */}
      <div className="grid gap-6">
        {services.map((service) => (
          <Card key={service.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <Badge variant={service.is_active ? 'default' : 'secondary'}>
                      {service.is_active ? 'Aktif' : 'Tidak Aktif'}
                    </Badge>
                  </div>
                  <CardDescription className="flex items-center space-x-2">
                    <span>Slug: /{service.slug}</span>
                    <Link href={`/layanan/${service.slug}`} target="_blank">
                      <ExternalLink className="h-4 w-4 text-blue-600" />
                    </Link>
                  </CardDescription>
                </div>
                <div className="flex space-x-2">
                  <Link href={`/admin/services/${service.id}/edit`}>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {service.short_description && (
                <div>
                  <p className="text-sm font-medium text-slate-600">Deskripsi Singkat:</p>
                  <p className="text-sm text-slate-900">{service.short_description}</p>
                </div>
              )}
              
              {service.full_description && (
                <div>
                  <p className="text-sm font-medium text-slate-600">Deskripsi Lengkap:</p>
                  <p className="text-sm text-slate-900">
                    {service.full_description.length > 200 
                      ? `${service.full_description.substring(0, 200)}...` 
                      : service.full_description
                    }
                  </p>
                </div>
              )}
              
              <div className="flex items-center justify-between text-sm text-slate-500">
                <span>Urutan: {service.order_index}</span>
                <span>
                  Dibuat: {new Date(service.created_at).toLocaleDateString('id-ID')}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {services.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <Briefcase className="h-12 w-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">Belum ada layanan</h3>
            <p className="text-slate-600 mb-4">
              Mulai dengan menambahkan layanan hukum pertama.
            </p>
            <Link href="/admin/services/new">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Tambah Layanan
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
