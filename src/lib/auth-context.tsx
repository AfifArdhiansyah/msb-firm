'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { AuthUser, AuthSession, ApiResponse } from './types';

interface AuthContextType {
  user: AuthUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const TOKEN_COOKIE_NAME = 'admin_token';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // Bypass authentication - set dummy user
  const [user, setUser] = useState<AuthUser | null>({
    id: 1,
    username: 'admin',
    email: 'admin@hukumprima.com',
    full_name: 'Administrator'
  });
  const [isLoading] = useState(false);

  const isAuthenticated = true;

  // Bypass token verification

  const login = async (username: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const result: ApiResponse<AuthSession> = await response.json();

      if (result.success && result.data) {
        const { user: userData, token } = result.data;
        
        // Store token in cookie
        Cookies.set(TOKEN_COOKIE_NAME, token, { 
          expires: 7, // 7 days
          secure: process.env.NODE_ENV === 'production',
          sameSite: 'strict'
        });
        
        setUser(userData);
        return { success: true };
      } else {
        return { success: false, error: result.error || 'Login gagal' };
      }
    } catch (error) {
      console.error('Login failed:', error);
      return { success: false, error: 'Terjadi kesalahan jaringan' };
    }
  };

  const logout = async () => {
    try {
      const token = Cookies.get(TOKEN_COOKIE_NAME);
      if (token) {
        await fetch('/api/auth/logout', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
      }
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      Cookies.remove(TOKEN_COOKIE_NAME);
      setUser(null);
    }
  };

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
