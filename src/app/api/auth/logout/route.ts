import { NextRequest, NextResponse } from 'next/server';
import { ApiResponse } from '@/lib/types';

export async function POST(request: NextRequest) {
  try {
    // In a real application, you might want to:
    // 1. Blacklist the token
    // 2. Clear server-side session
    // 3. Log the logout event
    
    return NextResponse.json<ApiResponse<null>>({
      success: true,
      message: 'Logout berhasil'
    });

  } catch (error) {
    console.error('Logout error:', error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Terjadi kesalahan server'
    }, { status: 500 });
  }
}
