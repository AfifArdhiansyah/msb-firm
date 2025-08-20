// Types untuk aplikasi firma hukum

export interface FirmInfo {
  id: number;
  name: string;
  tagline?: string;
  mission?: string;
  vision?: string;
  whatsapp_number?: string;
  email?: string;
  phone?: string;
  address?: string;
  operation_hours?: string;
  logo_url?: string;
  favicon_url?: string;
  seo_title?: string;
  seo_description?: string;
  created_at: string;
  updated_at: string;
}

export interface TeamMember {
  id: number;
  name: string;
  position?: string;
  specialization?: string;
  bio?: string;
  image_url?: string;
  linkedin_url?: string;
  email?: string;
  order_index: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: number;
  title: string;
  slug: string;
  short_description?: string;
  full_description?: string;
  icon_url?: string;
  image_url?: string;
  order_index: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Testimonial {
  id: number;
  client_name: string;
  client_title?: string;
  testimonial_text: string;
  rating?: number;
  image_url?: string;
  is_featured: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface AdminUser {
  id: number;
  username: string;
  password_hash: string;
  email?: string;
  full_name?: string;
  is_active: boolean;
  last_login?: string;
  created_at: string;
  updated_at: string;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  subject?: string;
  message: string;
  is_read: boolean;
  created_at: string;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface LoginFormData {
  username: string;
  password: string;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

// Auth types
export interface AuthUser {
  id: number;
  username: string;
  email?: string;
  full_name?: string;
}

export interface AuthSession {
  user: AuthUser;
  token: string;
  expires: string;
}

// Navigation types
export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

// SEO types
export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

// News types
export interface NewsItem {
  id: number;
  title: string;
  slug: string;
  image_url?: string;
  published_at: string; // ISO date string
  summary?: string;
  content?: string;
  is_featured?: boolean;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}
