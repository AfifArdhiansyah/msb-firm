'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Loader2, 
  MessageSquare, 
  Mail, 
  Trash2, 
  Eye,
  EyeOff,
  Calendar,
  User,
  Filter
} from 'lucide-react';
import { ContactMessage, ApiResponse } from '@/lib/types';
import { formatDistanceToNow } from 'date-fns';
import { id } from 'date-fns/locale';

export default function MessagesManagementPage() {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'unread'>('all');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  useEffect(() => {
    loadMessages();
  }, [filter]);

  const loadMessages = async () => {
    try {
      const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('admin_token='))
        ?.split('=')[1];

      const url = filter === 'unread' ? '/api/admin/messages?unread=true' : '/api/admin/messages';
      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const result: ApiResponse<ContactMessage[]> = await response.json();

      if (result.success && result.data) {
        setMessages(result.data);
      } else {
        setMessage({ type: 'error', text: result.error || 'Gagal memuat data pesan' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Terjadi kesalahan jaringan' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleMarkAsRead = async (id: number) => {
    try {
      const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('admin_token='))
        ?.split('=')[1];

      const response = await fetch('/api/admin/messages', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ id, action: 'mark_read' })
      });

      const result: ApiResponse<ContactMessage> = await response.json();

      if (result.success) {
        setMessages(prev => 
          prev.map(msg => 
            msg.id === id ? { ...msg, is_read: true } : msg
          )
        );
        setMessage({ type: 'success', text: 'Pesan berhasil ditandai sebagai dibaca' });
      } else {
        setMessage({ type: 'error', text: result.error || 'Gagal menandai pesan' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Terjadi kesalahan jaringan' });
    }
  };

  const handleDelete = async (id: number, senderName: string) => {
    if (!confirm(`Apakah Anda yakin ingin menghapus pesan dari ${senderName}?`)) {
      return;
    }

    try {
      const token = document.cookie
        .split('; ')
        .find(row => row.startsWith('admin_token='))
        ?.split('=')[1];

      const response = await fetch(`/api/admin/messages?id=${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const result: ApiResponse<null> = await response.json();

      if (result.success) {
        setMessages(prev => prev.filter(msg => msg.id !== id));
        setMessage({ type: 'success', text: 'Pesan berhasil dihapus' });
      } else {
        setMessage({ type: 'error', text: result.error || 'Gagal menghapus pesan' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Terjadi kesalahan jaringan' });
    }
  };

  const allMessages = messages;
  const unreadMessages = messages.filter(msg => !msg.is_read);

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
            <MessageSquare className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Pesan Kontak</h1>
            <p className="text-slate-600">Kelola pesan dari formulir kontak website</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button
            variant={filter === 'all' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('all')}
          >
            <Filter className="mr-2 h-4 w-4" />
            Semua
          </Button>
          <Button
            variant={filter === 'unread' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFilter('unread')}
          >
            <EyeOff className="mr-2 h-4 w-4" />
            Belum Dibaca
          </Button>
        </div>
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
                <MessageSquare className="h-5 w-5 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-600">Total Pesan</p>
                <p className="text-2xl font-bold text-slate-900">{allMessages.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div className="p-2 bg-red-100 rounded-lg">
                <EyeOff className="h-5 w-5 text-red-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-slate-600">Belum Dibaca</p>
                <p className="text-2xl font-bold text-slate-900">{unreadMessages.length}</p>
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
                <p className="text-sm font-medium text-slate-600">Sudah Dibaca</p>
                <p className="text-2xl font-bold text-slate-900">
                  {allMessages.length - unreadMessages.length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Messages List */}
      <div className="space-y-4">
        {messages.map((msg) => (
          <Card key={msg.id} className={`${!msg.is_read ? 'border-blue-200 bg-blue-50/50' : ''}`}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <CardTitle className="text-lg flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{msg.name}</span>
                    </CardTitle>
                    {!msg.is_read && (
                      <Badge variant="destructive" className="text-xs">
                        Baru
                      </Badge>
                    )}
                  </div>
                  <CardDescription className="flex items-center space-x-4">
                    <span className="flex items-center space-x-1">
                      <Mail className="h-4 w-4" />
                      <span>{msg.email}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>
                        {formatDistanceToNow(new Date(msg.created_at), { 
                          addSuffix: true, 
                          locale: id 
                        })}
                      </span>
                    </span>
                  </CardDescription>
                </div>
                <div className="flex space-x-2">
                  {!msg.is_read && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleMarkAsRead(msg.id)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>
                  )}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(msg.id, msg.name)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {msg.subject && (
                <div>
                  <p className="text-sm font-medium text-slate-600">Subjek:</p>
                  <p className="text-sm text-slate-900">{msg.subject}</p>
                </div>
              )}
              
              <div>
                <p className="text-sm font-medium text-slate-600">Pesan:</p>
                <div className="mt-1 p-3 bg-slate-50 rounded-lg">
                  <p className="text-sm text-slate-900 whitespace-pre-wrap">{msg.message}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between pt-2 border-t">
                <div className="text-xs text-slate-500">
                  Diterima: {new Date(msg.created_at).toLocaleString('id-ID')}
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href={`mailto:${msg.email}?subject=Re: ${msg.subject || 'Konsultasi Hukum'}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Balas Email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {messages.length === 0 && (
        <Card>
          <CardContent className="py-12 text-center">
            <MessageSquare className="h-12 w-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">
              {filter === 'unread' ? 'Tidak ada pesan baru' : 'Belum ada pesan'}
            </h3>
            <p className="text-slate-600">
              {filter === 'unread' 
                ? 'Semua pesan sudah dibaca.' 
                : 'Pesan dari formulir kontak akan muncul di sini.'
              }
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
