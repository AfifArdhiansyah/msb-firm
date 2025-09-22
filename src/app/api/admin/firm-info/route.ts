import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { ApiResponse, FirmInfo } from '@/lib/types';

// Mock database functions - replace with actual database calls
async function getFirmInfo(): Promise<FirmInfo> {
  // This should be replaced with actual database query
  return {
    id: 1,
    name: 'MSB Law Office',
    tagline: 'Solusi Hukum Terpercaya untuk Kebutuhan Anda',
    logo_url: '/msb.png',
    mission: 'Memberikan layanan hukum berkualitas tinggi dengan pendekatan personal dan profesional untuk melindungi hak dan kepentingan klien.',
    vision: 'Menjadi firma hukum terdepan yang dipercaya dalam memberikan solusi hukum inovatif dan komprehensif.',
    whatsapp_number: '+62812-7251-9788',
    email: 'info@hukumprima.com',
    phone: '+62-21-1234-5678',
    address: 'Jl. Sudirman No. 123, Jakarta Pusat 10220, Indonesia',
    operation_hours: 'Senin - Jumat: 09:00 - 18:00 WIB, Sabtu: 09:00 - 14:00 WIB',
    seo_title: 'MSB Law Office - Firma Hukum Terpercaya Jakarta',
    seo_description: 'Firma hukum terpercaya di Jakarta dengan pengalaman lebih dari 20 tahun. Spesialis hukum korporasi, perdata, pidana, dan ketenagakerjaan.',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  };
}

async function updateFirmInfo(data: Partial<FirmInfo>): Promise<FirmInfo> {
  // This should be replaced with actual database update
  const current = await getFirmInfo();
  return {
    ...current,
    ...data,
    updated_at: new Date().toISOString()
  };
}

// GET - Retrieve firm information
export const GET = requireAuth(async (request: NextRequest) => {
  try {
    const firmInfo = await getFirmInfo();
    
    return NextResponse.json<ApiResponse<FirmInfo>>({
      success: true,
      data: firmInfo
    });
  } catch (error) {
    console.error('Get firm info error:', error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Gagal mengambil informasi firma'
    }, { status: 500 });
  }
});

// PUT - Update firm information
export const PUT = requireAuth(async (request: NextRequest) => {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: 'Nama firma harus diisi'
      }, { status: 400 });
    }

    const updatedFirmInfo = await updateFirmInfo(body);
    
    return NextResponse.json<ApiResponse<FirmInfo>>({
      success: true,
      data: updatedFirmInfo,
      message: 'Informasi firma berhasil diperbarui'
    });
  } catch (error) {
    console.error('Update firm info error:', error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Gagal memperbarui informasi firma'
    }, { status: 500 });
  }
});
