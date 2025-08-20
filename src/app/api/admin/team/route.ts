import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { ApiResponse, TeamMember } from '@/lib/types';
import { teamMembers } from '@/lib/dummy-data';

// Mock database functions - replace with actual database calls
async function getAllTeamMembers(): Promise<TeamMember[]> {
  return teamMembers.sort((a, b) => a.order_index - b.order_index);
}

async function createTeamMember(data: Omit<TeamMember, 'id' | 'created_at' | 'updated_at'>): Promise<TeamMember> {
  const newMember: TeamMember = {
    ...data,
    id: Math.max(...teamMembers.map(m => m.id)) + 1,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  };
  
  // In real app, save to database
  teamMembers.push(newMember);
  return newMember;
}

// GET - Retrieve all team members
export const GET = requireAuth(async (request: NextRequest) => {
  try {
    const members = await getAllTeamMembers();
    
    return NextResponse.json<ApiResponse<TeamMember[]>>({
      success: true,
      data: members
    });
  } catch (error) {
    console.error('Get team members error:', error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Gagal mengambil data tim'
    }, { status: 500 });
  }
});

// POST - Create new team member
export const POST = requireAuth(async (request: NextRequest) => {
  try {
    const body = await request.json();
    
    // Validate required fields
    if (!body.name) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: 'Nama anggota tim harus diisi'
      }, { status: 400 });
    }

    const newMember = await createTeamMember({
      name: body.name,
      position: body.position || '',
      specialization: body.specialization || '',
      bio: body.bio || '',
      image_url: body.image_url || '',
      linkedin_url: body.linkedin_url || '',
      email: body.email || '',
      order_index: body.order_index || 0,
      is_active: body.is_active !== undefined ? body.is_active : true
    });
    
    return NextResponse.json<ApiResponse<TeamMember>>({
      success: true,
      data: newMember,
      message: 'Anggota tim berhasil ditambahkan'
    });
  } catch (error) {
    console.error('Create team member error:', error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Gagal menambahkan anggota tim'
    }, { status: 500 });
  }
});
