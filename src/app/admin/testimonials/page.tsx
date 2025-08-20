'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Loader2, 
  Plus, 
  Star, 
  Edit, 
  Trash2, 
  Eye,
  EyeOff,
  StarIcon
} from 'lucide-react';
import { Testimonial, ApiResponse } from '@/lib/types';

export default function TestimonialsManagementPage() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    loadTestimonials();
  }, []);

  const loadTestimonials = async () => {
    try {
      const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('admin_token='))
        ?.split('=')[1];

      const response = await fetch('/api/admin/testimonials', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const result: ApiResponse<Testimonial[]> = await response.json();

      if (result.success && result.data) {
        setTestimonials(result.data);
      } else {
        setMessage({ type: 'error', text: result.error || 'Gagal memuat data testimonial' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Terjadi kesalahan jaringan' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleFeatured = async (id: number, currentStatus: boolean) => {
    try {
      const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('admin_token='))
        ?.split('=')[1];

      const response = await fetch('/api/admin/testimonials', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ id, is_featured: !currentStatus })
      });

      const result: ApiResponse<Testimonial> = await response.json();

      if (result.success) {
        setTestimonials(prev => 
          prev.map(testimonial => 
            testimonial.id === id ? { ...testimonial, is_featured: !currentStatus } : testimonial
          )
        );
        setMessage({ 
          type: 'success', 
          text: `Testimonial berhasil ${!currentStatus ? 'ditampilkan' : 'disembunyikan'} di halaman utama` 
        });
      } else {
        setMessage({ type: 'error', text: result.error || 'Gagal mengubah status featured' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Terjadi kesalahan jaringan' });
    }
  };

  const handleToggleActive = async (id: number, currentStatus: boolean) => {
    try {
      const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('admin_token='))
        ?.split('=')[1];

      const response = await fetch('/api/admin/testimonials', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ id, is_active: !currentStatus })
      });

      const result: ApiResponse<Testimonial> = await response.json();

      if (result.success) {
        setTestimonials(prev => 
          prev.map(testimonial => 
            testimonial.id === id ? { ...testimonial, is_active: !currentStatus } : testimonial
          )
        );
        setMessage({ 
          type: 'success', 
          text: `Testimonial berhasil ${!currentStatus ? 'diaktifkan' : 'dinonaktifkan'}` 
        });
      } else {
        setMessage({ type: 'error', text: result.error || 'Gagal mengubah status' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Terjadi kesalahan jaringan' });
    }
  };

  const getUserInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const renderStars = (rating?: number) => {
    if (!rating) return null;
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`h-4 w-4 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
        <span className="text-sm text-slate-600 ml-1">({rating}/5)</span>
      </div>
    );
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
            <Star className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Manajemen Testimonial</h1>
            <p className="text-slate-600">Kelola testimonial dan ulasan klien</p>
          </div>
        </div>
        
        <Link href="/admin/testimonials/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Tambah Testimonial
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
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Star className="h-5 w-5 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-600">Total</p>
                <p className="text-2xl font-bold text-slate-900">{testimonials.length}</p>
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
                  {testimonials.filter(t => t.is_active).length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <StarIcon className="h-5 w-5 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-600">Featured</p>
                <p className="text-2xl font-bold text-slate-900">
                  {testimonials.filter(t => t.is_featured).length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <StarIcon className="h-5 w-5 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-600">Rata-rata Rating</p>
                <p className="text-2xl font-bold text-slate-900">
                  {testimonials.length > 0 
                    ? (testimonials.reduce((acc, t) => acc + (t.rating || 0), 0) / testimonials.length).toFixed(1)
                    : '0'
                  }
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Testimonials List */}
      <div className="grid gap-6">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={testimonial.image_url} alt={testimonial.client_name} />
                    <AvatarFallback>{getUserInitials(testimonial.client_name)}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <CardTitle className="text-lg">{testimonial.client_name}</CardTitle>
                      <Badge variant={testimonial.is_active ? 'default' : 'secondary'}>
                        {testimonial.is_active ? 'Aktif' : 'Tidak Aktif'}
                      </Badge>
                      {testimonial.is_featured && (
                        <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                          Featured
                        </Badge>
                      )}
                    </div>
                    {testimonial.client_title && (
                      <CardDescription>{testimonial.client_title}</CardDescription>
                    )}
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleToggleFeatured(testimonial.id, testimonial.is_featured)}
                  >
                    <StarIcon className={`h-4 w-4 ${testimonial.is_featured ? 'text-yellow-500' : ''}`} />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleToggleActive(testimonial.id, testimonial.is_active)}
                  >
                    {testimonial.is_active ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                  <Link href={`/admin/testimonials/${testimonial.id}/edit`}>
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
            
            <CardContent>
              <blockquote className="text-slate-900 italic">
                "{testimonial.testimonial_text}"
              </blockquote>
              <div className="mt-4 text-sm text-slate-500">
                Dibuat: {new Date(testimonial.created_at).toLocaleDateString('id-ID', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {testimonials.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <Star className="h-12 w-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">Belum ada testimonial</h3>
            <p className="text-slate-600 mb-4">
              Mulai dengan menambahkan testimonial klien pertama.
            </p>
            <Link href="/admin/testimonials/new">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Tambah Testimonial
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
