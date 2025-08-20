import { NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/auth';
import { ApiResponse, TeamMember } from '@/lib/types';
import { teamMembers } from '@/lib/dummy-data';

// Mock database functions - replace with actual database calls
async function getTeamMemberById(id: number): Promise<TeamMember | null> {
  return teamMembers.find(member => member.id === id) || null;
}

async function updateTeamMember(id: number, data: Partial<TeamMember>): Promise<TeamMember | null> {
  const index = teamMembers.findIndex(member => member.id === id);
  if (index === -1) return null;
  
  teamMembers[index] = {
    ...teamMembers[index],
    ...data,
    updated_at: new Date().toISOString()
  };
  
  return teamMembers[index];
}

async function deleteTeamMember(id: number): Promise<boolean> {
  const index = teamMembers.findIndex(member => member.id === id);
  if (index === -1) return false;
  
  teamMembers.splice(index, 1);
  return true;
}

// GET - Retrieve specific team member
export const GET = requireAuth(async (request: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const id = parseInt(params.id);
    const member = await getTeamMemberById(id);
    
    if (!member) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: 'Anggota tim tidak ditemukan'
      }, { status: 404 });
    }
    
    return NextResponse.json<ApiResponse<TeamMember>>({
      success: true,
      data: member
    });
  } catch (error) {
    console.error('Get team member error:', error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Gagal mengambil data anggota tim'
    }, { status: 500 });
  }
});

// PUT - Update team member
export const PUT = requireAuth(async (request: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const id = parseInt(params.id);
    const body = await request.json();
    
    // Validate required fields
    if (!body.name) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: 'Nama anggota tim harus diisi'
      }, { status: 400 });
    }

    const updatedMember = await updateTeamMember(id, body);
    
    if (!updatedMember) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: 'Anggota tim tidak ditemukan'
      }, { status: 404 });
    }
    
    return NextResponse.json<ApiResponse<TeamMember>>({
      success: true,
      data: updatedMember,
      message: 'Anggota tim berhasil diperbarui'
    });
  } catch (error) {
    console.error('Update team member error:', error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Gagal memperbarui anggota tim'
    }, { status: 500 });
  }
});

// DELETE - Delete team member
export const DELETE = requireAuth(async (request: NextRequest, { params }: { params: { id: string } }) => {
  try {
    const id = parseInt(params.id);
    const deleted = await deleteTeamMember(id);
    
    if (!deleted) {
      return NextResponse.json<ApiResponse<null>>({
        success: false,
        error: 'Anggota tim tidak ditemukan'
      }, { status: 404 });
    }
    
    return NextResponse.json<ApiResponse<null>>({
      success: true,
      message: 'Anggota tim berhasil dihapus'
    });
  } catch (error) {
    console.error('Delete team member error:', error);
    return NextResponse.json<ApiResponse<null>>({
      success: false,
      error: 'Gagal menghapus anggota tim'
    }, { status: 500 });
  }
});
