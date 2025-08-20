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
  Users, 
  Edit, 
  Trash2, 
  Mail, 
  Linkedin,
  Eye,
  EyeOff
} from 'lucide-react';
import { TeamMember, ApiResponse } from '@/lib/types';

export default function TeamManagementPage() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    loadTeamMembers();
  }, []);

  const loadTeamMembers = async () => {
    try {
      const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('admin_token='))
        ?.split('=')[1];

      const response = await fetch('/api/admin/team', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const result: ApiResponse<TeamMember[]> = await response.json();

      if (result.success && result.data) {
        setTeamMembers(result.data);
      } else {
        setMessage({ type: 'error', text: result.error || 'Gagal memuat data tim' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Terjadi kesalahan jaringan' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleActive = async (id: number, currentStatus: boolean) => {
    try {
      const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('admin_token='))
        ?.split('=')[1];

      const response = await fetch(`/api/admin/team/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ is_active: !currentStatus })
      });

      const result: ApiResponse<TeamMember> = await response.json();

      if (result.success) {
        setTeamMembers(prev => 
          prev.map(member => 
            member.id === id ? { ...member, is_active: !currentStatus } : member
          )
        );
        setMessage({ 
          type: 'success', 
          text: `Anggota tim berhasil ${!currentStatus ? 'diaktifkan' : 'dinonaktifkan'}` 
        });
      } else {
        setMessage({ type: 'error', text: result.error || 'Gagal mengubah status' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Terjadi kesalahan jaringan' });
    }
  };

  const handleDelete = async (id: number, name: string) => {
    if (!confirm(`Apakah Anda yakin ingin menghapus ${name} dari tim?`)) {
      return;
    }

    try {
      const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('admin_token='))
        ?.split('=')[1];

      const response = await fetch(`/api/admin/team/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const result: ApiResponse<null> = await response.json();

      if (result.success) {
        setTeamMembers(prev => prev.filter(member => member.id !== id));
        setMessage({ type: 'success', text: 'Anggota tim berhasil dihapus' });
      } else {
        setMessage({ type: 'error', text: result.error || 'Gagal menghapus anggota tim' });
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
            <Users className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Manajemen Tim</h1>
            <p className="text-slate-600">Kelola anggota tim dan pengacara</p>
          </div>
        </div>
        
        <Link href="/admin/team/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Tambah Anggota Tim
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
                <Users className="h-5 w-5 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-600">Total Tim</p>
                <p className="text-2xl font-bold text-slate-900">{teamMembers.length}</p>
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
                  {teamMembers.filter(m => m.is_active).length}
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
                  {teamMembers.filter(m => !m.is_active).length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Team Members List */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member) => (
          <Card key={member.id} className="relative">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={member.image_url} alt={member.name} />
                    <AvatarFallback>{getUserInitials(member.name)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription>{member.position}</CardDescription>
                  </div>
                </div>
                <Badge variant={member.is_active ? 'default' : 'secondary'}>
                  {member.is_active ? 'Aktif' : 'Tidak Aktif'}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {member.specialization && (
                <div>
                  <p className="text-sm font-medium text-slate-600">Spesialisasi:</p>
                  <p className="text-sm text-slate-900">{member.specialization}</p>
                </div>
              )}
              
              {member.bio && (
                <div>
                  <p className="text-sm font-medium text-slate-600">Bio:</p>
                  <p className="text-sm text-slate-900">{member.bio.length > 100 ? `${member.bio.substring(0, 100)}...` : member.bio}</p>
                </div>
              )}
              
              <div className="flex items-center space-x-2">
                {member.email && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={`mailto:${member.email}`}>
                      <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                )}
                {member.linkedin_url && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={member.linkedin_url} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex space-x-2">
                  <Link href={`/admin/team/${member.id}/edit`}>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleToggleActive(member.id, member.is_active)}
                  >
                    {member.is_active ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleDelete(member.id, member.name)}
                  className="text-red-600 hover:text-red-700"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {teamMembers.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <Users className="h-12 w-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">Belum ada anggota tim</h3>
            <p className="text-slate-600 mb-4">
              Mulai dengan menambahkan anggota tim atau pengacara pertama.
            </p>
            <Link href="/admin/team/new">
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Tambah Anggota Tim
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
