'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Save, Building2 } from 'lucide-react';
import { FirmInfo, ApiResponse } from '@/lib/types';

export default function FirmInfoPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FirmInfo>();

  // Load firm info on component mount
  useEffect(() => {
    loadFirmInfo();
  }, []);

  const loadFirmInfo = async () => {
    try {
      const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('admin_token='))
        ?.split('=')[1];

      const response = await fetch('/api/admin/firm-info', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const result: ApiResponse<FirmInfo> = await response.json();

      if (result.success && result.data) {
        reset(result.data);
      } else {
        setMessage({ type: 'error', text: result.error || 'Gagal memuat data' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Terjadi kesalahan jaringan' });
    } finally {
      setIsLoading(false);
    }
  };

  const onSubmit = async (data: FirmInfo) => {
    setIsSaving(true);
    setMessage(null);

    try {
      const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('admin_token='))
        ?.split('=')[1];

      const response = await fetch('/api/admin/firm-info', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
      });

      const result: ApiResponse<FirmInfo> = await response.json();

      if (result.success) {
        setMessage({ type: 'success', text: result.message || 'Data berhasil disimpan' });
        if (result.data) {
          reset(result.data);
        }
      } else {
        setMessage({ type: 'error', text: result.error || 'Gagal menyimpan data' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Terjadi kesalahan jaringan' });
    } finally {
      setIsSaving(false);
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
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-blue-600 rounded-lg">
          <Building2 className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Informasi Firma</h1>
          <p className="text-slate-600">Kelola informasi dasar perusahaan dan kontak</p>
        </div>
      </div>

      {/* Alert Messages */}
      {message && (
        <Alert variant={message.type === 'error' ? 'destructive' : 'default'}>
          <AlertDescription>{message.text}</AlertDescription>
        </Alert>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Informasi Dasar</CardTitle>
            <CardDescription>
              Informasi utama tentang firma hukum
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Nama Firma *</Label>
                <Input
                  id="name"
                  {...register('name', { required: 'Nama firma harus diisi' })}
                  placeholder="Nama lengkap firma hukum"
                />
                {errors.name && (
                  <p className="text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="tagline">Tagline</Label>
                <Input
                  id="tagline"
                  {...register('tagline')}
                  placeholder="Slogan atau tagline firma"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="mission">Misi</Label>
              <Textarea
                id="mission"
                {...register('mission')}
                placeholder="Pernyataan misi perusahaan"
                rows={3}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="vision">Visi</Label>
              <Textarea
                id="vision"
                {...register('vision')}
                placeholder="Pernyataan visi perusahaan"
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Informasi Kontak</CardTitle>
            <CardDescription>
              Detail kontak yang akan ditampilkan di website
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email')}
                  placeholder="email@firma.com"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Telepon</Label>
                <Input
                  id="phone"
                  {...register('phone')}
                  placeholder="+62-21-1234-5678"
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="whatsapp_number">WhatsApp</Label>
                <Input
                  id="whatsapp_number"
                  {...register('whatsapp_number')}
                  placeholder="+62812-3456-7890"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="operation_hours">Jam Operasional</Label>
                <Input
                  id="operation_hours"
                  {...register('operation_hours')}
                  placeholder="Senin - Jumat: 09:00 - 18:00 WIB"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Alamat</Label>
              <Textarea
                id="address"
                {...register('address')}
                placeholder="Alamat lengkap kantor"
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* SEO Information */}
        <Card>
          <CardHeader>
            <CardTitle>SEO & Meta</CardTitle>
            <CardDescription>
              Informasi untuk optimasi mesin pencari
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="seo_title">SEO Title</Label>
              <Input
                id="seo_title"
                {...register('seo_title')}
                placeholder="Judul untuk mesin pencari"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="seo_description">SEO Description</Label>
              <Textarea
                id="seo_description"
                {...register('seo_description')}
                placeholder="Deskripsi untuk mesin pencari"
                rows={3}
              />
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button type="submit" disabled={isSaving} className="min-w-[120px]">
            {isSaving ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Menyimpan...
              </>
            ) : (
              <>
                <Save className="mr-2 h-4 w-4" />
                Simpan
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
