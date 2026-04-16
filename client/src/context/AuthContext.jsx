import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../lib/axios';
import { supabase } from '../config/supabase';

import toast from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Sync a Supabase session user to our backend + local state
    const syncSupabaseUser = async (supabaseUser) => {
        const syncToast = toast.loading('Syncing your account...');
        console.log('🔄 SYNC START:', { email: supabaseUser.email, id: supabaseUser.id });

        try {
            const { data } = await api.post('/api/auth/sync', {
                name: supabaseUser.user_metadata?.full_name || supabaseUser.user_metadata?.name || supabaseUser.email?.split('@')[0],
                email: supabaseUser.email,
                supabaseId: supabaseUser.id,
                avatar: supabaseUser.user_metadata?.avatar_url
            });

            console.log('✅ SYNC SUCCESS:', data);
            setUser(data);
            localStorage.setItem('rentease_user', JSON.stringify(data));
            toast.success('Successfully logged in!', { id: syncToast });
            return data;
        } catch (error) {
            console.error('❌ SYNC ERROR:', {
                message: error.message,
                response: error.response?.data,
                status: error.response?.status,
                url: error.config?.url
            });
            toast.error('Sync failed: ' + (error.response?.data?.message || 'Server connection error'), { id: syncToast });
            return null;
        }
    };

    useEffect(() => {
        // 1. Load saved user from localStorage immediately for instant UI
        const savedUser = localStorage.getItem('rentease_user');
        if (savedUser) {
            try {
                setUser(JSON.parse(savedUser));
            } catch (e) {
                localStorage.removeItem('rentease_user');
            }
        }

        // 2. Check for existing Supabase session (handles OAuth redirect)
        const initSession = async () => {
            try {
                const { data: { session } } = await supabase.auth.getSession();
                if (session?.user) {
                    const currentUser = localStorage.getItem('rentease_user');
                    const parsed = currentUser ? JSON.parse(currentUser) : null;
                    
                    // If no local user or metadata changed, sync
                    if (!parsed || parsed.supabaseId !== session.user.id) {
                        await syncSupabaseUser(session.user);
                    }
                }
            } catch (error) {
                console.error('Session check error:', error);
            } finally {
                setLoading(false);
            }
        };

        initSession();

        // 3. Listen for auth state changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
            if (event === 'SIGNED_IN' && session?.user) {
                const currentUser = localStorage.getItem('rentease_user');
                const parsed = currentUser ? JSON.parse(currentUser) : null;
                if (!parsed || parsed.supabaseId !== session.user.id) {
                    await syncSupabaseUser(session.user);
                }
            } else if (event === 'SIGNED_OUT') {
                setUser(null);
                localStorage.removeItem('rentease_user');
            }
        });

        return () => subscription.unsubscribe();
    }, []);

    const login = async (email, password) => {
        try {
            const { data } = await api.post('/api/auth/login', { email, password });
            setUser(data);
            localStorage.setItem('rentease_user', JSON.stringify(data));
            return { success: true };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || 'Login failed'
            };
        }
    };

    const logout = async () => {
        try {
            await supabase.auth.signOut();
            await api.post('/api/auth/logout');
            toast.success('Signed out successfully.');
        } catch (error) {
            console.error('Logout error:', error);
        } finally {
            setUser(null);
            localStorage.removeItem('rentease_user');
        }
    };

    const signup = async (userData) => {
        try {
            const { data } = await api.post('/api/auth/signup', userData);
            setUser(data);
            localStorage.setItem('rentease_user', JSON.stringify(data));
            return { success: true };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || 'Signup failed'
            };
        }
    };

    const forgotPassword = async (phone) => {
        try {
            const { data } = await api.post('/api/auth/forgot-password', { phone });
            return { success: true, message: data.message };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || 'Failed to send OTP'
            };
        }
    };

    const resetPassword = async (phone, otp, newPassword) => {
        try {
            const { data } = await api.post('/api/auth/reset-password', { phone, otp, newPassword });
            return { success: true, message: data.message };
        } catch (error) {
            return {
                success: false,
                message: error.response?.data?.message || 'Failed to reset password'
            };
        }
    };

    const signInWithGoogle = async () => {
        try {
            const redirectTo = `${window.location.origin}/login`;
            console.log('Initiating Google Login. Redirecting to:', redirectTo);
            
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: redirectTo,
                    queryParams: {
                        access_type: 'offline',
                        prompt: 'consent',
                    },
                }
            });
            if (error) throw error;
        } catch (error) {
            console.error('Auth Error:', error);
            toast.error('Google login failed: ' + error.message);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, signup, forgotPassword, resetPassword, signInWithGoogle, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
