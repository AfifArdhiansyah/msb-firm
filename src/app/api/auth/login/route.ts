import { NextRequest, NextResponse } from 'next/server';
import { verifyPassword, createSession } from '@/lib/auth';
import { LoginFormData, ApiResponse, AuthSession } from '@/lib/types';

// Mock database function - replace with actual database call
async function findAdminUser(username: string) {
  // This should be replaced with actual database query
  // For now, using the dummy data from database.sql
  const mockUser = {
    id: 1,
    username: 'admin',
    password_hash: '$2b$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj6uk6L7LxjO', // admin123
    email: 'admin@hukumprima.com',
    full_name: 'Administrator',
    is_active: true
  };
  
  return username === 'admin' ? mockUser : null;
}

export async function POST(request: NextRequest) {
  try {
    const body: LoginFormData = await request.json();
    const { username, password } = body;

    // Validate input
    if (!username || !password) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: 'Username dan password harus diisi'
      }, { status: 400 });
    }

    // Find user in database
    const user = await findAdminUser(username);
    if (!user || !user.is_active) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: 'Username atau password salah'
      }, { status: 401 });
    }

    // Bypass password verification for now
    // const isValidPassword = await verifyPassword(password, user.password_hash);
    // if (!isValidPassword) {
    //   return NextResponse.json<ApiResponse<null>>({
    //     success: false,
    //     error: 'Username atau password salah'
    //   }, { status: 401 });
    // }

    // Create session
    const session = createSession({
      id: user.id,
      username: user.username,
      email: user.email,
      full_name: user.full_name
    });

    // Update last login (in real app, update database)
    // await updateLastLogin(user.id);

    return NextResponse.json<ApiResponse<AuthSession>>({
      success: true,
      data: session,
      message: 'Login berhasil'
    });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Terjadi kesalahan server'
    }, { status: 500 });
  }
}
