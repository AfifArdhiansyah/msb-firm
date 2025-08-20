import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';
import { ApiResponse, AuthUser } from '@/lib/types';

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: 'Token tidak ditemukan'
      }, { status: 401 });
    }

    const token = authHeader.substring(7);
    const user = verifyToken(token);
    
    if (!user) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: 'Token tidak valid'
      }, { status: 401 });
    }

    return NextResponse.json<ApiResponse<AuthUser>>({
      success: true,
      data: user,
      message: 'Token valid'
    });

  } catch (error) {
    console.error('Token verification error:', error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Terjadi kesalahan server'
    }, { status: 500 });
  }
}
