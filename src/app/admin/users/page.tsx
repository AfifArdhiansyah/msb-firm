'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Loader2, 
  UserCog, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  EyeOff,
  Shield,
  Calendar
} from 'lucide-react';
import { AdminUser, ApiResponse } from '@/lib/types';

export default function AdminUsersPage() {
  const [users, setUsers] = useState<AdminUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      // Mock data for admin users - in real app, fetch from API
      const mockUsers: AdminUser[] = [
        {
          id: 1,
          username: 'admin',
          password_hash: '$2b$12$rQZ8vQZ8vQZ8vQZ8vQZ8vOZ8vQZ8vQZ8vQZ8vQZ8vQZ8vQZ8vQZ8vQ',
          email: 'admin@hukumprima.com',
          full_name: 'Administrator',
          is_active: true,
          last_login: new Date().toISOString(),
          created_at: '2024-01-01T00:00:00Z',
          updated_at: '2024-01-01T00:00:00Z'
        },
        {
          id: 2,
          username: 'manager',
          password_hash: '$2b$12$rQZ8vQZ8vQZ8vQZ8vQZ8vOZ8vQZ8vQZ8vQZ8vQZ8vQZ8vQZ8vQZ8vQ',
          email: 'manager@hukumprima.com',
          full_name: 'Content Manager',
          is_active: true,
          last_login: new Date(Date.now() - 1000 * 60 * 60 * 24).toISOString(), // 1 day ago
          created_at: '2024-01-15T00:00:00Z',
          updated_at: '2024-01-15T00:00:00Z'
        }
      ];
      
      setUsers(mockUsers);
    } catch (error) {
      setMessage({ type: 'error', text: 'Terjadi kesalahan jaringan' });
    } finally {
      setIsLoading(false);
    }
  };

  const getUserInitials = (name?: string) => {
    if (!name) return 'A';
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  const formatLastLogin = (lastLogin?: string) => {
    if (!lastLogin) return 'Belum pernah login';
    
    const date = new Date(lastLogin);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Baru saja';
    if (diffInHours < 24) return `${diffInHours} jam yang lalu`;
    if (diffInHours < 48) return 'Kemarin';
    
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
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
            <UserCog className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Admin Users</h1>
            <p className="text-slate-600">Kelola pengguna admin dan hak akses</p>
          </div>
        </div>
        
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Tambah Admin
        </Button>
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
                <UserCog className="h-5 w-5 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-600">Total Admin</p>
                <p className="text-2xl font-bold text-slate-900">{users.length}</p>
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
                  {users.filter(u => u.is_active).length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <Shield className="h-5 w-5 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-600">Online Hari Ini</p>
                <p className="text-2xl font-bold text-slate-900">
                  {users.filter(u => {
                    if (!u.last_login) return false;
                    const lastLogin = new Date(u.last_login);
                    const today = new Date();
                    return lastLogin.toDateString() === today.toDateString();
                  }).length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Users List */}
      <div className="grid gap-6 md:grid-cols-2">
        {users.map((user) => (
          <Card key={user.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-blue-600 text-white">
                      {getUserInitials(user.full_name || user.username)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-lg">{user.full_name || user.username}</CardTitle>
                    <CardDescription>@{user.username}</CardDescription>
                  </div>
                </div>
                <Badge variant={user.is_active ? 'default' : 'secondary'}>
                  {user.is_active ? 'Aktif' : 'Tidak Aktif'}
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {user.email && (
                <div>
                  <p className="text-sm font-medium text-slate-600">Email:</p>
                  <p className="text-sm text-slate-900">{user.email}</p>
                </div>
              )}
              
              <div>
                <p className="text-sm font-medium text-slate-600">Last Login:</p>
                <p className="text-sm text-slate-900 flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formatLastLogin(user.last_login)}</span>
                </p>
              </div>
              
              <div>
                <p className="text-sm font-medium text-slate-600">Dibuat:</p>
                <p className="text-sm text-slate-900">
                  {new Date(user.created_at).toLocaleDateString('id-ID', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
              
              <div className="flex items-center justify-between pt-4 border-t">
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    {user.is_active ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </Button>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-red-600 hover:text-red-700"
                  disabled={user.id === 1} // Prevent deleting main admin
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Security Notice */}
      <Card className="border-yellow-200 bg-yellow-50">
        <CardHeader>
          <CardTitle className="text-yellow-800 flex items-center space-x-2">
            <Shield className="h-5 w-5" />
            <span>Keamanan Admin</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2 text-sm text-yellow-700">
            <p>• Pastikan semua admin menggunakan password yang kuat</p>
            <p>• Review secara berkala akses admin yang tidak aktif</p>
            <p>• Monitor aktivitas login yang mencurigakan</p>
            <p>• Backup data secara rutin sebelum melakukan perubahan besar</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
