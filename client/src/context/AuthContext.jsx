import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { supabase } from '../config/supabase';

import toast from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Sync a Supabase session user to our backend + local state
    const syncSupabaseUser = async (supabaseUser) => {
        try {
            const { data } = await axios.post('/api/auth/sync', {
                name: supabaseUser.user_metadata?.full_name || supabaseUser.user_metadata?.name || supabaseUser.email?.split('@')[0],
                email: supabaseUser.email,
                supabaseId: supabaseUser.id,
                avatar: supabaseUser.user_metadata?.avatar_url
            });
            setUser(data);
            localStorage.setItem('rentease_user', JSON.stringify(data));
            return data;
        } catch (error) {
            console.error('Error syncing user:', error);
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
            const { data } = await axios.post('/api/auth/login', { email, password });
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
            await axios.post('/api/auth/logout');
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
            const { data } = await axios.post('/api/auth/signup', userData);
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
            const { data } = await axios.post('/api/auth/forgot-password', { phone });
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
            const { data } = await axios.post('/api/auth/reset-password', { phone, otp, newPassword });
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
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: window.location.origin
                }
            });
            if (error) throw error;
        } catch (error) {
            toast.error('Google login failed: ' + error.message);
        }
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, signup, forgotPassword, resetPassword, signInWithGoogle, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

