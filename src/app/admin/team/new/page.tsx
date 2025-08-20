'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Save, ArrowLeft, UserPlus } from 'lucide-react';
import { TeamMember, ApiResponse } from '@/lib/types';
import Link from 'next/link';

interface TeamMemberForm {
  name: string;
  position: string;
  specialization: string;
  bio: string;
  image_url: string;
  linkedin_url: string;
  email: string;
  order_index: number;
  is_active: boolean;
}

export default function NewTeamMemberPage() {
  const [isSaving, setIsSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const router = useRouter();
  
  const { register, handleSubmit, formState: { errors } } = useForm<TeamMemberForm>({
    defaultValues: {
      is_active: true,
      order_index: 0
    }
  });

  const onSubmit = async (data: TeamMemberForm) => {
    setIsSaving(true);
    setMessage(null);

    try {
      const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('admin_token='))
        ?.split('=')[1];

      const response = await fetch('/api/admin/team', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
      });

      const result: ApiResponse<TeamMember> = await response.json();

      if (result.success) {
        setMessage({ type: 'success', text: result.message || 'Anggota tim berhasil ditambahkan' });
        setTimeout(() => {
          router.push('/admin/team');
        }, 1500);
      } else {
        setMessage({ type: 'error', text: result.error || 'Gagal menambahkan anggota tim' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Terjadi kesalahan jaringan' });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center space-x-3">
        <Link href="/admin/team">
          <Button variant="outline" size="sm">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <div className="p-2 bg-blue-600 rounded-lg">
          <UserPlus className="h-6 w-6 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Tambah Anggota Tim</h1>
          <p className="text-slate-600">Tambahkan anggota tim atau pengacara baru</p>
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
              Informasi utama tentang anggota tim
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Nama Lengkap *</Label>
                <Input
                  id="name"
                  {...register('name', { required: 'Nama lengkap harus diisi' })}
                  placeholder="Nama lengkap anggota tim"
                />
                {errors.name && (
                  <p className="text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="position">Posisi/Jabatan</Label>
                <Input
                  id="position"
                  {...register('position')}
                  placeholder="Senior Partner, Associate, dll."
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialization">Spesialisasi</Label>
              <Input
                id="specialization"
                {...register('specialization')}
                placeholder="Hukum Korporasi, Hukum Perdata, dll."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="bio">Biografi</Label>
              <Textarea
                id="bio"
                {...register('bio')}
                placeholder="Deskripsi singkat tentang latar belakang dan pengalaman"
                rows={4}
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="order_index">Urutan Tampil</Label>
                <Input
                  id="order_index"
                  type="number"
                  {...register('order_index', { valueAsNumber: true })}
                  placeholder="0"
                  min="0"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="is_active">Status</Label>
                <select
                  id="is_active"
                  {...register('is_active', { valueAsBoolean: true })}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="true">Aktif</option>
                  <option value="false">Tidak Aktif</option>
                </select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact & Media */}
        <Card>
          <CardHeader>
            <CardTitle>Kontak & Media</CardTitle>
            <CardDescription>
              Informasi kontak dan media sosial
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
                <Label htmlFor="linkedin_url">LinkedIn URL</Label>
                <Input
                  id="linkedin_url"
                  {...register('linkedin_url')}
                  placeholder="https://linkedin.com/in/username"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="image_url">URL Foto</Label>
              <Input
                id="image_url"
                {...register('image_url')}
                placeholder="https://example.com/photo.jpg"
              />
              <p className="text-sm text-slate-500">
                Masukkan URL foto profil. Ukuran yang disarankan: 400x400px
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Submit Buttons */}
        <div className="flex justify-end space-x-4">
          <Link href="/admin/team">
            <Button type="button" variant="outline">
              Batal
            </Button>
          </Link>
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
