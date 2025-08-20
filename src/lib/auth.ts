// Authentication utilities
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { AuthUser, AuthSession } from './types';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const JWT_EXPIRES_IN = '7d';

export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 12;
  return bcrypt.hash(password, saltRounds);
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

export function generateToken(user: AuthUser): string {
  return jwt.sign(
    { 
      id: user.id, 
      username: user.username,
      email: user.email,
      full_name: user.full_name
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
}

export function verifyToken(token: string): AuthUser | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    return {
      id: decoded.id,
      username: decoded.username,
      email: decoded.email,
      full_name: decoded.full_name
    };
  } catch (error) {
    return null;
  }
}

export function createSession(user: AuthUser): AuthSession {
  const token = generateToken(user);
  const expires = new Date();
  expires.setDate(expires.getDate() + 7); // 7 days from now
  
  return {
    user,
    token,
    expires: expires.toISOString()
  };
}

// Bypass middleware untuk proteksi route admin
export function requireAuth(handler: Function) {
  return handler;
}
