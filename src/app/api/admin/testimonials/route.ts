import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { ApiResponse, Testimonial } from '@/lib/types';
import { testimonials } from '@/lib/dummy-data';

// Mock database functions - replace with actual database calls
async function getAllTestimonials(): Promise<Testimonial[]> {
  return testimonials.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
}

async function createTestimonial(data: Omit<Testimonial, 'id' | 'created_at' | 'updated_at'>): Promise<Testimonial> {
  const newTestimonial: Testimonial = {
    ...data,
    id: Math.max(...testimonials.map(t => t.id)) + 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
  
  // In real app, save to database
  testimonials.push(newTestimonial);
  return newTestimonial;
}

async function updateTestimonial(id: number, data: Partial<Testimonial>): Promise<Testimonial | null> {
  const index = testimonials.findIndex(testimonial => testimonial.id === id);
  if (index === -1) return null;
  
  testimonials[index] = {
    ...testimonials[index],
    ...data,
    updated_at: new Date().toISOString()
  };
  
  return testimonials[index];
}

async function deleteTestimonial(id: number): Promise<boolean> {
  const index = testimonials.findIndex(testimonial => testimonial.id === id);
  if (index === -1) return false;
  
  testimonials.splice(index, 1);
  return true;
}

// GET - Retrieve all testimonials
export const GET = requireAuth(async (request: NextRequest) => {
  try {
    const allTestimonials = await getAllTestimonials();
    
    return NextResponse.json<ApiResponse<Testimonial[]>>({
      success: true,
      data: allTestimonials
    });
  } catch (error) {
    console.error('Get testimonials error:', error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Gagal mengambil data testimonial'
    }, { status: 500 });
  }
});

// POST - Create new testimonial
export const POST = requireAuth(async (request: NextRequest) => {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.client_name || !body.testimonial_text) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: 'Nama klien dan teks testimonial harus diisi'
      }, { status: 400 });
    }

    const newTestimonial = await createTestimonial({
      client_name: body.client_name,
      client_title: body.client_title || '',
      testimonial_text: body.testimonial_text,
      rating: body.rating || 5,
      image_url: body.image_url || '',
      is_featured: body.is_featured || false,
      is_active: body.is_active !== undefined ? body.is_active : true
    });
    
    return NextResponse.json<ApiResponse<Testimonial>>({
      success: true,
      data: newTestimonial,
      message: 'Testimonial berhasil ditambahkan'
    });
  } catch (error) {
    console.error('Create testimonial error:', error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Gagal menambahkan testimonial'
    }, { status: 500 });
  }
});

// PUT - Update testimonial (for bulk operations like featuring/unfeaturing)
export const PUT = requireAuth(async (request: NextRequest) => {
  try {
    const body = await request.json();
    const { id, ...updateData } = body;
    
    if (!id) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: 'ID testimonial harus disertakan'
      }, { status: 400 });
    }

    const updatedTestimonial = await updateTestimonial(id, updateData);
    
    if (!updatedTestimonial) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: 'Testimonial tidak ditemukan'
      }, { status: 404 });
    }
    
    return NextResponse.json<ApiResponse<Testimonial>>({
      success: true,
      data: updatedTestimonial,
      message: 'Testimonial berhasil diperbarui'
    });
  } catch (error) {
    console.error('Update testimonial error:', error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Gagal memperbarui testimonial'
    }, { status: 500 });
  }
});
