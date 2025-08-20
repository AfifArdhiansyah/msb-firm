import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { ApiResponse, Service } from '@/lib/types';
import { services } from '@/lib/dummy-data';

// Helper function to generate slug
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

// Mock database functions - replace with actual database calls
async function getAllServices(): Promise<Service[]> {
  return services.sort((a, b) => a.order_index - b.order_index);
}

async function createService(data: Omit<Service, 'id' | 'created_at' | 'updated_at'>): Promise<Service> {
  const newService: Service = {
    ...data,
    id: Math.max(...services.map(s => s.id)) + 1,
    slug: data.slug || generateSlug(data.title),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
  
  // In real app, save to database
  services.push(newService);
  return newService;
}

// GET - Retrieve all services
export const GET = requireAuth(async (request: NextRequest) => {
  try {
    const allServices = await getAllServices();
    
    return NextResponse.json<ApiResponse<Service[]>>({
      success: true,
      data: allServices
    });
  } catch (error) {
    console.error('Get services error:', error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Gagal mengambil data layanan'
    }, { status: 500 });
  }
});

// POST - Create new service
export const POST = requireAuth(async (request: NextRequest) => {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.title) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: 'Judul layanan harus diisi'
      }, { status: 400 });
    }

    // Check if slug already exists
    const slug = body.slug || generateSlug(body.title);
    const existingService = services.find(s => s.slug === slug);
    if (existingService) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: 'Slug layanan sudah digunakan'
      }, { status: 400 });
    }

    const newService = await createService({
      title: body.title,
      slug: slug,
      short_description: body.short_description || '',
      full_description: body.full_description || '',
      icon_url: body.icon_url || '',
      image_url: body.image_url || '',
      order_index: body.order_index || 0,
      is_active: body.is_active !== undefined ? body.is_active : true
    });
    
    return NextResponse.json<ApiResponse<Service>>({
      success: true,
      data: newService,
      message: 'Layanan berhasil ditambahkan'
    });
  } catch (error) {
    console.error('Create service error:', error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Gagal menambahkan layanan'
    }, { status: 500 });
  }
});
