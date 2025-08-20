import React from 'react';
import { cn } from '@/lib/utils';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Loading({ size = 'md', className }: LoadingProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={cn('flex items-center justify-center', className)}>
      <div
        className={cn(
          'border-2 border-red-200 border-t-red-700 rounded-full animate-spin',
          sizeClasses[size]
        )}
      />
    </div>
  );
}

export function PageLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center">
        <Loading size="lg" className="mb-4" />
        <p className="text-slate-600">Memuat halaman...</p>
      </div>
    </div>
  );
}

export function SectionLoading() {
  return (
    <div className="py-20 flex items-center justify-center">
      <div className="text-center">
        <Loading size="md" className="mb-4" />
        <p className="text-slate-600">Memuat konten...</p>
      </div>
    </div>
  );
}
